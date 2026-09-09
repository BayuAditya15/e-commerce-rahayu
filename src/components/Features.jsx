import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Features() {
  const [sectionRef, isVisible] = useScrollReveal();

  const features = [
    {
      icon: "spa",
      iconBg: "bg-[#ffdbce]",
      iconColor: "text-[#a33900]",
      title: "Bahan Alami & Bersih",
      description: "Tanpa bahan pengawet kimiawi. Kami mengolah ubi jalar segar dan menggorengnya memakai minyak nabati kemasan bermerk yang rutin diganti."
    },
    {
      icon: "shield",
      iconBg: "bg-[#ffdf9f]",
      iconColor: "text-[#795900]",
      title: "Kemasan Rapat & Aman",
      description: "Dikemas memakai plastik tebal tersegel rapat agar tetap renyah. Pengiriman luar kota dipacking rapi memakai kardus dan bubble wrap."
    },
    {
      icon: "shopping_bag",
      iconBg: "bg-[#ffdbd0]",
      iconColor: "text-[#984225]",
      title: "Melayani Eceran & Partai",
      description: "Bisa pesan mulai kemasan eceran untuk santai di rumah, hingga pesanan dalam jumlah banyak untuk arisan, pengajian, hajatan, dan oleh-oleh."
    }
  ];

  return (
    <section
      id="keunggulan"
      ref={sectionRef}
      className={`w-full bg-[#faf2ee] py-12 sm:py-16 reveal-smooth ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
          <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#a33900]">
            Keunggulan Produk
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e1b19]">
            Kenapa Memilih Camilan Rahayu?
          </h2>
          <p className="text-xs sm:text-sm text-[#5a4138]">
            Olahan rumahan sederhana yang dibuat dengan bahan ubi jalar pilihan, proses bersih, dan kerenyahan yang pas.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-white border border-[#f4ece8] shadow-sm hover:-translate-y-1.5 hover:shadow-md transition-all duration-300"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${item.iconBg} flex items-center justify-center ${item.iconColor} mb-4 sm:mb-5 shadow-xs`}>
                <span className="material-symbols-outlined text-[28px] sm:text-[32px]">
                  {item.icon}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1e1b19] mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5a4138] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
