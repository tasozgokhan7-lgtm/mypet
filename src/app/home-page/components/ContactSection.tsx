"use client";

import React, { useEffect, useRef, useState } from 'react';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const topics = [
    { icon: '🐾', text: 'Uygulama kullanımıyla ilgili sorunlar' },
    { icon: '🗑️', text: 'Hesap veya veri silme talepleri' },
    { icon: '💡', text: 'Yeni özellik önerileri' },
    { icon: '🐛', text: 'Hata bildirimi veya teknik problemler' },
    { icon: '🤝', text: 'İş birliği veya basın iletişimi' },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 bg-background"
    >
      <div className="max-w-container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-xl">💬</div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">İletişim</p>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground tracking-tight mb-6">
              Bize{' '}
              <span className="italic text-primary">Ulaşın</span>
            </h2>
            <p className="text-muted leading-relaxed text-lg mb-10">
              MyPet ekibi olarak kullanıcılarımızın geri bildirimlerine, önerilerine ve sorularına her zaman açığız.
            </p>

            {/* Topics */}
            <h3 className="font-semibold text-foreground mb-5">Destek Konuları</h3>
            <ul className="space-y-3">
              {topics.map((topic) => (
                <li
                  key={topic.text}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-foreground/8 feature-card"
                >
                  <span className="text-xl">{topic.icon}</span>
                  <span className="text-sm font-medium text-foreground/80">{topic.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Contact card */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <div className="bg-white rounded-xl2 p-10 border border-foreground/8 shadow-card sticky top-24">
              {/* Email card */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-4xl mx-auto mb-6">
                  ✉️
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  İletişim Adresi
                </h3>
                <p className="text-muted mb-6 leading-relaxed">
                  Her türlü talebinizi aşağıdaki e-posta adresine iletebilirsiniz. En kısa sürede dönüş yapmaya çalışıyoruz.
                </p>
                <a
                  href="mailto:info@mypet.com"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-btn bg-primary text-white font-semibold text-lg badge-btn hover:bg-primary-dark transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  info@mypet.com
                </a>
              </div>

              {/* Divider */}
              <div className="border-t border-foreground/8 my-8" />

              {/* Privacy note */}
              <div className="flex items-start gap-4 bg-primary/5 rounded-xl p-5 border border-primary/10">
                <span className="text-2xl mt-0.5">🔒</span>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">Gizlilik ve Güvenlik</h4>
                  <p className="text-xs text-muted leading-relaxed">
                    Gönderdiğiniz bilgiler yalnızca talebinizi çözmek amacıyla kullanılacaktır. Veri silme talebinde kayıtlı e-posta adresinizi belirtmeyi unutmayın.
                  </p>
                  <a href="#privacy" className="text-xs text-primary font-semibold mt-2 inline-block hover:underline">
                    Gizlilik Politikası →
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8 text-center">
                <p className="text-xs text-muted mb-4 font-medium uppercase tracking-wider">Bizi Takip Edin</p>
                <div className="flex justify-center gap-3">
                  {[
                    {
                      label: 'Instagram',
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                          <circle cx="12" cy="12" r="4"/>
                          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                        </svg>
                      ),
                    },
                    {
                      label: 'Twitter',
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                        </svg>
                      ),
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href="#"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center text-muted hover:bg-primary/10 hover:text-primary transition-all duration-200"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;