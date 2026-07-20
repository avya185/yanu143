import { ArrowRight, Layers } from 'lucide-react';
import GradientButton from '../ui/GradientButton';
import PageHero from '../ui/PageHero';

/**
<<<<<<< HEAD
 * PortfolioHero -Primary hero with blueprint headline and CTAs (Section 2).
=======
 * PortfolioHero — Primary hero with blueprint headline and CTAs (Section 2).
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
 */
const PortfolioHero = ({ onViewProjects, onExploreServices }) => (
  <PageHero
    badge={
      <>
        <Layers className="h-3.5 w-3.5" aria-hidden="true" />
        MaVionix Digital Agency
      </>
    }
    title={
      <>
        Our Work <span className="text-gradient-royal">Speaks</span> for <span className="text-slate-950 dark:text-white">Itself</span> and{' '}
        <span className="text-gradient-lead">Growth</span>
      </>
    }
<<<<<<< HEAD
    description="Explore MaVionix&apos;s portfolio of high-performance websites, e-commerce platforms, AI solutions, mobile applications, and creative digital experiences -built with precision for businesses that demand results."
    actions={
      <>
        <div className="mt-8 flex flex-row items-center justify-center gap-3 sm:flex-row sm:items-start sm:justify-start">
=======
    description="Explore MaVionix&apos;s portfolio of high-performance websites, e-commerce platforms, AI solutions, mobile applications, and creative digital experiences — built with precision for businesses that demand results."
    actions={
      <>
        <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-3 sm:flex-row sm:items-start sm:justify-start">
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
          
        <button
          className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-[#6d28d9] dark:text-white"
          onClick={onViewProjects}
        >
          View Projects
          <ArrowRight className="h-5 w-5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
        </button>

        {onExploreServices && (
          <button
            className="inline-flex items-center justify-center rounded-full border border-purple-200 bg-white px-5 py-3 text-xs font-black uppercase tracking-wider text-purple-700 shadow-sm transition hover:-translate-y-0.5 hover:border-purple-400 hover:shadow-lg dark:border-purple-900 dark:bg-slate-950 dark:text-purple-200"
            onClick={onExploreServices}
          >
            Explore Services
          </button>
         
        )}
         </div>
      </>
    }
    stats={[
      { value: '50+', label: 'Websites Delivered' },
      { value: '8+', label: 'Industries Served' },
      { value: '21 days', label: 'Avg. Launch Time' },
    ]}
    className="border-b-0 pb-0"
  />
);

export default PortfolioHero;
