import React, { useState } from 'react';

const faqs = [
  {
    q: 'Do I need prior cosmetic formulation experience?',
    a: 'Not at all! The masterclass is designed for complete beginners as well as beauty enthusiasts. On Day 1, we start with carrier & essential oils fundamentals, and on Day 2, we guide you through advance actives and preservation step by step.'
  },
  {
    q: 'What materials and ingredients will I need?',
    a: 'You will need basic carrier oils (e.g., jojoba, argan), essential oils (e.g., rosemary), active ingredients, and glass dropper bottles. Upon enrollment, you receive our complete Material Guide with exact links to trusted, cosmetic-grade ingredient vendors in India.'
  },
  {
    q: 'What does the ₹49 masterclass package include?',
    a: 'The ₹49 fee covers the complete 2-day live training, step-by-step hands-on formulation of 4 serums, the comprehensive Recipe PDF with exact measurements, Material Sourcing Guide, and your verified Lemon Academia Certificate of Completion.'
  },
  {
    q: 'What serums will we make during the sessions?',
    a: 'You will make 4 serums in total: on Day 1, an Anti-Frizz & Shine Serum and a Damage Repair Serum; on Day 2, an Anti-Hairfall & Regrowth Serum (Rosemary actives) and an Advance Scalp Treatment Serum.'
  },
  {
    q: 'Will I receive a certificate?',
    a: 'Yes! Upon completing the 2-day masterclass, you will receive an official, verifiable digital Lemon Academia Certificate of Completion.'
  },
  {
    q: 'What if I miss a live session?',
    a: 'No worries! All enrolled students receive access to session recordings along with the full Recipe PDF so you can learn and formulate at your own pace.'
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto bg-surface-container-low/40 rounded-3xl reveal border border-outline-variant/20" id="faq">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/15 text-on-primary-container text-xs font-bold uppercase tracking-wider mb-3 border border-primary-container/30">
          <span className="material-symbols-outlined text-[16px] text-primary">help</span>
          Got Questions?
        </div>
        <h2 className="font-display-lg text-display-lg-mobile md:text-headline-lg text-on-surface">Frequently Asked Questions</h2>
      </div>
      <div className="space-y-4 px-2 md:px-6">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className="bg-surface border border-outline-variant/20 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md">
              <button 
                onClick={() => toggle(idx)} 
                className="w-full p-6 flex justify-between items-center text-left focus:outline-none group"
              >
                <span className="font-label-md text-body-lg text-on-surface group-hover:text-primary transition-colors font-semibold pr-4">{faq.q}</span>
                <span 
                  className="material-symbols-outlined text-primary transition-transform duration-300 shrink-0"
                  style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  expand_more
                </span>
              </button>
              <div 
                className="transition-all duration-300 ease-in-out overflow-hidden"
                style={{ 
                  maxHeight: isOpen ? '240px' : '0px', 
                  opacity: isOpen ? 1 : 0 
                }}
              >
                <p className="px-6 pb-6 text-on-surface-variant font-body-md leading-relaxed">{faq.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
