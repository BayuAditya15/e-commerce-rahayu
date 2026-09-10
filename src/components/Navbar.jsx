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

            {/* Instagram Link CTA */}
            <a
              href="https://www.instagram.com/anekakuerahayu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-full bg-[#faf2ee] hover:bg-[#f4ece8] text-[#e1306c] font-bold text-xs sm:text-sm active:scale-95 transition-all border border-[#eee7e3]"
              title="Ikuti Instagram @anekakuerahayu"
              aria-label="Instagram Aneka Kue Rahayu"
            >
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="hidden md:inline">@anekakuerahayu</span>
            </a>

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
              
              {/* Instagram link inside mobile nav */}
              <a
                href="https://www.instagram.com/anekakuerahayu"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[#e1306c] hover:bg-[#faf2ee] transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4.5 h-4.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram @anekakuerahayu</span>
                </div>
                <span className="material-symbols-outlined text-[18px] text-[#8e7166]">open_in_new</span>
              </a>
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
