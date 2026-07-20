import { motion } from 'motion/react';

/**
 * SectionHeader -Reusable section heading for portfolio page sections.
 */
const SectionHeader = ({ id, badge, title, subtitle, align = 'center', className = '' }) => {
  const alignClass = align === 'left' ? 'text-left' : 'text-center mx-auto max-w-3xl';

  return (
    <motion.header
      id={id}
      className={`mb-12 ${alignClass} ${className}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {badge && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/25 bg-purple-500/10 dark:bg-purple-500/8 px-4 py-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-700 dark:text-purple-300">
            {badge}
          </span>
        </div>
      )}
      <h2 className="mb-4 text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{subtitle}</p>
      )}
    </motion.header>
  );
};

export default SectionHeader;
