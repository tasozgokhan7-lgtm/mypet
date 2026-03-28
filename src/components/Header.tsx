"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
  { label: 'Hakkında', href: '#features' },
  { label: 'Gizlilik Politikası', href: '#privacy' },
  { label: 'Bize Ulaşın', href: '#contact' }];


  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ?
      'bg-white/90 backdrop-blur-md shadow-sm border-b border-primary-light/20' :
      'bg-transparent'}`
      }>
      
      <div className="max-w-container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/home-page" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-300">
              <AppImage
                src="https://i0.wp.com/appmypet.com/wp-content/uploads/2025/10/mypet_logo.png?fit=512%2C512&ssl=1"
                alt="MyPet logo - evcil hayvan asistanı uygulaması"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority={true} />
              
            </div>
            <div className="leading-none">
              <span className="font-display font-semibold text-lg text-foreground block leading-tight">MyPet</span>
              <span className="text-[10px] uppercase tracking-widest text-primary font-medium">Evcil Hayvan Asistanı</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                const id = link.href.replace('#', '');
                const el = document.getElementById(id);
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="nav-link text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200">
              
                {link.label}
              </a>
            )}
          </nav>

          {/* Desktop CTA */}
        <a
  href="#qr-code"
  onClick={(e) => {
    e.preventDefault();

    const el = document.getElementById('qr-code');
    if (el) {
      const yOffset = -550; // 🔥 burayı ihtiyacına göre değiştir (örn: -80, -120)
      const y =
        el.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  }}
  className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-btn text-sm font-semibold bg-primary text-white hover:bg-primary-dark transition-all duration-200 badge-btn"
>
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 12l4 4 4-4M12 8v8" />
  </svg>
  İndir
</a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-primary/10 transition-colors"
            aria-label="Menüyü aç">
            
            {menuOpen ?
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg> :

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            }
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden border-t border-primary/10 ${menuOpen ? 'open' : ''}`}>
          
          <div className="flex flex-col gap-1 py-4">
            {navLinks.map((link) =>
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                const id = link.href.replace('#', '');
                const el = document.getElementById(id);
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: 'smooth' });
                }
                setMenuOpen(false);
              }}
              className="px-4 py-3 rounded-lg text-foreground/80 hover:bg-primary/8 hover:text-primary font-medium transition-colors">
              
                {link.label}
              </a>
            )}
            <a
              href="#qr-code"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('qr-code');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                setMenuOpen(false);
              }}
              className="mt-2 mx-4 py-3 rounded-btn text-center text-sm font-semibold bg-primary text-white">
              
              Uygulamayı İndir
            </a>
          </div>
        </div>
      </div>
    </header>);

};

export default Header;