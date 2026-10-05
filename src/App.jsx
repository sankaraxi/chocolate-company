import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CollectionGrid from './components/CollectionGrid.jsx';
import CustomTastingBoxBuilder from './components/CustomTastingBoxBuilder.jsx';
import BeanToBarProcess from './components/BeanToBarProcess.jsx';
import TerroirEstates from './components/TerroirEstates.jsx';
import ValuesAndReviews from './components/ValuesAndReviews.jsx';
import ProductDetailModal from './components/ProductDetailModal.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import Footer from './components/Footer.jsx';
import { PRODUCTS } from './data/chocolateData.js';

export default function App() {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('maison_eclat_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeSection, setActiveSection] = useState('hero');
  const [currency, setCurrency] = useState('USD');
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem('maison_eclat_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  // Currency rates relative to USD
  const currencyRates = {
    USD: { symbol: '$', rate: 1.0 },
    EUR: { symbol: '€', rate: 0.92 },
    GBP: { symbol: '£', rate: 0.78 }
  };

  const formatPrice = (priceInUsd) => {
    const { symbol, rate } = currencyRates[currency] || currencyRates.USD;
    const converted = priceInUsd * rate;
    return `${symbol}${converted.toFixed(2)}`;
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage('');
    }, 2400);
  };

  const handleAddToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    showToast(`Added ${quantity}x ${product.name} to your tasting bag`);
  };

  const handleAddCustomBox = (customItem) => {
    setCart((prev) => [...prev, { ...customItem, quantity: 1 }]);
    showToast(`Added custom tasting coffret to your bag`);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (itemId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (itemId) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleNavigate = (sectionId, query = '') => {
    setActiveSection(sectionId);
    if (query) {
      setSearchQuery(query);
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#120B08] text-[#F6EFE6] flex flex-col font-sans selection:bg-[#B88746] selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
        activeSection={activeSection}
        currency={currency}
        setCurrency={setCurrency}
      />

      {/* Main Experience Flow */}
      <main className="flex-1">
        {/* Hero Showcase with Interactive Intensity Explorer */}
        <Hero
          onExploreCollection={() => handleNavigate('collection')}
          onOpenTastingBox={() => handleNavigate('tasting-box')}
          onSelectProduct={(p) => setSelectedProduct(p)}
          featuredProducts={PRODUCTS}
          formatPrice={formatPrice}
        />

        {/* Product Catalog Grid with Category Tabs & Search */}
        <CollectionGrid
          products={PRODUCTS}
          onAddToCart={handleAddToCart}
          onSelectProduct={(p) => setSelectedProduct(p)}
          formatPrice={formatPrice}
          initialSearchQuery={searchQuery}
          onClearSearch={() => setSearchQuery('')}
        />

        {/* Interactive Custom Tasting Flight Box Builder */}
        <CustomTastingBoxBuilder
          onAddCustomBox={handleAddCustomBox}
          formatPrice={formatPrice}
        />

        {/* The 6-Stage Bean to Bar Craftsmanship Journey */}
        <BeanToBarProcess />

        {/* Terroir & Origin Microclimates Explorer */}
        <TerroirEstates />

        {/* Adjacency Proof, Quantitative Standards & Reviews */}
        <ValuesAndReviews />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          formatPrice={formatPrice}
        />
      )}

      {/* Cart & Checkout Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        formatPrice={formatPrice}
        currency={currency}
      />

      {/* Global Interactive Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#24140D] border border-[#CCA04E] text-[#F6EFE6] px-4 py-3 rounded-xl shadow-2xl text-xs font-medium flex items-center gap-2 animate-bounce-subtle">
          <div className="w-2 h-2 rounded-full bg-[#CCA04E]" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
