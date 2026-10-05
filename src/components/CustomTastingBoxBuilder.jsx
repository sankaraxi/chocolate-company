import React, { useState } from 'react';
import { Sparkles, Plus, Trash2, Check, RefreshCw, Info } from 'lucide-react';
import { BONBON_VARIETIES } from '../data/chocolateData.js';

export default function CustomTastingBoxBuilder({ onAddCustomBox, formatPrice }) {
  const [boxSize, setBoxSize] = useState(6); // 6 or 12
  const [selectedBonbons, setSelectedBonbons] = useState([]);
  const [activeBonbonDetail, setActiveBonbonDetail] = useState(BONBON_VARIETIES[0]);
  const [addedToast, setAddedToast] = useState(false);

  const boxPricing = {
    6: { price: 28.00, label: "Petite Coffret (6 Bonbons)" },
    12: { price: 48.00, label: "Grand Coffret (12 Bonbons)" }
  };

  const currentPrice = boxPricing[boxSize].price;
  const isBoxFull = selectedBonbons.length === boxSize;

  const handleBoxSizeChange = (newSize) => {
    setBoxSize(newSize);
    if (selectedBonbons.length > newSize) {
      setSelectedBonbons(selectedBonbons.slice(0, newSize));
    }
  };

  const handleAddBonbon = (bonbon) => {
    if (selectedBonbons.length < boxSize) {
      setSelectedBonbons([...selectedBonbons, bonbon]);
    }
    setActiveBonbonDetail(bonbon);
  };

  const handleRemoveSlot = (index) => {
    const updated = [...selectedBonbons];
    updated.splice(index, 1);
    setSelectedBonbons(updated);
  };

  const handleClearBox = () => {
    setSelectedBonbons([]);
  };

  const handleSommelierAutofill = () => {
    const needed = boxSize - selectedBonbons.length;
    if (needed <= 0) return;
    const shuffled = [...BONBON_VARIETIES].sort(() => 0.5 - Math.random());
    const additions = [];
    for (let i = 0; i < needed; i++) {
      additions.push(shuffled[i % shuffled.length]);
    }
    setSelectedBonbons([...selectedBonbons, ...additions]);
  };

  const handleAddToCart = () => {
    if (selectedBonbons.length === 0) return;

    // Group counts
    const assortmentSummary = {};
    selectedBonbons.forEach((b) => {
      assortmentSummary[b.name] = (assortmentSummary[b.name] || 0) + 1;
    });

    const customItem = {
      id: `custom-coffret-${boxSize}-${Date.now()}`,
      name: `Le Coffret Sur Mesure (${selectedBonbons.length}/${boxSize} Pcs)`,
      category: 'bonbons',
      subCategory: 'Custom Tasting Box',
      price: currentPrice,
      weight: `${boxSize * 15}g Assorted Bonbons`,
      origin: "Handcrafted Lyon Atelier",
      shortDesc: Object.entries(assortmentSummary)
        .map(([name, count]) => `${count}x ${name}`)
        .join(', '),
      customAssortment: selectedBonbons,
      isCustom: true
    };

    onAddCustomBox(customItem);
    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
      setSelectedBonbons([]);
    }, 1800);
  };

  return (
    <section id="tasting-box" className="py-16 sm:py-24 bg-[#140C08] border-y border-[#26140D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-[#CCA04E] font-medium mb-1">
            Le Coffret Sur Mesure
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F6EFE6]">
            Curate Your Private Tasting Assortment
          </h2>
          <p className="text-sm text-[#9E8675] font-sans mt-2">
            Select your desired presentation box, then hand-pick your favorite ganaches, caramels, and fruit coulis bonbons.
          </p>
        </div>

        {/* Size Selector & Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#24150D]">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-[#9E8675] font-medium">Box Size:</span>
            <div className="flex bg-[#1A100B] border border-[#2D1910] p-1 rounded-lg">
              <button
                onClick={() => handleBoxSizeChange(6)}
                className={`px-4 py-1.5 text-xs font-medium rounded transition-colors ${
                  boxSize === 6 ? 'bg-[#CCA04E] text-[#120B08] font-semibold' : 'text-[#A69383] hover:text-white'
                }`}
              >
                6 Bonbons ({formatPrice(28.00)})
              </button>
              <button
                onClick={() => handleBoxSizeChange(12)}
                className={`px-4 py-1.5 text-xs font-medium rounded transition-colors ${
                  boxSize === 12 ? 'bg-[#CCA04E] text-[#120B08] font-semibold' : 'text-[#A69383] hover:text-white'
                }`}
              >
                12 Bonbons ({formatPrice(48.00)})
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSommelierAutofill}
              disabled={isBoxFull}
              className="text-xs inline-flex items-center gap-1.5 text-[#CCA04E] hover:text-white disabled:opacity-40 transition-colors uppercase tracking-wider font-medium"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sommelier Auto-Fill</span>
            </button>

            {selectedBonbons.length > 0 && (
              <button
                onClick={handleClearBox}
                className="text-xs inline-flex items-center gap-1 text-[#8C7464] hover:text-red-400 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Interactive Box Viewport + Bonbon Selector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Visual Velvet Presentation Box */}
          <div className="lg:col-span-6 bg-[#180E09] border border-[#331C13] rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#28150D]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#E2BC6A] font-semibold">
                  Velvet Coffret Cavities
                </span>
                <p className="text-xs text-[#9E8675] font-sans mt-0.5">
                  Click any placed bonbon to remove or inspect
                </p>
              </div>
              <div className="text-xs font-medium text-[#DAC5B0] tabular-nums bg-[#26140C] px-2.5 py-1 rounded">
                {selectedBonbons.length} of {boxSize} filled
              </div>
            </div>

            {/* Velvet Cavity Slots Grid */}
            <div className={`grid ${boxSize === 6 ? 'grid-cols-3' : 'grid-cols-4'} gap-3 sm:gap-4 p-4 sm:p-6 bg-[#0E0604] rounded-xl border border-[#2A160F]`}>
              {Array.from({ length: boxSize }).map((_, idx) => {
                const bonbon = selectedBonbons[idx];

                if (bonbon) {
                  return (
                    <button
                      key={idx}
                      onClick={() => handleRemoveSlot(idx)}
                      onMouseEnter={() => setActiveBonbonDetail(bonbon)}
                      className="group relative aspect-square rounded-full p-2 bg-[#1A0E08] border border-[#361E14] hover:border-[#CCA04E] flex items-center justify-center transition-all duration-200 hover:scale-105"
                      title={`Remove ${bonbon.name}`}
                    >
                      {/* Bonbon Dome with specular shine */}
                      <div
                        className="w-full h-full rounded-full relative shadow-inner overflow-hidden"
                        style={{ backgroundColor: bonbon.color }}
                      >
                        <div className="absolute top-1 left-1.5 w-3 h-2 bg-white/70 rounded-full blur-[0.6px]" />
                      </div>

                      {/* Hover Remove Overlay */}
                      <div className="absolute inset-0 rounded-full bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <span className="text-white text-xs font-bold">×</span>
                      </div>
                    </button>
                  );
                }

                return (
                  <div
                    key={idx}
                    className="aspect-square rounded-full border border-dashed border-[#3D2317] bg-[#120805] flex items-center justify-center text-[#5E4232]"
                  >
                    <Plus className="w-3.5 h-3.5 opacity-40" />
                  </div>
                );
              })}
            </div>

            {/* Live Assortment Summary & Action Bar */}
            <div className="mt-6 pt-4 border-t border-[#26140D] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs text-[#9E8675] uppercase tracking-wider font-medium">Total Assortment</div>
                <div className="text-xl font-serif font-bold text-[#E2BC6A] tabular-nums mt-0.5">
                  {formatPrice(currentPrice)}
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={selectedBonbons.length === 0}
                className={`py-3 px-6 rounded-lg text-xs uppercase tracking-widest font-semibold transition-all inline-flex items-center justify-center gap-2 ${
                  addedToast
                    ? 'bg-emerald-700 text-white'
                    : selectedBonbons.length > 0
                    ? 'bg-[#CCA04E] hover:bg-[#E2BC6A] text-[#120B08] shadow-lg'
                    : 'bg-[#22120B] text-[#6E4F3E] cursor-not-allowed'
                }`}
              >
                {addedToast ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>
                      {isBoxFull ? 'Add Complete Box to Bag' : `Add Box (${selectedBonbons.length}/${boxSize})`}
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Artisan Bonbon Tray (Click to Add) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h3 className="text-lg font-serif font-semibold text-[#F6EFE6]">
                Artisanal Confectionery Tray
              </h3>
              <p className="text-xs text-[#9E8675] font-sans mt-0.5">
                Click any creation below to add it into your custom coffret.
              </p>
            </div>

            {/* Bonbon Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[460px] overflow-y-auto pr-1">
              {BONBON_VARIETIES.map((bonbon) => {
                const countInBox = selectedBonbons.filter((b) => b.id === bonbon.id).length;

                return (
                  <button
                    key={bonbon.id}
                    onClick={() => handleAddBonbon(bonbon)}
                    onMouseEnter={() => setActiveBonbonDetail(bonbon)}
                    className="p-3 bg-[#190E09] hover:bg-[#24140D] border border-[#28150E] hover:border-[#4A2A1A] rounded-xl text-left transition-all duration-200 flex items-center justify-between gap-3 group"
                  >
                    <div className="flex items-center gap-3">
                      {/* Bonbon Color Dome Preview */}
                      <div
                        className="w-7 h-7 rounded-full shrink-0 shadow-md relative overflow-hidden border border-black/20"
                        style={{ backgroundColor: bonbon.color }}
                      >
                        <div className="absolute top-1 left-1 w-2 h-1 bg-white/70 rounded-full blur-[0.5px]" />
                      </div>

                      <div className="overflow-hidden">
                        <div className="text-xs font-serif font-bold text-[#F6EFE6] group-hover:text-[#E2BC6A] truncate">
                          {bonbon.name}
                        </div>
                        <div className="text-[10px] text-[#9E8675] truncate mt-0.5">
                          {bonbon.type} · {bonbon.cacao}
                        </div>
                      </div>
                    </div>

                    {/* Count in box or Add button */}
                    <div className="shrink-0 flex items-center">
                      {countInBox > 0 ? (
                        <span className="w-5 h-5 rounded-full bg-[#CCA04E] text-[#120B08] text-[10px] font-bold flex items-center justify-center tabular-nums">
                          {countInBox}
                        </span>
                      ) : (
                        <span className="w-5 h-5 rounded-full bg-[#24130B] group-hover:bg-[#382014] text-[#DAC5B0] text-xs flex items-center justify-center">
                          +
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Inspector Preview of Currently Selected / Hovered Bonbon */}
            {activeBonbonDetail && (
              <div className="bg-[#180E09] border border-[#2E1A11] rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-serif font-bold text-[#CCA04E]">
                    {activeBonbonDetail.name}
                  </div>
                  <span className="text-[11px] text-[#8C7464] font-sans">
                    Pairing: {activeBonbonDetail.pairing}
                  </span>
                </div>
                <p className="text-xs text-[#DAC5B0] font-sans leading-relaxed">
                  {activeBonbonDetail.description}
                </p>
                <div className="text-[11px] text-[#A68F7F] italic pt-1 border-t border-[#26140D]">
                  Notes: {activeBonbonDetail.notes}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
