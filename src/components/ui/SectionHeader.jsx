/**
 * SectionHeader — Reusable section heading for portfolio page sections.
 */
const SectionHeader = ({ id, badge, title, subtitle, align = 'center', className = '' }) => {
  const alignClass = align === 'left' ? 'text-left' : 'text-center mx-auto max-w-3xl';

  return (
    <header id={id} className={`mb-12 ${alignClass} ${className}`}>
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
    </header>
  );
};

export default SectionHeader;
