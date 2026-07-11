import { SERVICE_CATEGORIES } from '../../data/portfolio';
import { getServiceIcon } from './iconMap';
import SectionHeader from '../ui/SectionHeader';

/**
 * ServiceCategories — Full services showcase (blueprint Section 3, 14 service lines).
 */
const ServiceCategories = ({ sectionRef }) => (
  <section
    ref={sectionRef}
    id="services"
    className="py-20 bg-slate-50 dark:bg-[#07070f]"
    aria-labelledby="services-heading"
  >
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        id="services-heading"
        badge="What We Build"
        title="Services Showcase"
        subtitle="Web Development, UI/UX Design, AI Solutions, Digital Marketing, Mobile Apps, Cybersecurity, and Data Analytics — end-to-end digital services for businesses that demand results."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {SERVICE_CATEGORIES.map((service) => {
          const Icon = getServiceIcon(service.icon);
          return (
            <article
              key={service.id}
              className="group rounded-2xl border border-slate-200 bg-white/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-400/10 dark:border-white/10 dark:bg-[#081019] dark:hover:border-blue-400/35"
            >
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{service.number}</span>
              <div className="mt-3 mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20">
                <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{service.description}</p>
              <p className="mt-3 text-xs text-slate-500 dark:text-slate-500 border-t border-slate-200 dark:border-white/8 pt-3">
                <span className="font-semibold text-slate-700 dark:text-slate-300">Purpose: </span>
                {service.purpose}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServiceCategories;
