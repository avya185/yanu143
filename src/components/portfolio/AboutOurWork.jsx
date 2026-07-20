import { CheckCircle2 } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const HIGHLIGHTS = [
  'Real-world websites, web applications, mobile apps, and AI solutions across corporate, e-commerce, and startup niches',
  'Capability across multiple service domains: corporate, e-commerce, portfolios, AI, mobile, branding, and digital marketing',
  'Visual proof of UI/UX skill, responsiveness, and modern technology usage',
  'Documented case studies with problem statements, solutions, and measurable outcomes',
  'Portfolio filter system so clients find relevant projects by category',
];

/**
 * AboutOurWork -Purpose and value of the MaVionix portfolio (Section 1 blueprint).
 */
const AboutOurWork = () => {
  return (
  <section className="py-20 bg-white dark:bg-[#07070f]" aria-labelledby="about-work-heading">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="space-y-5">
        <SectionHeader
          id="about-work-heading"
          badge="About Our Work"
          title="Proof-of-Work That Builds Client Trust"
          subtitle="The MaVionix Portfolio is a curated showcase of completed and ongoing projects across web development, mobile applications, AI solutions, graphic design, digital marketing, and cybersecurity, translating creative and technical work into client trust."
          align="left"
          className="mb-0"
        />

        <div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            MaVionix helps small and mid-size businesses, startup founders, e-commerce entrepreneurs,
            corporate clients, and enterprise teams evaluate technical depth and delivery quality before
            they commit. Every project reinforces the MaVionix brand identity: modern, results-driven,
            and technically superior.
          </p>
          <ul className="space-y-3" role="list">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="reveal flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-purple-600 dark:text-purple-400" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
  );
};

export default AboutOurWork;
