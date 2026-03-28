import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'MyPet — Evcil Hayvanın İçin Akıllı Asistan',
  description: 'MyPet ile evcil dostunun gelişimini takip et, fotoğraflarını AI ile dönüştür ve kişisel bakım önerileri al. Yakında App Store ve Google Play\'de.',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Preconnect to external image domains to eliminate DNS/TCP handshake delay */}
        <link rel="preconnect" href="https://appmypet.com" />
        <link rel="dns-prefetch" href="https://appmypet.com" />
        <link rel="preconnect" href="https://static.rocket.new" />
        <link rel="dns-prefetch" href="https://static.rocket.new" />

        {/* Preload the critical LCP hero image */}
        <link
          rel="preload"
          as="image"
          href="/assets/images/Ads_z_tasar_m_5_-1774354001613.png"
          fetchPriority="high"
        />
</head>
      <body>{children}
</body>
    </html>
  );
}