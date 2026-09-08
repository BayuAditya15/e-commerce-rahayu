import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    itemsList,
    totalItems,
    totalPrice,
    subtotalPrice,
    promoInfo,
    discountAmount,
    finalPrice,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');

  if (!isCartOpen) return null;

  const handleCheckoutWhatsApp = () => {
    if (itemsList.length === 0) return;

    let itemsText = itemsList
      .map((item, idx) => {
        const itemSubtotal = item.variant.price * item.quantity;
        return `${idx + 1}. ${item.product.shortName} (${item.variant.weight}) x ${item.quantity} = Rp ${itemSubtotal.toLocaleString('id-ID')}`;
      })
      .join('\n');

    let message = `Halo Admin Aneka Kue Rahayu, saya ingin memesan camilan dari website:\n\n${itemsText}\n\n--------------------------------\nSubtotal: Rp ${subtotalPrice.toLocaleString('id-ID')}`;

    if (discountAmount > 0) {
      message += `\n🎁 Diskon Promo Website (${promoInfo.promoLabel}): -Rp ${discountAmount.toLocaleString('id-ID')}`;
    }

    message += `\n*Total Pembayaran: Rp ${finalPrice.toLocaleString('id-ID')}*`;

    if (customerName.trim()) {
      message += `\n\nNama Pemesan: ${customerName.trim()}`;
    }
    if (customerAddress.trim()) {
      message += `\nAlamat Kirim: ${customerAddress.trim()}`;
    }
    if (customerNotes.trim()) {
      message += `\nCatatan: ${customerNotes.trim()}`;
    }

    message += `\n\nMohon konfirmasi pesanan dan total ongkos kirimnya ya admin, terima kasih!`;

    const waUrl = `https://wa.me/6283873688118?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      
      {/* Backdrop click to close */}
      <div
        className="fixed inset-0"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div className="relative z-10 w-full max-w-md bg-white h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#faf2ee] bg-[#fff8f5]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#a33900] flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
            </div>
            <div>
              <h2 className="text-base font-bold text-[#1e1b19] leading-tight">
                Keranjang Pesanan
              </h2>
              <p className="text-xs text-[#5a4138]">
                {totalItems} item dipilih
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-lg text-[#5a4138] hover:bg-[#faf2ee] hover:text-[#1e1b19] transition-all cursor-pointer"
            aria-label="Tutup keranjang"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {itemsList.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#faf2ee] flex items-center justify-center text-[#8e7166]">
                <span className="material-symbols-outlined text-[36px]">remove_shopping_cart</span>
              </div>
              <h3 className="text-base font-bold text-[#1e1b19]">
                Keranjang Masih Kosong
              </h3>
              <p className="text-xs text-[#5a4138] max-w-xs mx-auto">
                Yuk pilih aneka camilan renyah favoritmu dari katalog dan klik tombol tambah!
              </p>
              <a
                href="#katalog-grid"
                onClick={() => setIsCartOpen(false)}
                className="mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#a33900] text-white text-xs font-bold hover:bg-[#cc4900] transition-all cursor-pointer"
              >
                Mulai Belanja
              </a>
            </div>
          ) : (
            <>
              {/* Promo Progress Card */}
              <div className="p-3.5 rounded-2xl bg-[#ffdf9f]/30 border border-[#ffdf9f] space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#a33900] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <span className="material-symbols-outlined text-[18px]">
                      {promoInfo.activeTier === 2 ? 'stars' : 'local_offer'}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-[#1e1b19] flex-1">
                    {promoInfo.activeTier === 2 ? (
                      <p className="text-[#a33900]">🎉 Selamat! Anda Mendapat Diskon Maksimal Rp 15.000 + Bonus Sample Camilan!</p>
                    ) : promoInfo.activeTier === 1 ? (
                      <div>
                        <p className="text-[#a33900]">🎉 Diskon Rp 5.000 Aktif!</p>
                        {promoInfo.nextTier && (
                          <p className="text-[11px] font-medium text-[#5a4138] mt-0.5">
                            Tambah <strong>Rp {promoInfo.nextTier.neededAmount.toLocaleString('id-ID')}</strong> lagi untuk dapat <strong>Diskon Rp 15.000 + Bonus!</strong>
                          </p>
                        )}
                      </div>
                    ) : (
                      <div>
                        <p>Beli lagi <strong>Rp {promoInfo.nextTier?.neededAmount.toLocaleString('id-ID')}</strong></p>
                        <p className="text-[11px] font-medium text-[#5a4138] mt-0.5">
                          Untuk dapat <strong>Diskon Spesial Rp 5.000</strong>
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-[#f4ece8] overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-[#795900] to-[#a33900] rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${promoInfo.progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Item Cards */}
              <div className="space-y-3">
                {itemsList.map((item) => {
                  const subtotal = item.variant.price * item.quantity;
                  return (
                    <div
                      key={item.key}
                      className="flex items-center gap-3 p-3 rounded-xl border border-[#f4ece8] bg-[#fff8f5] shadow-2xs"
                    >
                      {/* Product Image */}
                      <img
                        src={item.product.image}
                        alt={item.product.shortName}
                        className="w-16 h-16 rounded-lg object-cover bg-white shrink-0 border border-[#eee7e3]"
                      />

                      {/* Info & Price */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="text-sm font-bold text-[#1e1b19] truncate">
                            {item.product.shortName}
                          </h4>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.key)}
                            className="text-[#8e7166] hover:text-[#ba1a1a] p-0.5 cursor-pointer"
                            title="Hapus"
                          >
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </div>

                        <p className="text-xs text-[#5a4138]">
                          Kemasan: <strong>{item.variant.weight}</strong> • Rp {item.variant.price.toLocaleString('id-ID')}
                        </p>

                        <div className="flex items-center justify-between mt-2">
                          {/* Stepper buttons */}
                          <div className="flex items-center border border-[#e2bfb2] rounded-lg bg-white overflow-hidden">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.key, item.quantity - 1)}
                              className="px-2.5 py-0.5 text-sm font-bold text-[#a33900] hover:bg-[#faf2ee] active:bg-[#ffdbce] transition-colors cursor-pointer"
                              aria-label="Kurangi kuantitas"
                            >
                              -
                            </button>
                            <div className="px-3 py-0.5 text-xs font-bold text-[#1e1b19] bg-white">
                              {item.quantity}
                            </div>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.key, item.quantity + 1)}
                              className="px-2.5 py-0.5 text-sm font-bold text-[#a33900] hover:bg-[#faf2ee] active:bg-[#ffdbce] transition-colors cursor-pointer"
                              aria-label="Tambah kuantitas"
                            >
                              +
                            </button>
                          </div>

                          <div className="text-sm font-extrabold text-[#a33900]">
                            Rp {subtotal.toLocaleString('id-ID')}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Clear Cart Link */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs text-[#ba1a1a] hover:underline cursor-pointer font-semibold"
                >
                  Kosongkan Keranjang
                </button>
              </div>

              {/* Customer Info Form (Optional for direct WA draft) */}
              <div className="pt-2 border-t border-[#faf2ee] space-y-3">
                <h3 className="text-xs font-bold text-[#5a4138] uppercase tracking-wider">
                  Informasi Tambahan (Opsional)
                </h3>

                <div>
                  <label className="block text-xs font-semibold text-[#1e1b19] mb-1">
                    Nama Pemesan
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Contoh: Ibu Rina"
                    className="w-full text-xs px-3 py-2 rounded-lg border border-[#eee7e3] bg-white focus:outline-none focus:border-[#a33900]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1e1b19] mb-1">
                    Alamat Pengiriman
                  </label>
                  <input
                    type="text"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="Contoh: Jl. Fatmawati No. 12, Jaksel"
                    className="w-full text-xs px-3 py-2 rounded-lg border border-[#eee7e3] bg-white focus:outline-none focus:border-[#a33900]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1e1b19] mb-1">
                    Catatan Khusus
                  </label>
                  <input
                    type="text"
                    value={customerNotes}
                    onChange={(e) => setCustomerNotes(e.target.value)}
                    placeholder="Contoh: Kirim sebelum pkl 12 siang ya"
                    className="w-full text-xs px-3 py-2 rounded-lg border border-[#eee7e3] bg-white focus:outline-none focus:border-[#a33900]"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Checkout */}
        {itemsList.length > 0 && (
          <div className="p-5 border-t border-[#faf2ee] bg-[#fff8f5] space-y-3">
            {/* Price Breakdown */}
            <div className="space-y-1.5 text-xs text-[#5a4138]">
              <div className="flex items-center justify-between">
                <span>Subtotal ({totalItems} item):</span>
                <span className="font-semibold text-[#1e1b19]">
                  Rp {subtotalPrice.toLocaleString('id-ID')}
                </span>
              </div>

              {discountAmount > 0 && (
                <div className="flex items-center justify-between text-[#a33900] font-semibold">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">local_offer</span>
                    Promo Website ({promoInfo.promoLabel}):
                  </span>
                  <span>-Rp {discountAmount.toLocaleString('id-ID')}</span>
                </div>
              )}

              <div className="pt-2 border-t border-[#f4ece8] flex items-center justify-between">
                <span className="text-sm font-bold text-[#1e1b19]">Total Pembayaran:</span>
                <span className="text-xl font-extrabold text-[#a33900]">
                  Rp {finalPrice.toLocaleString('id-ID')}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCheckoutWhatsApp}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-sm hover:bg-[#20bd5a] active:scale-95 shadow-md transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px]">chat</span>
              <span>Pesan Sekarang via WhatsApp</span>
            </button>

            <p className="text-[11px] text-center text-[#8e7166]">
              Draft pesanan beserta rincian diskon akan otomatis terisi di chat WhatsApp admin.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
