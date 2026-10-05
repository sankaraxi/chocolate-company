import React, { useState } from 'react';
import { BRAND_VALUES, TESTIMONIALS } from '../data/chocolateData.js';
import { ShieldCheck, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function ValuesAndReviews() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
    }
  };

  return (
    <section id="values" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#24150D]">
      
      {/* Three Pillars: Quantitative Adjacency */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 border-b border-[#26140D]">
        {BRAND_VALUES.map((val) => (
          <div key={val.title} className="bg-[#160D08] border border-[#2B160E] rounded-xl p-6 space-y-3">
            <div className="text-2xl font-serif font-bold text-[#E2BC6A] tabular-nums">
              {val.metric}
            </div>
            <h3 className="text-base font-serif font-semibold text-[#F6EFE6]">
              {val.title}
            </h3>
            <p className="text-xs text-[#9E8675] font-sans leading-relaxed">
              {val.description}
            </p>
          </div>
        ))}
      </div>

      {/* Attributable Testimonials */}
      <div className="py-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-[#CCA04E] font-medium mb-1">
            Connoisseur Acclaim
          </div>
          <h2 className="text-3xl font-serif text-[#F6EFE6]">
            Words from Sommelier Salons
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#180E09] border border-[#26140D] rounded-xl p-6 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="text-xs text-[#CCA04E] tracking-widest">
                  {'★'.repeat(t.rating)}
                </div>
                <p className="text-xs text-[#C4B3A3] font-sans italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#24130A]">
                <div className="text-xs font-serif font-bold text-[#F6EFE6]">
                  {t.author}
                </div>
                <div className="text-[11px] text-[#9E8675] font-sans">
                  {t.role} · {t.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Private Allocation Newsletter Banner */}
      <div className="mt-8 bg-gradient-to-r from-[#1C100A] via-[#24140D] to-[#1C100A] border border-[#3E2316] rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-2xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#CCA04E] font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Private Salon Allocations</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F6EFE6]">
          Receive First Harvest Reserve Notices
        </h3>

        <p className="text-xs sm:text-sm text-[#A69383] font-sans max-w-lg mx-auto leading-relaxed">
          Our micro-lot single estate bars are produced in strictly limited runs of 500 numbered bars.
          Subscribers receive priority reservation access before public seasonal cellar releases.
        </p>

        {newsletterSubmitted ? (
          <div className="inline-flex items-center gap-2 bg-[#25150D] text-[#E2BC6A] border border-[#CCA04E] px-4 py-2.5 rounded-lg text-xs font-medium">
            <Check className="w-4 h-4" />
            <span>Invitation confirmed. You will receive priority notices for the next micro-lot.</span>
          </div>
        ) : (
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 pt-2">
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your private salon email..."
              className="flex-1 bg-[#140C08] border border-[#351E14] rounded-lg px-4 py-2.5 text-xs text-[#F6EFE6] focus:outline-none focus:border-[#CCA04E] placeholder:text-[#6E5546]"
            />
            <button
              type="submit"
              className="py-2.5 px-5 bg-[#CCA04E] hover:bg-[#E2BC6A] text-[#120B08] font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors whitespace-nowrap"
            >
              Join Allocation
            </button>
          </form>
        )}
      </div>

    </section>
  );
}
