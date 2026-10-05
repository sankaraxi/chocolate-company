import React, { useState, useMemo } from 'react';
import { Eye, Plus, Check, Star, SlidersHorizontal, Sparkles } from 'lucide-react';
import { ChocolateBarArtwork, BonbonBoxArtwork, DrinkingChocolateArtwork } from './ChocolateIllustrations.jsx';

export default function CollectionGrid({
  products,
  onAddToCart,
  onSelectProduct,
  formatPrice,
  initialSearchQuery = '',
  onClearSearch
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [addedAnimationId, setAddedAnimationId] = useState(null);

  const categories = [
    { id: 'all', label: 'All Creations' },
    { id: 'bars', label: 'Single-Origin Bars' },
    { id: 'bonbons', label: 'Hand-Painted Bonbons' },
    { id: 'drinking', label: 'Drinking Chocolates' },
    { id: 'flights', label: 'Tasting Flights' }
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Search query filter
      if (initialSearchQuery) {
        const query = initialSearchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchOrigin = item.origin.toLowerCase().includes(query);
        const matchNotes = item.flavorNotes.some(note => note.toLowerCase().includes(query));
        const matchDesc = item.shortDesc.toLowerCase().includes(query);
        if (!matchName && !matchOrigin && !matchNotes && !matchDesc) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'cacao-desc') return b.cacaoPercentage - a.cacaoPercentage;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // default featured
    });
  }, [products, activeCategory, initialSearchQuery, sortBy]);

  const handleQuickAdd = (e, product) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedAnimationId(product.id);
    setTimeout(() => {
      setAddedAnimationId(null);
    }, 1200);
  };

  const renderProductIllustration = (product) => {
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
    if (product.category === 'drinking') {
      return <DrinkingChocolateArtwork className="w-full h-full" />;
    }
    // Tasting flights
    return (
      <div className="w-full h-full relative flex items-center justify-center bg-[#180E09] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(207,163,86,0.15),transparent_70%)]" />
        <div className="flex gap-2 items-center justify-center p-4">
          <div className="w-16 h-28 bg-[#2A170F] rounded border border-[#44271B] shadow-md transform -rotate-6" />
          <div className="w-16 h-28 bg-[#331C13] rounded border border-[#4E2D1F] shadow-lg transform -translate-y-1" />
          <div className="w-16 h-28 bg-[#24130C] rounded border border-[#3E2216] shadow-md transform rotate-6" />
        </div>
      </div>
    );
  };

  return (
    <section id="collection" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#24150D]">
        <div>
          <div className="text-xs uppercase tracking-widest text-[#CCA04E] font-medium mb-1">
            Curated Atelier Releases
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F6EFE6]">
            The Grand Cru Collection
          </h2>
          <p className="text-sm text-[#9E8675] font-sans mt-1">
            Hand-tempered chocolate bars, single-origin flights, and artisan ganache coffrets.
          </p>
        </div>

        {/* Search query tag if present */}
        {initialSearchQuery && (
          <div className="flex items-center gap-2 bg-[#20130E] border border-[#3E2316] px-3 py-1.5 rounded-lg text-xs">
            <span className="text-[#9E8675]">Search:</span>
            <span className="text-[#E2BC6A] font-medium">"{initialSearchQuery}"</span>
            <button
              onClick={onClearSearch}
              className="text-[#9E8675] hover:text-white ml-1 font-bold"
            >
              ×
            </button>
          </div>
        )}

        {/* Sort selector */}
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-[#9E8675]" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#180E09] border border-[#2E1A11] text-[#DAC5B0] text-xs py-2 px-3 rounded-lg focus:outline-none focus:border-[#CCA04E]"
          >
            <option value="featured">Featured Allocation</option>
            <option value="cacao-desc">Highest Cacao %</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {/* Interactive Category Tabs (Buttons, no static pills) */}
      <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap ${
              activeCategory === cat.id
                ? 'bg-[#CCA04E] text-[#120B08] font-semibold shadow-sm'
                : 'bg-[#180E09] text-[#A69383] hover:text-[#F6EFE6] border border-[#26140D]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product Grid: 3-Column Desktop, 2-Column Tablet */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-[#160D08] rounded-2xl border border-[#26140D] p-8">
          <p className="text-lg font-serif text-[#DAC5B0]">No creations match your current criteria.</p>
          <button
            onClick={() => {
              setActiveCategory('all');
              onClearSearch && onClearSearch();
            }}
            className="mt-4 text-xs uppercase tracking-widest text-[#E2BC6A] hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => {
            const isAdded = addedAnimationId === product.id;

            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className="group relative bg-[#160D08] border border-[#26140D] hover:border-[#3D2317] rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
              >
                {/* Visual Asset Container (65-75% visual prominence) */}
                <div className="relative aspect-[4/3] w-full bg-[#120A07] overflow-hidden border-b border-[#22120B]">
                  {renderProductIllustration(product)}

                  {/* Single Clean Editorial Kicker or Award (Section 2B: No badge spam) */}
                  {product.awards && (
                    <div className="absolute top-3 left-3 bg-[#140C08]/90 backdrop-blur-sm border border-[#351E14] px-2.5 py-1 rounded text-[10px] text-[#E2BC6A] tracking-wider uppercase font-medium">
                      {product.awards.split(' ')[0]} {product.awards.split(' ')[1] || 'Award'}
                    </div>
                  )}

                  {/* Hover Quick Action Buttons */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="p-3 bg-[#24150D] hover:bg-[#341F14] text-[#F6EFE6] rounded-full border border-[#482819] transition-transform hover:scale-105"
                      title="Quick View Tasting Notes"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => handleQuickAdd(e, product)}
                      className={`p-3 rounded-full border transition-all ${
                        isAdded
                          ? 'bg-emerald-800 border-emerald-600 text-white'
                          : 'bg-[#CCA04E] hover:bg-[#E2BC6A] border-[#CCA04E] text-[#120B08]'
                      } hover:scale-105`}
                      title="Add to Shopping Bag"
                    >
                      {isAdded ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
                    </button>
                  </div>
                </div>

                {/* Product Metadata & Info Section */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Origin / SubCategory kicker */}
                    <div className="text-[11px] uppercase tracking-wider text-[#CCA04E] font-medium">
                      {product.origin.split(',')[0]} · {product.cacaoPercentage}% Cacao
                    </div>

                    {/* Product Name */}
                    <h3 className="text-lg font-serif font-bold text-[#F6EFE6] mt-1 group-hover:text-[#E2BC6A] transition-colors">
                      {product.name}
                    </h3>

                    {/* Short Tasting Profile Note */}
                    <p className="text-xs text-[#9E8675] font-sans mt-2 line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>
                  </div>

                  {/* Card Bottom Row: Weight & Price Baseline */}
                  <div className="pt-4 mt-4 border-t border-[#22120B] flex items-center justify-between">
                    <span className="text-xs text-[#7A6455] font-sans">
                      {product.weight}
                    </span>

                    <div className="flex items-center gap-3">
                      <span className="text-base font-serif font-bold text-[#F6EFE6] tabular-nums">
                        {formatPrice(product.price)}
                      </span>

                      <button
                        onClick={(e) => handleQuickAdd(e, product)}
                        className={`text-xs uppercase tracking-wider font-semibold py-1.5 px-3 rounded transition-colors ${
                          isAdded
                            ? 'bg-emerald-900/60 text-emerald-300'
                            : 'bg-[#25150D] hover:bg-[#CCA04E] text-[#DAC5B0] hover:text-[#120B08]'
                        }`}
                      >
                        {isAdded ? 'Added' : 'Add'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
