import React, { useState } from 'react';
import { CRAFTSMANSHIP_STEPS } from '../data/chocolateData.js';
import { CacaoPodArtwork } from './ChocolateIllustrations.jsx';
import { Sparkles, Clock, Hammer, Flame } from 'lucide-react';

export default function BeanToBarProcess() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = CRAFTSMANSHIP_STEPS[activeStepIndex];

  return (
    <section id="bean-to-bar" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#24150D]">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <div className="text-xs uppercase tracking-widest text-[#CCA04E] font-medium mb-1">
          From Botanical Fruit to Silk Texture
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#F6EFE6]">
          The Bean-to-Bar Craftsmanship
        </h2>
        <p className="text-sm text-[#9E8675] font-sans mt-2">
          Industrial chocolate rushes beans through high-pressure chemical deodorizers. We honor ancestral slow-craft methods that preserve terroir.
        </p>
      </div>

      {/* Interactive Step Navigator */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-10">
        {CRAFTSMANSHIP_STEPS.map((item, idx) => (
          <button
            key={item.step}
            onClick={() => setActiveStepIndex(idx)}
            className={`p-3.5 rounded-xl border text-left transition-all ${
              activeStepIndex === idx
                ? 'bg-[#28150D] border-[#CCA04E] shadow-md'
                : 'bg-[#160D08] border-[#26140D] hover:border-[#3E2215]'
            }`}
          >
            <div className="text-[11px] font-mono text-[#CCA04E] tabular-nums font-bold">
              {item.step}
            </div>
            <div className="text-xs font-serif font-semibold text-[#F6EFE6] mt-1 line-clamp-1">
              {item.title}
            </div>
          </button>
        ))}
      </div>

      {/* Active Step Feature Box */}
      <div className="bg-[#180E09] border border-[#2F1A11] rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Visual Artwork Area */}
        <div className="lg:col-span-5 bg-[#120A07] border-b lg:border-b-0 lg:border-r border-[#26140D] p-8 flex items-center justify-center min-h-[280px]">
          <div className="w-full max-w-sm h-64">
            <CacaoPodArtwork />
          </div>
        </div>

        {/* Right Detail Information */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#CCA04E] px-2.5 py-1 bg-[#26140D] rounded font-bold">
                STAGE {activeStep.step} OF 06
              </span>
              <span className="text-xs uppercase tracking-wider text-[#9E8675]">
                Traditional Method
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F6EFE6]">
              {activeStep.title}
            </h3>

            <p className="text-sm sm:text-base text-[#C4B3A3] font-sans leading-relaxed">
              {activeStep.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#26140D]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#25150D] flex items-center justify-center text-[#E2BC6A]">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-[#9E8675] uppercase tracking-wider">Duration / Metric</div>
                  <div className="text-xs font-semibold text-[#F6EFE6]">{activeStep.duration}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#25150D] flex items-center justify-center text-[#E2BC6A]">
                  <Hammer className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-[#9E8675] uppercase tracking-wider">Equipment / Tool</div>
                  <div className="text-xs font-semibold text-[#F6EFE6]">{activeStep.tool}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#26140D] flex items-center justify-between">
            <button
              onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : 5))}
              className="text-xs uppercase tracking-wider text-[#9E8675] hover:text-[#CCA04E] transition-colors"
            >
              ← Previous Stage
            </button>
            <button
              onClick={() => setActiveStepIndex((prev) => (prev < 5 ? prev + 1 : 0))}
              className="text-xs uppercase tracking-wider text-[#CCA04E] hover:text-white font-semibold transition-colors"
            >
              Next Stage →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
