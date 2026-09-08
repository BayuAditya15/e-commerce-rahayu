import React from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import Story from './components/Story';
import Features from './components/Features';
import OrderGuide from './components/OrderGuide';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CartBottomBar from './components/CartBottomBar';
import PromoModal from './components/PromoModal';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#fff8f5] text-[#1e1b19] pb-24 md:pb-16">
        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1 flex flex-col w-full">
          <Hero />
          <Story />
          <ProductCatalog />
          <Features />
          <OrderGuide />
        </main>

        {/* Footer */}
        <Footer />

        {/* Sticky Floating Cart Bottom Bar */}
        <CartBottomBar />

        {/* Slide-in Cart Drawer */}
        <CartDrawer />

        {/* Floating Promo Widget & Welcome Modal */}
        <PromoModal />
      </div>
    </CartProvider>
  );
}
