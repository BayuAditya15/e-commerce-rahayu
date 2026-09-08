import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function OrderGuide() {
  const [sectionRef, isVisible] = useScrollReveal();

  const steps = [
    {
      num: "1",
      title: "Pilih Camilan",
      desc: "Tentukan snack dan varian berat favorit Anda di katalog."
    },
    {
      num: "2",
      title: "Klik Pesan WA",
      desc: "Rincian snack & potongan diskon promo website otomatis terisi di chat WA."
    },
    {
      num: "3",
      title: "Kirim Cepat",
      desc: "Admin konfirmasi ongkir & pesanan langsung dipacking aman!"
    }
  ];

  return (
    <section
      id="cara-pesan"
      ref={sectionRef}
      className={`w-full py-12 sm:py-16 bg-[#fff8f5] reveal-smooth ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#a33900] to-[#cc4900] text-white p-6 sm:p-10 lg:p-12 shadow-xl">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: 3 Steps */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/90">
                <span className="material-symbols-outlined text-[18px]">touch_app</span>
                <span>Cara Pesan Mudah Tanpa Ribet</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Pesan Langsung ke WhatsApp Dapur Kami
              </h2>

              {/* 3 Step Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {steps.map((step) => (
                  <div
                    key={step.num}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 space-y-1.5"
                  >
                    <div className="w-7 h-7 rounded-full bg-white text-[#a33900] font-extrabold text-xs flex items-center justify-center shadow-xs">
                      {step.num}
                    </div>
                    <div className="text-sm font-bold text-white">{step.title}</div>
                    <div className="text-xs text-white/80 leading-relaxed">{step.desc}</div>
                  </div>
                ))}
              </div>

              {/* Delivery Note */}
              <div id="pengiriman" className="flex items-center gap-2 text-white/90 text-xs sm:text-sm pt-2">
                <span className="material-symbols-outlined text-[20px] text-[#ffdf9f] shrink-0">
                  two_wheeler
                </span>
                <span>
                  <strong>Pengiriman Cepat:</strong> GoSend / Grab Same-day (Cirebon - Kuningan) • Paxel / JNE Yes (Luar Kota)
                </span>
              </div>
            </div>

            {/* Right Column: Fast WA Admin Contact Card */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
              <div className="bg-white text-[#1e1b19] p-6 sm:p-7 rounded-2xl shadow-xl w-full max-w-sm text-center space-y-4">
                <div className="flex items-center justify-center gap-2 text-[#15803d]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#15803d] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Admin Online • Respon Cepat
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#5a4138]">
                  Butuh tanya porsi arisan, request hampers besek, atau rekomendasi jajanan? Silakan langsung hubungi kami:
                </p>

                <a
                  href="https://wa.me/6283873688118?text=Halo%20Admin%20Aneka%20Kue%20Rahayu,%20saya%20mau%20konsultasi%20pesanan%20camilan..."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-sm sm:text-base hover:bg-[#20bd5a] shadow-md active:scale-95 transition-all"
                >
                  <span className="material-symbols-outlined text-[22px]">chat</span>
                  <span>Chat WhatsApp Admin</span>
                </a>

                <p className="text-[11px] text-[#8e7166]">
                  Buka setiap hari 07.00 - 21.00 WIB
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
