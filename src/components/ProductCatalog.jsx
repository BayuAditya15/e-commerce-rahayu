import React, { useState, useMemo } from 'react';
import { productsData, categoriesData } from '../data/products';
import ProductCard from './ProductCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ProductCatalog() {
  const [sectionRef, isVisible] = useScrollReveal();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const filteredAndSortedProducts = useMemo(() => {
    let result = productsData.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        item.category === selectedCategory ||
        (selectedCategory === 'paket' && item.category !== '');

      const query = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.shortName.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });

    result.sort((a, b) => {
      const minPriceA = a.variants[0]?.price || 0;
      const minPriceB = b.variants[0]?.price || 0;

      if (sortBy === 'price-asc') return minPriceA - minPriceB;
      if (sortBy === 'price-desc') return minPriceB - minPriceA;
      return b.popularity - a.popularity;
    });

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  const handleReset = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('popular');
  };

  return (
    <section
      id="katalog-grid"
      ref={sectionRef}
      className={`w-full py-10 sm:py-16 bg-[#fff8f5] reveal-smooth scroll-mt-20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div id="katalog" className="sr-only" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#a33900]">
              Koleksi Kudapan Nusantara
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e1b19] mt-1">
              Daftar Menu Camilan Renyah
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-[#5a4138]">
            Menampilkan <strong className="text-[#a33900]">{filteredAndSortedProducts.length}</strong> dari {productsData.length} produk
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#faf2ee] rounded-2xl p-4 sm:p-6 border border-[#f4ece8] space-y-4 shadow-xs">
          
          {/* Category Tabs (Horizontal scrolling on mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {categoriesData.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#a33900] text-white shadow-xs'
                      : 'bg-white text-[#5a4138] hover:text-[#1e1b19] hover:bg-[#eee7e3]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search & Sort Controls */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
            
            {/* Search Input */}
            <div className="md:col-span-8 relative">
              <div className="flex items-center bg-white rounded-full px-4 py-2.5 sm:py-3 border border-[#eee7e3] focus-within:border-[#a33900] shadow-xs transition-all">
                <span className="material-symbols-outlined text-[#a33900] text-[20px] sm:text-[22px] mr-2.5">
                  search
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari camilan (kremes, sistik, basreng, seblak)..."
                  className="w-full bg-transparent text-xs sm:text-sm text-[#1e1b19] placeholder-[#8e7166] focus:outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="text-[#8e7166] hover:text-[#a33900] cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">cancel</span>
                  </button>
                )}
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-4 flex items-center bg-white rounded-full px-4 py-2.5 sm:py-3 border border-[#eee7e3] shadow-xs">
              <label htmlFor="snackSort" className="text-xs text-[#5a4138] mr-2 shrink-0 font-semibold">
                Urutkan:
              </label>
              <select
                id="snackSort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm font-semibold text-[#1e1b19] outline-none cursor-pointer"
              >
                <option value="popular">Paling Populer (Best Seller)</option>
                <option value="price-asc">Harga Terendah</option>
                <option value="price-desc">Harga Tertinggi</option>
              </select>
            </div>

          </div>
        </div>

        {/* Product Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 px-4 bg-[#faf2ee] rounded-2xl border border-[#eee7e3]">
            <span className="material-symbols-outlined text-[48px] text-[#8e7166]">
              search_off
            </span>
            <h4 className="text-lg font-bold text-[#1e1b19] mt-3">
              Tidak ada camilan yang cocok
            </h4>
            <p className="text-xs sm:text-sm text-[#5a4138] mt-1 max-w-sm mx-auto">
              Coba kata kunci pencarian lain atau klik tombol reset untuk menampilkan seluruh produk.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="mt-4 px-5 py-2 rounded-full bg-[#a33900] text-white text-xs sm:text-sm font-semibold hover:bg-[#cc4900] active:scale-95 transition-all cursor-pointer"
            >
              Reset Pencarian
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
