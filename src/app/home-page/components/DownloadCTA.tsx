"use client";

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const DownloadCTA: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="indir"
      ref={sectionRef}
      className="relative overflow-hidden cta-gradient py-24 noise-overlay">
      
      {/* Decorative orbs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-primary-light/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[70px] pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px'
        }} />
      

      <div className="relative z-10 max-w-container mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-semibold mb-8 transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`
          }>
          
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          MyPet Artık Google Play'de ve App Store'da Yayında
        </div>

        {/* Headline */}
        <h2
          className={`font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6 transition-all duration-700 delay-100 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`
          }>
          
          Dostunun yanında olmak{' '}
          <span className="italic text-accent">hiç bu kadar</span>{' '}
          kolay olmamıştı
        </h2>

        <p
          className={`text-white/70 text-lg max-w-xl mx-auto mb-12 transition-all duration-700 delay-200 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`
          }>
          
          MyPet artık Google Play ve App Store'da. İlk indirenler arasına katıl.
        </p>

        {/* Badges */}
        <div
          className={`flex flex-wrap justify-center gap-5 mb-12 transition-all duration-700 delay-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`
          }>
          
          <a href="https://play.google.com/store/apps/details?id=com.dutuygulamamypet.app" target="_blank" rel="noopener noreferrer" className="badge-btn" aria-label="Google Play'den indir">
            <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl p-2">
              <AppImage
                src="/assets/images/indir_1_-1774533014660.png"
                alt="Google Play Store'dan MyPet uygulamasını indirin"
                width={180}
                height={54}
                className="h-12 w-auto" />
            </div>
          </a>
          <a href="https://apps.apple.com/tr/app/mypet-dostunun-asistan%C4%B1/id6753916592?l=tr" target="_blank" rel="noopener noreferrer" className="badge-btn" aria-label="App Store'dan indir">
            <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl p-2">
              <AppImage
                src="/assets/images/indir-1774533123074.jpg"
                alt="App Store'dan MyPet uygulamasını indirin"
                width={180}
                height={54}
                className="h-12 w-auto" />
            </div>
          </a>
        </div>

        {/* QR Code 
        <div
          id="qr-code"
          className={`flex flex-col items-center gap-3 mb-12 transition-all duration-700 delay-350 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`
          }>
          <p className="text-white/60 text-sm font-medium">veya QR kodu tara</p>
          <div className="bg-white rounded-2xl p-3 shadow-lg">
            <AppImage
              src="/assets/images/qr_kodum_1-1774531398742.png"
              alt="MyPet uygulamasını indirmek için QR kod - Android ve iOS için"
              width={360}
              height={360}
              className="w-84 h-84 object-contain"
              style={{ width: '336px', height: '336px' }} />

          </div>
          <p className="text-white/40 text-xs">Android & iOS</p>
        </div> */}

        {/* Stats row */}
        <div
          className={`flex flex-wrap justify-center gap-10 transition-all duration-700 delay-400 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`
          }>
          
          {[
          { value: 'Ücretsiz', label: 'Temel Sürüm' },
          { value: 'AI', label: 'Yapay Zekâ Destekli' },
          { value: '🐾', label: 'Tüm Hayvan Türleri' }].
          map((stat) =>
          <div key={stat.label} className="text-center">
              <div className="font-display text-3xl font-semibold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/50 font-medium">{stat.label}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default DownloadCTA;