import React, { useState, useEffect, useRef } from 'react';

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isWidgetVisible, setIsWidgetVisible] = useState(true);

  // Draggable floating button states
  const [position, setPosition] = useState(null);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ startX: 0, startY: 0, buttonX: 0, buttonY: 0 });
  const hasMovedRef = useRef(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Show promo modal immediately upon opening the website
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 350);
    return () => clearTimeout(timer);
  }, []);

  // Initialize button position on mount with mobile safe-areas
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth < 640;
      const initialX = isMobile ? 16 : 24;
      // Position safely above the bottom cart bar (70-90px bar + safe margin)
      const initialY = window.innerHeight - (isMobile ? 150 : 90);
      setPosition({ x: initialX, y: initialY });

      const handleResize = () => {
        setPosition((prev) => {
          if (!prev) return prev;
          const rect = buttonRef.current?.getBoundingClientRect();
          const width = rect?.width || 56;
          const height = rect?.height || 56;
          const isMob = window.innerWidth < 640;
          const minX = 16;
          const maxX = window.innerWidth - width - 16;
          const minY = 80; // Below navbar
          const maxY = window.innerHeight - height - (isMob ? 100 : 30); // Above bottom bar
          return {
            x: Math.min(Math.max(minX, prev.x), Math.max(minX, maxX)),
            y: Math.min(Math.max(minY, prev.y), Math.max(minY, maxY)),
          };
        });
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Pointer drag start
  const handlePointerDown = (clientX, clientY) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    dragStartRef.current = {
      startX: clientX,
      startY: clientY,
      buttonX: rect.left,
      buttonY: rect.top,
    };
  };

  // Pointer drag move with boundary clamping
  const handlePointerMove = (clientX, clientY) => {
    if (!isDraggingRef.current || !buttonRef.current) return;

    const deltaX = clientX - dragStartRef.current.startX;
    const deltaY = clientY - dragStartRef.current.startY;

    if (Math.hypot(deltaX, deltaY) > 5) {
      hasMovedRef.current = true;
    }

    if (hasMovedRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const isMobile = window.innerWidth < 640;
      const minX = 16;
      const maxX = window.innerWidth - rect.width - 16;
      const minY = 80;
      const maxY = window.innerHeight - rect.height - (isMobile ? 100 : 30);

      const newX = Math.min(Math.max(minX, dragStartRef.current.buttonX + deltaX), maxX);
      const newY = Math.min(Math.max(minY, dragStartRef.current.buttonY + deltaY), maxY);

      setPosition({ x: newX, y: newY });
    }
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  // Mouse event listeners for desktop
  const onMouseDown = (e) => {
    if (e.button !== 0) return; // Left click only
    handlePointerDown(e.clientX, e.clientY);

    const onMouseMove = (moveEvent) => {
      handlePointerMove(moveEvent.clientX, moveEvent.clientY);
    };

    const onMouseUp = () => {
      handlePointerUp();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  // Touch event listeners for mobile / tablet
  const onTouchStart = (e) => {
    const touch = e.touches[0];
    handlePointerDown(touch.clientX, touch.clientY);

    const onTouchMove = (moveEvent) => {
      const moveTouch = moveEvent.touches[0];
      handlePointerMove(moveTouch.clientX, moveTouch.clientY);
    };

    const onTouchEnd = () => {
      handlePointerUp();
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };

    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
  };

  const handleButtonClick = () => {
    // Only open if it was a tap/click, not a drag
    if (!hasMovedRef.current) {
      setIsOpen(true);
    }
  };

  const handleClaim = () => {
    setIsOpen(false);
    const catalogElement = document.getElementById('katalog-grid') || document.getElementById('katalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Draggable Floating Promo Widget Icon with Close [X] */}
      {isWidgetVisible && (
        <div
          ref={buttonRef}
          style={
            position
              ? {
                  position: 'fixed',
                  left: `${position.x}px`,
                  top: `${position.y}px`,
                  zIndex: 35,
                  touchAction: 'none',
                }
              : undefined
          }
          className={
            !position
              ? 'fixed bottom-28 sm:bottom-6 left-4 sm:left-6 z-35'
              : ''
          }
        >
          <div className="relative select-none p-1">
            {/* Draggable Circular Icon Button */}
            <button
              type="button"
              onMouseDown={onMouseDown}
              onTouchStart={onTouchStart}
              onClick={handleButtonClick}
              className="group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#a33900] to-[#cc4900] text-white shadow-2xl border-2 border-[#ffdf9f] flex items-center justify-center active:scale-95 transition-transform duration-150 cursor-grab active:cursor-grabbing"
              aria-label="Buka Promo Diskon Website (Bisa digeser)"
              title="Promo Diskon Website (Klik untuk buka, geser untuk pindah posisi)"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#ffdf9f] text-[#a33900] flex items-center justify-center shadow-xs group-hover:rotate-12 group-hover:scale-105 transition-transform pointer-events-none">
                <span className="material-symbols-outlined text-[20px] sm:text-[22px]">redeem</span>
              </div>
            </button>

            {/* Floating Close Button [X] Badge */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsWidgetVisible(false);
              }}
              className="absolute top-0 right-0 w-5 h-5 sm:w-5.5 sm:h-5.5 rounded-full bg-[#1e1b19] hover:bg-[#ba1a1a] text-white flex items-center justify-center border border-white/80 shadow-md transition-colors cursor-pointer"
              title="Tutup / Sembunyikan ikon promo ini"
              aria-label="Tutup ikon promo"
            >
              <span className="material-symbols-outlined text-[13px]">close</span>
            </button>
          </div>
        </div>
      )}

      {/* Promo Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          
          {/* Backdrop click to close */}
          <div
            className="fixed inset-0"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Modal Card Content (Mobile Optimized Max-Height & Scroll) */}
          <div className="relative w-full max-w-md max-h-[90vh] flex flex-col rounded-3xl bg-[#fff8f5] border border-[#f4ece8] shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-200">
            
            {/* Header with decorative background */}
            <div className="relative p-5 sm:p-6 bg-gradient-to-br from-[#a33900] to-[#cc4900] text-white text-center space-y-1.5 shrink-0">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Tutup modal promo"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>

              <div className="w-11 h-11 sm:w-12 sm:h-12 mx-auto rounded-2xl bg-[#ffdf9f] text-[#a33900] flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-[26px] sm:text-[28px]">redeem</span>
              </div>

              <div>
                <p className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#ffdf9f]">
                  Spesial Pemesanan Website
                </p>
                <h3 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight mt-0.5">
                  Kejutan Diskon Aneka Kue Rahayu
                </h3>
              </div>
            </div>

            {/* Body Info (Scrollable if screen is very small) */}
            <div className="p-4 sm:p-6 space-y-3.5 sm:space-y-4 overflow-y-auto">
              <p className="text-xs sm:text-sm text-[#5a4138] text-center leading-relaxed">
                Nikmati promo diskon langsung tanpa ribet untuk setiap pembelian aneka camilan renyah melalui website:
              </p>

              {/* Promo Tier Cards */}
              <div className="space-y-2 sm:space-y-2.5">
                {/* Tier 1 */}
                <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#faf2ee] border border-[#eee7e3]">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#ffdf9f] text-[#a33900] font-extrabold text-[11px] sm:text-xs flex items-center justify-center shrink-0 shadow-xs">
                    5 RB
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-[#1e1b19]">
                      Diskon Langsung Rp 5.000
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-[#5a4138]">
                      Minimal pembelanjaan <strong>Rp 75.000</strong>
                    </div>
                  </div>
                </div>

                {/* Tier 2 */}
                <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-2xl bg-[#ffdf9f]/25 border border-[#ffdf9f]/60">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#a33900] text-[#ffdf9f] font-extrabold text-[11px] sm:text-xs flex items-center justify-center shrink-0 shadow-xs">
                    15 RB
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm font-bold text-[#a33900]">
                      Diskon Rp 15.000 + Bonus Sample
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-[#5a4138]">
                      Minimal pembelanjaan <strong>Rp 150.000</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#fff8f5] border border-[#f4ece8] text-[#8e7166] text-[10px] sm:text-[11px]">
                <span className="material-symbols-outlined text-[16px] text-[#a33900] shrink-0">check_circle</span>
                <span>Otomatis terpotong di keranjang &amp; draft WhatsApp tanpa kode voucher.</span>
              </div>

              {/* Action Button */}
              <div className="pt-1 sm:pt-2 space-y-2">
                <button
                  type="button"
                  onClick={handleClaim}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-full bg-[#a33900] text-white font-bold text-xs sm:text-sm hover:bg-[#cc4900] active:scale-95 shadow-md transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px]">shopping_bag</span>
                  <span>Klaim Promo &amp; Pilih Camilan</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center text-xs text-[#8e7166] hover:text-[#1e1b19] font-medium py-1 transition-colors cursor-pointer"
                >
                  Tutup / Nanti Saja
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
