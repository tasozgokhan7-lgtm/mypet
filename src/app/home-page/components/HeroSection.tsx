"use client";

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xRatio = (clientX / innerWidth - 0.5) * 2;
      const yRatio = (clientY / innerHeight - 0.5) * 2;

      const phone = heroRef.current.querySelector('.phone-wrap') as HTMLElement;
      const orbs = heroRef.current.querySelectorAll('.orb-layer') as NodeListOf<HTMLElement>;

      if (phone) {
        phone.style.transform = `translateY(${yRatio * -8}px) translateX(${xRatio * 6}px) rotate(-2deg)`;
      }
      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 0.4;
        orb.style.transform = `translate(${xRatio * factor * 12}px, ${yRatio * factor * 10}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden hero-mesh noise-overlay pt-20">
      
      {/* Animated orbs */}
      <div className="orb-layer orb-1 absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-primary-light/20 blur-[80px] pointer-events-none" />
      <div className="orb-layer orb-2 absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-accent/20 blur-[70px] pointer-events-none" />
      <div className="orb-layer orb-3 absolute top-[40%] right-[30%] w-[300px] h-[300px] rounded-full bg-primary/10 blur-[60px] pointer-events-none" />

      <div className="relative z-10 max-w-container mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse" />
             Mypet Artık Google Play'de Çok Yakında App Store'da
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-semibold text-foreground leading-[1.1] tracking-tight mb-6 animate-fade-in-up delay-100">
              Evcil dostun için{' '}
              <span className="italic text-primary">akıllı</span>{' '}
              ve{' '}
              <span className="relative inline-block">
                <span className="relative z-10">eğlenceli</span>
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  
                  <path d="M2 9 Q50 2 100 7 Q150 12 198 5" stroke="#F4A261" strokeWidth="3" strokeLinecap="round" fill="none" />
                </svg>
              </span>{' '}
              bir uygulama
            </h1>

            {/* Subtext */}
            <p className="text-lg text-muted leading-relaxed max-w-xl mb-10 animate-fade-in-up delay-200">
              Evcil dostunun gelişimini takip et, fotoğraflarını yapay zekâ ile dönüştür ve kişisel bakım önerileri al. Tüm özellikler tek bir yerde.
            </p>

            {/* Store badges */}
            <div id="download" className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <a
                href="https://play.google.com/store/apps/details?id=com.dutuygulamamypet.app"
                className="badge-btn block"
                aria-label="Google Play'den indir">
                
                <AppImage
                  src="/assets/images/indir_1_-1774532978854.png"
                  alt="Google Play Store'dan indirin - MyPet uygulaması"
                  width={160}
                  height={48}
                  className="h-12 w-auto" />
                
              </a>
              <a
                href="#"
                className="badge-btn block"
                aria-label="App Store'dan indir">
                
                <AppImage
                  src="/assets/images/indir-1774533123074.jpg"
                  alt="App Store'dan indirin - MyPet uygulaması"
                  width={143}
                  height={48}
                  className="h-12 w-auto" />
                
              </a>
            </div>

            {/* Micro trust signals */}
            <div className="flex items-center gap-6 mt-8 animate-fade-in-up delay-400">
              {[
              { icon: '🐾', text: 'Ücretsiz İndir' },
              { icon: '🤖', text: 'Yapay Zekâ Destekli' },
              { icon: '🔒', text: 'Gizlilik Öncelikli' }].
              map((item) =>
              <div key={item.text} className="flex items-center gap-1.5 text-sm text-muted font-medium">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right — Phone + floating pills */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center min-h-[520px]">
            {/* Floating feature pills */}
            <div className="pill-1 absolute top-[8%] left-[0%] z-20">
              <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-pill border border-primary/10">
                <span className="text-2xl">🎨</span>
                <div>
                  <div className="text-xs font-bold text-foreground">AI Fotoğraf</div>
                  <div className="text-[10px] text-muted">Sanat eserine çevir</div>
                </div>
              </div>
            </div>

            <div className="pill-2 absolute top-[15%] right-[0%] z-20">
              <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-pill border border-accent/20">
                <span className="text-2xl">📊</span>
                <div>
                  <div className="text-xs font-bold text-foreground">Gelişim Takibi</div>
                  <div className="text-[10px] text-muted">Sağlık verileri</div>
                </div>
              </div>
            </div>

            <div className="pill-3 absolute bottom-[20%] left-[2%] z-20">
              <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-pill border border-primary-light/20">
                <span className="text-2xl">🔔</span>
                <div>
                  <div className="text-xs font-bold text-foreground">Hatırlatmalar</div>
                  <div className="text-[10px] text-muted">Aşı & bakım</div>
                </div>
              </div>
            </div>

            <div className="pill-4 absolute bottom-[25%] right-[2%] z-20">
              <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-pill border border-accent/20">
                <span className="text-2xl">💡</span>
                <div>
                  <div className="text-xs font-bold text-foreground">Akıllı Öneriler</div>
                  <div className="text-[10px] text-muted">AI beslenme tavsiyeleri</div>
                </div>
              </div>
            </div>

            {/* Phone mockup */}
            <div className="phone-wrap phone-float relative z-10">
              {/* Phone frame */}
              <div className="relative w-[240px] sm:w-[280px]">
                {/* Glow behind phone */}
                <div className="absolute inset-0 bg-primary/30 blur-[50px] rounded-[50px] scale-90 -z-10" />

                {/* Phone image */}
               <div className="max-w-xl mx-auto">
  <AppImage
    src="/assets/images/Ads_z_tasar_m_5_-1774354001613.png"
    alt="MyPet uygulaması telefon mockup'ı - evcil hayvan takip ekranı"
    width={630}
    height={1260}
    className="w-full h-auto object-contain drop-shadow-2xl"
    priority
    fetchPriority="high"
    loading="eager"
  />
</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce hidden md:flex">
        <span className="text-xs text-muted font-medium tracking-wider uppercase">Keşfet</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-muted">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>);

};

export default HeroSection;