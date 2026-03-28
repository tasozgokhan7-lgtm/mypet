"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import AppImage from '@/components/ui/AppImage';

const screenshots: { src: string; alt: string }[] = [
  { src: '/assets/images/Ads_z_tasar_m_5_-1774356596017.png', alt: 'MyPet uygulama ekranı 1' },
  { src: '/assets/images/Ads_z_tasar_m_6_-1774356672671.png', alt: 'MyPet uygulama ekranı 2' },
  { src: '/assets/images/Ads_z_tasar_m_10_-1774357195584.png', alt: 'MyPet uygulama ekranı 3' },
  { src: '/assets/images/Ads_z_tasar_m_7_-1774356857961.png', alt: 'MyPet uygulama ekranı 4' },
  { src: '/assets/images/Ads_z_tasar_m_9_-1774357052152.png', alt: 'MyPet uygulama ekranı 5' },
];

const ScreenshotCarousel: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
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

  const handleScroll = useCallback(() => {
    if (!trackRef.current || screenshots.length === 0) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    const itemWidth = scrollWidth / screenshots.length;
    const index = Math.round(scrollLeft / itemWidth);
    setActiveIndex(Math.max(0, Math.min(screenshots.length - 1, index)));
  }, []);

  const scrollToIndex = (index: number) => {
    if (!trackRef.current) return;
    const itemWidth = trackRef.current.scrollWidth / screenshots.length;
    trackRef.current.scrollTo({ left: itemWidth * index, behavior: 'smooth' });
    setActiveIndex(index);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    dragStartScroll.current = trackRef.current?.scrollLeft ?? 0;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    const diff = e.clientX - dragStartX.current;
    trackRef.current.scrollLeft = dragStartScroll.current - diff;
  };
  const onMouseUp = () => setIsDragging(false);

  const onTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    dragStartScroll.current = trackRef.current?.scrollLeft ?? 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!trackRef.current) return;
    const diff = e.touches[0].clientX - dragStartX.current;
    trackRef.current.scrollLeft = dragStartScroll.current - diff;
  };

  return (
    <section
      ref={sectionRef}
      id="screenshots"
      className="py-24 overflow-hidden bg-white">
      
      <div className="max-w-container mx-auto px-6 mb-12">
        <div
          className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Uygulama İçi Ekranlar
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground tracking-tight">
            Her şey parmaklarının{' '}
            <span className="italic text-primary-light">ucunda</span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-xl mx-auto">
            Tasarımı sade, kullanımı keyifli. MyPet ile evcil dostunun her anını yaşa.
          </p>
        </div>
      </div>

      {/* Carousel track */}
      <div
        ref={trackRef}
        className={`carousel-track flex gap-5 px-[max(24px,calc(50vw-320px))] overflow-x-auto no-scrollbar pb-4 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
        onScroll={handleScroll}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}>
        
        {screenshots.map((shot, i) =>
          <div
            key={i}
            className="flex-shrink-0 w-[220px] sm:w-[240px] transition-all duration-300 cursor-pointer"
            style={{
              transform: activeIndex === i ? 'scale(1.05)' : 'scale(0.95)',
              transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
            onClick={() => scrollToIndex(i)}>
            <AppImage
              src={shot.src}
              alt={shot.alt}
              width={240}
              height={480}
              className="w-full h-auto object-contain" />
          </div>
        )}
      </div>

      {/* Dots */}
      {screenshots.length > 0 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          {screenshots.map((_, i) =>
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Ekran ${i + 1}'e git`}
              className={`carousel-dot h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ?
                'active w-6 bg-primary' : 'w-2 bg-primary/25'}`
              } />
          )}
        </div>
      )}
    </section>
  );
};

export default ScreenshotCarousel;