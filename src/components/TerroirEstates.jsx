import React, { useState } from 'react';
import { TERROIR_ESTATES } from '../data/chocolateData.js';
import { MapPin, Mountain, Wind, Sun, Sprout, Compass } from 'lucide-react';

export default function TerroirEstates() {
  const [selectedEstateId, setSelectedEstateId] = useState(TERROIR_ESTATES[0].id);
  const activeEstate = TERROIR_ESTATES.find((e) => e.id === selectedEstateId) || TERROIR_ESTATES[0];

  return (
    <section id="terroir" className="py-16 sm:py-24 bg-[#140C08] border-b border-[#24150D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-[#CCA04E] font-medium mb-1">
            Geographic Origins & Terroirs
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F6EFE6]">
            Four Sacred Microclimates
          </h2>
          <p className="text-sm text-[#9E8675] font-sans mt-2">
            Just as fine wine mirrors vineyard soil and sunshine, heirloom cacao absorbs the volatile aromatics of its native forest canopy.
          </p>
        </div>

        {/* Terroir Estate Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {TERROIR_ESTATES.map((estate) => (
            <button
              key={estate.id}
              onClick={() => setSelectedEstateId(estate.id)}
              className={`p-4 rounded-xl border text-left transition-all ${
                selectedEstateId === estate.id
                  ? 'bg-[#24130B] border-[#CCA04E] shadow-lg'
                  : 'bg-[#180E09] border-[#2A160F] hover:border-[#3E2316]'
              }`}
            >
              <div className="flex items-center gap-1.5 text-[11px] text-[#CCA04E] uppercase tracking-wider font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>{estate.country}</span>
              </div>
              <div className="text-base font-serif font-bold text-[#F6EFE6] mt-1">
                {estate.name}
              </div>
              <div className="text-[11px] text-[#9E8675] truncate mt-1">
                {estate.elevation}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Terroir Showcase Card */}
        <div className="bg-[#180E09] border border-[#2F1A11] rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Story and Profile */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#CCA04E] font-medium">
                  <span>{activeEstate.region}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-[#DAC5B0]">{activeEstate.coordinates}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F6EFE6] mt-1">
                  {activeEstate.name}, {activeEstate.country}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#C4B3A3] font-sans leading-relaxed">
                {activeEstate.story}
              </p>

              {/* Flavor Profile Highlight */}
              <div className="bg-[#120805] border border-[#2E1A11] p-4 rounded-xl">
                <div className="text-xs uppercase tracking-wider text-[#E2BC6A] font-medium mb-1">
                  Sensory Expression
                </div>
                <div className="text-sm font-serif italic text-[#F6EFE6]">
                  "{activeEstate.profile}"
                </div>
              </div>
            </div>

            {/* Right Terroir Technical Specs (Microclimate Metrics) */}
            <div className="lg:col-span-5 bg-[#120A07] border border-[#28150E] rounded-xl p-6 space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#DAC5B0] font-semibold border-b border-[#24130A] pb-3">
                Estate Terroir Metrics
              </h4>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-3">
                  <Sprout className="w-4 h-4 text-[#CCA04E] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#9E8675] block">Heirloom Varietal:</span>
                    <span className="text-[#F6EFE6] font-medium">{activeEstate.varietal}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mountain className="w-4 h-4 text-[#CCA04E] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#9E8675] block">Altitude / Elevation:</span>
                    <span className="text-[#F6EFE6] font-medium">{activeEstate.elevation}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Wind className="w-4 h-4 text-[#CCA04E] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#9E8675] block">Microclimate:</span>
                    <span className="text-[#F6EFE6] font-medium">{activeEstate.climate}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[#CCA04E] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#9E8675] block">Solar Curing Method:</span>
                    <span className="text-[#F6EFE6] font-medium">{activeEstate.dryingMethod}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#24130A]">
                  <Compass className="w-4 h-4 text-[#CCA04E] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#9E8675] block">Soil Geology:</span>
                    <span className="text-[#DAC5B0] font-sans">{activeEstate.soil}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
