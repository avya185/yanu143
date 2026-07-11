import { PORTFOLIO_FILTERS } from '../../data/portfolio';

/**
 * ProjectFilter — Category toggle bar above project grid (blueprint Section 5).
 */
const ProjectFilter = ({ activeCategory, onCategoryChange }) => (
  <div
    className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-thin md:overflow-x-visible md:flex-wrap"
    role="tablist"
    aria-label="Filter projects by category"
  >
    {PORTFOLIO_FILTERS.map((filter) => {
      const isActive = activeCategory === filter.id;
      return (
        <button
          key={filter.id}
          type="button"
          role="tab"
          aria-selected={isActive}
          onClick={() => onCategoryChange(filter.id)}
          className={`
            shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300
            ${isActive
              ? 'bg-slate-950 text-white shadow-md dark:bg-[#1A2E5A]'
              : 'bg-slate-100 text-[#1A2E5A] hover:bg-slate-200 dark:bg-white/8 dark:text-blue-200 dark:hover:bg-white/12'
            }
          `}
        >
          {filter.label}
        </button>
      );
    })}
  </div>
);

export default ProjectFilter;
