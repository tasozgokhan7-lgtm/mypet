import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Futbolcu Bul - Quiz | Futbol Bilgini Test Et',
  description: 'Futbolcu ismini görüyorsun, geri kalanını biliyor musun? Uyruğunu, doğum yılını, kariyerinde oynadığı kulüpleri ve kazandığı kupaları tahmin et.',
};

const features = [
  { icon: '🌍', title: 'Uyruk', desc: 'Futbolcunun hangi ülkeden olduğunu bul' },
  { icon: '📅', title: 'Doğum Yılı', desc: 'Kaç yılında doğduğunu tahmin et' },
  { icon: '⚽', title: 'Kulüpler', desc: 'Kariyerinde oynadığı kulüpleri keşfet' },
  { icon: '🏆', title: 'Kupalar', desc: 'Kazandığı şampiyonlukları bul' },
];

export default function FutbolcuBulPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">

      {/* Header — minimal */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-foreground/8">
        <div className="max-w-container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/home-page" className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Ana Sayfa
          </Link>
          <a
            href="https://apps.apple.com/tr/app/futbolcu-bul-quiz/id6767035364?l=tr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-btn bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
          >
            🍎 İndir
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        {/* Arkaplan */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[100px] pointer-events-none" />

        <div className="relative max-w-2xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white">
              <Image
                src="/assets/images/futbolcu-bul-logo.png"
                alt="Futbolcu Bul Quiz logo"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Badges */}
          <div className="flex justify-center gap-2 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              ⚽ Futbol Quiz
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">
              🏆 Binlerce Futbolcu
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold">
              📱 iOS
            </span>
          </div>

          {/* Başlık */}
          <h1 className="font-display text-5xl sm:text-6xl font-semibold text-foreground tracking-tight leading-tight mb-6">
            Futbolcu Bul{' '}
            <span className="italic text-primary">Quiz</span>
          </h1>

          <p className="text-muted text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Futbolcu ismini görüyorsun — uyruğunu, doğum yılını, oynadığı kulüpleri ve kazandığı kupaları biliyor musun? Futbol bilgini sına!
          </p>

          {/* CTA Butonları */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://apps.apple.com/tr/app/futbolcu-bul-quiz/id6767035364?l=tr"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-black text-white font-semibold text-lg hover:bg-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80 leading-none mb-0.5">App Store'dan İndir</div>
                <div className="text-base font-bold leading-none">iOS için Ücretsiz</div>
              </div>
            </a>

            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-foreground/5 text-muted font-medium text-base border border-foreground/10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="opacity-50">
                <path d="M3.18 23.76c.3.17.64.22.98.14l12.76-7.37-2.84-2.84-10.9 10.07zM.35 1.56C.13 1.93 0 2.38 0 2.9v18.2c0 .52.13.97.35 1.34l.07.07 10.2-10.2v-.24L.42 1.49l-.07.07zM20.49 10.07l-2.74-1.58-3.19 3.19 3.19 3.2 2.76-1.59c.79-.45.79-1.18-.02-1.63v-.19zM4.16.23L16.92 7.6l-2.84 2.84L3.18.37A1.2 1.2 0 014.16.23z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs leading-none mb-0.5">Google Play</div>
                <div className="text-sm font-semibold leading-none">Yakında</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Özellikler */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Nasıl Oynanır?</p>
            <h2 className="font-display text-4xl font-semibold text-foreground tracking-tight">
              Her futbolcu için 4 soru
            </h2>
            <p className="text-muted mt-4 text-lg">Futbolcunun adını görüyorsun. Geri kalanını bulmak sana kalmış.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-5 p-6 bg-background rounded-2xl border border-foreground/8 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">{f.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Son CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary-dark to-primary text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white/5 blur-[60px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-accent/10 blur-[50px] pointer-events-none" />

        <div className="relative max-w-xl mx-auto">
          <div className="text-5xl mb-6">⚽</div>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-4">
            Hadi Oyna!
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Ücretsiz indir, hemen oynamaya başla.
          </p>
          <a
            href="https://apps.apple.com/tr/app/futbolcu-bul-quiz/id6767035364?l=tr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-foreground font-bold text-lg hover:bg-gray-50 transition-all duration-200 shadow-xl hover:-translate-y-0.5"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            App Store'dan İndir
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-foreground/8 bg-background text-center">
        <p className="text-sm text-muted">
          © 2026 MyPet ·{' '}
          <Link href="/privacy" className="hover:text-primary transition-colors">Gizlilik Politikası</Link>
          {' · '}
          <Link href="/apps" className="hover:text-primary transition-colors">Diğer Uygulamalarımız</Link>
        </p>
      </footer>
    </main>
  );
}
