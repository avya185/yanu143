import { useState } from 'react';
<<<<<<< HEAD
import { motion } from 'motion/react';
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
import SectionHeader from '../ui/SectionHeader';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';
import ProjectDetailModal from './ProjectDetailModal';
import { useProjectFilter } from '../../hooks/useProjectFilter';
<<<<<<< HEAD
import { cardFadeUp, cardViewport, useCardTransition } from '../../utils/animations';

/**
 * ProjectShowcase -Filterable project grid with case study modals (blueprint Section 4).
=======

/**
 * ProjectShowcase — Filterable project grid with case study modals (blueprint Section 4).
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
 */
const ProjectShowcase = ({ sectionRef }) => {
  const { activeCategory, setActiveCategory, filteredProjects } = useProjectFilter('all');
  const [selectedProject, setSelectedProject] = useState(null);
<<<<<<< HEAD
  const cardTransition = useCardTransition();
=======
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-white dark:bg-[#07070f]"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="projects-heading"
          badge="Case Studies"
          title="Projects & Case Studies"
          subtitle="Browse MaVionix projects with documented problems, solutions, technologies, and measurable outcomes across every service category."
        />

        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <ProjectFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Showing <span className="font-black text-slate-900 dark:text-white">{filteredProjects.length}</span> project{filteredProjects.length === 1 ? '' : 's'} in {activeCategory === 'all' ? 'all categories' : activeCategory}
          </p>
        </div>

        <div
          key={activeCategory}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 animate-fade-in"
          role="list"
          aria-live="polite"
          aria-label="Portfolio projects"
        >
          {filteredProjects.length > 0 ? (
<<<<<<< HEAD
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                role="listitem"
                initial="hidden"
                whileInView="visible"
                viewport={cardViewport}
                variants={cardFadeUp}
                transition={cardTransition(index)}
              >
                <ProjectCard project={project} onOpen={setSelectedProject} />
              </motion.div>
=======
            filteredProjects.map((project) => (
              <div key={project.id} role="listitem">
                <ProjectCard project={project} onOpen={setSelectedProject} />
              </div>
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
            ))
          ) : (
            <p className="col-span-full py-12 text-center text-slate-500" role="status">
              No projects found in this category.
            </p>
          )}
        </div>
      </div>

      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default ProjectShowcase;
