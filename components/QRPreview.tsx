'use client';

import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import { en } from '../lib/translations/en';
import { fr } from '../lib/translations/fr';
import { es } from '../lib/translations/es';

export type QRStatusType = 'success' | 'error' | null;

type Locale = 'de' | 'en' | 'fr' | 'es';

export interface QRPreviewProps {
  locale: Locale;
  epcPayload: string | null;
  statusType: QRStatusType;
  statusMessage: string | null;
  onReset: () => void;
  onQrRendered?: (dataUrl: string | null) => void;
}

function getTexts(locale: Locale) {
  if (locale === 'en') {
    return {
      heading: en.qr.title,
      helper: en.qr.tip,
      fallbackLabel: en.qr.fallback,
      fallbackWarning:
        'Warning: payment data is transmitted to the external service.',
      emptyText:
        'No GiroCode generated yet. Please fill in the payment data and click “Generate GiroCode”.',
      reset: 'Reset',
      externalAlt: 'GiroCode via external QR service',
    };
  }

  if (locale === 'fr') {
    return {
      heading: fr.qr.title,
      helper: fr.qr.tip,
      fallbackLabel: fr.qr.fallback,
      fallbackWarning:
        'Attention : les données de paiement sont transmises au service externe.',
      emptyText:
        'Aucun GiroCode généré pour le moment. Veuillez saisir les données de paiement et cliquer sur « Générer GiroCode ».',
      reset: 'Réinitialiser',
      externalAlt: 'GiroCode via service QR externe',
    };
  }

  if (locale === 'es') {
    return {
      heading: es.qr.title,
      helper: es.qr.tip,
      fallbackLabel: es.qr.fallback,
      fallbackWarning:
        'Atención: los datos de pago se envían al servicio externo.',
      emptyText:
        'Todavía no se ha generado ningún GiroCode. Rellena los datos de pago y haz clic en «Generar GiroCode».',
      reset: 'Restablecer',
      externalAlt: 'GiroCode mediante servicio QR externo',
    };
  }

  return {
    heading: 'GiroCode-Vorschau',
    helper:
      'QR wird ausschließlich im Browser erzeugt. Optionaler Fallback sendet Daten an einen externen Dienst.',
    fallbackLabel:
      'Externer QR-Fallback (api.qrserver.com) – Achtung: Zahlungsdaten werden an einen externen Dienst übertragen.',
    fallbackWarning: '',
    emptyText:
      'Noch kein GiroCode erzeugt. Bitte Zahlungsdaten ausfüllen und auf „GiroCode generieren“ klicken.',
    reset: 'Zurücksetzen',
    externalAlt: 'GiroCode über externen QR-Dienst',
  };
}

export const QRPreview: React.FC<QRPreviewProps> = ({
  locale,
  epcPayload,
  statusType,
  statusMessage,
  onReset,
  onQrRendered,
}) => {
  const t = getTexts(locale);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [useExternal, setUseExternal] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) {
      if (!epcPayload && onQrRendered) {
        onQrRendered(null);
      }
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Immer Canvas leeren, bevor neu gezeichnet wird
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!epcPayload || useExternal) {
      if (onQrRendered) {
        onQrRendered(null);
      }
      return;
    }

    QRCode.toCanvas(canvas, epcPayload, {
      width: 200,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#ffffff',
      },
    })
      .then(() => {
        if (onQrRendered && canvasRef.current) {
          try {
            const dataUrl = canvasRef.current.toDataURL('image/png');
            onQrRendered(dataUrl);
          } catch {
            onQrRendered(null);
          }
        }
      })
      .catch(() => {
        // Bei Renderfehlern das Canvas einfach leer lassen
        if (onQrRendered) {
          onQrRendered(null);
        }
      });
  }, [epcPayload, useExternal, onQrRendered]);

  const handleReset = () => {
    setUseExternal(false);
    onReset();
    if (onQrRendered) {
      onQrRendered(null);
    }
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    }
  };

  const externalUrl =
    epcPayload && `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(epcPayload)}`;

  const hasStatus = statusType && statusMessage;

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-[#121318]/80 p-4 shadow-lg shadow-black/40 backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-medium text-slate-100">{t.heading}</h3>
          <p className="text-xs text-slate-400">{t.helper}</p>
        </div>
        {hasStatus && (
          <span
            className={[
              'animate-status-appear inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
              statusType === 'success'
                ? 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/40'
                : 'bg-red-500/15 text-red-400 ring-1 ring-red-500/40',
            ].join(' ')}
          >
            {statusMessage}
          </span>
        )}
      </div>

      <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-white/10 bg-black/20 p-4">
        {epcPayload ? (
          <>
            {!useExternal && (
              <canvas
                ref={canvasRef}
                width={220}
                height={220}
                className="animate-qr-appear rounded-lg bg-white shadow-md shadow-black/40"
              />
            )}

            {useExternal && externalUrl && (
              <img
                src={externalUrl}
                alt={t.externalAlt}
                className="h-56 w-56 rounded-lg bg-white object-contain shadow-md shadow-black/40"
              />
            )}

            <label className="flex items-start gap-2 text-xs text-slate-300">
              <input
                type="checkbox"
                className="mt-0.5 h-3.5 w-3.5 rounded border-slate-500 bg-slate-900 text-emerald-500 focus:ring-emerald-500"
                checked={useExternal}
                onChange={(e) => setUseExternal(e.target.checked)}
              />
              <span>{t.fallbackLabel}</span>
            </label>
          </>
        ) : (
          <p className="text-xs text-slate-400">{t.emptyText}</p>
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-1.5 text-xs font-medium text-slate-200 shadow-sm shadow-black/30 transition hover:border-slate-500 hover:bg-slate-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
          {t.reset}
        </button>
      </div>
    </div>
  );
};

