'use client';

import React, { useState } from 'react';
import type { InvoiceData } from '../lib/pdf';
import { makePDF } from '../lib/pdf';

interface PdfButtonProps {
  invoiceData: Omit<InvoiceData, 'qrPngDataUrl' | 'logoBytes' | 'logoMimeType'>;
  qrPngDataUrl: string | null;
  logoBytes?: Uint8Array | null;
  logoMimeType?: 'image/png' | 'image/jpeg';
}

export const PdfButton: React.FC<PdfButtonProps> = ({
  invoiceData,
  qrPngDataUrl,
  logoBytes,
  logoMimeType,
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    if (!qrPngDataUrl) {
      setError('Bitte zuerst einen GiroCode erzeugen, bevor die PDF erstellt wird.');
      return;
    }

    setError(null);
    setIsGenerating(true);
    try {
      const fullData: InvoiceData = {
        ...invoiceData,
        qrPngDataUrl,
        logoBytes: logoBytes ?? undefined,
        logoMimeType: logoMimeType ?? undefined,
      };

      const pdfBytes = await makePDF(fullData);
      const blob = new Blob([pdfBytes as unknown as BlobPart], {
        type: 'application/pdf',
      });

      const fileNameSafe =
        invoiceData.invoiceNumber?.trim() || 'ohne_nummer';
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Rechnung_${fileNameSafe}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      setError('Fehler bei der PDF-Erstellung. Bitte Eingaben und QR-Code prüfen.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={isGenerating}
        className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-emerald-500/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        {isGenerating ? 'PDF wird erzeugt …' : 'Rechnungs-PDF herunterladen'}
      </button>
      {error && (
        <p className="text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};

