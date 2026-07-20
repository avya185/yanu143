// import {
//   ShieldCheck,
//   Database,
//   Lock,
//   Eye,
//   Share2,
//   UserCheck,
//   Mail,
//   Cookie,
// } from "lucide-react";

// type PrivacyPrinciplesProps = {
//   onViewChange: (view: string) => void;
// };

// const dataPoints = [
//   { icon: Database, label: "Business Information", desc: "Business documents, strategies, reports, and pricing details you share with us." },
//   { icon: Eye, label: "Client & User Data", desc: "Client or customer data, internal communications, and proprietary data shared for project execution." },
//   { icon: Share2, label: "Development Assets", desc: "Product prototypes, development roadmaps, custom tools, and source code." },
//   { icon: Lock, label: "Access Credentials", desc: "Login credentials, databases, and access tokens required for tool integrations." },
// ];

// export default function PrivacyPrinciples({ onViewChange }: PrivacyPrinciplesProps) {
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
//               Privacy & Confidentiality
//             </h1>
//             <div className="mt-4 h-1 w-16 rounded-full bg-[#6d28d9]" />
//             <p className="mt-6 max-w-md text-slate-600 dark:text-slate-300">
//               MaVionix agrees to keep all information shared by the client strictly confidential.
//               <br /><br />
//               This page outlines our commitment to safeguarding your data, intellectual property, and business confidentiality.
//             </p>
//             <button
//               onClick={() => onViewChange('cookie-policy')}
//               className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 dark:bg-[#6d28d9] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#C800FF]/30 transition hover:bg-[#AD00E0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C800FF] focus-visible:ring-offset-2"
//             >
//               <Cookie className="h-4 w-4" />
//               View Cookie Policy
//             </button>
//           </div>

//           {/* Decorative illustration */}
//           <div className="relative mx-auto hidden h-64 w-full max-w-sm lg:block">
//             <PrivacyIllustration className="absolute inset-0 h-full w-full" />
//           </div>
//         </div>
//       </section>

//       {/* Content sections */}
//       <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-20">
//         <div className="space-y-12">
//           <PolicySection icon={Database} number={1} title="Confidential Information">
//             <p>We treat the following data with strict confidentiality, using it solely for project execution:</p>

//             <div className="mt-6 hidden overflow-hidden rounded-xl border border-[#EFDBFF] dark:border-white/10 sm:block">
//               <table className="w-full text-left text-sm">
//                 <thead>
//                   <tr className="bg-slate-950 dark:bg-[#6d28d9] text-white">
//                     <th className="px-5 py-3 font-semibold">Category</th>
//                     <th className="px-5 py-3 font-semibold">What it includes</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {dataPoints.map((row) => (
//                     <tr key={row.label} className="bg-[#FBF4FF] dark:bg-[#0d0f1a]">
//                       <td className="px-5 py-4 align-top font-medium text-slate-800 dark:text-white">
//                         <span className="flex items-center gap-2">
//                           <row.icon className="h-4 w-4 text-[#6d28d9]" />
//                           {row.label}
//                         </span>
//                       </td>
//                       <td className="px-5 py-4 align-top text-slate-600 dark:text-slate-300">
//                         {row.desc}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <div className="mt-6 space-y-4 sm:hidden">
//               {dataPoints.map((row) => (
//                 <div
//                   key={row.label}
//                   className="rounded-xl border border-[#EFDBFF] dark:border-white/10 bg-[#FBF4FF] dark:bg-[#0d0f1a] p-4"
//                 >
//                   <p className="flex items-center gap-2 font-semibold text-slate-800 dark:text-white">
//                     <row.icon className="h-4 w-4 text-[#6d28d9]" />
//                     {row.label}
//                   </p>
//                   <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{row.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </PolicySection>

//           <PolicySection icon={Lock} number={2} title="Data Access & Storage">
//             <p>
//               Client files, credentials, and project-related data are stored securely during the active project period in encrypted cloud folders like Google Drive or project tools. Access is restricted to essential team members only. All critical access credentials are deleted from MaVionix systems within 15 days after project closure unless retained under an active support plan (AMC).
//             </p>
//           </PolicySection>

//           <PolicySection icon={Share2} number={3} title="Non-Disclosure & Subcontracting">
//             <p>
//               MaVionix agrees not to disclose, publish, or share any Confidential Information with external parties unless required by law or explicit written permission is granted by the client. All team members and vetted subcontractors involved in the project are internally bound by confidentiality agreements. We are also open to signing mutual or one-way NDAs upon request.
//             </p>
//           </PolicySection>

//           <PolicySection icon={UserCheck} number={4} title="Global Data Compliance (GDPR)">
//             <p>
//               For clients in regions with data protection laws such as GDPR or CCPA, MaVionix complies with reasonable privacy policies regarding personally identifiable information (PII). We do not process or sell any client or end-user data under any circumstance.
//             </p>
//           </PolicySection>

//           <PolicySection icon={ShieldCheck} number={5} title="Breach Handling">
//             <p>
//               In the rare event of a security concern or data breach, the client will be notified within 24 hours of detection. A root-cause analysis and mitigation plan will be shared, maintaining full transparency throughout the process.
//             </p>
//           </PolicySection>
//         </div>
//       </section>

//       {/* Bottom CTA */}
//       <section className="px-6 pb-16 sm:px-10 lg:px-20">
//         <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-2xl bg-[#F8F1FF] dark:bg-[#0d0f1a] p-6 sm:flex-row sm:justify-between sm:p-8">
//           <div className="flex items-center gap-4">
//             <div className="hidden h-16 w-16 flex-shrink-0 sm:flex items-center justify-center rounded-full bg-white dark:bg-black border border-[#EFDBFF] dark:border-white/10">
//               <ShieldCheck className="h-7 w-7 text-[#6d28d9]" />
//             </div>
//             <div>
//               <h3 className="font-semibold text-slate-800 dark:text-white">Privacy Concerns?</h3>
//               <p className="mt-1 max-w-lg text-sm text-slate-600 dark:text-slate-300">
//                 Write to us to request an NDA, report a security concern, or exercise your data privacy rights.
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

// function PrivacyIllustration({ className }: { className?: string }) {
//   return (
//     <svg viewBox="0 0 300 220" className={className} aria-hidden="true">
//       <circle cx="150" cy="110" r="95" fill="#C800FF" opacity="0.08" />
//       <rect x="105" y="95" width="90" height="70" rx="10" fill="#F3E6FF" stroke="#6d28d9" strokeWidth="2.5" />
//       <path d="M120 95v-20a30 30 0 0160 0v20" stroke="#6d28d9" strokeWidth="4" fill="none" strokeLinecap="round" />
//       <circle cx="150" cy="125" r="8" fill="#6d28d9" />
//       <rect x="146" y="130" width="8" height="16" rx="3" fill="#6d28d9" />
//     </svg>
//   );
// }
import {
  ShieldCheck,
  Database,
  Lock,
  Eye,
  Share2,
  UserCheck,
  Mail,
  Cookie,
  AlertCircle,
  Server
} from "lucide-react";

type PrivacyPrinciplesProps = {
  onViewChange: (view: string) => void;
};

export default function PrivacyPrinciples({ onViewChange }: PrivacyPrinciplesProps) {
  return (
    <main className="bg-white text-slate-800 dark:bg-black dark:text-slate-200 mt-10">
      {/* Hero */}
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
              Privacy & Confidentiality
            </h1>
            <div className="mt-4 h-1 w-16 rounded-full bg-[#6d28d9]" />
            <p className="mt-6 max-w-md text-slate-600 dark:text-slate-300">
              MaVionix agrees to keep all information shared by the client strictly confidential. 
              <br /><br />
              This page outlines our strict commitment to safeguarding your data, intellectual property, and business confidentiality during and after our engagement.
            </p>
            <button
              onClick={() => onViewChange('cookie-policy')}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 dark:bg-[#6d28d9] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#C800FF]/30 transition hover:bg-[#AD00E0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C800FF] focus-visible:ring-offset-2"
            >
              <Cookie className="h-4 w-4" />
              View Cookie Policy
            </button>
          </div>
          <div className="relative mx-auto hidden h-64 w-full max-w-sm lg:block">
            <PrivacyIllustration className="absolute inset-0 h-full w-full" />
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-20">
        <div className="space-y-12">
          
          <PolicySection icon={Database} number={1} title="Definition of Confidential Information">
            <p className="mb-2">Confidential Information includes, but is not limited to:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li>Business strategies, internal communications, reports, and pricing details.</li>
              <li>Login credentials, databases, access tokens, and client/customer data.</li>
              <li>Product prototypes, development roadmaps, custom tools, and source code.</li>
              <li>Any project-related material labeled as "Confidential."</li>
            </ul>
            <p className="mt-2"><em>Exceptions:</em> Information already in the public domain, lawfully obtained from a third party, or independently developed without access to confidential materials.</p>
          </PolicySection>

          <PolicySection icon={Server} number={2} title="Data Access & Storage">
            <p className="mb-2">All client files, credentials, and project-related data are stored securely during the active project period:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li>Stored in encrypted cloud folders (Google Drive, Notion, etc.).</li>
              <li>Access is restricted only to essential team members and vetted subcontractors bound by internal confidentiality contracts.</li>
              <li>Periodic audits ensure no unauthorized data retention or downloads.</li>
              <li>All critical access credentials are deleted from MaVionix systems within 15 days after project closure unless retained under an active AMC plan.</li>
            </ul>
          </PolicySection>

          <PolicySection icon={Share2} number={3} title="Non-Disclosure & Client Responsibilities">
            <p className="mb-2"><strong>Our Obligations:</strong> MaVionix will not disclose, publish, or share Confidential Information with external parties unless required by law or explicit written permission is granted. We are open to signing mutual or one-way NDAs upon request. NDAs may override parts of this section in case of conflict.</p>
            <p><strong>Client Responsibilities:</strong> Clients must also treat all shared documentation, designs, internal processes, and pricing models from MaVionix as confidential. Sharing our proprietary deliverables with competitors or unauthorized third parties constitutes a breach of these terms.</p>
          </PolicySection>

          <PolicySection icon={Lock} number={4} title="Duration & IP Security">
            <p className="mb-2">Confidentiality obligations continue for a period of <strong>5 years</strong> after project completion unless otherwise agreed or superseded by an NDA. Any custom logic, branding, or strategies developed for you are not reused for other clients without written permission, protecting your competitive advantage.</p>
          </PolicySection>

          <PolicySection icon={Eye} number={5} title="GDPR & Global Data Compliance">
            <p className="mb-2">For clients operating in regions with strict data protection laws (such as GDPR, CCPA):</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li>MaVionix complies with reasonable privacy policies regarding personally identifiable information (PII).</li>
              <li>We avoid storing or accessing sensitive end-user data unless explicitly agreed.</li>
              <li>We do not process or sell any client or end-user data under any circumstance.</li>
              <li>User-facing tools built by MaVionix (websites, chatbots) can include cookie consent and privacy disclaimers as per your compliance requirements.</li>
            </ul>
          </PolicySection>

          <PolicySection icon={AlertCircle} number={6} title="Breach Handling & Escalation">
            <p className="mb-2">In the rare event of a security concern or data breach:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li>The client will be notified within 24 hours of detection.</li>
              <li>A root-cause analysis and mitigation plan will be shared.</li>
              <li>Full transparency will be maintained, and MaVionix will cooperate with the client’s IT or legal team if necessary.</li>
            </ul>
          </PolicySection>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-16 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-2xl bg-[#F8F1FF] dark:bg-[#0d0f1a] p-6 sm:flex-row sm:justify-between sm:p-8">
          <div className="flex items-center gap-4">
            <div className="hidden h-16 w-16 flex-shrink-0 sm:flex items-center justify-center rounded-full bg-white dark:bg-black border border-[#EFDBFF] dark:border-white/10">
              <ShieldCheck className="h-7 w-7 text-[#6d28d9]" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-white">Privacy Concerns?</h3>
              <p className="mt-1 max-w-lg text-sm text-slate-600 dark:text-slate-300">
                Write to us if you require a formal NDA or wish to exercise your data rights.
              </p>
            </div>
          </div>
          <a
            href="mailto:mavionix360@gmail.com"
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

function PolicySection({ icon: Icon, number, title, children }: { icon: React.ComponentType<{ className?: string }>; number: number; title: string; children: React.ReactNode; }) {
  return (
    <div className="flex gap-4 sm:gap-6">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-slate-950 dark:bg-[#6d28d9] text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-slate-800 dark:text-white">{number}. {title}</h2>
        <div className="mt-2 text-slate-600 dark:text-slate-300">{children}</div>
      </div>
    </div>
  );
}

function PrivacyIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 220" className={className} aria-hidden="true">
      <circle cx="150" cy="110" r="95" fill="#C800FF" opacity="0.08" />
      <rect x="105" y="95" width="90" height="70" rx="10" fill="#F3E6FF" stroke="#6d28d9" strokeWidth="2.5" />
      <path d="M120 95v-20a30 30 0 0160 0v20" stroke="#6d28d9" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="150" cy="125" r="8" fill="#6d28d9" />
      <rect x="146" y="130" width="8" height="16" rx="3" fill="#6d28d9" />
    </svg>
  );
}