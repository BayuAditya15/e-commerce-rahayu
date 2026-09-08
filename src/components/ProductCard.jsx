import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const { addToCart, updateQuantity, getItemQuantity } = useCart();

  const currentVariant = product.variants[selectedVariantIndex] || product.variants[0];
  const priceFormatted = `Rp ${currentVariant.price.toLocaleString('id-ID')}`;

  const currentQty = getItemQuantity(product.id, currentVariant.weight);
  const itemKey = `${product.id}-${currentVariant.weight}`;

  return (
    <div className="flex flex-col bg-white rounded-2xl p-4 border border-[#f4ece8] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      
      {/* Product Image Container */}
      <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#faf2ee]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
      </div>

      {/* Product Information */}
      <div className="flex flex-col flex-1 mt-4">
        
        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-[#1e1b19] leading-snug">
          {product.shortName}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#5a4138] mt-1 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Variant Picker */}
        <div className="mt-4">
          <label className="block text-xs font-semibold text-[#5a4138] mb-1.5">
            Pilihan Kemasan:
          </label>
          <div className="flex flex-wrap gap-1.5">
            {product.variants.map((variant, index) => {
              const isActive = index === selectedVariantIndex;
              const variantQty = getItemQuantity(product.id, variant.weight);
              return (
                <button
                  key={variant.weight}
                  type="button"
                  onClick={() => setSelectedVariantIndex(index)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer flex-1 text-center active:scale-95 ${
                    isActive
                      ? 'bg-[#ffdbce] text-[#370e00] shadow-xs ring-1 ring-[#a33900]/20 font-bold'
                      : 'bg-[#faf2ee] text-[#5a4138] hover:bg-[#f4ece8] hover:text-[#1e1b19]'
                  }`}
                >
                  {variant.label} {variantQty > 0 ? `(${variantQty})` : ''}
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer: Price & Marketplace Add/Stepper Action */}
        <div className="mt-auto pt-4 flex items-center justify-between gap-2 border-t border-[#faf2ee]">
          <div>
            <div className="text-[11px] text-[#8e7166]">Harga:</div>
            <div className="text-lg font-extrabold text-[#a33900] transition-all">
              {priceFormatted}
            </div>
          </div>

          {/* If 0 qty: show + Tambah button. If > 0: show stepper */}
          {currentQty === 0 ? (
            <button
              type="button"
              onClick={() => addToCart(product, currentVariant, 1)}
              className="group inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#a33900] text-white text-xs sm:text-sm font-bold hover:bg-[#cc4900] shadow-sm hover:shadow-md active:scale-95 transition-all cursor-pointer shrink-0"
            >
              <span className="material-symbols-outlined text-[18px] transform group-hover:rotate-12 transition-transform">
                add_shopping_cart
              </span>
              <span>+ Tambah</span>
            </button>
          ) : (
            <div className="flex items-center border border-[#e2bfb2] rounded-xl bg-[#fff8f5] overflow-hidden shadow-xs animate-in zoom-in-95 duration-150">
              <button
                type="button"
                onClick={() => updateQuantity(itemKey, currentQty - 1)}
                className="px-3 py-1.5 text-sm font-extrabold text-[#a33900] hover:bg-[#ffdbce] active:bg-[#ffb599] transition-colors cursor-pointer"
                aria-label="Kurangi kuantitas"
              >
                -
              </button>
              <div className="px-3 py-1 text-xs font-extrabold text-[#1e1b19] bg-white">
                {currentQty}
              </div>
              <button
                type="button"
                onClick={() => updateQuantity(itemKey, currentQty + 1)}
                className="px-3 py-1.5 text-sm font-extrabold text-[#a33900] hover:bg-[#ffdbce] active:bg-[#ffb599] transition-colors cursor-pointer"
                aria-label="Tambah kuantitas"
              >
                +
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
