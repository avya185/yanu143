import SectionHeader from '../ui/SectionHeader';
import { PORTFOLIO_PROJECTS, PORTFOLIO_FILTERS, SERVICE_CATEGORIES } from '../../data/portfolio';

/**
 * PortfolioOverview — High-level summary before project grid.
 */
const PortfolioOverview = () => {
  const filterCategoryCount = PORTFOLIO_FILTERS.length - 1;

  return (
    <section className="py-16 bg-white dark:bg-[#07070f]" aria-labelledby="overview-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="overview-heading"
          badge="Portfolio Overview"
          title="Digital Solutions Across Every Business Need"
          subtitle="From corporate websites and e-commerce stores to AI chatbots, mobile apps, branding, and data analytics — browse case studies organized by service category."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[
            { label: 'Case Studies', value: String(PORTFOLIO_PROJECTS.length) },
            { label: 'Filter Categories', value: String(filterCategoryCount) },
            { label: 'Service Lines', value: String(SERVICE_CATEGORIES.length) },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm dark:border-white/10 dark:bg-[#08101d]"
            >
              <p className="text-2xl font-black gradient-text">{stat.value}</p>
              <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioOverview;
