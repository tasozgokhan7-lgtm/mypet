import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PrivacySection from '@/app/home-page/components/PrivacySection';

export const metadata = {
  title: 'Gizlilik Politikası — MyPet',
  description: 'MyPet uygulaması gizlilik politikası. Verilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu öğrenin.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <PrivacySection />
      </div>
      <Footer />
    </main>
  );
}
