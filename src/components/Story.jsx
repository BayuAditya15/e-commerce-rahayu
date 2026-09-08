import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Story() {
  const [sectionRef, isVisible] = useScrollReveal();

  const pillars = [
    {
      icon: "menu_book",
      title: "Resep Asli Warisan",
      desc: "Dirajut dari resep olahan ubi dan camilan keluarga tanpa bahan pemanis buatan atau pengawet kimiawi."
    },
    {
      icon: "oil_barrel",
      title: "Minyak Pilihan 1x Pakai",
      desc: "Hanya memakai minyak nabati kemasan bermerk yang rutin diganti fresh setiap batch demi kerenyahan sehat."
    },
    {
      icon: "wb_twilight",
      title: "Digoreng Fresh Subuh Hari",
      desc: "Setiap bungkus camilan diproduksi di pagi hari agar cita rasa gurih dan kriuknya sampai maksimal di tangan Anda."
    }
  ];

  return (
    <section
      id="kisah-kami"
      ref={sectionRef}
      className={`w-full py-12 sm:py-16 bg-[#faf2ee] border-y border-[#f4ece8] reveal-smooth ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Column 1: Visual Image (Top on mobile, Left on desktop) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#eee7e3] bg-white p-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/images/products/kitchen.jpg"
                  alt="Dapur Aneka Kue Rahayu - Warisan Rasa Tradisional"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-bold drop-shadow">Dapur Warisan Rahayu</p>
                  <p className="text-xs text-white/90 drop-shadow">Tradisi rasa rumahan otentik sejak hari pertama</p>
                </div>
              </div>

              {/* Kitchen summary note below image */}
              <div className="p-4 flex items-center gap-3 bg-[#fff8f5] rounded-xl mt-2">
                <div className="w-10 h-10 rounded-lg bg-[#ffdbce] text-[#a33900] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[22px]">favorite</span>
                </div>
                <p className="text-xs text-[#5a4138] leading-relaxed">
                  Setiap butir sistik, kremes, dan keripik kami racik dengan ketelitian dan sentuhan kasih dari dapur keluarga.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Story Text & 3 Pillars (Bottom on mobile, Right on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#a33900]">
                Kisah &amp; Filosofi Dapur
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1e1b19] tracking-tight mt-1 leading-tight">
                Dari Resep Dapur Keluarga, Terjaga Hingga ke Tangan Anda
              </h2>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#5a4138] leading-relaxed">
              <p>
                Berawal dari kegemaran keluarga berkumpul menikmati kudapan sore hari, <strong>Aneka Kue Rahayu</strong> lahir dengan satu niat sederhana: menghadirkan kembali sensasi renyah dan gurihnya camilan tradisional olahan ubi pilihan yang asli dan bersih.
              </p>
              <p>
                Di tengah maraknya camilan berpengawet, kami memilih tetap setia pada cara tradisional—memilih bahan ubi segar terbaik, mengolah adonan tangan segar setiap pagi, serta menggoreng dengan minyak bermerk yang selalu baru.
              </p>
            </div>

            {/* 3 Pillars List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-[#f4ece8] shadow-2xs space-y-2 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#ffdbce] text-[#a33900] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">
                      {pillar.icon}
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#1e1b19]">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#5a4138] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
