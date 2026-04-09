"use client";

import React, { useEffect, useRef, useState } from 'react';

const PrivacySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const sections = [
    {
      number: '01',
      title: 'Topladığımız Bilgiler',
      content: (
        <>
          <p className="text-muted mb-3 leading-relaxed"><strong className="text-foreground">Kullanıcı tarafından sağlanan:</strong> Evcil hayvan adı, türü, cinsi, yaşı, kilosu; isteğe bağlı profil fotoğrafı; hesap oluşturma için e-posta adresi.</p>
          <p className="text-muted leading-relaxed"><strong className="text-foreground">Otomatik toplanan:</strong> Uygulama sürümü, cihaz modeli, işletim sistemi; uygulama içi kullanım verileri; analiz amaçlı çerezler.</p>
        </>
      ),
    },
    {
      number: '02',
      title: 'Bilgilerin Kullanım Amacı',
      content: (
        <ul className="space-y-2 text-muted">
          {[
            'Uygulamanın işlevlerini sunmak ve iyileştirmek',
            'Evcil hayvan gelişim verilerini kaydetmek ve analiz etmek',
            'Kullanıcı deneyimini kişiselleştirmek',
            'Uygulama performansını analiz etmek',
            'Kullanıcı desteği sağlamak',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>{item}</span>
            </li>
          ))}
          <li className="mt-3 font-semibold text-primary">MyPet, kullanıcı verilerini üçüncü taraflara satmaz veya kiralamaz.</li>
        </ul>
      ),
    },
    {
      number: '03',
      title: 'Üçüncü Taraf Hizmetleri',
      content: (
        <div className="space-y-3 text-muted">
          <p>MyPet bazı hizmetler için üçüncü taraf teknolojilerinden yararlanabilir:</p>
          <div className="flex items-center gap-3 bg-primary/5 rounded-xl p-3 border border-primary/10">
            <span className="text-xl">📊</span>
            <div>
              <div className="font-semibold text-foreground text-sm">Google Analytics for Firebase</div>
              <div className="text-xs">Kullanım verisi analizi</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-accent/5 rounded-xl p-3 border border-accent/15">
            <span className="text-xl">📱</span>
            <div>
              <div className="font-semibold text-foreground text-sm">AdMob</div>
              <div className="text-xs">Reklam gösterimi — yalnızca ücretsiz sürümde</div>
            </div>
          </div>
          <p className="text-sm">Bu hizmetler cihaz bilgilerini anonim şekilde toplayabilir, ancak kimliğinizi belirlemez.</p>
        </div>
      ),
    },
    {
      number: '04',
      title: 'Veri Saklama Süresi',
      content: (
        <p className="text-muted leading-relaxed">
          Toplanan bilgiler, uygulamayı kullandığınız sürece saklanır. Hesabınızı silmek isterseniz, tüm veriler kalıcı olarak sistemden kaldırılır. Veri silme talebi için:{' '}
          <a href="mailto:info@appmypet.com" className="text-primary font-semibold hover:underline">info@appmypet.com</a>
        </p>
      ),
    },
    {
      number: '05',
      title: 'Güvenlik',
      content: (
        <div className="space-y-2 text-muted">
          <p>Kullanıcı verilerini korumak için makul teknik ve idari önlemler alınır:</p>
          <ul className="space-y-1 mt-2">
            {['Şifrelenmiş veri aktarımı (HTTPS)', 'Güvenli veri depolama', 'Yetkisiz erişimlere karşı koruma'].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-primary-light">🔒</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      number: '06',
      title: 'Çocukların Gizliliği',
      content: (
        <p className="text-muted leading-relaxed">
          MyPet, 13 yaşın altındaki çocuklardan bilerek bilgi toplamaz. Bir çocuğun bilgisi yanlışlıkla alınmışsa, ebeveynin talebi üzerine veriler derhal silinir.
        </p>
      ),
    },
    {
      number: '07',
      title: 'Politikadaki Değişiklikler',
      content: (
        <p className="text-muted leading-relaxed">
          Zaman zaman bu gizlilik politikasında değişiklik yapabiliriz. Güncellenmiş sürüm &ldquo;Son Güncelleme&rdquo; tarihiyle birlikte bu sayfada yayımlanır. Önemli değişiklikler olduğunda uygulama içinde veya e-posta yoluyla bilgilendirme yapılır.
        </p>
      ),
    },
    {
      number: '08',
      title: 'İletişim',
      content: (
        <p className="text-muted leading-relaxed">
          Sorularınız, önerileriniz veya veri silme talepleriniz için:{' '}
          <a href="mailto:info@appmypet.com" className="text-primary font-semibold hover:underline">info@appmypet.com</a>
        </p>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="privacy"
      className="py-24 bg-white"
    >
      <div className="max-w-container mx-auto px-6">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl">🔒</div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Gizlilik</p>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-foreground tracking-tight mb-4">
            Gizlilik Politikası
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted">Son Güncelleme: 09 Ekim 2025</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-light" />
              Güncel
            </span>
          </div>
          <p className="mt-6 text-muted leading-relaxed max-w-2xl">
            MyPet olarak, kullanıcılarımızın gizliliğine büyük önem veriyoruz. Bu politika, hangi bilgileri topladığımızı, nasıl kullandığımızı ve koruduğumuzu açıklar.
          </p>
        </div>

        {/* Sections grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {sections.map((sec, i) => (
            <div
              key={sec.number}
              className={`bg-background rounded-card p-7 border border-foreground/8 feature-card transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display text-3xl font-semibold text-primary/20">{sec.number}</span>
                <h3 className="font-semibold text-foreground text-lg">{sec.title}</h3>
              </div>
              <div className="text-sm">{sec.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;