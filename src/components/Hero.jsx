import React, { useState } from 'react';
import { ArrowRight, Sparkles, Award, ShieldCheck, Compass } from 'lucide-react';
import { ChocolateBarArtwork } from './ChocolateIllustrations.jsx';

export default function Hero({ onExploreCollection, onOpenTastingBox, onSelectProduct, featuredProducts, formatPrice }) {
  const [selectedIntensity, setSelectedIntensity] = useState(75);

  const intensityProfiles = {
    70: {
      name: "Madagascar Sambirano",
      vintage: "2026 First Flush",
      notes: "Electric Raspberry · Pink Peppercorn · Passionfruit Zest",
      roast: "Light Solar Roast",
      productId: "bar-sambirano-72",
      accent: "#E27D60"
    },
    75: {
      name: "Venezuela Chuao Criollo",
      vintage: "Grand Cru 2025/2026",
      notes: "Wild Blueberries · Dark Forest Honey · Peated Oak",
      roast: "Medium Drum Roast",
      productId: "bar-chuao-75",
      accent: "#CCA04E"
    },
    80: {
      name: "Ecuador Los Ríos Nacional",
      vintage: "Centenary Heritage Trees",
      notes: "Nocturnal Jasmine · Green Walnut · Dark Molasses",
      roast: "Slow Low-Temp Conche",
      productId: "bar-hacienda-80",
      accent: "#8DA765"
    },
    85: {
      name: "Colombia Sierra Nevada",
      vintage: "High-Altitude Micro-Lot",
      notes: "Raw Panela · Green Cardamom · Spanish Cedar",
      roast: "Deep Espresso Roast",
      productId: "bar-sierra-85",
      accent: "#A2703F"
    }
  };

  const currentProfile = intensityProfiles[selectedIntensity] || intensityProfiles[75];

  const handleTasteOrigin = () => {
    const product = featuredProducts.find(p => p.id === currentProfile.productId);
    if (product) {
      onSelectProduct(product);
    } else {
      onExploreCollection();
    }
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 lg:py-24 border-b border-[#24150D] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#CCA04E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#462A1F]/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Copy & Interactive Tasting Selector */}
          <div className="lg:col-span-7 space-y-8">
            {/* Editorial Metadata Kicker */}
            <div className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#CCA04E]">
              <span>Maison Éclat Cacao</span>
              <span aria-hidden="true">·</span>
              <span>Lyon & Zurich</span>
              <span aria-hidden="true">·</span>
              <span>Bean-to-Bar Craftsmanship</span>
            </div>

            {/* Display Headline with balanced wrap */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F6EFE6] leading-[1.08] tracking-tight text-balance">
              The Pure Architecture of Heirloom Cacao.
            </h1>

            {/* Supporting Prose */}
            <p className="text-base sm:text-lg text-[#C4B3A3] font-sans leading-relaxed max-w-2xl">
              We harvest rare single-estate pods from ancestral shade canopies, gently stone-conching
              beans for up to 84 hours with organic cane sugar and pure cocoa butter. No soy lecithin, no palm oil, no compromises.
            </p>

            {/* Interactive Terroir Cacao Slider Module */}
            <div className="bg-[#180E09] border border-[#2F1A11] p-5 sm:p-6 rounded-xl space-y-4 max-w-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#9E8675] font-medium">
                  Explore Cacao Terroir Intensity
                </span>
                <span className="text-sm font-serif font-bold text-[#E2BC6A] tabular-nums">
                  {selectedIntensity}% Pure Cacao
                </span>
              </div>

              {/* Intensity Segmented Buttons */}
              <div className="grid grid-cols-4 gap-2">
                {[70, 75, 80, 85].map((pct) => (
                  <button
                    key={pct}
                    onClick={() => setSelectedIntensity(pct)}
                    className={`py-2 px-3 text-xs font-medium rounded transition-all whitespace-nowrap text-center ${
                      selectedIntensity === pct
                        ? 'bg-[#3A2216] text-[#F6EFE6] border border-[#CCA04E] shadow-sm'
                        : 'bg-[#120B08] text-[#9E8675] hover:text-[#DAC5B0] border border-transparent'
                    }`}
                  >
                    {pct}% Cru
                  </button>
                ))}
              </div>

              {/* Dynamic Sensory Notes for Selected Intensity */}
              <div className="pt-2 border-t border-[#26140D] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="text-xs font-serif font-semibold text-[#F6EFE6]">
                    {currentProfile.name} <span className="text-[#9E8675] font-sans font-normal">({currentProfile.vintage})</span>
                  </div>
                  <div className="text-xs text-[#CCA04E] font-sans">
                    {currentProfile.notes}
                  </div>
                </div>

                <button
                  onClick={handleTasteOrigin}
                  className="inline-flex items-center gap-1.5 text-xs text-[#E2BC6A] hover:text-white transition-colors uppercase tracking-wider font-semibold whitespace-nowrap shrink-0 self-start sm:self-auto"
                >
                  Taste Bar <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Primary Action Zone */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreCollection}
                className="px-6 py-3.5 bg-[#CCA04E] hover:bg-[#E2BC6A] text-[#120B08] font-semibold text-xs uppercase tracking-widest rounded-lg transition-colors inline-flex items-center gap-2 shadow-lg shadow-[#CCA04E]/10"
              >
                <span>Explore Grand Crus</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenTastingBox}
                className="px-6 py-3.5 bg-[#20130E] hover:bg-[#2C1912] text-[#F6EFE6] border border-[#3E2316] font-medium text-xs uppercase tracking-widest rounded-lg transition-colors inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#CCA04E]" />
                <span>Craft Custom Box</span>
              </button>
            </div>

            {/* Claim-to-Proof Quantitative Adjacency Bar */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#26140D] text-left">
              <div>
                <div className="text-lg sm:text-xl font-serif text-[#F6EFE6] font-bold tabular-nums">3.4x</div>
                <div className="text-[11px] text-[#9E8675] uppercase tracking-wider font-sans">Direct Trade Premium</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-serif text-[#F6EFE6] font-bold tabular-nums">0%</div>
                <div className="text-[11px] text-[#9E8675] uppercase tracking-wider font-sans">Palm Oil / Soy</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-serif text-[#F6EFE6] font-bold tabular-nums">84 Hrs</div>
                <div className="text-[11px] text-[#9E8675] uppercase tracking-wider font-sans">Granite Stone Conche</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset Focal Point */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Luxury Frame Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#382015] bg-[#160D08] shadow-2xl p-6 sm:p-8">
                
                {/* Header Tag inside card */}
                <div className="flex items-center justify-between pb-4 border-b border-[#2C170E] mb-4">
                  <div className="text-xs uppercase tracking-widest text-[#CCA04E] font-medium">
                    Signature Cru Selection
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-[#9E8675]">
                    <Award className="w-3.5 h-3.5 text-[#CCA04E]" />
                    <span>World Gold 2025</span>
                  </div>
                </div>

                {/* SVG Luxury Artwork */}
                <div className="h-64 sm:h-72 w-full rounded-lg overflow-hidden bg-[#120A07]">
                  <ChocolateBarArtwork percentage={selectedIntensity} origin={currentProfile.name.split(' ')[0]} />
                </div>

                {/* Card Details Footer */}
                <div className="mt-5 pt-4 border-t border-[#2C170E] flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#F6EFE6]">
                      {currentProfile.name} {selectedIntensity}%
                    </h3>
                    <p className="text-xs text-[#9E8675] font-sans mt-0.5">
                      75g Bar · {currentProfile.roast}
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="text-base font-serif font-bold text-[#CCA04E] tabular-nums">
                      {formatPrice(16.50)}
                    </div>
                    <button
                      onClick={handleTasteOrigin}
                      className="text-xs text-[#DAC5B0] hover:text-[#E2BC6A] underline underline-offset-4 font-sans mt-0.5 inline-block"
                    >
                      View Specs
                    </button>
                  </div>
                </div>

              </div>

              {/* Floating Certification Leaflet */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-[#20130E] border border-[#3E2316] rounded-xl p-3.5 shadow-xl flex items-center gap-3 backdrop-blur-md">
                <div className="w-8 h-8 rounded-full bg-[#341F14] flex items-center justify-center text-[#E2BC6A]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#F6EFE6]">Single Plantation Direct</div>
                  <div className="text-[10px] text-[#9E8675]">Fully Traceable Origin Lot</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
