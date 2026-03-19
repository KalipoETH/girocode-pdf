'use client';

import React, { useState } from 'react';

export default function KontaktPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b0c10] text-slate-100">
      {/* Floating Dots Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {[
          { top: '10%', left: '15%', size: 3, opacity: 0.18, delay: '0s' },
          { top: '22%', left: '70%', size: 2, opacity: 0.12, delay: '1.2s' },
          { top: '45%', left: '5%', size: 4, opacity: 0.1, delay: '0.6s' },
          { top: '60%', left: '85%', size: 2, opacity: 0.15, delay: '2s' },
          { top: '75%', left: '40%', size: 3, opacity: 0.1, delay: '1.5s' },
          { top: '33%', left: '50%', size: 2, opacity: 0.08, delay: '0.3s' },
          { top: '88%', left: '20%', size: 2, opacity: 0.12, delay: '1.8s' },
          { top: '15%', left: '88%', size: 3, opacity: 0.09, delay: '0.9s' },
        ].map((dot, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-emerald-400"
            style={{
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
              opacity: dot.opacity,
              animation: `float ${4 + i * 0.5}s ease-in-out ${dot.delay} infinite alternate`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          from { transform: translateY(0px); }
          to { transform: translateY(-12px); }
        }
      `}</style>

      <div className="relative mx-auto max-w-2xl px-4 py-10 md:py-14">
        {/* Hero */}
        <header className="mb-10 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Wir antworten innerhalb von 48 Stunden
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Kontakt
            </h1>
            <p className="mt-1 max-w-xl text-sm text-slate-400 md:text-base">
              Fragen, Feedback oder Verbesserungsvorschläge? Schreib uns gerne!
            </p>
          </div>
        </header>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-black/30"
        >
          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-slate-300">
              Name <span className="text-emerald-400">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Dein Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-slate-300">
              E-Mail <span className="text-emerald-400">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="deine@email.de"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-slate-300">
              Nachricht <span className="text-emerald-400">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={4}
              placeholder="Deine Nachricht..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-y rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 outline-none transition focus:border-emerald-500/60 focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-500/20 transition hover:from-emerald-400 hover:to-teal-400 disabled:opacity-60"
          >
            {loading ? 'Wird gesendet...' : 'Nachricht senden →'}
          </button>

          {success && (
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
              ✅ Nachricht gesendet! Wir melden uns innerhalb von 48 Stunden.
            </div>
          )}

          {error && (
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              ❌ Fehler beim Senden. Bitte versuche es erneut.
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
