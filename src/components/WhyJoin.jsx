import React from 'react';

const benefits = [
  {
    icon: 'science',
    title: 'Formulate 4 Practical Serums Live',
    desc: 'Get hands-on experience formulating 2 oil-based serums (anti-frizz & damage repair) and 2 advanced hair growth serums during the masterclass.'
  },
  {
    icon: 'spa',
    title: 'Rosemary & Hair Growth Actives',
    desc: 'Learn the real science behind stimulating follicle circulation, rosemary extracts, and evidence-backed hairfall reduction formulations.'
  },
  {
    icon: 'menu_book',
    title: 'Material Guide & Complete Recipe PDF',
    desc: 'Receive our comprehensive PDF with exact measurements, formulation percentages, safe usage levels, and trusted supplier lists.'
  },
  {
    icon: 'verified',
    title: 'Verified Certificate of Completion',
    desc: 'Earn an authentic Lemon Academia Certificate after completing the 2-day masterclass to display on your portfolio or brand page.'
  },
  {
    icon: 'history_edu',
    title: 'pH Balancing & Safe Preservation',
    desc: 'Master the crucial knowledge of testing pH, maintaining stability, and choosing clean preservatives so your serums stay fresh and effective.'
  },
  {
    icon: 'groups',
    title: 'Community Support & Doubt Clearing',
    desc: 'Join our dedicated WhatsApp student community for real-time guidance, ingredient sourcing tips, and post-session support.'
  }
];

export default function WhyJoin() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/15 text-on-primary-container text-xs font-bold uppercase tracking-wider mb-4 border border-primary-container/30">
          <span className="material-symbols-outlined text-[16px] text-primary">star</span>
          Why Choose Lemon Academia
        </div>
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">
          Why Join This Masterclass?
        </h2>
        <p className="text-body-lg text-on-surface-variant">
          Everything you need to confidently create safe, potent, and professional hair care serums for personal use or to launch your own brand.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="glass-card p-6 rounded-3xl border border-outline-variant/30 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col justify-start"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary-container/20 text-primary flex items-center justify-center mb-5 shrink-0">
              <span className="material-symbols-outlined text-[26px]">{b.icon}</span>
            </div>
            <h3 className="font-headline-md text-xl font-bold text-on-surface mb-2">{b.title}</h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed text-sm">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
