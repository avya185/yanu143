// import {
//   FileText,
//   Handshake,
//   Wallet,
//   Clock,
//   ShieldCheck,
//   Ban,
//   PenTool,
//   Mail,
// } from "lucide-react";

// type TermsOfEngagementProps = {
//   onViewChange: (view: string) => void;
// };

// export default function TermsOfEngagement({ onViewChange }: TermsOfEngagementProps) {
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
//               Terms of Engagement
//             </h1>
//             <div className="mt-4 h-1 w-16 rounded-full bg-[#6d28d9]" />
//             <p className="mt-6 max-w-md text-slate-600 dark:text-slate-300">
//               These Terms of Engagement govern the collaborative workflow, payment milestones, and professional responsibilities between MaVionix and its clients.
//               <br /><br />
//               This guide acts as a professional framework designed to set mutual expectations and protect the integrity of the partnership.
//             </p>
//           </div>

//           {/* Decorative illustration */}
//           <div className="relative mx-auto hidden h-64 w-full max-w-sm lg:block">
//             <EngagementIllustration className="absolute inset-0 h-full w-full" />
//           </div>
//         </div>
//       </section>

//       {/* Content sections */}
//       <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-20">
//         <div className="space-y-12">
//           <PolicySection icon={Handshake} number={1} title="Discovery & Scope of Work">
//             <p>
//               Every project begins with a formal Proposal Document, which includes the executive summary, scope of services, technology stack, and estimated timelines. Work will only begin upon receipt of a signed Scope of Work (SoW) agreement and the initial advance payment.
//             </p>
//           </PolicySection>

//           <PolicySection icon={Wallet} number={2} title="Payment Structure">
//             <p>
//               MaVionix follows a transparent, milestone-based payment structure. Final deliverables and credentials will not be released until the full balance is cleared.
//             </p>
//             <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
//               {[
//                 "50% Advance Payment at project initiation",
//                 "30% Mid-Milestone Payment on module completion",
//                 "20% Final Payment before deployment",
//                 "A 5% late fee applies for invoices unpaid after 10 days",
//               ].map((item) => (
//                 <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300 list-none">
//                   <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#6d28d9]" />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </PolicySection>

//           <PolicySection icon={PenTool} number={3} title="Revision & Approval Process">
//             <p>
//               Each project milestone includes a defined number of revision rounds (typically up to 2 per milestone) to incorporate client feedback. Once a deliverable is marked as "Approved", it is considered locked. Any future changes requested on approved sections will be treated as new tasks requiring a formal Change Request and additional billing.
//             </p>
//           </PolicySection>

//           <PolicySection icon={Clock} number={4} title="Client Collaboration & Delays">
//             <p>
//               Clients are responsible for providing all essential materials (brand elements, content, credentials) within the first 5–7 working days. A review window of 2–3 business days is expected per feedback round. If the project is held up beyond 15 days due to missing inputs or payments, MaVionix may pause the project temporarily.
//             </p>
//           </PolicySection>

//           <PolicySection icon={FileText} number={5} title="Delivery & Support">
//             <p>
//               A project is handed over once all milestones are completed and final payment is received. Every delivered project comes with a 30-day complimentary support period for bug fixes and functional assistance. Extended maintenance or Annual Maintenance Contracts (AMC) are offered separately for ongoing updates and security patching.
//             </p>
//           </PolicySection>

//           <PolicySection icon={Ban} number={6} title="Refunds & Cancellation">
//             <p>
//               Refunds are handled case-by-case: 80% is refundable before project kickoff; a partial refund is possible before 50% completion; no refunds are issued after 50% project completion.
//             </p>
//           </PolicySection>
//         </div>
//       </section>

//       {/* Bottom CTA */}
//       <section className="px-6 pb-16 sm:px-10 lg:px-20">
//         <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-2xl bg-[#F8F1FF] dark:bg-[#0d0f1a] p-6 sm:flex-row sm:justify-between sm:p-8">
//           <div className="flex items-center gap-4">
//             <div className="hidden h-16 w-16 flex-shrink-0 sm:flex items-center justify-center rounded-full bg-white dark:bg-black border border-[#EFDBFF] dark:border-white/10">
//               <Mail className="h-7 w-7 text-[#6d28d9]" />
//             </div>
//             <div>
//               <h3 className="font-semibold text-slate-800 dark:text-white">Have Questions?</h3>
//               <p className="mt-1 max-w-lg text-sm text-slate-600 dark:text-slate-300">
//                 Reach out to our team for clarifications on any clause before signing off on a proposal.
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

// function EngagementIllustration({ className }: { className?: string }) {
//   return (
//     <svg viewBox="0 0 300 220" className={className} aria-hidden="true">
//       <circle cx="150" cy="110" r="95" fill="#C800FF" opacity="0.08" />
//       <rect x="80" y="60" width="140" height="100" rx="10" fill="#F3E6FF" stroke="#6d28d9" strokeWidth="2.5" />
//       <line x1="100" y1="85" x2="200" y2="85" stroke="#6d28d9" strokeWidth="3" strokeLinecap="round" />
//       <line x1="100" y1="105" x2="185" y2="105" stroke="#C800FF" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
//       <line x1="100" y1="125" x2="195" y2="125" stroke="#C800FF" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
//       <circle cx="205" cy="150" r="22" fill="#6d28d9" />
//       <path d="M195 150l7 7 12-14" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }
import {
  FileText, Handshake, Clock, PenTool, Lightbulb, Wrench, MessageSquare, Briefcase, Mail
} from "lucide-react";

type TermsOfEngagementProps = {
  onViewChange: (view: string) => void;
};

export default function TermsOfEngagement({ onViewChange }: TermsOfEngagementProps) {
  return (
    <main className="bg-white text-slate-800 dark:bg-black dark:text-slate-200 mt-10">
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
              Terms of Engagement
            </h1>
            <div className="mt-4 h-1 w-16 rounded-full bg-[#6d28d9]" />
            <p className="mt-6 max-w-md text-slate-600 dark:text-slate-300">
              This Client Policy Guide outlines how MaVionix operates during every stage of a client relationship-from the first discovery call to final delivery and beyond.
              <br /><br />
              It lays out our collaborative processes, revision protocols, support boundaries, and internal standards.
            </p>
          </div>
          <div className="relative mx-auto hidden h-64 w-full max-w-sm lg:block">
            <EngagementIllustration className="absolute inset-0 h-full w-full" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-20">
        <div className="space-y-12">
          
          <PolicySection icon={Lightbulb} number={1} title="Our Service Philosophy">
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li><strong>Clarity First:</strong> No jargon. We communicate timelines, costs, and goals clearly.</li>
              <li><strong>Process-Driven Creativity:</strong> We follow structured processes in ideation, design, and development.</li>
              <li><strong>Collaboration Over Assumption:</strong> Your input is integral at every phase of the project.</li>
              <li><strong>Long-Term Thinking:</strong> Deliverables are built to evolve with your brand and future.</li>
              <li><strong>Ownership with Integrity:</strong> We take technical and ethical responsibility for what we build.</li>
            </ul>
          </PolicySection>

          <PolicySection icon={Handshake} number={2} title="Service Engagement & Discovery">
            <p className="mb-2">Projects begin with a discovery phase leading to a formal Proposal and Scope of Work (SoW). Work begins only upon receipt of a signed SoW and advance payment.</p>
            <p className="mb-2"><strong>Standard Timelines:</strong></p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li>Branding Projects: 10–15 business days</li>
              <li>Web Design/Development: 3–6 weeks</li>
              <li>AI Automation & Chatbot: 2–4 weeks</li>
            </ul>
            <p className="mt-2 text-sm"><em>Limitations: We do not accept last-minute design changes unless scoped. Projects missing client inputs for 15+ days may be paused.</em></p>
          </PolicySection>

          <PolicySection icon={Briefcase} number={3} title="Client Collaboration Responsibilities">
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li><strong>Asset Submission:</strong> Clients must provide brand elements, content, descriptions, and platform credentials within the first 5–7 working days.</li>
              <li><strong>Feedback:</strong> A review window of 2–3 business days is expected per round. Feedback must be consolidated.</li>
              <li><strong>Approvals:</strong> Once a milestone is approved, it is locked. Delays in approvals or payments may result in the project being paused or re-quoted if delayed beyond 30+ days.</li>
            </ul>
          </PolicySection>

          <PolicySection icon={PenTool} number={4} title="Revision & Change Requests">
            <p className="mb-2"><strong>Standard Revision Limits:</strong></p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li>Design: Up to 2 rounds per screen/creative deliverable.</li>
              <li>Web Dev: Up to 2 UI/UX rounds before development lock.</li>
              <li>Marketing/AI: 1-2 content tweaks or logic flow iterations.</li>
            </ul>
            <p className="mt-2 mb-2">Revisions include minor text/color tweaks, position adjustments, and small functional fixes. Changing design direction after approval or adding new features requires a formal <strong>Change Request</strong>.</p>
            <p><strong>Hourly Billing for Extra Changes:</strong> Design (₹1,000–₹2,000/hr), Development (₹1,500–₹3,000/hr), Strategy (₹2,500/hr+).</p>
          </PolicySection>

          <PolicySection icon={FileText} number={5} title="Intellectual Property & File Storage">
            <p className="mb-2">Ownership of final outputs transfers upon full payment. Raw source files (PSD, AI) or MaVionix proprietary scripts are <em>not</em> automatically transferred unless requested/scoped. We reserve the right to showcase work in our portfolio unless restricted by an NDA.</p>
            <p><strong>File Retention:</strong> Final files are shared via secure cloud links and stored for up to 60 days post-completion. Recovery after 60 days incurs a ₹1,000–₹3,000 recovery fee.</p>
          </PolicySection>

          <PolicySection icon={Wrench} number={6} title="Support, AMC & Tool Integrations">
            <p className="mb-2">Every project includes a <strong>30-day complimentary support period</strong> for bug fixes and minor adjustments. It does not cover new features or client-induced errors.</p>
            <p className="mb-2"><strong>Extended AMC Plans include:</strong> CMS/plugin updates, security patching, performance tuning, and regular backups. Ad-hoc support post-warranty is billed hourly.</p>
            <p><strong>Third-Party Tools:</strong> Clients are responsible for maintaining verified accounts, subscriptions, and valid licenses for tools (e.g., Shopify, AWS, OpenAI, Zapier). MaVionix is not liable for external downtime or API pricing changes.</p>
          </PolicySection>

          <PolicySection icon={Clock} number={7} title="Project Handover & Education">
            <p className="mb-2">Handover occurs 2-3 days after final approval and payment. Deliverables include final code, CMS credentials, and design exports.</p>
            <p>To empower our clients, we provide a 30-60 minute live training session (recorded on request), admin usage guides, and documentation for platforms delivered under the scope.</p>
          </PolicySection>

          <PolicySection icon={MessageSquare} number={8} title="Communication & Working Hours">
            <p className="mb-2"><strong>Primary Channels:</strong> Email (formal updates/invoices), WhatsApp/Slack (quick updates), Google Meet (calls). Project management is handled via Notion, Trello, or ClickUp.</p>
            <p><strong>Working Hours:</strong> Monday to Friday, 10:00 AM – 7:00 PM IST. Urgent emergency issues should be marked "URGENT" via email or priority support numbers.</p>
          </PolicySection>

        </div>
      </section>

      <section className="px-6 pb-16 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-2xl bg-[#F8F1FF] dark:bg-[#0d0f1a] p-6 sm:flex-row sm:justify-between sm:p-8">
          <div className="flex items-center gap-4">
            <div className="hidden h-16 w-16 flex-shrink-0 sm:flex items-center justify-center rounded-full bg-white dark:bg-black border border-[#EFDBFF] dark:border-white/10">
              <Mail className="h-7 w-7 text-[#6d28d9]" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-white">Workflow Inquiries?</h3>
              <p className="mt-1 max-w-lg text-sm text-slate-600 dark:text-slate-300">
                Reach out to your assigned Project Manager or our main contact desk for clarifications.
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

function EngagementIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 220" className={className} aria-hidden="true">
      <circle cx="150" cy="110" r="95" fill="#C800FF" opacity="0.08" />
      <rect x="80" y="60" width="140" height="100" rx="10" fill="#F3E6FF" stroke="#6d28d9" strokeWidth="2.5" />
      <line x1="100" y1="85" x2="200" y2="85" stroke="#6d28d9" strokeWidth="3" strokeLinecap="round" />
      <line x1="100" y1="105" x2="185" y2="105" stroke="#C800FF" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      <line x1="100" y1="125" x2="195" y2="125" stroke="#C800FF" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      <circle cx="205" cy="150" r="22" fill="#6d28d9" />
      <path d="M195 150l7 7 12-14" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}