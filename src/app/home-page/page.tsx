import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ScreenshotCarousel from './components/ScreenshotCarousel';
import FeaturesSection from './components/FeaturesSection';
import DownloadCTA from './components/DownloadCTA';
import PrivacySection from './components/PrivacySection';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <HeroSection />

      {/* App Screenshots */}
      <ScreenshotCarousel />

      {/* Features */}
      <FeaturesSection />

      {/* Download CTA */}
      <DownloadCTA />

      {/* Privacy Policy */}
      <PrivacySection />

      {/* Contact */}
      <ContactSection />

      <Footer />
    </main>
  );
}