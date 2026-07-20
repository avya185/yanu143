// import {
//   FileText,
//   MonitorSmartphone,
//   ShieldAlert,
//   CreditCard,
//   Copyright,
//   Scale,
//   Mail,
// } from "lucide-react";
 
// type TermsAndConditionsProps = {
//   onViewChange: (view: string) => void;
// };

// export default function TermsAndConditions({ onViewChange }: TermsAndConditionsProps) {
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
//               Terms & Conditions
//             </h1>
//             <div className="mt-4 h-1 w-16 rounded-full bg-[#6d28d9]" />
//             <p className="mt-6 max-w-md text-slate-600 dark:text-slate-300">
//               These Terms and Conditions establish the legal framework governing your access to and use of our digital products, services, and platforms operated by MaVionix.
//               <br /><br />
//               By engaging with our content in any form, you agree to be legally bound by these Terms.
//             </p>
//           </div>

//           {/* Decorative illustration */}
//           <div className="relative mx-auto hidden h-64 w-full max-w-sm lg:block">
//             <TermsIllustration className="absolute inset-0 h-full w-full" />
//           </div>
//         </div>
//       </section>

//       {/* Content sections */}
//       <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-20">
//         <div className="space-y-12">
//           <PolicySection icon={MonitorSmartphone} number={1} title="Services Overview">
//             <p>
//               MaVionix provides advanced digital, AI-driven, and design-centric services, including Website & Web Application Development, AI Chatbot Development, Branding & Graphic Design, AI-Powered Automation, Content & SEO, and Custom SaaS solutions. Each service engagement is defined by a formal proposal outlining the scope, timeline, and deliverables.
//             </p>
//           </PolicySection>

//           <PolicySection icon={ShieldAlert} number={2} title="User Obligations">
//             <p>
//               Users must be at least 18 years old or possess legal capacity to use our services. Clients agree to refrain from using our services for defamatory content, distributing malware, or engaging in fraudulent and unethical practices. Any request to create content violating local or international laws will be declined immediately.
//             </p>
//           </PolicySection>

//           <PolicySection icon={CreditCard} number={3} title="Estimates & Taxes">
//             <p>
//               All project estimates are valid for 15 calendar days. Invoices are subject to applicable local or international taxes, including GST for Indian clients. Any discrepancy regarding an invoice must be raised in writing within 7 days of receiving it.
//             </p>
//           </PolicySection>

//           <PolicySection icon={Copyright} number={4} title="Intellectual Property">
//             <p>
//               Upon full and final payment, the client owns the end-product deliverables created specifically for them. MaVionix retains the intellectual property of pre-existing code libraries, internal frameworks, and automation scripts. We reserve the right to showcase completed work in our portfolio unless restricted by a written confidentiality clause.
//             </p>
//           </PolicySection>

//           <PolicySection icon={Scale} number={5} title="Dispute Resolution">
//             <p>
//               Both parties agree to attempt to resolve disputes informally within 15 business days before seeking external arbitration. If unresolved, disputes will be submitted to binding arbitration governed by the laws of India, subject to the exclusive jurisdiction of the courts in Delhi/Ghaziabad.
//             </p>
//           </PolicySection>
//         </div>
//       </section>

//       {/* Bottom CTA */}
//       <section className="px-6 pb-16 sm:px-10 lg:px-20">
//         <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-2xl bg-[#F8F1FF] dark:bg-[#0d0f1a] p-6 sm:flex-row sm:justify-between sm:p-8">
//           <div className="flex items-center gap-4">
//             <div className="hidden h-16 w-16 flex-shrink-0 sm:flex items-center justify-center rounded-full bg-white dark:bg-black border border-[#EFDBFF] dark:border-white/10">
//               <FileText className="h-7 w-7 text-[#6d28d9]" />
//             </div>
//             <div>
//               <h3 className="font-semibold text-slate-800 dark:text-white">Legal Inquiries?</h3>
//               <p className="mt-1 max-w-lg text-sm text-slate-600 dark:text-slate-300">
//                 All correspondence related to legal, contractual, or billing matters should be directed to our legal desk.
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

// function TermsIllustration({ className }: { className?: string }) {
//   return (
//     <svg viewBox="0 0 300 220" className={className} aria-hidden="true">
//       <circle cx="150" cy="110" r="95" fill="#C800FF" opacity="0.08" />
//       <rect x="110" y="70" width="80" height="100" rx="6" fill="#F3E6FF" stroke="#6d28d9" strokeWidth="2.5" />
//       <path d="M125 90h50 M125 110h50 M125 130h30" stroke="#6d28d9" strokeWidth="3" strokeLinecap="round" />
//       <circle cx="165" cy="145" r="15" fill="#6d28d9" />
//       <path d="M158 145l5 5 8-8" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }
import {
  FileText, MonitorSmartphone, ShieldAlert, CreditCard, Scale, Mail, Ban, Users, Clock
} from "lucide-react";

type TermsAndConditionsProps = {
  onViewChange: (view: string) => void;
};

export default function TermsAndConditions({ onViewChange }: TermsAndConditionsProps) {
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
              Terms & Conditions
            </h1>
            <div className="mt-4 h-1 w-16 rounded-full bg-[#6d28d9]" />
            <p className="mt-6 max-w-md text-slate-600 dark:text-slate-300">
              These Terms and Conditions establish the legal framework governing your access to and use of our digital products, services, and platforms operated by MaVionix.
              <br /><br />
              By engaging with our services, you agree to be legally bound by these Terms.
            </p>
          </div>
          <div className="relative mx-auto hidden h-64 w-full max-w-sm lg:block">
            <TermsIllustration className="absolute inset-0 h-full w-full" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-20">
        <div className="space-y-12">
          
          <PolicySection icon={MonitorSmartphone} number={1} title="Services Overview">
            <p className="mb-2">MaVionix provides a wide array of digital, AI-driven, and design-centric services, including:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li><strong>Web Development:</strong> Static sites, CMS portals (WordPress, Webflow), web apps (React, Node.js), and e-commerce.</li>
              <li><strong>AI Chatbots:</strong> GPT, Dialogflow, and Rasa solutions for customer service and lead gen.</li>
              <li><strong>Branding & Design:</strong> Logos, UI/UX, and brand identity manuals.</li>
              <li><strong>Automation:</strong> Script-based workflow optimization and CRM/ERP AI integration.</li>
              <li><strong>Content & SEO:</strong> Copywriting, backlink building, and technical SEO audits.</li>
              <li><strong>Recruitment Solutions:</strong> Candidate screening bots and ATS integrations.</li>
              <li><strong>Custom Solutions:</strong> SaaS MVPs, data dashboards, and consulting.</li>
            </ul>
          </PolicySection>

          <PolicySection icon={Users} number={2} title="Eligibility & User Obligations">
            <p className="mb-2">Users must be 18+ or possess legal capacity. You agree to use our services in compliance with all applicable laws and refrain from using them for:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li>Posting defamatory, offensive, or infringing content.</li>
              <li>Distributing malware or attempting unauthorized access.</li>
              <li>Fraudulent, deceptive, or unethical practices.</li>
            </ul>
            <p className="mt-2">Violations may result in immediate suspension, termination, or legal action.</p>
          </PolicySection>

          <PolicySection icon={CreditCard} number={3} title="Pricing, Invoicing & Payments">
            <p className="mb-2">Estimates are valid for 15 calendar days. Standard invoicing is milestone-based: <strong>50% advance, 30% mid-milestone, and 20% before final handover</strong>. Retainers are billed monthly in advance.</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li>Payments are due within 5–10 days of issue. A <strong>5% late fee</strong> applies after 10 days overdue.</li>
              <li>Domestic clients are billed in INR (₹) with 18% GST applicable. International clients in USD ($).</li>
              <li>Accepted methods include UPI, Bank Transfer (NEFT/IMPS/SWIFT), Razorpay, Wise, and PayPal.</li>
              <li>Disputes regarding invoices must be raised in writing within 7 days.</li>
            </ul>
          </PolicySection>

          <PolicySection icon={Ban} number={4} title="Refunds, Cancellations & Project Pauses">
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li><strong>Before project kickoff:</strong> 80% of the advance amount is refundable.</li>
              <li><strong>After kickoff, before 50% completion:</strong> Partial refunds based on hours worked and allocated resources.</li>
              <li><strong>After 50% completion:</strong> No refunds are issued.</li>
              <li><strong>Non-refundable scenarios:</strong> Final deliverables provided, delays caused by the client, or digital licenses activated.</li>
              <li><strong>Pauses:</strong> Projects delayed by the client for 15+ days without notice are marked "on hold". Delays beyond 45 days may result in re-quotation or termination.</li>
            </ul>
          </PolicySection>

          <PolicySection icon={Clock} number={5} title="Timelines, Delays & Subcontracting">
            <p className="mb-2">Timelines commence after advance payment and full content submission. MaVionix is not responsible for delays caused by client unresponsiveness, third-party hosting, APIs, or mid-project scope additions.</p>
            <p>We may engage vetted subcontractors bound by NDAs for specific components. We remain your single point of contact and accountability.</p>
          </PolicySection>

          <PolicySection icon={ShieldAlert} number={6} title="Termination of Agreement">
            <p className="mb-2">Clients may terminate with a 7-day written notice, clearing all pending dues. MaVionix reserves the right to terminate for:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li>Non-payment beyond 15 days of the due date.</li>
              <li>Abusive behavior or unethical demands.</li>
              <li>Repeated scope creep causing service disruption.</li>
            </ul>
          </PolicySection>

          <PolicySection icon={Scale} number={7} title="Dispute Resolution & Governing Law">
            <p className="mb-2">Both parties agree to attempt informal resolution within 15 business days. If unresolved, disputes may proceed to mediation or binding arbitration under the Arbitration and Conciliation Act, 1996 (India).</p>
            <p>These terms are governed by the laws of India, subject to the exclusive jurisdiction of the courts of <strong>Delhi / Ghaziabad, Uttar Pradesh</strong>. Neither party shall be liable for indirect or consequential damages.</p>
          </PolicySection>

        </div>
      </section>

      <section className="px-6 pb-16 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-2xl bg-[#F8F1FF] dark:bg-[#0d0f1a] p-6 sm:flex-row sm:justify-between sm:p-8">
          <div className="flex items-center gap-4">
            <div className="hidden h-16 w-16 flex-shrink-0 sm:flex items-center justify-center rounded-full bg-white dark:bg-black border border-[#EFDBFF] dark:border-white/10">
              <FileText className="h-7 w-7 text-[#6d28d9]" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-white">Legal Inquiries?</h3>
              <p className="mt-1 max-w-lg text-sm text-slate-600 dark:text-slate-300">
                All correspondence related to legal, contractual, or billing matters should be directed to our legal desk.
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

function TermsIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 220" className={className} aria-hidden="true">
      <circle cx="150" cy="110" r="95" fill="#C800FF" opacity="0.08" />
      <rect x="110" y="70" width="80" height="100" rx="6" fill="#F3E6FF" stroke="#6d28d9" strokeWidth="2.5" />
      <path d="M125 90h50 M125 110h50 M125 130h30" stroke="#6d28d9" strokeWidth="3" strokeLinecap="round" />
      <circle cx="165" cy="145" r="15" fill="#6d28d9" />
      <path d="M158 145l5 5 8-8" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}