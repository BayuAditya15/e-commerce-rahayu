import React from 'react';

export default function Hero() {
  const trustPoints = [
    {
      icon: "verified_user",
      iconColor: "text-[#ffb599]",
      subtitle: "Mutu Terjamin",
      title: "Higienis & Halal"
    },
    {
      icon: "alarm_on",
      iconColor: "text-[#ffdf9f]",
      subtitle: "Kualitas Crispy",
      title: "Renyah 2-3 Bln"
    },
    {
      icon: "local_shipping",
      iconColor: "text-[#4ade80]",
      subtitle: "Same-Day",
      title: "Cirebon-Kuningan"
    },
    {
      icon: "inventory_2",
      iconColor: "text-[#ffdbd0]",
      subtitle: "Aman Luar Kota",
      title: "Paxel Ekspedisi"
    }
  ];

  return (
    <section className="relative w-full overflow-hidden min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] flex items-center bg-[#1e1b19]">
      
      {/* Background Image */}
      <img
        src="/images/products/hero.jpg"
        alt="Aneka Camilan Renyah Tradisional Nusantara"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />

      {/* Warm Dark Vignette Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e1b19]/95 via-[#1e1b19]/85 to-[#1e1b19]/45 sm:to-[#1e1b19]/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b19]/95 via-transparent to-[#1e1b19]/65" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="max-w-2xl space-y-5 sm:space-y-6">
          
          {/* Top Tagline Header */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#ffdbce]">
            <span className="material-symbols-outlined text-[18px] text-[#ffb599] fill">verified</span>
            <span>100% Homemade • Resep Otentik Dapur Nusantara</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18]">
            Nostalgia Rasa Ruang Tengah
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#f4ece8] leading-relaxed max-w-xl">
            Kriuk autentik teman ngeteh dan ngopi paling pas. Dibuat dengan resep warisan, digoreng segar setiap pagi dengan minyak nabati berkualitas, dan dikemas kedap udara anti-remuk.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <a
              href="#katalog-grid"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#a33900] text-white font-bold text-sm sm:text-base shadow-lg hover:bg-[#cc4900] active:scale-95 transition-all text-center"
            >
              <span>Lihat Menu Favorit</span>
              <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
            </a>

            <a
              href="https://wa.me/6283873688118?text=Halo%20Admin%20Aneka%20Kue%20Rahayu,%20saya%20mau%20order%20camilan%20favorit..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#1e1b19]/60 hover:bg-[#1e1b19]/80 backdrop-blur-md text-white border border-[#e2bfb2]/30 font-bold text-sm sm:text-base shadow-md active:scale-95 transition-all text-center"
            >
              <span className="material-symbols-outlined text-[22px] text-[#25D366]">chat</span>
              <span>Pesan via WhatsApp Langsung</span>
            </a>
          </div>

          {/* Rating Indicator Bar */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e1b19]/75 backdrop-blur-md border border-[#ffdbce]/20 text-xs text-[#fff8f5]">
            <span className="material-symbols-outlined text-[#ffc329] text-[18px] fill">star</span>
            <strong>4.9 / 5.0</strong>
            <span className="text-[#e2bfb2]">•</span>
            <span className="text-[#f4ece8]">1.200+ Ulasan Pelanggan Puas</span>
          </div>

          {/* 4 Warm Dark Glassmorphism Trust Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3">
            {trustPoints.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[#1e1b19]/75 backdrop-blur-md border border-[#e2bfb2]/20 text-white shadow-md hover:bg-[#1e1b19]/90 hover:border-[#ffdbce]/40 transition-all duration-200"
              >
                <span className={`material-symbols-outlined ${item.iconColor} text-[22px] shrink-0`}>
                  {item.icon}
                </span>
                <div className="flex flex-col min-w-0">
                  <div className="text-[10px] text-[#e2bfb2] leading-tight truncate">
                    {item.subtitle}
                  </div>
                  <div className="text-xs font-bold text-white leading-tight truncate">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
