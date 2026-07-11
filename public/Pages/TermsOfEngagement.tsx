import {
  FileText,
  Handshake,
  Wallet,
  Clock,
  ShieldCheck,
  Ban,
  Scale,
  Mail,
} from "lucide-react";

type TermsOfEngagementProps = {
  onViewChange: (view: string) => void;
};

export default function TermsOfEngagement({ onViewChange }: TermsOfEngagementProps) {
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
              Terms of Engagement
            </h1>
            <div className="mt-4 h-1 w-16 rounded-full bg-[#6d28d9]" />
            <p className="mt-6 max-w-md text-slate-600 dark:text-slate-300">
              These Terms of Engagement govern every project, proposal, and working relationship between MaVionix ("we", "us", or "our") and any client, partner, or visitor who engages our services through www.mavionix.in.
              <br /><br />
              By approving a proposal, signing a statement of work, or making a payment towards our services, you agree to be bound by the terms outlined below.
            </p>
          </div>

          {/* Decorative illustration */}
          <div className="relative mx-auto hidden h-64 w-full max-w-sm lg:block">
            <EngagementIllustration className="absolute inset-0 h-full w-full" />
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-20">
        <div className="space-y-12">
          <PolicySection icon={Handshake} number={1} title="Scope of Engagement">
            <p>
              Every engagement begins with a mutually agreed scope of work, covering deliverables, timelines, and
              milestones. Any request that falls outside this documented scope will be treated as a change request
              and quoted separately before work begins.
            </p>
          </PolicySection>

          <PolicySection icon={Wallet} number={2} title="Payment Terms">
            <p>
              Unless otherwise agreed in writing, projects are billed in milestone-based instalments: an upfront
              booking amount to reserve our team's schedule, followed by milestone payments tied to delivery
              checkpoints, and a final payment prior to handover of source files or credentials.
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "Invoices are due within 7 days of issue",
                "Work may pause on overdue invoices",
                "Third-party costs are billed at actuals",
                "Refunds follow our published refund policy",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300 list-none">
                  <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#6d28d9]" />
                  {item}
                </li>
              ))}
            </ul>
          </PolicySection>

          <PolicySection icon={Clock} number={3} title="Timelines & Delivery">
            <p>
              Estimated timelines are shared at the start of a project based on the agreed scope. Delays caused by
              late feedback, incomplete content, or changes in requirements from the client's side may extend the
              original delivery schedule proportionately.
            </p>
          </PolicySection>

          <PolicySection icon={Scale} number={4} title="Intellectual Property">
            <p>
              Full ownership of final, paid-for deliverables transfers to the client upon receipt of full payment.
              MaVionix retains the right to reuse general frameworks, reusable components, and non-confidential
              methodologies developed during the engagement for future projects.
            </p>
          </PolicySection>

          <PolicySection icon={Ban} number={5} title="Termination">
            <p>
              Either party may terminate an ongoing engagement with written notice. In the event of termination,
              the client is responsible for payment of all work completed up to the termination date, and MaVionix
              will hand over all completed deliverables corresponding to payments received.
            </p>
          </PolicySection>

          <PolicySection icon={FileText} number={6} title="Amendments">
            <p>
              These Terms of Engagement may be revised from time to time to reflect changes in our processes or
              applicable law. Continued use of our services after an update constitutes acceptance of the revised
              terms. We recommend reviewing this page periodically.
            </p>
          </PolicySection>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-16 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-2xl bg-[#F8F1FF] dark:bg-[#0d0f1a] p-6 sm:flex-row sm:justify-between sm:p-8">
          <div className="flex items-center gap-4">
            <div className="hidden h-16 w-16 flex-shrink-0 sm:flex items-center justify-center rounded-full bg-white dark:bg-black border border-[#EFDBFF] dark:border-white/10">
              <Mail className="h-7 w-7 text-[#6d28d9]" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-white">Have Questions?</h3>
              <p className="mt-1 max-w-lg text-sm text-slate-600 dark:text-slate-300">
                Reach out to our team for clarifications on any clause before signing off on a proposal.
              </p>
            </div>
          </div>
          <a
            href="mailto:contactmavionix@gmail.com"
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
  return (
    <div className="flex gap-4 sm:gap-6">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-slate-950 dark:bg-[#6d28d9] text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
          {number}. {title}
        </h2>
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
