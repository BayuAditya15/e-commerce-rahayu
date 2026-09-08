import React from 'react';

export default function Footer() {
  const deliveryBadges = [
    "GrabExpress Instant",
    "GoSend Sameday",
    "Paxel Pendingin Nextday"
  ];

  const paymentMethods = [
    "QRIS (Semua E-Wallet)",
    "BCA Virtual Account",
    "Mandiri Livin",
    "BRImo"
  ];

  return (
    <footer className="w-full bg-[#faf2ee] text-[#1e1b19] pt-12 sm:pt-16 pb-10 border-t border-[#f4ece8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-12">
          
          {/* Column 1: Brand & Kitchen Address */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#a33900] flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[20px]">bakery_dining</span>
              </div>
              <span className="text-lg font-bold text-[#a33900]">Aneka Kue Rahayu</span>
            </div>
            <p className="text-xs sm:text-sm text-[#5a4138] leading-relaxed">
              Melestarikan kehangatan cita rasa autentik Nusantara melalui jajanan pasar dan camilan renyah buatan tangan, diproduksi segar setiap subuh tanpa bahan pengawet.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#5a4138]">
              <span className="material-symbols-outlined text-[#a33900] text-[18px]">store</span>
              <span>Blok Parenca, Desa Ciawigajah, Beber, Cirebon 45172</span>
            </div>
          </div>

          {/* Column 2: Delivery Services */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-[#1e1b19]">
              Layanan Pengiriman
            </h3>
            <p className="text-xs sm:text-sm text-[#5a4138]">
              Snack dikemas aman menggunakan kemasan tebal kedap udara, besek bambu, dan bubble wrap ekstra.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {deliveryBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white border border-[#f4ece8] text-xs font-semibold text-[#1e1b19] shadow-xs"
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Pre-Order Terms */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-[#1e1b19]">
              Ketentuan Pre-Order
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-[#5a4138]">
              <li>• Pesanan reguler siap kirim pkl 07.00 - 15.00 WIB.</li>
              <li>• Pesanan Kue Tampah &amp; Besek Besar: H-1 sebelum 18.00 WIB.</li>
              <li>• Tersedia tester pack khusus event &amp; wedding gathering.</li>
            </ul>
          </div>

          {/* Column 4: Payment Methods */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-[#1e1b19]">
              Metode Pembayaran
            </h3>
            <p className="text-xs sm:text-sm text-[#5a4138]">
              Menerima transaksi instan, aman, dan terverifikasi otomatis.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {paymentMethods.map((method, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white border border-[#f4ece8] text-xs font-semibold text-[#1e1b19] shadow-xs"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Footer Links */}
        <div className="pt-6 border-t border-[#f4ece8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5a4138]">
          <p>© {new Date().getFullYear()} Aneka Kue Rahayu. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-4 sm:gap-6 font-semibold">
            <a href="#katalog-grid" className="hover:text-[#a33900] transition-colors">Katalog</a>
            <a href="#cara-pesan" className="hover:text-[#a33900] transition-colors">Cara Pesan</a>
            <a href="#pengiriman" className="hover:text-[#a33900] transition-colors">Pengiriman</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
