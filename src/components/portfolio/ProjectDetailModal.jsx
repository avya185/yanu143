<<<<<<< HEAD
import { useRef } from 'react';
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
import { X } from 'lucide-react';
import Modal from '../ui/Modal';
import { enhanceImageUrl, enhancedSrcSet } from '../../utils/images';

/**
<<<<<<< HEAD
 * ProjectDetailModal -Full case study breakdown (problem, solution, features).
 * Rendered through a portal so it stays centered on screen regardless of scroll position.
 */
const ProjectDetailModal = ({ project, onClose }) => {
  // Keep showing the last project's content while the modal plays its exit
  // animation, instead of the content unmounting the instant `project`
  // becomes null (which would otherwise fade out an empty box).
  const lastProjectRef = useRef(project);
  if (project) lastProjectRef.current = project;
  const displayProject = project ?? lastProjectRef.current;

  return (
    <Modal
      isOpen={Boolean(project)}
      onClose={onClose}
      ariaLabelledBy="project-modal-title"
      contentClassName="max-w-3xl rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#131020]"
    >
      {displayProject ? (
        <>
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <img
            src={enhanceImageUrl(displayProject.image, { width: 1200, quality: 90 })}
            srcSet={enhancedSrcSet(displayProject.image, [640, 900, 1200, 1440], { quality: 90 })}
            sizes="(min-width: 768px) 768px, 100vw"
            alt={`${displayProject.title} project highlight image`}
            loading="eager"
            decoding="async"
            className="image-enhanced image-enhanced-photo h-48 sm:h-56 w-full rounded-t-2xl object-cover"
          />

          <div className="p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              {displayProject.categoryLabel}
            </p>
            <h2 id="project-modal-title" className="mt-2 text-2xl font-black text-slate-900 dark:text-white">
              {displayProject.title}
            </h2>
            {displayProject.client ? (
              <p className="mt-1 text-sm text-slate-500">
                {displayProject.client} · {displayProject.year}
              </p>
            ) : (
              <p className="mt-1 text-sm text-slate-500">{displayProject.year}</p>
            )}

            <section className="mt-6">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Problem</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {displayProject.problemStatement}
              </p>
            </section>

            <section className="mt-5">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Solution</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {displayProject.solutionDescription}
              </p>
            </section>

            <section className="mt-5">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Technologies</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {displayProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-purple-500/20 bg-purple-500/8 px-2.5 py-1 text-xs font-medium text-purple-700 dark:text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className="mt-5">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Outcomes</h3>
              <ul className="mt-2 space-y-1" role="list">
                {displayProject.outcomes.map((outcome) => (
                  <li key={outcome} className="text-sm text-slate-600 dark:text-slate-400">
                    • {outcome}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-5">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Key Features</h3>
              <ul className="mt-2 grid gap-1 sm:grid-cols-2" role="list">
                {displayProject.features.map((feature) => (
                  <li key={feature} className="text-sm text-slate-600 dark:text-slate-400">
                    ✓ {feature}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </>
      ) : null}
    </Modal>
  );
};
=======
 * ProjectDetailModal — Full case study breakdown (problem, solution, features).
 * Rendered through a portal so it stays centered on screen regardless of scroll position.
 */
const ProjectDetailModal = ({ project, onClose }) => (
  <Modal
    isOpen={Boolean(project)}
    onClose={onClose}
    ariaLabelledBy="project-modal-title"
    contentClassName="max-w-3xl rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#131020]"
  >
    {project ? (
      <>
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <img
          src={enhanceImageUrl(project.image, { width: 1200, quality: 90 })}
          srcSet={enhancedSrcSet(project.image, [640, 900, 1200, 1440], { quality: 90 })}
          sizes="(min-width: 768px) 768px, 100vw"
          alt={`${project.title} project highlight image`}
          loading="eager"
          decoding="async"
          className="image-enhanced image-enhanced-photo h-48 sm:h-56 w-full rounded-t-2xl object-cover"
        />

        <div className="p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            {project.categoryLabel}
          </p>
          <h2 id="project-modal-title" className="mt-2 text-2xl font-black text-slate-900 dark:text-white">
            {project.title}
          </h2>
          {project.client ? (
            <p className="mt-1 text-sm text-slate-500">
              {project.client} · {project.year}
            </p>
          ) : (
            <p className="mt-1 text-sm text-slate-500">{project.year}</p>
          )}

          <section className="mt-6">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Problem</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.problemStatement}
            </p>
          </section>

          <section className="mt-5">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Solution</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.solutionDescription}
            </p>
          </section>

          <section className="mt-5">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Technologies</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-purple-500/20 bg-purple-500/8 px-2.5 py-1 text-xs font-medium text-purple-700 dark:text-purple-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-5">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Outcomes</h3>
            <ul className="mt-2 space-y-1" role="list">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="text-sm text-slate-600 dark:text-slate-400">
                  • {outcome}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-5">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Key Features</h3>
            <ul className="mt-2 grid gap-1 sm:grid-cols-2" role="list">
              {project.features.map((feature) => (
                <li key={feature} className="text-sm text-slate-600 dark:text-slate-400">
                  ✓ {feature}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </>
    ) : null}
  </Modal>
);
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed

export default ProjectDetailModal;
