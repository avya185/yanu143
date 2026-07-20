/**
<<<<<<< HEAD
 * GradientButton -MaVionix signature gradient CTA (matches blog theme).
=======
 * GradientButton — MaVionix signature gradient CTA (matches blog theme).
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
 */
const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
};

const GradientButton = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  target,
  rel,
}) => {
  const sizeClass = SIZES[size] || SIZES.md;
  const baseClasses = `
    inline-flex items-center justify-center gap-2 rounded-xl font-semibold
    transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-purple-500/50
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${sizeClass} ${className}
  `;
  const primaryClasses = 'btn-gradient text-white shadow-[0_10px_28px_rgba(124,58,237,0.26)] hover:-translate-y-0.5';
  const tealClasses =
    'bg-teal-500 text-white shadow-[0_10px_28px_rgba(20,184,166,0.28)] hover:bg-teal-400 hover:-translate-y-0.5';
  const outlineClasses = `
    border border-purple-500/30 text-purple-700 dark:text-purple-300 bg-white/80 dark:bg-white/5
    hover:border-purple-400 hover:bg-purple-500/10 hover:-translate-y-0.5
  `;
  const variantClasses =
    variant === 'outline' ? outlineClasses : variant === 'teal' ? tealClasses : primaryClasses;
  const combinedClass = `${baseClasses} ${variantClasses}`;

  if (href) {
    return (
      <a href={href} className={combinedClass} target={target} rel={rel} aria-disabled={disabled}>
        <span className="inline-flex items-center justify-center gap-2">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button type={type} className={combinedClass} onClick={disabled ? undefined : onClick} disabled={disabled}>
      <span className="inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default GradientButton;
