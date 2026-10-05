import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onNavigate, activeSection, currency, setCurrency }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { id: 'collection', label: 'Collections' },
    { id: 'tasting-box', label: 'Tasting Box' },
    { id: 'bean-to-bar', label: 'Bean to Bar' },
    { id: 'terroir', label: 'Our Terroirs' },
    { id: 'values', label: 'Standards' }
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onNavigate('collection', searchQuery);
      setSearchOpen(false);
    }
  };

  return (
    <>
      {/* Editorial Announcement Banner */}
      <div className="bg-[#190F0A] border-b border-[#2C1910] text-[#D8C7A5] text-xs py-2 px-4 text-center tracking-wide font-sans">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-6">
          <span className="hidden sm:inline">Winter Grand Cru Allocation</span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>Complimentary insulated thermal shipping on orders over $65</span>
          <span className="hidden md:inline" aria-hidden="true">·</span>
          <span className="hidden md:inline text-[#E2BC6A]">Direct-Trade Certified</span>
        </div>
      </div>

      {/* Top Bar Contract: Zone 1 (Brand) — Zone 2 (4-6 Links) — Zone 3 (Actions) */}
      <header className="sticky top-0 z-40 bg-[#120B08]/95 backdrop-blur-md border-b border-[#24150D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Zone 1: Single Text Element Wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="text-xl sm:text-2xl font-serif tracking-widest text-[#F6EFE6] hover:text-[#E2BC6A] transition-colors whitespace-nowrap"
          >
            MAISON ÉCLAT CACAO
          </a>

          {/* Zone 2: 4-6 Clean Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wider uppercase text-[#C4B3A3]">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id);
                }}
                className={`transition-colors py-1 relative hover:text-[#E2BC6A] ${
                  activeSection === link.id ? 'text-[#E2BC6A]' : ''
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E2BC6A]" />
                )}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 Primary Actions */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Currency Selector */}
            <div className="hidden sm:flex items-center gap-1 text-xs text-[#9E8675] border border-[#2E1A11] rounded px-2 py-1 bg-[#180E09]">
              {['USD', 'EUR', 'GBP'].map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-1.5 py-0.5 rounded transition-colors ${
                    currency === curr ? 'bg-[#2E1A11] text-[#E2BC6A] font-medium' : 'hover:text-[#F6EFE6]'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>

            {/* Quick Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-[#C4B3A3] hover:text-[#E2BC6A] transition-colors"
              aria-label="Search Collection"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Shopping Bag Button */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2.5 bg-[#25150D] hover:bg-[#341F14] text-[#F6EFE6] border border-[#3E2316] px-3.5 py-2 rounded transition-colors group"
              aria-label="View Shopping Bag"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-[#E2BC6A] group-hover:scale-105 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#B38637] text-black font-semibold text-[10px] w-4 h-4 rounded-full flex items-center justify-center tabular-nums">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs font-medium tracking-wider uppercase">Bag</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#C4B3A3] hover:text-[#E2BC6A]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Collapsible Search Bar Drawer */}
        {searchOpen && (
          <div className="border-t border-[#2A160F] bg-[#160D08] px-4 py-3 sm:px-6">
            <form onSubmit={handleSearchSubmit} className="max-w-3xl mx-auto flex items-center gap-3">
              <Search className="w-4 h-4 text-[#9E8675]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search single-origin bars, ganaches, tasting flights, or terroir notes..."
                className="w-full bg-transparent border-none text-[#F6EFE6] text-sm focus:outline-none placeholder:text-[#7A6455]"
                autoFocus
              />
              <button
                type="submit"
                className="text-xs uppercase tracking-wider text-[#E2BC6A] hover:text-white px-3 py-1 bg-[#25150D] rounded"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-[#9E8675] hover:text-white text-xs"
              >
                Close
              </button>
            </form>
          </div>
        )}

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#24150D] bg-[#140C08] px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-base uppercase tracking-wider font-medium py-2 transition-colors ${
                    activeSection === link.id ? 'text-[#E2BC6A]' : 'text-[#C4B3A3] hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-[#26140D] flex items-center justify-between">
              <span className="text-xs text-[#9E8675]">Currency</span>
              <div className="flex gap-2">
                {['USD', 'EUR', 'GBP'].map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-2 py-1 text-xs rounded ${
                      currency === curr ? 'bg-[#3E2316] text-[#E2BC6A]' : 'text-[#9E8675]'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
