import React from 'react';

export default function Certificate() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/15 text-on-primary-container text-xs font-bold uppercase tracking-wider mb-4 border border-primary-container/30">
          <span className="material-symbols-outlined text-[16px] text-primary">workspace_premium</span>
          Industry Recognized
        </div>
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-4">
          Earn Your Verified Certificate
        </h2>
        <p className="text-body-lg text-on-surface-variant">
          Complete the 2-day Hair Serum Making Masterclass and receive your official digital certificate from Lemon Academia to validate your formulation mastery.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="glass-card p-4 md:p-8 rounded-3xl max-w-4xl w-full border border-outline-variant/30 shadow-xl">
          <img
            alt="Lemon Academia Certificate of Completion for Hair Serum Making"
            className="w-full h-auto rounded-xl shadow-lg object-contain"
            src={`${import.meta.env.BASE_URL}images/certificate.jpg`}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
