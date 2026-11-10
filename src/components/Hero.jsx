import React from 'react';

export default function Hero({ onOpenModal }) {
  return (
    <section className="relative min-h-[85vh] pt-28 md:pt-36 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-surface via-surface-container-low/40 to-surface">
      {/* Background Subtle Gradient & Accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-tertiary-container/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/15 text-on-primary-container text-xs md:text-sm font-bold uppercase tracking-wider mb-5 border border-primary-container/30">
              <span className="material-symbols-outlined text-[18px] text-primary">spa</span>
              2-Day Intensive Masterclass
            </div>

            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight mb-4">
              Hair Serum Making <span className="text-primary italic">Master Class</span>
            </h1>

            <p className="text-xl md:text-2xl font-serif italic text-secondary font-semibold mb-4">
              Craft Your Own Hair Care Magic!
            </p>

            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 max-w-xl leading-relaxed">
              From pure carrier &amp; essential oils to advanced rosemary hair growth actives. Formulate salon-quality serums at home with complete recipe guides, material lists, and hands-on guidance.
            </p>

            {/* Checklist items inspired by poster */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2.5 text-on-surface">
                <span className="w-5 h-5 rounded-full bg-tertiary text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                </span>
                <span className="font-medium text-sm md:text-base">Learn Easy Recipe</span>
              </div>
              <div className="flex items-center gap-2.5 text-on-surface">
                <span className="w-5 h-5 rounded-full bg-tertiary text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                </span>
                <span className="font-medium text-sm md:text-base">Choose Premium Ingredients</span>
              </div>
              <div className="flex items-center gap-2.5 text-on-surface">
                <span className="w-5 h-5 rounded-full bg-tertiary text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                </span>
                <span className="font-medium text-sm md:text-base">Make 4 Serums Hands-On</span>
              </div>
              <div className="flex items-center gap-2.5 text-on-surface">
                <span className="w-5 h-5 rounded-full bg-tertiary text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[14px]">check</span>
                </span>
                <span className="font-medium text-sm md:text-base">Get Expert Formulation Tips</span>
              </div>
            </div>

            {/* Pricing highlight & CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
              <button
                onClick={() => onOpenModal('masterclass')}
                className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-md text-label-md text-[18px] hover:scale-105 transition-all active:scale-95 flex items-center justify-center gap-3 btn-primary-shadow font-bold"
              >
                <span>Enroll Now &bull; At Just ₹49</span>
                <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full uppercase tracking-wider">90% OFF</span>
              </button>

              <a
                href="https://wa.me/917905713069"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface border-2 border-secondary text-secondary px-8 py-4 rounded-full font-label-md text-label-md text-[18px] hover:bg-secondary hover:text-white transition-all flex items-center justify-center gap-2 group"
              >
                <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.548-.68.116-.173.231-.144.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"></path>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            <p className="text-xs text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary text-[18px]">verified</span>
              Includes Material Guide + Recipe PDF + Certificate of Completion
            </p>
          </div>

          {/* Right Column: Visual Poster Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-sm sm:max-w-md w-full">
              {/* Decorative background glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-xl opacity-70"></div>
              
              <div className="relative glass-card rounded-3xl p-3 border-2 border-primary/20 shadow-2xl overflow-hidden group">
                <img
                  src={`${import.meta.env.BASE_URL}images/serum-hero.jpg`}
                  alt="Hair Serum Making Master Class Poster"
                  className="w-full h-auto rounded-2xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500 shadow-md"
                  fetchPriority="high"
                />

                <div className="absolute top-6 right-6 bg-[#004625] text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5 border border-white/20">
                  <span className="material-symbols-outlined text-[16px] text-[#9af6b8]">bolt</span>
                  Live Masterclass
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
