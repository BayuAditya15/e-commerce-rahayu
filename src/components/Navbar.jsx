import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  const navLinks = [
    { label: "Katalog", href: "#katalog-grid" },
    { label: "Kisah Kami", href: "#kisah-kami" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Cara Pesan", href: "#cara-pesan" },
    { label: "Pengiriman", href: "#pengiriman" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 w-full z-40 bg-[#ffffff]/90 backdrop-blur-md border-b border-[#faf2ee] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="h-16 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 active:scale-95 transition-transform shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#a33900] flex items-center justify-center text-white shadow-md">
              <span className="material-symbols-outlined text-[22px] sm:text-[24px]">bakery_dining</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-xl tracking-tight text-[#a33900] leading-none">
                Aneka Kue Rahayu
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Large Screens 1024px+) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 rounded-full text-sm font-semibold text-[#5a4138] hover:text-[#1e1b19] hover:bg-[#faf2ee] transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Cart Button */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-[#faf2ee] hover:bg-[#f4ece8] text-[#a33900] font-bold text-xs sm:text-sm active:scale-95 transition-all cursor-pointer border border-[#eee7e3]"
              aria-label="Buka Keranjang Pesanan"
            >
              <span className="material-symbols-outlined text-[18px] sm:text-[20px]">shopping_bag</span>
              <span className="hidden sm:inline">Pesanan:</span>
              <div className="w-5 h-5 rounded-full bg-[#a33900] text-white text-[11px] font-bold flex items-center justify-center">
                {totalItems}
              </div>
            </button>

            {/* Direct WhatsApp CTA */}
            <a
              href="https://wa.me/6283873688118?text=Halo%20Admin%20Aneka%20Kue%20Rahayu,%20saya%20ingin%20tanya-tanya%20dulu..."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-[#25D366] text-white font-semibold text-xs sm:text-sm shadow-sm hover:bg-[#20bd5a] active:scale-95 transition-all whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Chat WA</span>
            </a>

            {/* Tablet & Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#5a4138] hover:bg-[#faf2ee] active:scale-95 transition-all cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[24px] sm:text-[26px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Tablet & Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#faf2ee] animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[#5a4138] hover:text-[#a33900] hover:bg-[#faf2ee] transition-all flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-[18px] text-[#8e7166]">chevron_right</span>
                </a>
              ))}
            </nav>
            <div className="mt-3 pt-3 border-t border-[#faf2ee] px-4 flex items-center justify-between text-xs text-[#5a4138]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#795900]">location_on</span>
                <span>Dapur: Blok Parenca, Desa Ciawigajah, Beber, Cirebon</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
