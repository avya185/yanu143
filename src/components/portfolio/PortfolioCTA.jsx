import { motion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import GradientButton from '../ui/GradientButton';

/**
 * PortfolioCTA -Final conversion section (blueprint Section 9).
 */
const PortfolioCTA = ({ onViewChange }) => (
  <section
    className="relative overflow-hidden py-20 bg-slate-50 dark:bg-[#07070f]"
    aria-label="Ready to build with MaVionix"
  >
    <div
      className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-transparent"
      aria-hidden="true"
    />
    <div className="orb orb-blue absolute -top-20 -right-20 h-64 w-64 opacity-60" aria-hidden="true" />

    <motion.div
      className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/25 bg-purple-500/10 px-4 py-2 mx-auto">
        <MessageSquare className="h-4 w-4 text-purple-700" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-widest text-purple-700">Ready to collaborate</span>
      </div>
      <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4">
        Ready to Build Something Great?
      </h2>
      <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
        Let us turn your vision into a high-performance digital product. MaVionix is ready when you are.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <GradientButton
          onClick={() => onViewChange('contact')}
          size="lg"
          variant="outline"
          className="border-purple-500/40! text-purple-700! dark:text-purple-200! hover:bg-purple-500/10!"
        >
          Start a Project
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </GradientButton>
      </div>
    </motion.div>
  </section>
);

export default PortfolioCTA;
