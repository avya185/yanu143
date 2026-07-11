import { useCallback, useRef } from 'react';
import { PORTFOLIO_SEO } from '../data/portfolio';
import { usePageSEO } from '../hooks/usePageSEO';
import PortfolioHero from './portfolio/PortfolioHero';
import AboutOurWork from './portfolio/AboutOurWork';
import ProjectShowcase from './portfolio/ProjectShowcase';
import ClientTestimonials from './portfolio/ClientTestimonials';
import WhyChooseSection from './portfolio/WhyChooseSection';

/**
 * PortfolioPage — Complete MaVionix portfolio hub (standalone deliverable).
 */
// changes3565
const PortfolioPage = ({ onViewChange }) => {
  const projectsRef = useRef(null);
  const ctaRef = useRef(null);

  usePageSEO({
    title: PORTFOLIO_SEO.title,
    description: PORTFOLIO_SEO.description,
    canonical: PORTFOLIO_SEO.canonical,
    ogImage: PORTFOLIO_SEO.ogImage,
  });

  const scrollToRef = useCallback((ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <section className="page-enter mt-3" aria-label="MaVionix portfolio">
      <PortfolioHero
        onViewProjects={() => scrollToRef(projectsRef)}
        onExploreServices={() => onViewChange('services')}
      />
      <AboutOurWork />
      <ProjectShowcase sectionRef={projectsRef} />
      <ClientTestimonials />
      <WhyChooseSection />
      <div ref={ctaRef} />
    </section>
  );
};

export default PortfolioPage;
