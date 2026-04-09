"use client";

import React, { useEffect, useRef, useState } from 'react';

const FORMSPREE_ID = 'xojpzwaq';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

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

          {/* Right — Contact form */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <div className="bg-white rounded-xl2 p-10 border border-foreground/8 shadow-card sticky top-24">
              <div className="mb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl mb-5">
                  ✉️
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  Mesaj Gönderin
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Formu doldurun, en kısa sürede geri dönelim.
                </p>
              </div>

              {status === 'success' ? (
                <div className="flex flex-col items-center text-center py-10 gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl">✅</div>
                  <h4 className="font-semibold text-foreground text-lg">Mesajınız İletildi!</h4>
                  <p className="text-muted text-sm">En kısa sürede <strong>info@appmypet.com</strong> adresinden geri dönüş yapacağız.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 text-sm text-primary font-semibold hover:underline"
                  >
                    Yeni mesaj gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-1.5">
                      Adınız
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Adınızı girin"
                      className="w-full px-4 py-3 rounded-xl border border-foreground/15 bg-background text-foreground placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-1.5">
                      E-posta Adresiniz
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ornek@mail.com"
                      className="w-full px-4 py-3 rounded-xl border border-foreground/15 bg-background text-foreground placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-1.5">
                      Mesajınız
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Mesajınızı buraya yazın..."
                      className="w-full px-4 py-3 rounded-xl border border-foreground/15 bg-background text-foreground placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-500">
                      Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan <a href="mailto:info@appmypet.com" className="underline">info@appmypet.com</a> adresine yazın.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 rounded-btn bg-primary text-white font-semibold text-sm badge-btn hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13"/>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                        Gönder
                      </>
                    )}
                  </button>
                </form>
              )}

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
