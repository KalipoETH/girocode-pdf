'use client';

import React, { useState } from 'react';
import { buildEPC, ibanIsValid } from '../lib/girocode';
import { QRPreview, QRStatusType } from './QRPreview';

interface GiroCodeFormState {
  name: string;
  iban: string;
  bic: string;
  amount: string;
  purpose: string;
}

interface GiroCodeFormProps {
  onQrDataUrlChange?: (dataUrl: string | null) => void;
}

export const GiroCodeForm: React.FC<GiroCodeFormProps> = ({ onQrDataUrlChange }) => {
  const [form, setForm] = useState<GiroCodeFormState>({
    name: '',
    iban: '',
    bic: '',
    amount: '',
    purpose: '',
  });

  const [epcPayload, setEpcPayload] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<QRStatusType>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (field: keyof GiroCodeFormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = field === 'purpose' ? e.target.value.slice(0, 140) : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = form.name.trim();
    const trimmedIban = form.iban.trim();
    const trimmedAmount = form.amount.trim();

    if (!trimmedName || !trimmedIban || !trimmedAmount) {
      setStatusType('error');
      setStatusMessage('Bitte Name, IBAN und Betrag ausfüllen.');
      setEpcPayload(null);
      return;
    }

    if (!ibanIsValid(trimmedIban)) {
      setStatusType('error');
      setStatusMessage('IBAN ist ungültig (Mod-97-Prüfung fehlgeschlagen).');
      setEpcPayload(null);
      return;
    }

    try {
      const payload = buildEPC({
        name: trimmedName,
        iban: trimmedIban,
        bic: form.bic,
        amount: trimmedAmount,
        purpose: form.purpose,
      });

      setEpcPayload(payload);
      setStatusType('success');
      setStatusMessage('GiroCode erfolgreich erzeugt.');
    } catch (err) {
      setStatusType('error');
      setStatusMessage('Fehler beim Erzeugen des GiroCodes. Bitte Eingaben prüfen.');
      setEpcPayload(null);
    }
  };

  const handleReset = () => {
    setForm({
      name: '',
      iban: '',
      bic: '',
      amount: '',
      purpose: '',
    });
    setEpcPayload(null);
    if (onQrDataUrlChange) {
      onQrDataUrlChange(null);
    }
    setStatusType(null);
    setStatusMessage(null);
  };

  return (
    <section
      aria-labelledby="girocode-generator-heading"
      className="flex flex-col gap-6 rounded-3xl border border-white/5 bg-[#121318]/80 p-6 shadow-2xl shadow-black/50 backdrop-blur"
    >
      <div className="flex flex-col gap-2">
        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          100% client-seitig · keine Uploads
        </div>
        <div>
          <h2
            id="girocode-generator-heading"
            className="text-lg font-semibold tracking-tight text-slate-50"
          >
            GiroCode / EPC-Generator
          </h2>
          <p className="text-sm text-slate-400">
            Erzeuge einen SEPA-konformen GiroCode (EPC-QR) direkt im Browser. Ideal für Rechnungen,
            Spenden oder Überweisungsformulare.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleGenerate}
        className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
      >
        <div className="flex flex-col gap-4">
          <div className="grid gap-3">
            <label className="text-xs font-medium text-slate-200">
              Empfängername / Kontoinhaber
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-slate-700/70 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/60"
                value={form.name}
                onChange={handleChange('name')}
                required
              />
            </label>

            <label className="text-xs font-medium text-slate-200">
              IBAN
              <input
                type="text"
                inputMode="text"
                autoCapitalize="characters"
                className="mt-1 w-full rounded-lg border border-slate-700/70 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/60"
                value={form.iban}
                onChange={handleChange('iban')}
                placeholder="DE00 0000 0000 0000 0000 00"
                required
              />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className="text-xs font-medium text-slate-200">
                BIC (optional)
                <input
                  type="text"
                  inputMode="text"
                  autoCapitalize="characters"
                  className="mt-1 w-full rounded-lg border border-slate-700/70 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/60"
                  value={form.bic}
                  onChange={handleChange('bic')}
                  placeholder="BANKDEFFXXX"
                />
              </label>

              <label className="text-xs font-medium text-slate-200">
                Betrag (EUR)
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  className="mt-1 w-full rounded-lg border border-slate-700/70 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/60"
                  value={form.amount}
                  onChange={handleChange('amount')}
                  required
                />
              </label>
            </div>

            <label className="text-xs font-medium text-slate-200">
              Verwendungszweck (max. 140 Zeichen)
              <textarea
                className="mt-1 min-h-[72px] w-full resize-y rounded-lg border border-slate-700/70 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 shadow-sm shadow-black/40 outline-none ring-0 transition placeholder:text-slate-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/60"
                value={form.purpose}
                onChange={handleChange('purpose')}
                maxLength={140}
              />
              <div className="mt-1 text-right text-[10px] text-slate-500">
                {form.purpose.length}/140 Zeichen
              </div>
            </label>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:hover:translate-y-0"
            >
              GiroCode generieren
            </button>
          </div>
        </div>

        <QRPreview
          epcPayload={epcPayload}
          statusType={statusType}
          statusMessage={statusMessage}
          onReset={handleReset}
          onQrRendered={onQrDataUrlChange}
        />
      </form>
    </section>
  );
};

