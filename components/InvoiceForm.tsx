'use client';

import React, { useEffect, useState } from 'react';
import { PdfButton } from './PdfButton';

export interface InvoiceFormProps {
  qrPngDataUrl: string | null;
}

interface InvoiceFormState {
  invoiceNumber: string;
  invoiceDate: string;
  sender: string;
  recipient: string;
  description: string;
  netAmount: string;
  vatRate: string;
}

export const InvoiceForm: React.FC<InvoiceFormProps> = ({ qrPngDataUrl }) => {
  const [form, setForm] = useState<InvoiceFormState>({
    invoiceNumber: '',
    invoiceDate: '',
    sender: '',
    recipient: '',
    description: '',
    netAmount: '',
    vatRate: '19',
  });

  const [logoBytes, setLogoBytes] = useState<Uint8Array | null>(null);
  const [logoMimeType, setLogoMimeType] = useState<'image/png' | 'image/jpeg' | undefined>(
    undefined,
  );
  const [logoError, setLogoError] = useState<string | null>(null);

  useEffect(() => {
    // Default: heutiges Datum im Format YYYY-MM-DD
    const today = new Date();
    const iso = today.toISOString().slice(0, 10);
    setForm((prev) => ({ ...prev, invoiceDate: iso }));
  }, []);

  const handleChange =
    (field: keyof InvoiceFormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const parseNumber = (value: string): number => {
    const normalized = value.replace(',', '.');
    const parsed = parseFloat(normalized);
    return isFinite(parsed) && parsed >= 0 ? parsed : 0;
  };

  const net = parseNumber(form.netAmount);
  const vatRateNum = parseNumber(form.vatRate);
  const vatAmount = (net * vatRateNum) / 100;
  const gross = net + vatAmount;

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setLogoBytes(null);
      setLogoMimeType(undefined);
      setLogoError(null);
      return;
    }

    if (!['image/png', 'image/jpeg'].includes(file.type)) {
      setLogoError('Bitte eine PNG- oder JPG-Datei auswählen.');
      setLogoBytes(null);
      setLogoMimeType(undefined);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (result instanceof ArrayBuffer) {
        setLogoBytes(new Uint8Array(result));
        setLogoMimeType(file.type as 'image/png' | 'image/jpeg');
        setLogoError(null);
      }
    };
    reader.onerror = () => {
      setLogoError('Logo konnte nicht gelesen werden.');
      setLogoBytes(null);
      setLogoMimeType(undefined);
    };

    reader.readAsArrayBuffer(file);
  };

  const formatAmount = (value: number) =>
    `${value.toFixed(2).replace('.', ',')} €`;

  return (
    <section
      aria-labelledby="invoice-generator-heading"
      className="flex flex-col gap-6 rounded-3xl border border-white/5 bg-[#121318]/80 p-6 shadow-2xl shadow-black/50 backdrop-blur"
    >
      <div className="flex flex-col gap-2">
        <h2
          id="invoice-generator-heading"
          className="text-lg font-semibold tracking-tight text-slate-50"
        >
          Rechnungs-PDF
        </h2>
        <p className="text-sm text-slate-400">
          Erstelle eine DIN-konforme Rechnung mit eingebettetem GiroCode-QR-Code – vollständig lokal
          im Browser.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="flex flex-col gap-4">
          <div className="grid gap-3">
            <div className="grid grid-cols-2 gap-3">
              <label className="text-xs font-medium text-slate-200">
                Rechnungs-Nr.
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-slate-700/70 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/60"
                  value={form.invoiceNumber}
                  onChange={handleChange('invoiceNumber')}
                />
              </label>

              <label className="text-xs font-medium text-slate-200">
                Rechnungsdatum
                <input
                  type="date"
                  className="mt-1 w-full rounded-lg border border-slate-700/70 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/60"
                  value={form.invoiceDate}
                  onChange={handleChange('invoiceDate')}
                />
              </label>
            </div>

            <label className="text-xs font-medium text-slate-200">
              Absender / Firmendaten
              <textarea
                className="mt-1 min-h-[80px] w-full resize-y rounded-lg border border-slate-700/70 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/60"
                value={form.sender}
                onChange={handleChange('sender')}
              />
            </label>

            <label className="text-xs font-medium text-slate-200">
              Kundendaten / Empfängeradresse
              <textarea
                className="mt-1 min-h-[80px] w-full resize-y rounded-lg border border-slate-700/70 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/60"
                value={form.recipient}
                onChange={handleChange('recipient')}
              />
            </label>

            <label className="text-xs font-medium text-slate-200">
              Logo (PNG/JPG, optional)
              <input
                type="file"
                accept="image/png,image/jpeg"
                onChange={handleLogoChange}
                className="mt-1 block w-full text-xs text-slate-300 file:mr-3 file:rounded-full file:border-0 file:bg-slate-800 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-slate-100 hover:file:bg-slate-700"
              />
              {logoError && (
                <p className="mt-1 text-[11px] text-red-400">
                  {logoError}
                </p>
              )}
            </label>

            <label className="text-xs font-medium text-slate-200">
              Leistungsbeschreibung
              <textarea
                className="mt-1 min-h-[96px] w-full resize-y rounded-lg border border-slate-700/70 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/60"
                value={form.description}
                onChange={handleChange('description')}
              />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className="text-xs font-medium text-slate-200">
                Nettobetrag (EUR)
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="mt-1 w-full rounded-lg border border-slate-700/70 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/60"
                  value={form.netAmount}
                  onChange={handleChange('netAmount')}
                />
              </label>

              <label className="text-xs font-medium text-slate-200">
                USt-Satz (%)
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  className="mt-1 w-full rounded-lg border border-slate-700/70 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/60"
                  value={form.vatRate}
                  onChange={handleChange('vatRate')}
                />
              </label>
            </div>

            <div className="mt-2 grid grid-cols-3 gap-3 rounded-xl border border-slate-800/80 bg-slate-950/50 p-3 text-[11px] text-slate-200">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-medium text-slate-400">
                  Netto
                </span>
                <span className="font-semibold">
                  {formatAmount(net)}
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-medium text-slate-400">
                  USt ({form.vatRate || '0'} %)
                </span>
                <span className="font-semibold">
                  {formatAmount(vatAmount)}
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-medium text-emerald-300">
                  Brutto
                </span>
                <span className="font-semibold text-emerald-300">
                  {formatAmount(gross)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 rounded-2xl border border-white/5 bg-black/20 p-4">
          <div className="space-y-2 text-xs text-slate-300">
            <p>
              Die Rechnungs-PDF nutzt den aktuell erzeugten{' '}
              <span className="font-semibold text-emerald-300">GiroCode-QR-Code</span> und bettet
              ihn unten rechts ein.
            </p>
            {!qrPngDataUrl && (
              <p className="text-[11px] text-amber-300">
                Hinweis: Aktuell ist noch kein QR-Code vorhanden. Bitte zuerst im GiroCode-Generator
                einen QR-Code erzeugen.
              </p>
            )}
          </div>

          <PdfButton
            invoiceData={{
              invoiceNumber: form.invoiceNumber,
              invoiceDate: form.invoiceDate,
              sender: form.sender,
              recipient: form.recipient,
              description: form.description,
              netAmount: net,
              vatRate: vatRateNum,
            }}
            qrPngDataUrl={qrPngDataUrl}
            logoBytes={logoBytes}
            logoMimeType={logoMimeType}
          />
        </div>
      </div>
    </section>
  );
};

