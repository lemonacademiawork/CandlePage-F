import React from 'react';

export default function CourseModules({ onOpenModal }) {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal" id="course">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/15 text-on-primary-container text-xs font-bold uppercase tracking-wider mb-4 border border-primary-container/30">
          <span className="material-symbols-outlined text-[16px] text-primary">menu_book</span>
          Curriculum Overview
        </div>
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-4">
          Hair Serum Making Masterclass
        </h2>
        <p className="text-body-lg text-on-surface-variant">
          Master the exact science and craft of formulating salon-grade, chemical-free hair serums in 2 comprehensive days.
        </p>
      </div>

      {/* 2-Day Module Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

        {/* Day 1: Oil Based Serum Making */}
        <div className="glass-card p-8 rounded-3xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between relative shadow-lg">
          <div className="absolute -top-3.5 left-8 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            Day 1
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4 mt-2">
              <span className="w-10 h-10 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px]">oil_barrel</span>
              </span>
              <div>
                <h3 className="font-display-lg text-headline-md text-on-surface">Oil Based Serum Making</h3>
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">Foundation &amp; Shine</span>
              </div>
            </div>

            <p className="text-sm text-on-surface-variant mb-6 pb-4 border-b border-outline-variant/20">
              Master the science of plant oils, fatty acid profiles, and lightweight formulations that lock in hydration without grease.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span>
                <div>
                  <span className="font-semibold text-on-surface text-body-md block">Carrier &amp; Essential Oils Knowledge</span>
                  <span className="text-xs text-on-surface-variant">Learn deep penetration rates, comedogenic ratings, and tailored oil blends.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span>
                <div>
                  <span className="font-semibold text-on-surface text-body-md block">Anti-Frizz &amp; Shine Serum</span>
                  <span className="text-xs text-on-surface-variant">Formulate a smoothing serum that seals hair cuticles and boosts radiant gloss.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span>
                <div>
                  <span className="font-semibold text-on-surface text-body-md block">Damage Repair Serum</span>
                  <span className="text-xs text-on-surface-variant">Target split ends, heat damage, and restore brittle strands with restorative lipids.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-primary-container/10 p-3 rounded-2xl border border-primary-container/30">
                <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">science</span>
                <div>
                  <span className="font-bold text-on-primary-container text-body-md block">Practical: Make 2 Serums</span>
                  <span className="text-xs text-on-surface-variant">Follow live step-by-step measuring, blending, and bottling of 2 custom serums.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-xs text-on-surface-variant font-medium">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-tertiary">schedule</span> Live Practical Session
            </span>
            <span className="flex items-center gap-1 text-primary font-bold">
              <span className="material-symbols-outlined text-[16px]">verified</span> 2 Formulations
            </span>
          </div>
        </div>

        {/* Day 2: Advance Hair Growth Serum */}
        <div className="glass-card p-8 rounded-3xl border-2 border-secondary/30 hover:border-secondary/50 transition-all duration-300 flex flex-col justify-between relative shadow-lg">
          <div className="absolute -top-3.5 left-8 bg-secondary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            Day 2 &bull; Advanced
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4 mt-2">
              <span className="w-10 h-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px]">psychiatry</span>
              </span>
              <div>
                <h3 className="font-display-lg text-headline-md text-on-surface">Advance Hair Growth Serum</h3>
                <span className="text-xs text-secondary font-semibold uppercase tracking-wider">Actives &amp; Regrowth</span>
              </div>
            </div>

            <p className="text-sm text-on-surface-variant mb-6 pb-4 border-b border-outline-variant/20">
              Formulate potent root-stimulating scalp serums utilizing clinical actives, rosemary extracts, and professional preservation.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                <div>
                  <span className="font-semibold text-on-surface text-body-md block">Hair Growth Actives - Rosemary Focus</span>
                  <span className="text-xs text-on-surface-variant">Understand rosemary carnosic acid, scalp circulation, and active percentages.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                <div>
                  <span className="font-semibold text-on-surface text-body-md block">Anti-Hairfall &amp; Regrowth Serum</span>
                  <span className="text-xs text-on-surface-variant">Create a lightweight leave-in root tonic that strengthens follicles and minimizes shedding.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">check_circle</span>
                <div>
                  <span className="font-semibold text-on-surface text-body-md block">pH &amp; Preservative Knowledge</span>
                  <span className="text-xs text-on-surface-variant">Master precise pH balance (4.5–5.5) and broad-spectrum safe preservation techniques.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-secondary/10 p-3 rounded-2xl border border-secondary/30">
                <span className="material-symbols-outlined text-secondary text-[22px] mt-0.5">science</span>
                <div>
                  <span className="font-bold text-on-surface text-body-md block">Practical: Make 2 Advance Serums</span>
                  <span className="text-xs text-on-surface-variant">Hands-on active formulation, pH adjustment, and stabilizing advanced serums.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-xs text-on-surface-variant font-medium">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-tertiary">schedule</span> Live Practical Session
            </span>
            <span className="flex items-center gap-1 text-secondary font-bold">
              <span className="material-symbols-outlined text-[16px]">verified</span> 2 Advance Formulations
            </span>
          </div>
        </div>

      </div>

      {/* Includes Section Banner */}
      <div className="bg-gradient-to-r from-primary-container/20 via-surface-container to-secondary-container/20 border-2 border-primary/20 rounded-3xl p-6 md:p-8 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
              <span className="material-symbols-outlined text-[18px]">card_giftcard</span>
              Complete Package
            </div>
            <h3 className="font-display-lg text-2xl md:text-3xl text-on-surface">
              Includes: Material Guide + Recipe PDF + Certificate
            </h3>
            <p className="text-body-md text-on-surface-variant max-w-2xl">
              Get all formulation measurement sheets, vetted vendor lists for pure oils &amp; actives, and a verified Lemon Academia Certificate of Completion upon finishing.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface rounded-full text-xs font-semibold text-on-surface border border-outline-variant/30">
                <span className="material-symbols-outlined text-[16px] text-tertiary">inventory_2</span> Material &amp; Vendor Guide
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface rounded-full text-xs font-semibold text-on-surface border border-outline-variant/30">
                <span className="material-symbols-outlined text-[16px] text-primary">menu_book</span> Detailed Recipe PDF
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface rounded-full text-xs font-semibold text-on-surface border border-outline-variant/30">
                <span className="material-symbols-outlined text-[16px] text-secondary">workspace_premium</span> Verified Certificate
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface rounded-full text-xs font-semibold text-on-surface border border-outline-variant/30">
                <span className="material-symbols-outlined text-[16px] text-primary">videocam</span> Practical 4 Serums
              </span>
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="lg:border-l lg:border-outline-variant/30 lg:pl-8 flex flex-col justify-center items-start lg:items-end shrink-0">
            <span className="text-xs uppercase tracking-wider text-on-surface-variant font-bold mb-1">Special Masterclass Fee</span>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="font-display-lg text-4xl md:text-5xl font-extrabold text-primary">₹49</span>
              <span className="text-lg text-on-surface-variant line-through opacity-60">₹499</span>
              <span className="bg-tertiary text-white text-xs px-2.5 py-0.5 rounded-full font-bold">90% OFF</span>
            </div>
            <button
              onClick={() => onOpenModal('masterclass')}
              className="w-full sm:w-auto bg-primary text-on-primary px-8 py-3.5 rounded-full font-label-md text-label-md font-bold hover:scale-105 transition-all active:scale-95 btn-primary-shadow text-center flex items-center justify-center gap-2"
            >
              <span>Enroll Now at ₹49</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
