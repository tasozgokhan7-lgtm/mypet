import React from 'react';

import AppImage from '@/components/ui/AppImage';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="max-w-container mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <AppImage
                src="https://i0.wp.com/appmypet.com/wp-content/uploads/2025/10/mypet_logo.png?fit=512%2C512&ssl=1"
                alt="MyPet logo"
                width={32}
                height={32}
                className="w-full h-full object-cover" />
              
            </div>
            <span className="font-display font-semibold text-foreground">MyPet</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a href="/home-page#privacy" className="text-sm font-medium text-muted hover:text-foreground transition-colors min-h-[44px] flex items-center">
              Gizlilik Politikası
            </a>
            <a href="/home-page#contact" className="text-sm font-medium text-muted hover:text-foreground transition-colors min-h-[44px] flex items-center">
              İletişim
            </a>
            <a href="mailto:info@mypet.com" className="text-sm font-medium text-muted hover:text-foreground transition-colors min-h-[44px] flex items-center">
              info@mypet.com
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted">
            © 2025 MyPet · Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;