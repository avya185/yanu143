import { motion } from 'motion/react';
import { WHY_CHOOSE_ITEMS } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';
import { cardFadeUp, cardViewport, useCardTransition } from '../../utils/animations';

/**
 * WhyChooseSection -MaVionix value propositions (blueprint Section 6).
 */
const WhyChooseSection = () => {
  const cardTransition = useCardTransition();

  return (
  <section className="py-20 bg-white dark:bg-[#040409]" aria-labelledby="why-choose-heading">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        id="why-choose-heading"
        badge="Why MaVionix"
        title="Why Choose MaVionix"
        subtitle="Core value propositions across website development, mobile apps, AI solutions, design, marketing, SEO, and cybersecurity."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {WHY_CHOOSE_ITEMS.map((item, index) => (
          <motion.article
            key={item.id}
            initial="hidden"
            whileInView="visible"
            viewport={cardViewport}
            variants={cardFadeUp}
            transition={cardTransition(index)}
            className="rounded-2xl border border-slate-200 p-6 dark:border-white/8 dark:bg-white/[0.02]"
          >
            <span className="text-sm font-black text-blue-600 dark:text-blue-400">{item.number}</span>
            <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-500 border-t border-slate-200 dark:border-white/8 pt-3">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Purpose: </span>
              {item.purpose}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
  );
};

export default WhyChooseSection;
