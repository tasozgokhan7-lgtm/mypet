"use client";

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Feature {
  emoji?: string;
  image?: string;
  imageAlt?: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
}

const features: Feature[] = [
  {
    title: 'AI Fotoğraf Dönüştürücü',
    description: 'Evcil dostunun fotoğrafını benzersiz bir sanat eserine çevir. Yapay zekâ teknolojisiyle sıradan anlar olağanüstü görsellere dönüşür.',
    color: '#2D6A4F',
    bgColor: 'bg-primary/5',
    borderColor: 'border-primary/15',
    image: '/assets/images/gorsel1-1774526274829.png',
    imageAlt: 'AI Fotoğraf Dönüştürücü - evcil hayvan fotoğrafını sanat eserine çeviren yapay zeka özelliği',
  },
  {
    title: 'Bilgilendirici Asistan',
    description: 'Evcil hayvanın hakkında merak ettiğin her şeyi sor. Yapay zekâ destekli asistanımız beslenme, sağlık ve bakım konularında sana rehberlik eder.',
    color: '#6B48FF',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100',
    image: '/assets/images/gorsel5-1774529243998.png',
    imageAlt: 'Bilgilendirici Asistan - evcil hayvan sorularını yanıtlayan yapay zeka asistan ekranı',
  },
  {
    title: 'Gelişim Takibi',
    description: 'Kilo, yaş, aşı ve sağlık verilerini kolayca kaydet. Dostunun büyümesini grafiklerle izle.',
    color: '#52B788',
    bgColor: 'bg-primary-light/8',
    borderColor: 'border-primary-light/20',
    image: '/assets/images/Ads_z_tasar_m_12_-1774529835425.png',
    imageAlt: 'Gelişim Takibi - evcil hayvanın sağlık ve büyüme verilerini gösteren grafik ekranı',
  },
  {
    image: '/assets/images/Ads_z_tasar_m_13_-1774530689048.png',
    imageAlt: 'Hatırlatmalar - aşı takvimi ve veteriner randevusu bildirim ekranı',
    title: 'Hatırlatmalar',
    description: 'Aşı takvimi, mama zamanı, veteriner randevusu. Hiçbir önemli anı kaçırma.',
    color: '#E76F51',
    bgColor: 'bg-accent-warm/8',
    borderColor: 'border-accent-warm/20',
  },
];

const FeaturesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-24 bg-background"
    >
      <div className="max-w-container mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Özellikler
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground tracking-tight">
            Neden{' '}
            <span className="italic text-primary">MyPet?</span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-xl mx-auto">
            Evcil hayvan bakımını daha kolay, daha eğlenceli ve daha akıllı hale getiren dört temel özellik.
          </p>
        </div>

        {/* Vertical feature list */}
        <div className="flex flex-col gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`feature-card rounded-card border ${feature.bgColor} ${feature.borderColor} transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms', minHeight: '220px' }}
            >
              <div className="flex flex-col sm:flex-row items-stretch h-full">
                {/* Content */}
                <div className="flex-1 p-8">
                  {/* Icon */}

                  <h3
                    className="font-display text-2xl font-semibold mb-3 text-[rgba(45,106,79,1)]"
                  >
                    {feature.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative line */}
                  <div
                    className="mt-6 h-[3px] w-10 rounded-full"
                    style={{ backgroundColor: feature.color }}
                  />
                </div>

                {/* Image slot */}
                <div className="sm:w-64 lg:w-80 flex-shrink-0 rounded-b-card sm:rounded-b-none sm:rounded-r-card overflow-hidden bg-black/5 flex items-center justify-center self-stretch">
                  {feature.image ? (
                    <AppImage
                      src={feature.image}
                      alt={feature.imageAlt ?? feature.title}
                      width={320}
                      height={240}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-2 p-6 text-center opacity-40">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="3" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                      <span className="text-xs font-medium" style={{ color: feature.color }}>Görsel yakında</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;