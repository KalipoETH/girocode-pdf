'use client';

import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';

export type QRStatusType = 'success' | 'error' | null;

export interface QRPreviewProps {
  epcPayload: string | null;
  statusType: QRStatusType;
  statusMessage: string | null;
  onReset: () => void;
  onQrRendered?: (dataUrl: string | null) => void;
}

export const QRPreview: React.FC<QRPreviewProps> = ({
  epcPayload,
  statusType,
  statusMessage,
  onReset,
  onQrRendered,
}) => {
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
          <h3 className="text-sm font-medium text-slate-100">GiroCode-Vorschau</h3>
          <p className="text-xs text-slate-400">
            QR wird ausschließlich im Browser erzeugt. Optionaler Fallback sendet Daten an einen externen Dienst.
          </p>
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
                alt="GiroCode über externen QR-Dienst"
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
              <span>
                Externer QR-Fallback (
                <span className="font-mono text-[11px] text-slate-400">api.qrserver.com</span>) –{' '}
                <span className="font-semibold text-amber-300">
                  Achtung: Zahlungsdaten werden an einen externen Dienst übertragen.
                </span>
              </span>
            </label>
          </>
        ) : (
          <p className="text-xs text-slate-400">
            Noch kein GiroCode erzeugt. Bitte Zahlungsdaten ausfüllen und auf
            <span className="font-semibold text-slate-200"> „GiroCode generieren“</span> klicken.
          </p>
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-1.5 text-xs font-medium text-slate-200 shadow-sm shadow-black/30 transition hover:border-slate-500 hover:bg-slate-800/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          Zurücksetzen
        </button>
      </div>
    </div>
  );
};

