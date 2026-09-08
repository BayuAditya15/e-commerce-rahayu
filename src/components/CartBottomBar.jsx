import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartBottomBar() {
  const { totalItems, finalPrice, subtotalPrice, discountAmount, setIsCartOpen } = useCart();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-2.5 sm:p-4 bg-white/95 backdrop-blur-md border-t border-[#f4ece8] shadow-[0_-8px_24px_rgba(124,45,18,0.12)] animate-in slide-in-from-bottom duration-300">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2.5 sm:gap-4">
        
        {/* Left summary info (Mobile Optimized) */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#ffdbce] text-[#a33900] flex items-center justify-center font-extrabold text-xs sm:text-sm shadow-xs shrink-0">
            {totalItems}
          </div>
          
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-[#5a4138] font-semibold leading-tight truncate">
              <span>Total ({totalItems}):</span>
              {discountAmount > 0 && (
                <span className="text-[#a33900] font-bold">
                  (Hemat Rp {discountAmount.toLocaleString('id-ID')})
                </span>
              )}
            </div>
            
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="text-sm sm:text-lg font-extrabold text-[#a33900] leading-tight whitespace-nowrap">
                Rp {finalPrice.toLocaleString('id-ID')}
              </span>
              {discountAmount > 0 && (
                <span className="text-[10px] sm:text-xs text-[#8e7166] line-through whitespace-nowrap">
                  Rp {subtotalPrice.toLocaleString('id-ID')}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right CTA button (Clean Mobile First) */}
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#25D366] text-white font-bold text-xs sm:text-sm hover:bg-[#20bd5a] active:scale-95 shadow-md transition-all cursor-pointer shrink-0 whitespace-nowrap"
          aria-label="Buka Keranjang Pesanan"
        >
          <span className="material-symbols-outlined text-[18px] sm:text-[20px]">shopping_bag</span>
          <span className="sm:hidden">Checkout</span>
          <span className="hidden sm:inline">Lihat Pesanan &amp; Checkout</span>
        </button>

      </div>
    </div>
  );
}
