import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { CLIENT_TESTIMONIALS } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';
import { cardFadeUp, cardViewport, useCardTransition } from '../../utils/animations';

/**
 * onials -Social proof from clients across service categories (blueprint Section 8).
 */
const ClientTestimonials = () => {
  const cardTransition = useCardTransition();

  return (
  <section
    className="py-20 bg-slate-100 dark:bg-[#0a0814]"
    aria-labelledby="testimonials-heading"
  >
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        id="testimonials-heading"
        badge="Client Voices"
        title="What Our Clients Say"
        subtitle="Testimonials from businesses that partnered with MaVionix across corporate websites, e-commerce, AI chatbots, mobile UI, and cybersecurity."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CLIENT_TESTIMONIALS.map((item, index) => (
          <motion.blockquote
            key={item.id}
            initial="hidden"
            whileInView="visible"
            viewport={cardViewport}
            variants={cardFadeUp}
            transition={cardTransition(index)}
            className="relative rounded-2xl border border-slate-200 border-l-4 border-l-purple-500 bg-white p-6 dark:border-white/8 dark:border-l-purple-400 dark:bg-[#131020]"
          >
            <Quote className=" absolute top-4 right-4 h-8 w-8 text-purple-500/15 dark:text-amber-50" aria-hidden="true" />
            <div className="mb-3 flex gap-0.5" aria-label={`${item.rating} out of 5 stars`}>
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
              ))}
            </div>
            <p className="text-sm italic text-slate-700 dark:text-slate-300 leading-relaxed">
              &ldquo;{item.quote}&rdquo;
            </p>
            <div className="mt-5 -mx-6 -mb-6 rounded-b-2xl border-t border-slate-200 bg-gradient-to-r from-slate-50 to-purple-50 px-6 py-4 dark:border-white/8 dark:from-white/[0.03] dark:to-purple-500/[0.08]">
              <cite className="not-italic font-bold text-slate-900 dark:text-white">{item.name}</cite>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {item.role}, {item.company}
              </p>
            </div>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
  );
};

export default ClientTestimonials;
