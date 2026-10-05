import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#0E0604] border-t border-[#22120B] text-[#9E8675] text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xl font-serif tracking-widest text-[#F6EFE6] block">
              MAISON ÉCLAT CACAO
            </span>
            <p className="text-xs text-[#8C7464] leading-relaxed max-w-sm">
              Artisanal bean-to-bar masters crafting pure single-origin grand cru chocolate bars,
              fresh cream ganaches, and ceremonial drinking elixirs since 1928.
            </p>
            <div className="text-[11px] text-[#CCA04E] tracking-wider uppercase">
              Lyon · Zurich · Tokyo
            </div>
          </div>

          {/* Column: Collections */}
          <div className="space-y-3">
            <span className="text-xs font-serif font-bold text-[#DAC5B0] uppercase tracking-wider block">
              Atelier Collections
            </span>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('collection')}
                  className="hover:text-[#E2BC6A] transition-colors"
                >
                  Single-Origin Bars (70% - 85%)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collection')}
                  className="hover:text-[#E2BC6A] transition-colors"
                >
                  Hand-Painted Ganache Bonbons
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collection')}
                  className="hover:text-[#E2BC6A] transition-colors"
                >
                  Parisian Shaved Drinking Chocolate
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tasting-box')}
                  className="hover:text-[#E2BC6A] transition-colors text-[#CCA04E]"
                >
                  Le Coffret Sur Mesure (Custom Box)
                </button>
              </li>
            </ul>
          </div>

          {/* Column: Craft & Terroir */}
          <div className="space-y-3">
            <span className="text-xs font-serif font-bold text-[#DAC5B0] uppercase tracking-wider block">
              Terroirs & Craft
            </span>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('bean-to-bar')}
                  className="hover:text-[#E2BC6A] transition-colors"
                >
                  The 6-Stage Bean-to-Bar Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terroir')}
                  className="hover:text-[#E2BC6A] transition-colors"
                >
                  Chuao Valley, Venezuela
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terroir')}
                  className="hover:text-[#E2BC6A] transition-colors"
                >
                  Sambirano Valley, Madagascar
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terroir')}
                  className="hover:text-[#E2BC6A] transition-colors"
                >
                  Los Ríos Arriba, Ecuador
                </button>
              </li>
            </ul>
          </div>

          {/* Column: Boutiques & Salons */}
          <div className="space-y-3">
            <span className="text-xs font-serif font-bold text-[#DAC5B0] uppercase tracking-wider block">
              Flagship Salons
            </span>
            <div className="space-y-2.5 text-[11px] text-[#8C7464]">
              <div>
                <strong className="text-[#DAC5B0] block font-normal">Lyon Atelier & Boutique</strong>
                14 Rue Mercière, 69002 Lyon
              </div>
              <div>
                <strong className="text-[#DAC5B0] block font-normal">Zürich Tasting Salon</strong>
                Rennweg 28, 8001 Zürich
              </div>
              <div>
                <strong className="text-[#DAC5B0] block font-normal">Tokyo Ginza Pavilion</strong>
                5-7-1 Ginza, Chuo-ku, Tokyo
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Ethical Sourcing Notice */}
        <div className="mt-12 pt-8 border-t border-[#1C0F08] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7A6455]">
          <div>
            © {new Date().getFullYear()} Maison Éclat Cacao S.A. All rights reserved. Direct-Trade Certified.
          </div>
          <div className="flex items-center gap-6">
            <span>Biodegradable Wool Packaging</span>
            <span aria-hidden="true">·</span>
            <span>Zero Soy Lecithin</span>
            <span aria-hidden="true">·</span>
            <span>Compostable Cellulose Foil</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
