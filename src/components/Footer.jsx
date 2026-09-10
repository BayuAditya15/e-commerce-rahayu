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
              Usaha mikro rumahan (UMKM) penyedia olahan ubi jalar manis dan aneka camilan renyah khas Cirebon. Dibuat bersih dan segar setiap hari tanpa bahan pengawet.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#5a4138]">
              <span className="material-symbols-outlined text-[#a33900] text-[18px]">store</span>
              <span>Blok Parenca, Desa Ciawigajah, Beber, Cirebon 45172</span>
            </div>
            <div className="pt-1">
              <a
                href="https://www.instagram.com/anekakuerahayu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white hover:bg-[#fff8f5] border border-[#f4ece8] text-xs font-semibold text-[#e1306c] hover:border-[#e1306c]/40 transition-all shadow-2xs group"
              >
                <svg className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram: @anekakuerahayu</span>
              </a>
            </div>
          </div>

          {/* Column 2: Delivery Services */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-bold text-[#1e1b19]">
              Layanan Pengiriman
            </h3>
            <p className="text-xs sm:text-sm text-[#5a4138]">
              Snack dikemas aman menggunakan kemasan tebal tersegel rapat, kardus, dan bubble wrap ekstra untuk luar kota.
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
