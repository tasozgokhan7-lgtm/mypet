import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Diğer Uygulamalarımız — MyPet',
  description: 'Baby Moments, Futbolcu Bul - Quiz ve StyleScan dahil tüm mobil uygulamalarımızı keşfedin.',
};

const apps = [
  {
    name: 'Baby Moments',
    emoji: '👶',
    logo: null,
    description: 'Açıklama yakında eklenecek.',
    color: '#FFF5F0',
    accent: '#F4A261',
    tag: 'Aile & Çocuk',
    googlePlay: null,
    appStore: null,
  },
  {
    name: 'Futbolcu Bul - Quiz',
    emoji: null,
    logo: '/assets/images/futbolcu-bul-logo.png',
    description: 'Futbolcu ismini görüyorsun, geri kalanını biliyor musun? Uyruğunu, doğum yılını, kariyerinde oynadığı kulüpleri ve kazandığı kupaları tahmin et. Futbol bilgini sına!',
    color: '#F0FFF4',
    accent: '#2D6A4F',
    tag: 'Spor & Eğlence',
    googlePlay: null,
    appStore: 'https://apps.apple.com/tr/app/futbolcu-bul-quiz/id6767035364?l=tr',
  },
  {
    name: 'StyleScan',
    emoji: '👗',
    logo: null,
    description: 'Açıklama yakında eklenecek.',
    color: '#FDF4FF',
    accent: '#A855F7',
    tag: 'Moda & Stil',
    googlePlay: null,
    appStore: null,
  },
];

export default function AppsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-16 px-6 text-center bg-white border-b border-foreground/8">
        <div className="max-w-container mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            <span>📱</span> Tüm Uygulamalarımız
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight mb-4">
            Diğer Mobil{' '}
            <span className="italic text-primary">Uygulamalarımız</span>
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Hayatınızı kolaylaştırmak için tasarlanmış uygulamalar. Hepsini ücretsiz deneyin.
          </p>
        </div>
      </section>

      {/* App Cards */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {apps.map((app) => (
            <div
              key={app.name}
              className="bg-white rounded-2xl border border-foreground/10 p-8 flex items-start gap-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                style={{ backgroundColor: app.color }}
              >
                {app.logo ? (
                  <Image
                    src={app.logo}
                    alt={`${app.name} logo`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <span className="text-4xl">{app.emoji}</span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    {app.name}
                  </h2>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: app.color, color: app.accent }}
                  >
                    {app.tag}
                  </span>
                </div>
                <p className="text-muted leading-relaxed mb-5">{app.description}</p>

                {/* Store badges */}
                <div className="flex flex-wrap gap-3">
                  {app.googlePlay ? (
                    <a
                      href={app.googlePlay}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl border-2 hover:shadow-sm transition-all duration-200"
                      style={{ borderColor: app.accent, color: app.accent }}
                    >
                      ▶ Google Play
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm text-muted border border-foreground/15 rounded-xl px-4 py-2">
                      ▶ Google Play — Yakında
                    </span>
                  )}
                  {app.appStore ? (
                    <a
                      href={app.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl border-2 hover:shadow-sm transition-all duration-200"
                      style={{ borderColor: app.accent, color: app.accent }}
                    >
                      🍎 App Store
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm text-muted border border-foreground/15 rounded-xl px-4 py-2">
                      🍎 App Store — Yakında
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
