import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Check, ShieldCheck, Award, Heart, Share2, Sparkles } from 'lucide-react';
import { ChocolateBarArtwork, BonbonBoxArtwork, DrinkingChocolateArtwork, FlavorRadarVisual } from './ChocolateIllustrations.jsx';

export default function ProductDetailModal({ product, onClose, onAddToCart, formatPrice }) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [activeTab, setActiveTab] = useState('tasting'); // 'tasting', 'ingredients', 'sourcing'

  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  const renderIllustration = () => {
    if (product.category === 'bars') {
      return (
        <ChocolateBarArtwork
          percentage={product.cacaoPercentage}
          origin={product.origin.split(',')[0]}
          className="w-full h-full"
        />
      );
    }
    if (product.category === 'bonbons') {
      return <BonbonBoxArtwork className="w-full h-full" />;
    }
    return <DrinkingChocolateArtwork className="w-full h-full" />;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fade-in">
      {/* Modal Dialog Card */}
      <div
        className="relative bg-[#160D08] border border-[#3A2216] w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#9E8675] hover:text-[#F6EFE6] bg-[#22120B]/80 hover:bg-[#321B10] rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto grid grid-cols-1 md:grid-cols-12 flex-1">
          
          {/* Left Column: Visual Artwork & Sensory Radar */}
          <div className="md:col-span-5 bg-[#120A07] border-b md:border-b-0 md:border-r border-[#26140D] p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Product Artwork */}
              <div className="aspect-square w-full rounded-xl overflow-hidden bg-[#180E09] border border-[#2D180F] shadow-lg">
                {renderIllustration()}
              </div>

              {/* Sensory Radar Wheel if available */}
              {product.flavorRadar && (
                <div className="bg-[#180E09] border border-[#2B160E] rounded-xl p-4 text-center">
                  <div className="text-[11px] uppercase tracking-wider text-[#CCA04E] font-medium mb-2">
                    Sensory Flavor Radar
                  </div>
                  <FlavorRadarVisual radar={product.flavorRadar} size={150} />
                </div>
              )}
            </div>

            {/* Micro specs */}
            <div className="pt-4 border-t border-[#22120B] text-[11px] text-[#9E8675] space-y-1">
              <div>Weight: <span className="text-[#DAC5B0]">{product.weight}</span></div>
              <div>Vintage: <span className="text-[#DAC5B0]">{product.harvestYear}</span></div>
              <div>Conching Duration: <span className="text-[#DAC5B0]">{product.concheTime}</span></div>
            </div>
          </div>

          {/* Right Column: Contiguous Purchase Module */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Kicker & Origin */}
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#CCA04E] font-medium">
                <span>{product.origin}</span>
                <span aria-hidden="true">·</span>
                <span>{product.cacaoPercentage}% Cacao</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F6EFE6]">
                {product.name}
              </h2>

              {/* Price & Rating */}
              <div className="flex items-center justify-between pb-4 border-b border-[#28150D]">
                <div className="text-2xl font-serif font-bold text-[#CCA04E] tabular-nums">
                  {formatPrice(product.price)}
                </div>
                <div className="text-xs text-[#9E8675] font-sans">
                  ★ {product.rating} ({product.reviewsCount} verified connoisseurs)
                </div>
              </div>

              {/* Prose Description */}
              <p className="text-sm text-[#C4B3A3] font-sans leading-relaxed">
                {product.description}
              </p>

              {/* Flavor Notes (Unboxed text with separators, Section 1A) */}
              <div className="text-xs text-[#DAC5B0] space-y-1 bg-[#1A0E08] p-3 rounded-lg border border-[#2C170F]">
                <span className="text-[#9E8675] uppercase tracking-wider text-[10px] block font-medium">
                  Tasting Aromatic Notes:
                </span>
                <div className="flex flex-wrap items-center gap-1.5 font-medium text-[#E2BC6A]">
                  {product.flavorNotes.map((note, i) => (
                    <React.Fragment key={note}>
                      <span>{note}</span>
                      {i < product.flavorNotes.length - 1 && (
                        <span className="text-[#5C4333]" aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Tab Selector: Sourcing / Ingredients */}
              <div className="pt-2">
                <div className="flex border-b border-[#26140D] gap-4 text-xs font-medium uppercase tracking-wider">
                  <button
                    onClick={() => setActiveTab('tasting')}
                    className={`pb-2 border-b-2 transition-colors ${
                      activeTab === 'tasting' ? 'border-[#CCA04E] text-[#CCA04E]' : 'border-transparent text-[#9E8675] hover:text-white'
                    }`}
                  >
                    Craft Notes
                  </button>
                  <button
                    onClick={() => setActiveTab('ingredients')}
                    className={`pb-2 border-b-2 transition-colors ${
                      activeTab === 'ingredients' ? 'border-[#CCA04E] text-[#CCA04E]' : 'border-transparent text-[#9E8675] hover:text-white'
                    }`}
                  >
                    Ingredients
                  </button>
                  <button
                    onClick={() => setActiveTab('sourcing')}
                    className={`pb-2 border-b-2 transition-colors ${
                      activeTab === 'sourcing' ? 'border-[#CCA04E] text-[#CCA04E]' : 'border-transparent text-[#9E8675] hover:text-white'
                    }`}
                  >
                    Traceability
                  </button>
                </div>

                <div className="pt-3 text-xs text-[#B5A192] leading-relaxed">
                  {activeTab === 'tasting' && (
                    <p>
                      Conched in vintage rotating granite stone melangers for {product.concheTime}. 
                      Organizes velvety Beta-V crystals for mirror gloss, crisp snap, and long cocoa finish.
                    </p>
                  )}
                  {activeTab === 'ingredients' && (
                    <div className="space-y-1">
                      <p className="font-sans">{product.ingredients}</p>
                      <p className="text-[11px] text-[#8C7464] italic">Strictly non-GMO, zero palm fat, zero artificial flavoring.</p>
                    </div>
                  )}
                  {activeTab === 'sourcing' && (
                    <div className="flex flex-wrap gap-2 text-[11px] text-[#CCA04E]">
                      {product.certifications.map((c) => (
                        <span key={c} className="bg-[#24130A] px-2 py-1 rounded border border-[#3E2215]">
                          ✓ {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Contiguous Purchase Action Row */}
            <div className="pt-6 border-t border-[#28150D] space-y-4">
              <div className="flex items-center gap-4">
                
                {/* Quantity Stepper */}
                <div className="flex items-center border border-[#361E13] bg-[#1C0F0A] rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2.5 text-[#DAC5B0] hover:text-white transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center text-sm font-semibold tabular-nums text-[#F6EFE6]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2.5 text-[#DAC5B0] hover:text-white transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Primary Add to Bag Button */}
                <button
                  onClick={handleAdd}
                  className={`flex-1 py-3.5 px-6 rounded-lg font-semibold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                    isAdded
                      ? 'bg-emerald-700 text-white'
                      : 'bg-[#CCA04E] hover:bg-[#E2BC6A] text-[#120B08] shadow-lg shadow-[#CCA04E]/10'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <span>Add to Bag · {formatPrice(product.price * quantity)}</span>
                  )}
                </button>
              </div>

              {/* Thermal Shipping Reassurance */}
              <div className="flex items-center justify-center gap-2 text-[11px] text-[#9E8675]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#CCA04E]" />
                <span>Insulated thermal packaging with ice packs included</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
