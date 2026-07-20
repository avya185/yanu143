import {
  ArrowRight,
  Award,
  BarChart3,
  Bot,
  Brain,
  Briefcase,
  Building2,
  Cpu,
  FlaskConical,
  Layers3,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
} from 'lucide-react';
import PageHero from './ui/PageHero';
interface AchievementsSectionProps {
  onViewChange: (view: string, slug?: string) => void;
}

const overviewCards = [
  {
    icon: Lightbulb,
    title: 'Commitment to Innovation',
    description:
      'Innovation is embedded in the MaVionix DNA. Our teams consistently challenge conventional approaches, exploring new methodologies and architectures to build solutions that are technically superior and genuinely impactful.',
  },
  {
    icon: FlaskConical,
    title: 'Research & Development',
    description:
      'MaVionix invests deeply in R&D across AI, robotics, and autonomous systems, addressing gaps in existing technologies and creating new pathways for industrial, commercial, and academic applications.',
  },
  {
    icon: Rocket,
    title: 'Startup & Entrepreneurial Wins',
    description:
      "MaVionix has competed at and won recognition from some of India's most prestigious entrepreneurship platforms, including IIT-hosted expos and national innovation competitions.",
  },
  {
    icon: Users,
    title: 'Student Innovation & Leadership',
    description:
      'We foster a culture where student innovators and young engineers lead projects, build prototypes, and compete on national stages -resulting in multiple competition victories.',
  },
  {
    icon: Building2,
    title: 'Industry Collaboration & Impact',
    description:
      'Strategic collaborations with academic institutions, industry bodies, and technology partners ensure every project delivers measurable value for clients and partners.',
  },
     {
    icon: Target,
    title: 'Measurable Client Impact',
    description:
      'Every engagement is measured against real business outcomes -faster load times, higher conversions, stronger security postures. For MaVionix, innovation only counts when it moves the needle for the clients and partners we build for.',
  }
];

const awardsTable = [
  { event: 'IIT Hyderabad -Thrust Tech Expo', achievement: 'Winner -Hybrid Wheeled ARAK', domain: 'Robotics / AI', year: '2024' },
  { event: 'Innovathon 1.0 -Univ. of Jammu', achievement: 'Innovation Recognition -ARAK', domain: 'Robotics / IoT', year: '2024' },
];

const arakTechnologies = [
  'Robotics & Embedded Systems',
  'IoT Integration',
  'Autonomous Navigation',
  'Sensor Fusion',
  'Artificial Intelligence',
  'Real-Time Monitoring Systems',
  'Servo Control Architecture',
  'Edge Computing',
];

const arakHighlights = [
  'Hybrid wheel-leg locomotion architecture for adaptive terrain navigation',
  'Faster movement and enhanced manoeuvrability in confined pipeline environments',
  'Advanced obstacle-climbing capability using intelligent servo-controlled limbs',
  'Optimized energy efficiency through intelligent power management systems',
  'Advanced inspection and surveillance capabilities via onboard sensors',
  'Improved adaptability across industrial environments and infrastructure types',
  'Real-time data transmission using IoT integration and sensor fusion',
  'AI-powered anomaly detection for proactive fault identification',
];

const innovathonHighlights = [
  'Spider-inspired quadruped robotic design for superior terrain adaptability',
  'Autonomous navigation capabilities for unassisted pipeline traversal',
  'Pipeline inspection and monitoring applications in industrial settings',
  'Ability to traverse challenging terrains including uneven surfaces and confined spaces',
  'Practical applicability in industrial, oil & gas, and infrastructure sectors',
];

const researchDomains = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description:
      'From autonomous navigation and computer vision in robotics to NLP, predictive analytics, and intelligent automation -deploying machine learning and edge AI systems that solve real industrial problems.',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    description:
      'Developing and contributing to cybersecurity frameworks, vulnerability assessment tools, and secure system architectures that protect critical digital infrastructure.',
  },
  {
    icon: BarChart3,
    title: 'Data Science',
    description:
      'Data pipeline development, statistical modeling, visualization, and predictive analytics that help organizations extract actionable insight from complex datasets.',
  },
  {
    icon: Bot,
    title: 'IoT & Robotics',
    description:
      'The convergence of IoT and robotics behind our most celebrated work -from ARAK autonomous inspection robots to connected sensor networks for industrial monitoring.',
  },
  {
    icon: Layers3,
    title: 'Product Development',
    description:
      'Combining user research, technical architecture, agile engineering, and QA to deliver polished, scalable digital products that are commercially viable and technically sustainable.',
  },
  {
    icon: Sparkles,
    title: 'Digital Transformation',
    description:
      'Customized digital transformation roadmaps spanning cloud migration, process automation, enterprise software development, and technology strategy consulting.',
  },
];

const milestones = [
  {
    year: '2023',
    title: 'Company Formation',
    description:
      'MaVionix was established with a founding mission to develop technology innovation solutions for real-world industrial and digital challenges -built on engineering excellence, research-driven development, and entrepreneurial impact.',
  },
  {
    year: '2023',
    title: 'First Client Acquisition',
    description:
      "MaVionix secured its first client engagement, delivering a tailored digital transformation solution that validated the company's technical capabilities and market credibility.",
  },
  {
    year: '2024',
    title: 'Product Development Milestones',
    description:
      "MaVionix completed development of the original ARAK autonomous quadruped robot, marking a major product innovation milestone and establishing the company's robotics research track record.",
  },
  {
    year: '2024',
    title: 'Research Contributions',
    description:
      'The research team contributed to emerging work in autonomous systems, IoT integration, and AI-powered inspection platforms -laying groundwork for formal publication and academic collaboration.',
  },
  {
    year: '2024',
    title: 'Competition Wins',
    description:
      'MaVionix achieved recognition at Innovathon 1.0 (University of Jammu) and won top honors at the IIT Hyderabad Thrust Tech Expo with the Hybrid Wheeled ARAK.',
  },
  {
    year: '2024–2025',
    title: 'Industry Collaborations',
    description:
      'Collaborative engagements with academic institutions, industry technology partners, and startup ecosystems -expanding network, capability, and market presence.',
  },
  {
    year: '2025 & Beyond',
    title: 'Future Growth Plans',
    description:
      'Actively pursuing expansion into new markets, next-generation product lines, scaled AI and robotics capability, and strategic partnerships driving continued innovation.',
  },
];

const statistics = [
  { value: '20+', label: 'Projects Delivered', sub: 'Successful technology & digital projects' },
  { value: '10+', label: 'Clients Served', sub: 'Across diverse industry sectors' },
  { value: '2+', label: 'Awards Won', sub: 'National & institutional recognitions' },
  { value: '5+', label: 'Research Initiatives', sub: 'Active R&D programs & publications' },
  { value: '10+', label: 'Technologies Developed', sub: 'Across AI, Robotics, IoT & more' },
  { value: '6+', label: 'Industry Domains', sub: 'Sectors served by MaVionix solutions' },
];

const whyItMatters = [
  {
    icon: Target,
    title: 'Commitment to Quality',
    description:
      'Every project, product, and research initiative is built to the highest standards. Our competition victories are the result of rigorous development, iterative testing, and a culture that refuses mediocrity.',
  },
  {
    icon: Award,
    title: 'Proven Expertise',
    description:
      'Winning recognition at IIT Hyderabad and national innovation forums reflects deep domain expertise in AI, Robotics, IoT, and Digital Transformation.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation-Driven Approach',
    description:
      'We do not recycle templates -we engineer original solutions. Every challenge is met with fresh thinking, creative engineering, and a genuine desire to push boundaries.',
  },
  {
    icon: ShieldCheck,
    title: 'Trust & Credibility',
    description:
      'Recognition from premier institutions such as IIT Hyderabad builds trust with academia, industry partners, and clients who value working with a proven technology partner.',
  },
  {
    icon: Briefcase,
    title: 'Industry Knowledge',
    description:
      'Our research contributions and competition projects reflect real, applied knowledge of the industries we serve -the operational challenges, regulations, and constraints that shape client needs.',
  },
  {
    icon: Rocket,
    title: 'Future-Ready Solutions',
    description:
      'Investment in emerging technologies and continuous research ensures clients receive solutions that are scalable, adaptable, and ready for tomorrow’s challenges.',
  },
];

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-700 dark:text-purple-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight uppercase sm:text-4xl text-slate-900 dark:text-white">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{text}</p>
    </div>
  );
}

export default function AchievementsSection({ onViewChange }: AchievementsSectionProps) {
  return (

    <div className="w-full bg-white dark:bg-[#07070f]">
      <PageHero
        badge={
          <>
            <Trophy size={12} />
            Achievements
          </>
        }
        title={
          <>
            Award-winning <span className="text-gradient-royal">innovation</span>, recognized{' '}
            <span className="text-gradient-lead">research impact</span>
          </>
        }
        description="From robotics platforms recognized at IIT Hyderabad to research-driven engineering across AI, IoT, and digital transformation -every award reflects a real problem solved and a milestone in our mission to shape the future of technology."
        actions={
          <>
            <button
              onClick={() => onViewChange('contact')}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-[#C800FF] dark:text-slate-950"
            >
              Start a project
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => onViewChange('services')}
              className="inline-flex items-center justify-center rounded-full border border-purple-200 bg-white px-5 py-3 text-xs font-black uppercase tracking-wider text-purple-700 shadow-sm transition hover:-translate-y-0.5 hover:border-purple-400 hover:shadow-lg dark:border-purple-900 dark:bg-slate-950 dark:text-purple-200"
            >
              View services
            </button>
          </>
        }
        stats={[
          { value: '2+', label: 'Awards & Recognitions' },
          { value: '20+', label: 'Projects Delivered' },
          { value: '5+', label: 'Research Initiatives' },
        ]}
        className="border-b-0 pb-0"
      />

      {/* Introduction */}
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
          At MaVionix, excellence is not a destination -it is a continuous journey. From developing groundbreaking
          robotics platforms to delivering award-winning software solutions, MaVionix has consistently demonstrated
          its commitment to technology innovation, research leadership, and entrepreneurial impact. Every award we
          receive is a milestone in our mission to shape the future of technology, and a testament to the passion,
          perseverance, and purpose that defines our team.
        </p>
      </div>

      {/* Achievement Overview cards */}
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Achievement Overview"
          title="What drives our track record"
          text="Since our inception, we have pursued breakthrough solutions across Artificial Intelligence, Robotics, Cybersecurity, Data Science, and Digital Transformation."
        />
        <div className="reveal-up mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {overviewCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="reveal rounded-lg border border-slate-200 bg-white p-5 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-black text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>

      {/* Awards table */}
      <div className="border-t border-slate-100 bg-slate-50/60 py-20 dark:border-slate-900 dark:bg-slate-950/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Awards & Recognitions"
            title="National recognitions earned"
            text="Competitions that evaluate technical depth, product viability, and real-world applicability."
          />
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/60">
                  <th className="px-5 py-3 font-black uppercase tracking-wider text-[11px] text-slate-500 dark:text-slate-400">Award / Event</th>
                  <th className="px-5 py-3 font-black uppercase tracking-wider text-[11px] text-slate-500 dark:text-slate-400">Achievement</th>
                  <th className="px-5 py-3 font-black uppercase tracking-wider text-[11px] text-slate-500 dark:text-slate-400">Domain</th>
                  <th className="px-5 py-3 font-black uppercase tracking-wider text-[11px] text-slate-500 dark:text-slate-400">Year</th>
                </tr>
              </thead>
              <tbody>
                {awardsTable.map((row, index) => (
                  <tr
                    key={row.event}
                    className="reveal border-b border-slate-100 last:border-0 dark:border-slate-900"
                  >
                    <td className="px-5 py-4 font-bold text-slate-950 dark:text-white">{row.event}</td>
                    <td className="px-5 py-4 text-slate-600 dark:text-slate-300">{row.achievement}</td>
                    <td className="px-5 py-4 text-purple-700 dark:text-purple-300">{row.domain}</td>
                    <td className="px-5 py-4 text-slate-600 dark:text-slate-300">{row.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Featured Achievements */}
      <div className=" reveal-right mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Featured Achievements"
          title="Deep dives into our flagship wins"
          text="A closer look at the engineering, problem-solving, and impact behind our recognized projects."
        />

        <div className="mt-10 space-y-8 reveal-up">
          {/* IIT Hyderabad card */}
          <article
                        className="reveal rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-colors dark:border-transparent dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 dark:shadow-2xl sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">
                <Trophy size={14} /> Winner
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                IIT Hyderabad -Thrust Tech Expo · 2024
              </span>
            </div>
            <h3 className="mt-4 text-xl font-black text-slate-950 sm:text-2xl dark:text-white">
              Hybrid Wheeled ARAK: Next-Generation Pipeline Inspection Robot
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Industrial pipelines -particularly in oil & gas, chemical, and municipal infrastructure -require
              frequent inspection to detect structural faults, leaks, and blockages. Traditional methods are costly,
              slow, and dangerous for human workers, while conventional robotic platforms lack the mobility to
              navigate complex terrain changes. The Hybrid Wheeled ARAK combines a quadruped leg-based locomotion
              system with integrated wheeled mobility, letting the robot move seamlessly between smooth industrial
              flooring and rough, uneven terrain.
            </p>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-700 dark:text-purple-300">Key innovations</p>
                <ul className="mt-3 space-y-2">
                  {arakHighlights.map((point, index) => (
                    <li
                      key={point}
                      className="reveal flex items-start gap-2 text-sm leading-6 text-slate-700 dark:text-slate-300"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-700 dark:text-purple-300">Technologies used</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {arakTechnologies.map((tech, index) => (
                    <span
                      key={tech}
                      className="reveal rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-bold text-purple-700 dark:border-purple-900/70 dark:bg-purple-950/30 dark:text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-purple-700 dark:text-purple-300">Impact created</p>
                <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  The Hybrid Wheeled ARAK's design, real-world applicability, and engineering excellence were
                  recognized as breakthrough contributions to industrial automation -with potential to reduce
                  inspection costs by up to 60%, eliminate human exposure to hazardous environments, and provide
                  continuous, accurate infrastructure monitoring.
                </p>
              </div>
            </div>
          </article>

          {/* Innovathon card */}
          <article
                        className="reveal-up rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-colors dark:border-transparent dark:bg-gradient-to-br dark:from-slate-950 dark:to-slate-900 dark:shadow-2xl sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">
                <Award size={14} /> Recognized Innovation
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                Innovathon 1.0 -University of Jammu · 2024
              </span>
            </div>
            <h3 className="mt-4 text-xl font-black text-slate-950 sm:text-2xl dark:text-white">
              ARAK: Autonomous Quadruped Spider Robot for Pipeline Inspection
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              Innovathon 1.0 brought together innovative student and professional teams to present technology-driven
              solutions for real-world challenges -serving as the launchpad for the original ARAK platform on a
              competitive national stage. Inspired by spider locomotion, the quadruped design provides exceptional
              stability and maneuverability for hazardous, hard-to-reach pipeline environments.
            </p>
            <ul className="mt-6 space-y-2">
              {innovathonHighlights.map((point, index) => (
                <li
                  key={point}
                  className="reveal flex items-start gap-2 text-sm leading-6 text-slate-700 dark:text-slate-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-7 text-slate-600 dark:text-slate-300">
              The recognition at Innovathon 1.0 marked a defining moment for MaVionix -validating the team's
              robotics research direction and serving as the foundation for the enhanced Hybrid Wheeled ARAK
              platform later presented at IIT Hyderabad.
            </p>
          </article>
        </div>
      </div>

      {/* Research & Innovation Highlights */}
      <div className=" border-t border-slate-100 bg-slate-50/60 py-20 dark:border-slate-900 dark:bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Research & Innovation"
            title="Domains we drive forward"
            text="A multidisciplinary approach where each research area benefits from cross-domain insight and practical implementation experience."
          />
          <div className=" reveal-up mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {researchDomains.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="reveal rounded-lg border border-slate-200 bg-white p-5 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-950"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-black text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Milestones Timeline */}
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Milestones Timeline"
          title="How we got here"
          text="Key moments that shaped MaVionix from founding to where we stand today."
        />
        <div className="relative mt-12 space-y-8 border-l border-slate-200 pl-6 dark:border-slate-800 sm:pl-8">
          {milestones.map((item, index) => (
            <div
              key={item.title}
              className="reveal relative"
            >
              <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-4 border-white bg-purple-600 dark:border-[#07070f] dark:bg-purple-400 sm:-left-[39px]" />
              <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-700 dark:text-purple-300">{item.year}</p>
              <h3 className="mt-1 text-lg font-black text-slate-950 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics & Impact */}
      <div className="border-t border-slate-100 bg-slate-50/60 py-20 dark:border-slate-900 dark:bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Statistics & Impact"
            title="Numbers behind the story"
            text="Every metric reflects a real project delivered, a real client served, and a real problem solved."
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {statistics.map((stat, index) => (
              <div
                key={stat.label}
                className="reveal rounded-2xl border border-slate-200/70 bg-white p-5 text-center shadow-[0_20px_60px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-slate-900/70"
              >
                <p className="text-2xl font-black tracking-tight text-slate-950 dark:text-white sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-[11px] font-black uppercase tracking-[0.14em] text-purple-700 dark:text-purple-300">{stat.label}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why These Achievements Matter */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Why These Achievements Matter"
          title="More than trophies"
          text="Meaningful indicators of our commitment to excellence, technical credibility, and transformative impact for clients, partners, and stakeholders."
        />
        <div className="reveal-up mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyItMatters.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="reveal rounded-lg border border-slate-200 bg-white p-5 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-black text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-slate-100 py-20 text-center dark:border-slate-900">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black uppercase tracking-tight text-slate-950 dark:text-white sm:text-3xl">
            Partner With <span className="text-gradient-royal">MaVionix</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Ready to work with an award-winning technology innovation company that delivers real results? Connect
            with MaVionix today and take the first step toward transforming your ideas into impactful, intelligent
            solutions.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={() => onViewChange('contact')}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-[#C800FF] dark:text-slate-950"
            >
              Start your project
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => onViewChange('about')}
              className="inline-flex items-center justify-center rounded-full border border-purple-200 bg-white px-5 py-3 text-xs font-black uppercase tracking-wider text-purple-700 shadow-sm transition hover:-translate-y-0.5 hover:border-purple-400 hover:shadow-lg dark:border-purple-900 dark:bg-slate-950 dark:text-purple-200"
            >
              Learn about us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
