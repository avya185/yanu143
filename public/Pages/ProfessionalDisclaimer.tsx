<<<<<<< HEAD
// import {
//   AlertTriangle,
//   Scale,
//   Link2,
//   Briefcase,
//   ShieldOff,
//   CloudLightning,
//   Mail,
// } from "lucide-react";

// type ProfessionalDisclaimerProps = {
//   onViewChange: (view: string) => void;
// };

// export default function ProfessionalDisclaimer({ onViewChange }: ProfessionalDisclaimerProps) {
//   return (
//     <main className="bg-white text-slate-800 dark:bg-black dark:text-slate-200 mt-10">
//       {/* Hero */}
//       <section className="mt-10 relative overflow-hidden bg-white dark:bg-black">
//         <button
//           onClick={() => onViewChange('home')}
//           className="mb-8 mt-14 inline-flex items-center gap-2 rounded-sm border border-slate-200 bg-slate-100 px-4 py-2 mx-2 text-sm font-bold text-slate-900 backdrop-blur hover:bg-slate-200 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
//         >
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//           Back
//         </button>
//         <div className="mt-5 mb-5 relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:px-0">
//           <div>
//             <h1 className="text-4xl font-bold text-[#6d28d9] sm:text-5xl">
//               Professional Disclaimer
//             </h1>
//             <div className="mt-4 h-1 w-16 rounded-full bg-[#6d28d9]" />
//             <p className="mt-6 max-w-md text-slate-600 dark:text-slate-300">
//               This page outlines the boundaries of liability and risk allocation between the client and MaVionix.
//               <br /><br />
//               While we aim to deliver high-quality services with diligence, there are limitations to our responsibilities, especially concerning factors beyond our control.
//             </p>
//           </div>

//           {/* Decorative illustration */}
//           <div className="relative mx-auto hidden h-64 w-full max-w-sm lg:block">
//             <DisclaimerIllustration className="absolute inset-0 h-full w-full" />
//           </div>
//         </div>
//       </section>

//       {/* Content sections */}
//       <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-20">
//         <div className="space-y-12">
//           <PolicySection icon={Scale} number={1} title="Limitation of Liability">
//             <p>
//               To the maximum extent permitted by applicable law, MaVionix shall not be liable for any indirect, incidental, or consequential damages, including loss of profits, data, or operational delays. In any event, MaVionix’s total liability for any claim related to a project shall not exceed the total amount paid by the client for that specific engagement.
//             </p>
//           </PolicySection>

//           <PolicySection icon={ShieldOff} number={2} title="Service Warranties">
//             <p>
//               MaVionix provides a 30-day limited warranty period from the final delivery date strictly for bug fixes and technical corrections related to agreed specifications. This warranty does not cover feature additions, errors introduced by client modifications post-deployment, or third-party OS/plugin updates released after project handover.
//             </p>
//           </PolicySection>

//           <PolicySection icon={Link2} number={3} title="Third-Party Tools & Dependencies">
//             <p>
//               Projects often involve integrations with third-party hosting, CMS, and API platforms. While we facilitate integration, we do not guarantee the uptime, long-term functionality, or pricing stability of these platforms. MaVionix is not liable for data loss or downtime resulting from third-party outages, deprecated dependencies, or unpaid license renewals.
//             </p>
//           </PolicySection>

//           <PolicySection icon={CloudLightning} number={4} title="Force Majeure">
//             <p>
//               MaVionix shall not be held liable for any failure or delay in performing its obligations due to uncontrollable circumstances. These include acts of God (earthquakes, floods), civil unrest, government restrictions, or failures in internet infrastructure and hosting providers. 
//             </p>
//           </PolicySection>

//           <PolicySection icon={AlertTriangle} number={5} title="Client-Induced Risks">
//             <p>
//               The client assumes full responsibility for risks resulting from delays in approvals, providing outdated credentials, or using unlicensed third-party assets. Any misuse of deliverables or unauthorized modifications post-delivery falls entirely outside MaVionix's scope of liability.
//             </p>
//           </PolicySection>
//         </div>
//       </section>

//       {/* Bottom CTA */}
//       <section className="px-6 pb-16 sm:px-10 lg:px-20">
//         <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-2xl bg-[#F8F1FF] dark:bg-[#0d0f1a] p-6 sm:flex-row sm:justify-between sm:p-8">
//           <div className="flex items-center gap-4">
//             <div className="hidden h-16 w-16 flex-shrink-0 sm:flex items-center justify-center rounded-full bg-white dark:bg-black border border-[#EFDBFF] dark:border-white/10">
//               <AlertTriangle className="h-7 w-7 text-[#6d28d9]" />
//             </div>
//             <div>
//               <h3 className="font-semibold text-slate-800 dark:text-white">Need Clarity?</h3>
//               <p className="mt-1 max-w-lg text-sm text-slate-600 dark:text-slate-300">
//                 Contact our team if you have questions about how these limitations apply to your engagement.
//               </p>
//             </div>
//           </div>
//           <a
//             href="mailto:mavionix360@gmail.com"
//             className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-slate-950 dark:bg-[#6d28d9] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#C800FF]/30 transition hover:bg-[#AD00E0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C800FF] focus-visible:ring-offset-2"
//           >
//             <Mail className="h-4 w-4" />
//             Contact Us
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// }
 
// function PolicySection({
//   icon: Icon,
//   number,
//   title,
//   children,
// }: {
//   icon: React.ComponentType<{ className?: string }>;
//   number: number;
//   title: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="flex gap-4 sm:gap-6">
//       <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-slate-950 dark:bg-[#6d28d9] text-white">
//         <Icon className="h-5 w-5" />
//       </div>
//       <div className="flex-1">
//         <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
//           {number}. {title}
//         </h2>
//         <div className="mt-2 text-slate-600 dark:text-slate-300">{children}</div>
//       </div>
//     </div>
//   );
// }

// function DisclaimerIllustration({ className }: { className?: string }) {
//   return (
//     <svg viewBox="0 0 300 220" className={className} aria-hidden="true">
//       <circle cx="150" cy="110" r="95" fill="#C800FF" opacity="0.08" />
//       <path d="M150 55 L205 155 L95 155 Z" fill="#F3E6FF" stroke="#6d28d9" strokeWidth="3" strokeLinejoin="round" />
//       <line x1="150" y1="95" x2="150" y2="125" stroke="#6d28d9" strokeWidth="5" strokeLinecap="round" />
//       <circle cx="150" cy="140" r="3.5" fill="#6d28d9" />
//     </svg>
//   );
// }

import {
  AlertTriangle, Scale, Link2, Briefcase, ShieldOff, CloudLightning, Mail, Wrench
=======
import {
  AlertTriangle,
  Scale,
  Link2,
  Briefcase,
  ShieldOff,
  Mail,
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
} from "lucide-react";

type ProfessionalDisclaimerProps = {
  onViewChange: (view: string) => void;
};

export default function ProfessionalDisclaimer({ onViewChange }: ProfessionalDisclaimerProps) {
  return (
    <main className="bg-white text-slate-800 dark:bg-black dark:text-slate-200 mt-10">
<<<<<<< HEAD
=======
      {/* Hero */}
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
      <section className="mt-10 relative overflow-hidden bg-white dark:bg-black">
        <button
          onClick={() => onViewChange('home')}
          className="mb-8 mt-14 inline-flex items-center gap-2 rounded-sm border border-slate-200 bg-slate-100 px-4 py-2 mx-2 text-sm font-bold text-slate-900 backdrop-blur hover:bg-slate-200 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </button>
        <div className="mt-5 mb-5 relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:px-0">
          <div>
            <h1 className="text-4xl font-bold text-[#6d28d9] sm:text-5xl">
              Professional Disclaimer
            </h1>
            <div className="mt-4 h-1 w-16 rounded-full bg-[#6d28d9]" />
            <p className="mt-6 max-w-md text-slate-600 dark:text-slate-300">
<<<<<<< HEAD
              This page outlines the boundaries of liability, warranties, and risk allocation between the client and MaVionix.
              <br /><br />
              While we aim to deliver high-quality services with diligence, there are limitations to our responsibilities concerning factors beyond our control.
            </p>
          </div>
=======
              The information provided by MaVionix ("we", "us", or "our") on www.mavionix.in is for general
              informational purposes only.
              <br /><br />
              All information on the site is provided in good faith, however we make no representation or warranty
              of any kind regarding the accuracy, adequacy, or completeness of any information on the site.
            </p>
          </div>

          {/* Decorative illustration */}
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
          <div className="relative mx-auto hidden h-64 w-full max-w-sm lg:block">
            <DisclaimerIllustration className="absolute inset-0 h-full w-full" />
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-20">
        <div className="space-y-12">
          
          <PolicySection icon={Briefcase} number={1} title="No Guarantee of Results & Website Use">
            <p className="mb-2">Content on our website is for informational purposes only. While we apply industry best practices, MaVionix does not guarantee specific business outcomes, SEO rankings, conversion rates, or revenue figures. Results vary based on market conditions outside our control.</p>
            <p>We do not warrant that our own promotional site will be error-free or that defects will be corrected immediately.</p>
          </PolicySection>

          <PolicySection icon={Wrench} number={2} title="Limited Warranty & Support Limitations">
            <p className="mb-2">MaVionix provides a <strong>30-day limited warranty</strong> from the final delivery date exclusively for bug fixes and technical corrections related to agreed specifications.</p>
            <p className="mb-2"><strong>This warranty does NOT cover:</strong></p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li>Feature additions or scope changes.</li>
              <li>Errors introduced by the client post-deployment.</li>
              <li>Platform, plugin, or OS updates released after handover.</li>
            </ul>
          </PolicySection>

          <PolicySection icon={Scale} number={3} title="General Limitation of Liability">
            <p className="mb-2">To the maximum extent permitted by applicable law, MaVionix shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, business interruption, or loss of data.</p>
            <p><strong>Cap on Liability:</strong> In any event, MaVionix’s total liability for any claim related to a project shall not exceed the total amount paid by the client for that specific project or engagement.</p>
          </PolicySection>

          <PolicySection icon={Link2} number={4} title="Service-Specific & Third-Party Limitations">
            <p className="mb-2">MaVionix is <strong>not</strong> responsible for:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li>Downtime caused by third-party hosting, payment gateways, or APIs.</li>
              <li>Errors introduced by external plugins/libraries not developed in-house.</li>
              <li>Issues arising from unsupported browsers, OS updates, or deprecated dependencies.</li>
              <li>The accuracy or security of third-party content linked from our website.</li>
            </ul>
          </PolicySection>

          <PolicySection icon={ShieldOff} number={5} title="Client-Induced Risks">
            <p className="mb-2">The client assumes full responsibility for risks resulting from:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li>Delays in approvals, feedback, or content submission.</li>
              <li>Providing incorrect or outdated credentials and data.</li>
              <li>The use of unlicensed or pirated third-party assets provided to us.</li>
              <li>Unauthorized modifications made by the client post-delivery.</li>
            </ul>
          </PolicySection>

          <PolicySection icon={CloudLightning} number={6} title="Force Majeure">
            <p className="mb-2">MaVionix shall not be held liable for failure or delay in performing its obligations due to circumstances beyond its control (Force Majeure). This includes:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li>Natural disasters (earthquakes, floods, storms).</li>
              <li>Wars, terrorism, civil unrest, or government-imposed restrictions.</li>
              <li>Internet outages, cyberattacks, or third-party hosting infrastructure failures.</li>
              <li>Pandemics or public health emergencies.</li>
            </ul>
            <p className="mt-2">If the event continues beyond 30 days, either party may opt to terminate the project without penalty, billing proportionally for work completed.</p>
          </PolicySection>

        </div>
      </section>

=======
      {/* Content sections */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-20">
        <div className="space-y-12">
          <PolicySection icon={Briefcase} number={1} title="No Professional Advice">
            <p>
              Content published on this website, including blog articles, case studies, and resource pages, is
              intended for general informational purposes and does not constitute legal, financial, technical, or
              other professional advice. Always consult a qualified professional before acting on any information
              found here.
            </p>
          </PolicySection>

          <PolicySection icon={ShieldOff} number={2} title="No Guarantee of Results">
            <p>
              While we apply industry best practices to every engagement, MaVionix does not guarantee specific
              business outcomes, rankings, conversion rates, or revenue figures as a result of our services. Results
              can vary based on market conditions and factors outside our control.
            </p>
          </PolicySection>

          <PolicySection icon={Link2} number={3} title="External Links Disclaimer">
            <p>
              Our website may contain links to third-party websites or content that are not owned or controlled by
              MaVionix. We have no control over, and assume no responsibility for, the content, privacy policies, or
              practices of any third-party sites.
            </p>
          </PolicySection>

          <PolicySection icon={Scale} number={4} title="Limitation of Liability">
            <p>
              Under no circumstance shall MaVionix be liable for any loss or damage of any kind incurred as a result
              of the use of this site or reliance on any information provided. Your use of the site and your
              reliance on any information is solely at your own risk.
            </p>
          </PolicySection>

          <PolicySection icon={AlertTriangle} number={5} title="Errors & Omissions">
            <p>
              While we strive to keep information on this site accurate and up to date, we do not warrant that the
              site will be error-free or that defects will be corrected. Content may be updated or removed without
              prior notice.
            </p>
          </PolicySection>
        </div>
      </section>

      {/* Bottom CTA */}
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
      <section className="px-6 pb-16 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-2xl bg-[#F8F1FF] dark:bg-[#0d0f1a] p-6 sm:flex-row sm:justify-between sm:p-8">
          <div className="flex items-center gap-4">
            <div className="hidden h-16 w-16 flex-shrink-0 sm:flex items-center justify-center rounded-full bg-white dark:bg-black border border-[#EFDBFF] dark:border-white/10">
              <AlertTriangle className="h-7 w-7 text-[#6d28d9]" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-white">Need Clarity?</h3>
              <p className="mt-1 max-w-lg text-sm text-slate-600 dark:text-slate-300">
<<<<<<< HEAD
                Contact our team if you have questions about how these limitations apply to your specific engagement.
=======
                Contact our team if you have questions about how this disclaimer applies to your engagement.
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
              </p>
            </div>
          </div>
          <a
<<<<<<< HEAD
            href="mailto:mavionix360@gmail.com"
=======
            href="mailto:contactmavionix@gmail.com"
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-slate-950 dark:bg-[#6d28d9] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#C800FF]/30 transition hover:bg-[#AD00E0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C800FF] focus-visible:ring-offset-2"
          >
            <Mail className="h-4 w-4" />
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}

<<<<<<< HEAD
function PolicySection({ icon: Icon, number, title, children }: { icon: React.ComponentType<{ className?: string }>; number: number; title: string; children: React.ReactNode; }) {
=======
function PolicySection({
  icon: Icon,
  number,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  number: number;
  title: string;
  children: React.ReactNode;
}) {
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
  return (
    <div className="flex gap-4 sm:gap-6">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-slate-950 dark:bg-[#6d28d9] text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
<<<<<<< HEAD
        <h2 className="text-lg font-semibold text-slate-800 dark:text-white">{number}. {title}</h2>
=======
        <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
          {number}. {title}
        </h2>
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
        <div className="mt-2 text-slate-600 dark:text-slate-300">{children}</div>
      </div>
    </div>
  );
}

function DisclaimerIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 220" className={className} aria-hidden="true">
      <circle cx="150" cy="110" r="95" fill="#C800FF" opacity="0.08" />
      <path d="M150 55 L205 155 L95 155 Z" fill="#F3E6FF" stroke="#6d28d9" strokeWidth="3" strokeLinejoin="round" />
      <line x1="150" y1="95" x2="150" y2="125" stroke="#6d28d9" strokeWidth="5" strokeLinecap="round" />
      <circle cx="150" cy="140" r="3.5" fill="#6d28d9" />
    </svg>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
