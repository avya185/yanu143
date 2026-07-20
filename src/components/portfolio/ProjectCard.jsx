import { ArrowUpRight, Sparkles } from 'lucide-react';
import { getProjectFilterGroup } from '../../data/portfolio';
import { enhanceImageUrl, enhancedSrcSet } from '../../utils/images';

/**
 * ProjectCard -Individual project with image, meta, technologies, and outcomes.
 */
const ProjectCard = ({ project, onOpen }) => (
  <article
    className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/15 dark:border-white/8 dark:bg-[#131020] dark:hover:border-purple-500/40"
    data-category={getProjectFilterGroup(project.category)}
  >
    <button
      type="button"
      className="relative block w-full overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
      onClick={() => onOpen(project)}
      aria-label={`View case study: ${project.title}`}
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={enhanceImageUrl(project.image, { width: 900, quality: 90 })}
          srcSet={enhancedSrcSet(project.image, [480, 720, 900, 1200], { quality: 90 })}
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          alt={`${project.title} project thumbnail`}
          loading="lazy"
          decoding="async"
          className="image-enhanced image-enhanced-photo h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* changes3565 */}
        <div
          className="absolute left-3 top-3 max-w-[calc(100%-1.5rem)] rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
          style={{
            backgroundColor: 'rgba(2, 6, 23, 0.8)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            boxShadow: '0 10px 15px -3px rgba(2, 6, 23, 0.25)',
          }}
        >
          <span className="line-clamp-1" style={{ color: '#ffffff' }}>{project.categoryLabel}</span>
        </div>
      </div>
    </button>

    <div className="flex flex-1 flex-col p-5">
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">{project.title}</h3>
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="shrink-0 rounded-lg p-1.5 text-slate-400 hover:text-purple-600 hover:bg-purple-500/10 dark:hover:text-purple-400 transition-colors"
          aria-label={`Open ${project.title} details`}
        >
          <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <p className="mb-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
        {project.shortDescription}
      </p>

      <div className="mb-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="text-xs text-slate-500">+{project.technologies.length - 4}</span>
        )}
      </div>

      <div className="mt-auto border-t border-slate-100 pt-4 dark:border-white/8">
        <p className="mb-2 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
          <Sparkles className="h-3 w-3" aria-hidden="true" />
          Outcomes
        </p>
        <ul className="space-y-1" role="list">
          {project.outcomes.slice(0, 2).map((outcome) => (
            <li key={outcome} className="text-xs text-slate-600 dark:text-slate-400 flex gap-1.5">
              <span className="text-purple-500" aria-hidden="true">•</span>
              {outcome}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </article>
);

export default ProjectCard;
