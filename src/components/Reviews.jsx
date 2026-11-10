import React from 'react';

const reviews = [
  {
    avatar: 'images/student2.jpg',
    name: 'Radhika S.',
    role: 'Hair Care Enthusiast',
    comment: 'The rosemary hair growth formulation is pure magic! My clients saw noticeable hairfall reduction within 4 weeks. The recipe PDF makes measurements foolproof.'
  },
  {
    avatar: 'images/student1.jpg',
    name: 'Umair K.',
    role: 'D2C Brand Creator',
    comment: 'The oil blending and penetration rate lessons on Day 1 were an eye-opener. The anti-frizz serum I made feels lightweight, non-greasy, and totally salon grade!'
  },
  {
    avatar: 'images/student3.jpg',
    name: 'Priyanka M.',
    role: 'Organic Formulator',
    comment: 'Understanding pH balancing and natural preservatives gave me the clarity I was missing. Making 4 serums live gave me so much hands-on confidence. Totally worth it!'
  },
];

export default function Reviews() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal" id="reviews">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/15 text-on-primary-container text-xs font-bold uppercase tracking-wider mb-4 border border-primary-container/30">
          <span className="material-symbols-outlined text-[16px] text-primary">rate_review</span>
          Student Testimonials
        </div>
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-2">Student Reviews</h2>
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          ))}
          <span className="ml-2 font-headline-md text-on-surface">4.9/5 Student Rating</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reviews.map((r, i) => (
          <div key={i} className="glass-card p-8 rounded-2xl relative flex flex-col justify-between">
            <div>
              <span className="absolute top-4 right-8 font-display-lg text-[64px] opacity-10 text-secondary" aria-hidden="true">"</span>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={`${import.meta.env.BASE_URL}${r.avatar}`}
                  alt={`${r.name}'s Avatar`}
                  className="w-12 h-12 rounded-full object-cover border border-outline-variant/30"
                />
                <div>
                  <h6 className="font-headline-md text-body-lg leading-none">{r.name}</h6>
                  <span className="text-xs text-on-surface-variant">{r.role || 'Verified Student'}</span>
                </div>
              </div>
              <p className="italic text-on-surface-variant font-body-md">"{r.comment}"</p>
            </div>
            <div className="mt-4 pt-4 border-t border-outline-variant/15 flex items-center gap-1 text-primary">
              {[...Array(5)].map((_, idx) => (
                <span key={idx} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
          </div>
        ))}
        {/* Summary Rating Card */}
        <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center border-2 border-primary/20 shadow-md">
          <div className="text-display-lg text-primary font-bold mb-2">4.9/5</div>
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            ))}
          </div>
          <div className="font-label-md text-on-surface font-semibold">Based on 1,200+ Learners</div>
          <p className="text-xs text-on-surface-variant mt-2">Loved by DIY makers, stylists &amp; indie beauty founders across India.</p>
        </div>
      </div>
    </section>
  );
}
