import React from 'react';
import { motion } from 'motion/react';


interface HeroStat {
  value: string;
  label: string;
}

interface PageHeroProps {
  badge: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  actions?: React.ReactNode;
  stats?: HeroStat[];
  children?: React.ReactNode;
  badgeClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  className?: string;
  svg?: React.ReactNode;
}

export default function PageHero({
  badge,
  title,
  description,
  actions,
  stats,
  children,
  badgeClassName = '',
  titleClassName = '',
  descriptionClassName = '',
  className = '',
  svg
}: PageHeroProps) {
  return (
   <section
<<<<<<< HEAD
  className={`relative left-1/2 right-1/2  -mx-[50vw] w-screen mt-5  overflow-hidden border-b border-slate-200/70 bg-white/80 dark:border-slate-800/80 dark:bg-[#06070d] ${className}`.trim()}
=======
  className={`relative left-1/2 right-1/2 -mt-4 -mx-[50vw] w-screen  overflow-hidden border-b border-slate-200/70 bg-white/80 dark:border-slate-800/80 dark:bg-[#06070d] ${className}`.trim()}
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
  aria-label="Page hero"
>
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.07),transparent_35%),radial-gradient(circle_at_80%_15%,rgba(124,58,237,0.045),transparent_30%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.16),transparent_32%),radial-gradient(circle_at_82%_10%,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.10),transparent_32%)]" />
<div className="absolute left-1/2 top-10 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-purple-200/25 dark:bg-purple-500/10 blur-[120px]" />
<div className="absolute right-[-5%] top-[18%] h-[280px] w-[280px] rounded-full bg-purple-100/30 dark:bg-blue-500/10 blur-[110px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/35 to-transparent" />
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(rgba(124,58,237,0.7) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          
          className={`inline-flex items-center gap-2 rounded-full border border-purple-200/70 bg-white/80 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-purple-700 shadow-sm backdrop-blur dark:border-purple-500/25 dark:bg-white/5 dark:text-purple-200 ${badgeClassName}`.trim()}
        >
          
         {svg}
          {badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.06, ease: 'easeOut' }}
          className={`mx-auto mt-6 max-w-5xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-slate-950 dark:text-white sm:text-5xl lg:text-6xl ${titleClassName}`.trim()}
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
          className={`mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg ${descriptionClassName}`.trim()}
        >
          {description}
        </motion.p>

        {actions ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: 'easeOut' }}
<<<<<<< HEAD
            className="mt-8 flex flex-row flex-wrap items-center justify-center gap-3 sm:flex-row"
=======
            className="mt-8 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row"
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
          >
            {actions}
          </motion.div>
        ) : null}

        {stats ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: 'easeOut' }}
            className="mt-10 grid w-full max-w-4xl grid-cols-3 gap-2 sm:gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl sm:rounded-2xl border border-slate-200/70 bg-white/85 p-2.5 sm:p-5 text-center shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-slate-900/70"
              >
                <p className="text-base font-black tracking-tight text-slate-950 dark:text-white sm:text-2xl lg:text-3xl">{stat.value}</p>
                <p className="mt-1 sm:mt-2 text-[8px] sm:text-[11px] font-black uppercase tracking-[0.08em] sm:tracking-[0.22em] text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        ) : null}

        {children ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="mt-10 w-full"
          >
            {children}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
