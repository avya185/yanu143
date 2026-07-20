import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { init, send } from '@emailjs/browser';
import { CAREERS_EMAILJS_SERVICE_ID, CAREERS_EMAILJS_TEMPLATE_ID, CAREERS_EMAILJS_PUBLIC_KEY } from '../emailjsConfig';
import {
  AlertCircle,
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  CalendarRange,
  CheckCircle2,
  Clock,
  Code2,
  FileUp,
  Filter,
  GraduationCap,
  Handshake,
  Laptop,
  Lightbulb,
  LoaderCircle,
  Mail,
  MapPin,
  Rocket,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  UsersRound,
  X,
  Zap,
} from 'lucide-react';
import { AnimatePresence, color, motion } from 'motion/react';
import { enhanceImageUrl, enhancedSrcSet } from '../utils/images';
import PageHero from './ui/PageHero';
import countryCodes from '../data/countryCodes.json';
import { cardFadeHorizontal, cardFadeHorizontalScale, cardViewport, useCardTransition } from '../utils/animations';




type CareerRole = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  icon: React.ElementType;
  summary: string;
  skills: string[];
};

type ApplicationForm = {
  roleId: string;
  fullName: string;
  email: string;
  phoneCountryIso2: string;
  phoneLocal: string;
  location: string;
  experience: string;
  portfolioUrl: string;
  coverNote: string;
  resumeFile: File | null;
};

type CountryCode = {
  iso2: string;
  name: string;
  dialCode: string;
};

type FeatureItem = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

const CAREER_ROLES: CareerRole[] = [
  {
    id: 'web-development-intern',
    title: 'Web Development Intern',
    department: 'Engineering',
    location: 'Remote / Hyderabad, India',
    type: 'Internship',
    experience: '0-1 years',
    icon: Code2,
    summary: 'Build responsive React interfaces, contribute to component libraries, and learn deployment workflows with mentor support.',
    skills: ['React', 'JavaScript', 'Tailwind', 'Git'],
  },
  {
    id: 'full-stack-developer',
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Hybrid - Hyderabad or Remote India',
    type: 'Full-time',
    experience: '2-4 years',
    icon: Rocket,
    summary: 'Own features end to end across React frontends and Node or Python APIs with a focus on performance and clean architecture.',
    skills: ['React', 'Node.js', 'APIs', 'Databases'],
  },
  {
    id: 'ai-ml-engineer',
    title: 'AI/ML Engineer',
    department: 'AI & Automation',
    location: 'Remote / Hyderabad, India',
    type: 'Full-time',
    experience: '2-5 years',
    icon: Zap,
    summary: 'Design LLM workflows, RAG pipelines, and model evaluation systems for client chatbots and internal automation products.',
    skills: ['LLMs', 'RAG', 'Python', 'Automation'],
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    department: 'Security',
    location: 'Hyderabad, India',
    type: 'Full-time',
    experience: '1-3 years',
    icon: ShieldCheck,
    summary: 'Run vulnerability assessments, harden cloud deployments, and document security practices for client deliverables.',
    skills: ['VAPT', 'Cloud Security', 'OWASP', 'Reporting'],
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Remote / Hyderabad, India',
    type: 'Full-time',
    experience: '2-4 years',
    icon: UsersRound,
    summary: 'Lead user research, wireframes, and high-fidelity design systems aligned with MaVionix brand and accessibility standards.',
    skills: ['Figma', 'Research', 'Design Systems', 'Mobile UI'],
  },
  {
    id: 'digital-marketing-executive',
    title: 'Digital Marketing Executive',
    department: 'Growth',
    location: 'Remote India',
    type: 'Full-time',
    experience: '1-3 years',
    icon: TrendingUp,
    summary: 'Execute SEO, paid campaigns, content strategy, and analytics reporting for MaVionix and client brands.',
    skills: ['SEO', 'Paid Ads', 'Analytics', 'Content'],
  },
  {
    id: 'ai-ml-intern',
    title: 'AI/ML Intern',
    department: 'AI & Automation',
    location: 'Remote / Hyderabad, India',
    type: 'Internship',
    experience: '0-1 years',
    icon: Zap,
    summary: 'Assist in building and evaluating LLM workflows, RAG pipelines, and automation prototypes alongside the AI team.',
    skills: ['Python', 'LLMs', 'Data Basics', 'Prompting'],
  },
  {
    id: 'creative-intern',
    title: 'Creative Intern',
    department: 'Design',
    location: 'Remote / Hyderabad, India',
    type: 'Internship',
    experience: '0-1 years',
    icon: Sparkles,
    summary: 'Support the design team with social creatives, brand visuals, and UI exploration for MaVionix and client projects.',
    skills: ['Figma', 'Visual Design', 'Branding', 'Canva'],
  },
  {
    id: 'digital-marketing-intern',
    title: 'Digital Marketing Intern',
    department: 'Growth',
    location: 'Remote India',
    type: 'Internship',
    experience: '0-1 years',
    icon: TrendingUp,
    summary: 'Support SEO tasks, social content scheduling, and campaign reporting while learning growth fundamentals.',
    skills: ['SEO Basics', 'Content', 'Social Media', 'Analytics'],
  },
  {
    id: 'content-writing-intern',
    title: 'Content Writing Intern',
    department: 'Growth',
    location: 'Remote India',
    type: 'Internship',
    experience: '0-1 years',
    icon: BookOpen,
    summary: 'Write blog posts, website copy, and social captions, learning SEO-friendly content practices along the way.',
    skills: ['Writing', 'SEO Basics', 'Research', 'Editing'],
  },
];

const WHY_JOIN: FeatureItem[] = [
  {
    id: 'learning-growth',
    title: 'Learning & Growth',
    description: 'Structured learning paths, weekly tech talks, and premium course access help you keep upskilling alongside delivery work.',
    icon: GraduationCap,
  },
  {
    id: 'real-world-projects',
    title: 'Real-World Projects',
    description: 'Ship production-grade solutions for startups and enterprises with code reviews and deployment ownership.',
    icon: Rocket,
  },
  {
    id: 'industry-mentorship',
    title: 'Industry Mentorship',
    description: 'Pair with senior engineers and product leads on architecture, career planning, and interview readiness.',
    icon: UsersRound,
  },
  {
    id: 'flexible-work',
    title: 'Flexible Work Environment',
    description: 'Remote-friendly collaboration, flexible hours, and outcome-focused performance across India.',
    icon: Laptop,
  },
  {
    id: 'innovation-culture',
    title: 'Innovation-Driven Culture',
    description: 'Experiment with AI, automation, and modern stacks through focused research time and internal prototypes.',
    icon: Lightbulb,
  },
  {
    id: 'career-advancement',
    title: 'Career Advancement Opportunities',
    description: 'Clear growth tracks from intern to lead, with quarterly reviews, PPO pathways, and partner referrals.',
    icon: TrendingUp,
  },
];

const APPLICATION_TIMELINE = [
  ['Application Submission', 'Complete the online form with resume or portfolio links and role preference.'],
  ['Resume Screening', 'Our talent team reviews your profile within 3-5 business days.'],
  ['Technical Assessment', 'A role-specific task is evaluated on clarity, quality, and practical thinking.'],
  ['Interview Round', 'Virtual interviews with the hiring manager and team members cover technical depth and culture fit.'],
  ['Final Selection', 'Offer discussion, compensation alignment, and start-date planning.'],
  ['Onboarding', 'Buddy assignment, workspace setup, and first-sprint goals in your first week.'],
];

const CULTURE = [
  {
    id: 'collaboration',
    title: 'Team Collaboration',
    description: 'Cross-functional squads with daily standups, shared playbooks, and transparent retros.',
    stat: '12+',
    statLabel: 'Active project teams',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop',
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description: 'Dedicated time for AI experiments, open-source contributions, and internal product incubation.',
    stat: '40%',
    statLabel: 'Time for learning and R&D',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
  },
  {
    id: 'professional-growth',
    title: 'Professional Growth',
    description: 'Individual development plans, certification support, and leadership pathways.',
    stat: '85%',
    statLabel: 'Internal promotion rate',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
  },
];

const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    role: 'Web Development Intern to Junior Developer',
    quote: 'MaVionix gave me real client projects in React and mentored every pull request. I received a PPO within three months.',
  },
  {
    name: 'Arjun Mehta',
    role: 'Full Stack Developer',
    quote: 'The stack is modern, the culture is collaborative, and leadership trusts engineers to own architecture.',
  },
  {
    name: 'Neha Reddy',
    role: 'UI/UX Designer',
    quote: 'From research to handoff, I work directly with developers and clients. Design systems here are treated as products.',
  },
];

const CAREERS_FAQ = [
  {
    question: 'What internship opportunities does MaVionix offer?',
    answer: 'We run structured internships in web development, UI/UX, digital marketing, and AI automation with mentorship, certificates, and PPO consideration.',
  },
  {
    question: 'Can I work remotely?',
    answer: 'Yes. Many roles are remote-first or hybrid across India, with Hyderabad collaboration available where useful.',
  },
  {
    question: 'What does the selection process look like?',
    answer: 'After you apply, we screen your resume, share a role-specific assessment, conduct virtual interviews, and extend offers to selected candidates.',
  },
  {
    question: 'How long does the application timeline take?',
    answer: 'Most candidates hear back within 3-5 business days. The full process usually completes in 14-21 days depending on the role.',
  },
];

const emptyForm: ApplicationForm = {
  roleId: CAREER_ROLES[0].id,
  fullName: '',
  email: '',
  phoneCountryIso2: 'in',
  phoneLocal: '',
  location: '',
  experience: '',
  portfolioUrl: '',
  coverNote: '',
  resumeFile: null,
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_COUNTRIES = countryCodes as CountryCode[];
const CAREER_ROLE_OPTIONS = CAREER_ROLES.map((role) => (
  <option key={role.id} value={role.id}>{role.title}</option>
));
const PHONE_COUNTRY_OPTIONS = PHONE_COUNTRIES.map((country) => (
  <option key={country.iso2} value={country.iso2}>
    {country.dialCode} {country.name}
  </option>
));


interface CareersSectionProps {
  theme: 'light' | 'dark';
}

// EmailJS config is imported from src/emailjsConfig.ts

const SUBMISSION_FAILED_MESSAGE = 'Something went wrong while submitting your application. Please try again or contact us directly.';

export default function CareersSection({ theme }: CareersSectionProps) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'Internship' | 'Job'>('Internship');
  const [department, setDepartment] = useState('All');
  const [form, setForm] = useState<ApplicationForm>(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  useEffect(() => {
    init(CAREERS_EMAILJS_PUBLIC_KEY);
  }, []);

  const rolesInCategory = useMemo(
    () => CAREER_ROLES.filter((role) => (activeCategory === 'Internship' ? role.type === 'Internship' : role.type !== 'Internship')),
    [activeCategory]
  );
  const departments = useMemo(() => ['All', ...Array.from(new Set(rolesInCategory.map((role) => role.department)))], [rolesInCategory]);
  const selectedRole = CAREER_ROLES.find((role) => role.id === form.roleId) || CAREER_ROLES[0];
  const selectedPhoneCountry = PHONE_COUNTRIES.find((country) => country.iso2 === form.phoneCountryIso2) || PHONE_COUNTRIES.find((country) => country.iso2 === 'in') || PHONE_COUNTRIES[0];

  const handleCategoryChange = useCallback((category: 'Internship' | 'Job') => {
    setActiveCategory(category);
    setDepartment('All');
  }, []);

  const filteredRoles = useMemo(() => {
    const search = query.trim().toLowerCase();

    return rolesInCategory.filter((role) => {
      const matchesDepartment = department === 'All' || role.department === department;
      const matchesSearch =
        !search ||
        [role.title, role.department, role.location, role.type, role.experience, role.summary, ...role.skills]
          .join(' ')
          .toLowerCase()
          .includes(search);

      return matchesDepartment && matchesSearch;
    });
  }, [rolesInCategory, department, query]);

  const updateField = useCallback(<K extends keyof ApplicationForm>(field: K, value: ApplicationForm[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      return { ...current, [field]: '' };
    });
    setSubmitError((current) => (current ? '' : current));
  }, []);

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};

    if (form.fullName.trim().length < 2) nextErrors.fullName = 'Enter your full name.';
    if (!emailRegex.test(form.email.trim())) nextErrors.email = 'Enter a valid email address.';
    if (!form.phoneCountryIso2) nextErrors.phoneCountryIso2 = 'Select a country code.';
    if (form.phoneLocal.replace(/\D/g, '').length !== 10) nextErrors.phoneLocal = 'Enter a 10-digit phone or WhatsApp number.';
    if (form.location.trim().length < 2) nextErrors.location = 'Share your current city or working location.';
    if (!form.experience) nextErrors.experience = 'Select your experience level.';
    if (!form.resumeFile) nextErrors.resumeFile = 'Upload your resume as a PDF or Word document.';
    if (form.resumeFile && form.resumeFile.size > 5 * 1024 * 1024) nextErrors.resumeFile = 'Resume must be 5 MB or smaller.';
    if (form.resumeFile && !/\.(pdf|doc|docx)$/i.test(form.resumeFile.name)) nextErrors.resumeFile = 'Resume must be PDF or Word format.';
    if (form.portfolioUrl && !/^https?:\/\/\S+\.\S+/i.test(form.portfolioUrl.trim())) nextErrors.portfolioUrl = 'Enter a valid URL starting with http:// or https://.';
    if (form.coverNote.trim().length < 30) nextErrors.coverNote = 'Write at least 30 characters about your fit.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const scrollToApplication = useCallback(() => {
    window.setTimeout(() => {
      document.getElementById('careers-application')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }, []);

  const scrollToRoles = useCallback(() => {
    document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleApplyForRole = useCallback((roleId: string) => {
    updateField('roleId', roleId);
    setSubmitSuccess(false);
    scrollToApplication();
  }, [updateField]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isSubmitting) return;

    if (!validateForm()) {
      setSubmitError('Please complete the highlighted fields before submitting your application.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    const formData = new FormData();
    formData.append('roleId', form.roleId);
    formData.append('roleTitle', selectedRole.title);
    formData.append('department', selectedRole.department);
    formData.append('fullName', form.fullName);
    formData.append('email', form.email);
    formData.append('phoneCountryIso2', form.phoneCountryIso2);
    formData.append('phoneDialCode', selectedPhoneCountry.dialCode);
    formData.append('phoneLocal', form.phoneLocal.replace(/\D/g, ''));
    formData.append('phone', `${selectedPhoneCountry.dialCode}${form.phoneLocal.replace(/\D/g, '')}`);
    formData.append('location', form.location);
    formData.append('experience', form.experience);
    formData.append('portfolioUrl', form.portfolioUrl);
    formData.append('coverNote', form.coverNote);
    if (form.resumeFile) formData.append('resume', form.resumeFile);

    const emailJsParams = {
      role: selectedRole.title,
      name: form.fullName,
      email: form.email,
      phone: `${selectedPhoneCountry.dialCode}${form.phoneLocal.replace(/\D/g, '')}`,
      location: form.location,
      experience: form.experience,
      portfolio: form.portfolioUrl,
      resume_link: form.resumeFile?.name || 'No resume attached',
      message: form.coverNote,
      time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    try {
      const backendPromise = fetch('/api/careers/apply', {
        method: 'POST',
        body: formData,
      }).catch((err) => {
        console.warn('Career backend save failed:', err);
        return null;
      });

      let emailDelivered = false;

      try {
        await send(CAREERS_EMAILJS_SERVICE_ID, CAREERS_EMAILJS_TEMPLATE_ID, emailJsParams);
        emailDelivered = true;
      } catch (clientError) {
        console.warn('Career EmailJS client send failed, attempting server proxy', clientError);
        const proxyResponse = await fetch('/api/emailjs/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: CAREERS_EMAILJS_SERVICE_ID,
            template_id: CAREERS_EMAILJS_TEMPLATE_ID,
            template_params: emailJsParams,
          }),
        });

        if (!proxyResponse.ok) {
          const proxyText = await proxyResponse.text().catch(() => '');
          throw new Error(proxyText || 'Server EmailJS proxy failed');
        }

        emailDelivered = true;
      }

      const backendResult = await backendPromise;
      if (backendResult && !backendResult.ok) {
        const backendData = await backendResult.json().catch(() => ({}));
        console.warn('Career backend save returned error:', backendData);
      }

      if (!emailDelivered) {
        throw new Error('Email delivery failed. Please try again or contact careersmavionix@gmail.com.');
      }

      setSubmitSuccess(true);
      setSubmitError('');
      scrollToApplication();
    } catch (error: any) {
      const errorMsg = error.name === 'AbortError'
        ? 'Request timed out. Please check your internet connection and try again.'
        : error.message || SUBMISSION_FAILED_MESSAGE;
      setSubmitError(errorMsg);
      console.error('[Career Form Submission Error]', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-12 pb-20" aria-label="MaVionix Careers">
      <Hero onViewRoles={scrollToRoles} onApply={scrollToApplication} />

      <HiringProcessSection />

      <div id="open-positions" className="bg-slate-50/80 py-16 dark:bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-purple-700 dark:text-purple-300">We're Hiring</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">Current Openings</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                {activeCategory === 'Internship'
                  ? 'Explore internship opportunities across engineering, AI, design, and growth. Pick a role and apply directly.'
                  : 'Explore full-time job opportunities across engineering, AI, security, design, and growth. Pick a role and apply directly.'}
              </p>

              <div role="tablist" aria-label="Career category" className="mt-5 inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <button
                  role="tab"
                  aria-selected={activeCategory === 'Internship'}
                  onClick={() => handleCategoryChange('Internship')}
                  className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider transition ${activeCategory === 'Internship'
                    ? 'bg-slate-950 dark:bg-[#6d28d9] text-white shadow-sm'
                    : 'text-slate-600 hover:text-purple-700 dark:text-slate-300'
                    }`}
                >
                  Internship Opportunities
                </button>
                <button
                  role="tab"
                  aria-selected={activeCategory === 'Job'}
                  onClick={() => handleCategoryChange('Job')}
                  className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider transition ${activeCategory === 'Job'
                    ? 'bg-slate-950 dark:bg-[#6d28d9] text-white shadow-sm'
                    : 'text-slate-600 hover:text-purple-700 dark:text-slate-300'
                    }`}
                >
                  Job Opportunities
                </button>
              </div>

              <p className="mt-4 inline-flex rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-black uppercase tracking-wider text-blue-700 dark:border-blue-900 dark:bg-slate-950 dark:text-blue-200">
                {filteredRoles.length} matching {filteredRoles.length === 1 ? 'role' : 'roles'}
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-800 dark:bg-slate-950">
              <label className="relative block">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  value={query}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
                  placeholder="Search roles, skills, or locations..."
                  className="h-12 w-full rounded-sm border border-slate-200 bg-slate-50 pl-12 pr-12 text-sm font-semibold outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100 dark:border-slate-800 dark:bg-slate-900/70 dark:focus:bg-slate-950 dark:focus:ring-blue-950"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-sm p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
              </label>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-1 text-xs font-black uppercase tracking-wider text-slate-400">
                  <Filter size={14} />
                  Filter
                </span>
                {departments.map((item) => (
                  <button
                    key={item}
                    onClick={() => setDepartment(item)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-extrabold transition ${department === item
                      ? 'border-slate-950 dark:border-transparent bg-slate-950 dark:bg-[#6d28d9] text-white shadow-none'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-blue-300   dark:bg-slate-950 dark:text-slate-300'
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.82fr]">
            <div className="space-y-5">
              {filteredRoles.length > 0 ? (
                filteredRoles.map((role, roleIdx) => (
                  <RoleCard key={role.id} role={role} index={roleIdx} onApply={handleApplyForRole} theme={theme} />
                ))
              ) : (
                <div className="rounded-lg border border-slate-200 bg-white px-6 py-14 text-center shadow-xl dark:border-slate-800 dark:bg-slate-950">
                  <Search className="mx-auto h-10 w-10 text-slate-400" />
                  <h2 className="mt-4 text-xl font-black text-slate-950 dark:text-white">No roles found</h2>
                  <p className="mx-auto mt-2 max-w-md text-sm text-slate-600 dark:text-slate-300">Try a different skill, department, or location.</p>
                </div>
              )}
            </div>

            <ApplicationPanel
              form={form}
              errors={errors}
              submitError={submitError}
              submitSuccess={submitSuccess}
              referenceId={referenceId}
              selectedRole={selectedRole}
              roleOptions={CAREER_ROLE_OPTIONS}
              phoneCountryOptions={PHONE_COUNTRY_OPTIONS}
              isSubmitting={isSubmitting}
              updateField={updateField}
              handleSubmit={handleSubmit}
              onViewOpenPositions={scrollToRoles}
            />
          </div>
        </div>
      </div>

      <CultureSection />
      <TimelineSection />
      <TestimonialsAndFaq />
    </section>
  );
}

const Hero = memo(function Hero({ onViewRoles, onApply }: { onViewRoles: () => void; onApply: () => void }) {
  const cardTransition = useCardTransition();
  return (
    <section className="reveal-up relative -mx-[50vw] left-1/2 right-1/2 w-screen overflow-hidden border-b border-slate-200/70 bg-white/80 dark:border-slate-800/80 dark:bg-[#06070d]">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.07),transparent_35%),radial-gradient(circle_at_80%_15%,rgba(124,58,237,0.045),transparent_30%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.16),transparent_32%),radial-gradient(circle_at_82%_10%,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.10),transparent_32%)]" />
        <div className="absolute left-1/2 top-10 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-purple-200/25 dark:bg-purple-500/10 blur-[120px]" />
        <div className="absolute right-[-5%] top-[18%] h-[280px] w-[280px] rounded-full bg-purple-100/30 dark:bg-blue-500/10 blur-[110px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/35 to-transparent" />
      </div>

      <div className=" relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-16 ">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* LEFT: text + stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-center sm:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/70 bg-white/80 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.24em] text-purple-700 shadow-sm backdrop-blur dark:border-purple-500/25 dark:bg-white/5 dark:text-purple-200">
              <Sparkles size={14} className="text-purple-700 dark:text-purple-300" />
              Careers at MaVionix
            </div>

            <h1 className="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl dark:text-white">
              Build real <span className="text-gradient-royal">products</span> with a team that helps you{' '}
              <span className="text-slate-950 dark:text-white">learn</span> and{' '}
              <span className="text-gradient-lead">grow</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300 sm:mx-0">
              Join a team shaping AI-powered products, scalable web platforms, cybersecurity practices, and digital experiences for growing businesses.
            </p>

            <div className="mt-8 flex flex-row items-center justify-center gap-3 sm:flex-row sm:items-start sm:justify-start">
              <button onClick={onViewRoles} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950  px-5 py-3 text-xs font-black uppercase tracking-wider text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-[#6d28d9]">
                View Open Positions
              </button>
              <button onClick={onApply} className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-slate-950 dark:bg-[#6d28d9] px-5 py-3 text-xs font-black uppercase tracking-wider text-white shadow-none transition hover:-translate-y-0.5 hover:shadow-lg">
                Apply Now
                <ArrowRight size={16} />
              </button>
            </div>
            <div className="reveal-up mt-8 grid grid-cols-3 gap-2 sm:gap-4">
              {[
                { value: '6+', label: 'Open roles' },
                { value: '40+', label: 'Team members' },
                { value: '3-5d', label: 'Review time' },
              ].map((stat, statIdx) => (
                <motion.div
                  key={stat.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={cardViewport}
                  variants={cardFadeHorizontalScale}
                  transition={cardTransition(statIdx)}
                  className="reveal-up rounded-xl sm:rounded-2xl border border-slate-200/70 bg-white/85 p-2.5 sm:p-4 text-center shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-slate-900/70"
                >
                  <div className="text-base sm:text-2xl font-black tracking-tight text-purple-700 dark:text-purple-300">{stat.value}</div>
                  <div className="mt-1 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.08em] sm:tracking-[0.22em] text-slate-500 dark:text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>


          </motion.div>

          {/* RIGHT: image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="w-full max-w-xl justify-self-center lg:justify-self-end"
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-950">
              <div className="relative h-72 sm:h-96">
                <img
                  src={enhanceImageUrl('https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=720&fit=crop', { width: 900, height: 720, quality: 90 })}
                  srcSet={enhancedSrcSet('https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=720&fit=crop', [480, 720, 900, 1200], { height: 720, quality: 90 })}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  alt="MaVionix team collaboration workspace"
                  className="image-enhanced image-enhanced-photo h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-white text-white uppercase tracking-widest force-white-text">Teams hiring now</p>
                  <p className="mt-2 text-2xl font-black text-white force-white-text">Engineering, Design, AI, Security, Growth</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
});

const SectionHeader = memo(function SectionHeader({ badge, title, subtitle }: { badge: string; title: string; subtitle: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-xs font-extrabold uppercase tracking-widest text-purple-600">{badge}</p>
      <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">{title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">{subtitle}</p>
    </div>
  );
});

const FeatureGrid = memo(function FeatureGrid({ id, badge, title, subtitle, items, compact = false }: { id: string; badge: string; title: string; subtitle: string; items: FeatureItem[]; compact?: boolean }) {
  return (
    <div id={id} className=" mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader badge={badge} title={title} subtitle={subtitle} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.id} className={`rounded-lg border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-950 ${compact ? 'flex gap-4 p-5' : 'p-6'}`}>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-200">
                <Icon size={22} />
              </div>
              <div className={compact ? '' : 'mt-4'}>
                <h3 className="text-lg font-black text-slate-950 dark:text-white">{item.title}</h3>
                <p className="reveal-up mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
});

const RoleCard = memo(function RoleCard({ role, onApply, theme }: {
  role: CareerRole;
  onApply: (roleId: string) => void;
  theme: 'light' | 'dark';
  index?: number;
}) {
  const Icon = role.icon;

  return (
    <article
      className="reveal-up group rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-900 sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-200">
            <Icon size={22} />
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-blue-600">{role.department}</p>
            <h2 className="mt-1 text-xl font-black text-slate-950 dark:text-white sm:text-2xl">{role.title}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">{role.summary}</p>
          </div>
        </div>
        <button onClick={() => onApply(role.id)} className=" inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-slate-950 dark:bg-[#6d28d9] dark:text-white px-5 py-3 text-xs font-black color-white uppercase tracking-wider text-white transition hover:opacity-90">
          Apply
          <ArrowRight size={15} color="white" className="text-current" />
        </button>
      </div>

      <div className="mt-5 grid gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 sm:grid-cols-3">
        <span className="inline-flex min-w-0 items-center gap-1.5 rounded-sm border border-slate-200 bg-slate-50 px-3 py-2 dark:border-slate-800 dark:bg-slate-900/40"><MapPin size={13} className="shrink-0" /> <span className="truncate">{role.location}</span></span>
        <span className="inline-flex items-center gap-1.5 rounded-sm border border-slate-200 bg-slate-50 px-3 py-2 dark:border-slate-800 dark:bg-slate-900/40"><Clock size={13} /> {role.type}</span>
        <span className="inline-flex items-center gap-1.5 rounded-sm border border-slate-200 bg-slate-50 px-3 py-2 dark:border-slate-800 dark:bg-slate-900/40"><BriefcaseBusiness size={13} /> {role.experience}</span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {role.skills.map((skill) => (
          <span key={skill} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold text-blue-700 dark:bg-blue-500/10 dark:text-blue-200">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
});

const ApplicationPanel = memo(function ApplicationPanel({
  form,
  errors,
  submitError,
  submitSuccess,
  referenceId,
  selectedRole,
  roleOptions,
  phoneCountryOptions,
  isSubmitting,
  updateField,
  handleSubmit,
  onViewOpenPositions,
}: {
  form: ApplicationForm;
  errors: Record<string, string>;
  submitError: string;
  submitSuccess: boolean;
  referenceId: string;
  selectedRole: CareerRole;
  roleOptions: React.ReactNode;
  phoneCountryOptions: React.ReactNode;
  isSubmitting: boolean;
  updateField: <K extends keyof ApplicationForm>(field: K, value: ApplicationForm[K]) => void;
  handleSubmit: (event: React.FormEvent) => void;
  onViewOpenPositions: () => void;
}) {
  return (
    <motion.div
      id="careers-application"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-950 lg:sticky lg:top-28 lg:self-start"
    >
      <div className="border-b border-slate-200 bg-slate-50 px-5 py-4 dark:border-slate-800 dark:bg-slate-900/45 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-purple-700 dark:text-purple-300">Application</p>
            <p className="mt-1 text-sm font-bold text-slate-600 dark:text-slate-300">{selectedRole.title}</p>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-200">Secure form</span>
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <div className="mb-6">
          <p className="text-xs font-extrabold uppercase tracking-widest text-purple-700 dark:text-purple-300">Apply now</p>
          <h2 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">Career Application</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">Complete the essentials for {selectedRole.title}. We will take it from there.</p>
        </div>

        {submitSuccess ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 px-5 py-5 shadow-lg shadow-emerald-100/80 dark:border-emerald-900/60 dark:bg-emerald-950/30">
            <div className="flex flex-col items-center gap-4 text-center">
              <CheckCircle2 className="h-14 w-14 text-emerald-600 dark:text-emerald-400" />
              <div className="space-y-2">
                <p className="text-xl font-black text-emerald-950 dark:text-emerald-100 sm:text-2xl">
                  🎉 Application Submitted Successfully!
                </p>
                <p className="text-sm font-semibold leading-relaxed text-emerald-900 dark:text-emerald-100">
                  Thank you for applying to MaVionix. We’ve received your details and will review them shortly.
                </p>
                {referenceId && (
                  <p className="rounded-md bg-white/70 px-3 py-2 text-xs font-bold text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-100">
                    Reference ID: {referenceId}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={onViewOpenPositions}
                className="inline-flex items-center justify-center rounded-full bg-slate-950 dark:bg-[#6d28d9] px-5 py-3 text-sm font-black text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Browse other open positions
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {submitError && (
              <div
                role="alert"
                aria-live="assertive"
                aria-label="Submission failed"
                className="rounded-lg border border-red-200 bg-red-50 p-4 shadow-md dark:border-red-900/60 dark:bg-red-950/30"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-3">
                  <div className="shrink-0 pt-0.5">
                    <AlertCircle size={20} className="text-red-600 dark:text-red-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-black text-red-900 dark:text-red-100">
                      ❌ Submission Failed
                    </p>
                    <p className="mt-2 text-xs font-semibold leading-relaxed text-red-800 dark:text-red-100/90">
                      {submitError}
                    </p>
                    <p className="mt-2 text-xs font-bold text-red-700 dark:text-red-200/80">
                      Please try again or contact us at <a href="mailto:careersmavionix@gmail.com" className="underline hover:no-underline">careersmavionix@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            )}

            <FieldError error={errors.roleId}>
              <label htmlFor="careerRole" className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-300">Role</label>
              <select id="careerRole" title="Select a career role" value={form.roleId} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => updateField('roleId', event.target.value)} className="mt-1 h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm font-semibold outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-slate-800 dark:bg-slate-950 dark:focus:border-blue-500 dark:focus:ring-blue-950">
                {roleOptions}
              </select>
            </FieldError>

            <div className="grid gap-4 sm:grid-cols-2">
              <TextField id="fullName" label="Full Name" value={form.fullName} error={errors.fullName} onChange={(value) => updateField('fullName', value)} placeholder="e.g. Aarav Sharma" />
              <TextField id="email" label="Email" type="email" value={form.email} error={errors.email} onChange={(value) => updateField('email', value)} placeholder="you@email.com" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <FieldError error={errors.phoneCountryIso2 || errors.phoneLocal || errors.phone}>
                <label htmlFor="phoneLocal" className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-300">Phone / WhatsApp</label>
                <div className="mt-1 grid grid-cols-[minmax(112px,0.55fr)_1fr] gap-2">
                  <select
                    value={form.phoneCountryIso2}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => updateField('phoneCountryIso2', event.target.value)}
                    className="h-11 min-w-0 rounded-md border border-slate-200 bg-white px-2 text-xs font-semibold outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-slate-800 dark:bg-slate-950 dark:focus:border-blue-500 dark:focus:ring-blue-950"
                    aria-label="Phone country code"
                  >
                    {phoneCountryOptions}
                  </select>
                  <input
                    id="phoneLocal"
                    type="tel"
                    inputMode="numeric"
                    value={form.phoneLocal}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateField('phoneLocal', event.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="9876543210"
                    className={`h-11 min-w-0 rounded-md border bg-white px-3 text-sm font-semibold outline-none transition focus:ring-2 dark:bg-slate-950 ${errors.phoneLocal || errors.phone
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-100 dark:border-red-500 dark:focus:ring-red-950'
                      : 'border-slate-200 focus:border-blue-400 focus:ring-blue-100 dark:border-slate-800 dark:focus:border-blue-500 dark:focus:ring-blue-950'
                      }`}
                  />
                </div>
              </FieldError>
              <TextField id="location" label="Current Location" value={form.location} error={errors.location} onChange={(value) => updateField('location', value)} placeholder="Hyderabad / Remote" />
            </div>

            <FieldError error={errors.experience}>
              <label htmlFor="experience" className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-300">Experience</label>
              <select id="experience" value={form.experience} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => updateField('experience', event.target.value)} className="mt-1 h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm font-semibold outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-slate-800 dark:bg-slate-950 dark:focus:border-blue-500 dark:focus:ring-blue-950">
                <option value="" disabled>Select experience</option>
                <option>Fresher</option>
                <option>0-1 years</option>
                <option>1-3 years</option>
                <option>3+ years</option>
              </select>
            </FieldError>

            <TextField id="portfolioUrl" label="Portfolio / LinkedIn URL" value={form.portfolioUrl} error={errors.portfolioUrl} onChange={(value) => updateField('portfolioUrl', value)} placeholder="https://..." />

            <FieldError error={errors.resumeFile || errors.resume}>
              <label htmlFor="resumeFile" className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-300">Resume</label>
              <motion.label
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`mt-1 flex min-h-14 cursor-pointer items-center gap-3 rounded-md border-2 border-dashed px-3 py-3 text-sm font-semibold transition ${errors.resumeFile || errors.resume
                  ? 'border-red-400 bg-red-50 text-red-600 dark:border-red-500 dark:bg-red-950/30 dark:text-red-300'
                  : 'border-slate-300 bg-slate-50 text-slate-600 hover:border-blue-400 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-300 dark:hover:border-blue-400'
                  }`}
              >
                <FileUp size={18} className="shrink-0 text-blue-600 dark:text-blue-400" />
                <span className="min-w-0 flex-1 truncate">
                  {form.resumeFile ? form.resumeFile.name : 'Upload PDF, DOC, or DOCX up to 5 MB'}
                </span>
                <input
                  id="resumeFile"
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateField('resumeFile', event.target.files?.[0] || null)}
                  className="sr-only"
                />
              </motion.label>
            </FieldError>

            <FieldError error={errors.coverNote}>
              <div className="flex items-center justify-between">
                <label htmlFor="coverNote" className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-300">Why this role?</label>
                <span className="text-[10px] font-mono text-slate-400">{form.coverNote.length} / 1000</span>
              </div>
              <textarea
                id="coverNote"
                value={form.coverNote}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => updateField('coverNote', event.target.value)}
                maxLength={1000}
                rows={5}
                placeholder="Tell us what you have built, what you want to learn, and when you can start."
                className={`mt-1 w-full resize-none rounded-md border bg-white px-3 py-2.5 text-sm font-semibold outline-none transition focus:ring-2 dark:bg-slate-950 ${errors.coverNote
                  ? 'border-red-400 focus:border-red-500 focus:ring-red-100 dark:border-red-500 dark:focus:ring-red-950'
                  : 'border-slate-200 focus:border-blue-400 focus:ring-blue-100 dark:border-slate-800 dark:focus:border-blue-500 dark:focus:ring-blue-950'
                  }`}
              />
            </FieldError>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.01 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="bg-slate-950 dark:bg-[#6d28d9] w-full inline-flex  items-center justify-center gap-2 overflow-hidden rounded-lg px-5 py-4 text-xs font-black uppercase tracking-wider text-white shadow-lg transition-all hover:shadow-xl hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-md sm:py-3.5 md:py-4"
            >

              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Submitting...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span>Submit Application</span>
                  <Send size={16} className="shrink-0" />
                </div>
              )}
            </motion.button>
          </form>
        )}

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-bold text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-1.5"><Mail size={13} /> careersmavionix@gmail.com</span>
          <span className="inline-flex items-center gap-1.5"><MapPin size={13} /> Remote / Hyderabad</span>
        </div>
      </div>
    </motion.div>
  );
});

const CultureSection = memo(function CultureSection() {
  const cardTransition = useCardTransition();
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Our Culture"
        title="Where Talent Thrives Together"
        subtitle="Collaboration, innovation, and inclusion are how we build products and grow careers every day."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {CULTURE.map((pillar) => (
          <article
            key={pillar.id}
            className="reveal-up group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-950">
            <div className=" reveal-up relative h-44 overflow-hidden">
              <img
                src={enhanceImageUrl(pillar.image, { width: 720, height: 480, quality: 90 })}
                srcSet={enhancedSrcSet(pillar.image, [360, 540, 720, 960], { height: 480, quality: 90 })}
                sizes="(min-width: 768px) 33vw, 100vw"
                alt={`${pillar.title} workspace image`}
                loading="lazy"
                decoding="async"
                className="image-enhanced image-enhanced-photo h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div id="career-hero-overlay" className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-3 left-4">
                <p className="text-2xl font-black text-white">{pillar.stat}</p>
                <p className="text-xs font-bold text-slate-200">{pillar.statLabel}</p>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-black text-slate-950 dark:text-white">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{pillar.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
});

const HiringProcessSection = memo(function HiringProcessSection() {
  return (
    <div className="reveal-up mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Hiring Process"
        title="Application Process Timeline"
        subtitle="Transparency at every step, from profile review to onboarding."
      />
      <ol className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
        {APPLICATION_TIMELINE.map(([title, description], index) => (
          <li
            key={title}
            className="reveal rounded-lg border border-slate-200 bg-white p-5 shadow-xl dark:border-slate-800 dark:bg-slate-950"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#6d28d9] text-xs font-black text-white">{index + 1}</span>
            <h3 className="mt-4 text-lg font-black text-slate-950 dark:text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
});

const TimelineSection = memo(function TimelineSection() {
  return (
    <div id="why-join-process" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Why MaVionix"
        title="Why Join MaVionix"
        subtitle="People grow fastest when they work on real products, receive direct mentorship, and can experiment with modern technology."
      />
      <div className=" reveal-up grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_JOIN.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.id}
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
  );
});

const TestimonialsAndFaq = memo(function TestimonialsAndFaq() {
  const cardTransition = useCardTransition();
  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
      <div>
        <SectionHeader badge="Team Stories" title="Growth in Their Words" subtitle="A snapshot of how people grow through real ownership at MaVionix." />
        <div className="space-y-4">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.name}
              className="reveal rounded-lg border border-slate-200 bg-white p-5 shadow-xl dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="mb-3 flex gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={14} fill="currentColor" />)}
              </div>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-black text-slate-950 dark:text-white">{item.name}</p>
              <p className="text-xs font-bold text-blue-600">{item.role}</p>
            </article>
          ))}
        </div>
      </div>

      <div>
        <SectionHeader badge="FAQ" title="Careers Questions" subtitle="Answers for candidates, interns, and applicants." />
        <div className="space-y-4">
          {CAREERS_FAQ.map((item) => (
            <details
              key={item.question}
              className="reveal rounded-lg border border-slate-200 bg-white p-5 shadow-xl dark:border-slate-800 dark:bg-slate-950"
            >
              <summary className="cursor-pointer text-base font-black text-slate-950 dark:text-white">{item.question}</summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
});

function TextField({
  id,
  label,
  value,
  onChange,
  placeholder,
  error,
  type = 'text',
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error?: string;
  type?: string;
}) {
  return (
    <FieldError error={error}>
      <label htmlFor={id} className="text-xs font-black uppercase tracking-wider text-slate-600 dark:text-slate-300">{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
        placeholder={placeholder}
        className={`mt-1 h-11 w-full rounded-md border bg-white px-3 text-sm font-semibold outline-none transition focus:ring-2 dark:bg-slate-950 ${error
          ? 'border-red-400 focus:border-red-500 focus:ring-red-100 dark:border-red-500 dark:focus:ring-red-950'
          : 'border-slate-200 focus:border-blue-400 focus:ring-blue-100 dark:border-slate-800 dark:focus:border-blue-500 dark:focus:ring-blue-950'
          }`}
      />
    </FieldError>
  );
}

function FieldError({ children, error }: { children: React.ReactNode; error?: string }) {
  return (
    <div className="space-y-1.5">
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0, y: -4 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-xs font-semibold text-red-600 dark:text-red-400"
            role="alert"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
