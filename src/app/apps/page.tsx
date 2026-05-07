import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const apps = [
  {
    name: 'Baby Moments',
    emoji: '👶',
    description: 'Açıklama yakında eklenecek.',
    color: '#FFF5F0',
    border: '#F4A261',
    tag: 'Aile & Çocuk',
  },
  {
    name: 'Futbolcu Bul - Quiz',
    emoji: '⚽',
    description: 'Açıklama yakında eklenecek.',
    color: '#F0FFF4',
    border: '#2D6A4F',
    tag: 'Spor & Eğlence',
  },
  {
    name: 'StyleScan',
    emoji: '👗',
    description: 'Açıklama yakında eklenecek.',
    color: '#FDF4FF',
    border: '#A855F7',
    tag: 'Moda & Stil',
  },
];

export const metadata = {
  title: 'Diğer Uygulamalarımız — MyPet',
  description: 'Baby Moments, Futbolcu Bul ve StyleScan dahil tüm mobil uygulamalarımızı keşfedin.',
};

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
        <div className="max-w-3xl mx-auto grid sm:grid-cols-1 gap-6">
          {apps.map((app) => (
            <div
              key={app.name}
              className="bg-white rounded-2xl border-2 p-8 flex items-start gap-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ borderColor: app.border + '40' }}
            >
              {/* Icon */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0"
                style={{ backgroundColor: app.color }}
              >
                {app.emoji}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    {app.name}
                  </h2>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: app.color, color: app.border }}
                  >
                    {app.tag}
                  </span>
                </div>
                <p className="text-muted leading-relaxed">{app.description}</p>

                {/* Badges placeholder */}
                <div className="flex gap-3 mt-5">
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted border border-foreground/15 rounded-full px-3 py-1.5">
                    ▶ Google Play
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted border border-foreground/15 rounded-full px-3 py-1.5">
                    ⬡ App Store
                  </span>
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
