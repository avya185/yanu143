import {
  Cookie,
  ShieldCheck,
  ListChecks,
  Settings2,
  Check,
  BarChart3,
  UserCog,
  Target,
} from "lucide-react";

const cookieTypes = [
  {
    icon: Settings2,
    type: "Strictly Necessary Cookies",
    purpose:"These cookies are essential for you to browse the website and use its features, such as accessing secure areas. Without these cookies, certain services you have requested cannot be provided. These cookies do not gather information about you that could be used for marketing purposes",
    examples: "Load balancing cookies",
    duration: "Session",
  },
  {
    icon: BarChart3,
    type: "Performance Cookies",
    purpose:
      "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
    examples: "_ga, _gid",
    duration: "1 – 2 years",
  },
  {
    icon: UserCog,
    type: "Functionality Cookies",
    purpose:
      "These cookies enable the website to remember choices you make and provide enhanced, more personal features.",
    examples: "preferences, language",
    duration: "6 months – 1 year",
  },
  {
    icon: Target,
    type: "Marketing Cookies",
    purpose:
      "These cookies are used to deliver relevant ads to you and track the effectiveness of our marketing campaigns.",
    examples: "_fbp, _fbc, hubspotutk",
    duration: "1 – 2 years",
  },
];

const usageItems = [
  "Ensuring our website functions properly",
  "Analyzing how our website is used",
  "Remembering your preferences and settings",
  "Personalizing content and advertisements",
];

function openCookiePreferences() {
  window.dispatchEvent(new CustomEvent("open-cookie-consent"));
}
type CookiePolicyProps = {
  onViewChange: (view: string) => void;
};


export default function CookiePolicy({ onViewChange }: CookiePolicyProps) {
  return (
    <main className="bg-white text-slate-800 dark:bg-black mt-10">
      {/* Hero */}
      <section className="mt-10 relative overflow-hidden bg-white">
       <button
          onClick={() => onViewChange('home')}
          className="mb-8 mt-14 inline-flex items-center gap-2 rounded-sm border border-slate-200 bg-slate-100 px-4 py-2 mx-2 text-sm font-bold text-slate-900 backdrop-blur hover:bg-slate-200 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </button>
        <div className="mt-5 mb-5 relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 dark:bg-radial-gradient(circle at 12% 0%, rgba(124, 58, 237, 0.16), transparent 30%), radial-gradient(circle at 88% 8%, rgba(6, 182, 212, 0.1), transparent 28%), linear-gradient(180deg, #04050c 0%, #060817 42%, #03040a 100%)">
          <div>
            <h1 className="text-4xl font-bold text-[#6d28d9] sm:text-5xl">
              Cookie Policy
            </h1>
            <div className="mt-4  h-1 w-16 rounded-full bg-[#6d28d9]" />
            <p className="mt-6 max-w-md text-slate-600">
<<<<<<< HEAD
              Welcome to MaVionix. This Cookie Policy explains how MaVionix ("we", "us", or "our") uses cookies and similar tracking technologies when you visit our website at www.mavionix.com.This policy provides you with clear and comprehensive information about the cookies we use and the purposes for using them.<br></br>
=======
              Welcome to MaVionix. This Cookie Policy explains how MaVionix ("we", "us", or "our") uses cookies and similar tracking technologies when you visit our website at www.mavionix.in.This policy provides you with clear and comprehensive information about the cookies we use and the purposes for using them.<br></br>
>>>>>>> f4a6bbe3ce63bf2d37ccd787728ab3dd069bc4ed
By continuing to use our website, you consent to our use of cookies as described in this Cookie Policy. If you do not agree to the use of cookies, you may adjust your browser settings or discontinue use of our website.

            </p>
            <button
              onClick={openCookiePreferences}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 dark:bg-[#6d28d9] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#C800FF]/30 transition hover:bg-[#AD00E0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C800FF] focus-visible:ring-offset-2"
            >
              <Settings2 className="h-4 w-4" />
              Manage Cookie Preferences
            </button>
          </div>

          {/* Decorative illustration */}
          <div className="relative mx-auto hidden h-64 w-full max-w-sm lg:block">
            <CookieIllustration className="absolute inset-0 h-full w-full" />
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-20">
        <div className="space-y-12">
          <PolicySection icon={Cookie} number={1} title="What Are Cookies?">
            <p>
              Cookies are small text files that are placed on your device
              when you visit a website. They are widely used to make
              websites work more efficiently and provide information to the
              website owners.
            </p>
          </PolicySection>

          <PolicySection
            icon={ShieldCheck}
            number={2}
            title="How We Use Cookies"
          >
            <p>
              MaVionix uses cookies for a variety of reasons to improve your
              experience on our website, including:
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {usageItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#6d28d9]" />
                  {item}
                </li>
              ))}
            </ul>
          </PolicySection>

          <PolicySection
            icon={ListChecks}
            number={3}
            title="Types of Cookies We Use"
          >
            <p>We use the following types of cookies on our website:</p>

            {/* Table (desktop) */}
            <div className="mt-6 hidden overflow-hidden rounded-xl border border-[#EFDBFF] sm:block">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-slate-950 dark:bg-[#6d28d9] text-white ">
                    <th className="px-5 py-3 font-semibold">Cookie Type</th>
                    <th className="px-5 py-3 font-semibold">Purpose</th>
                    <th className="px-5 py-3 font-semibold">Examples</th>
                    <th className="px-5 py-3 font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieTypes.map((row, i) => (
                    <tr
                      key={row.type}
                      className="bg-white bg-[#FBF4FF]"
                    >
                      <td className="px-5 py-4 align-top font-medium text-slate-800">
                        <span className="flex items-center gap-2">
                          <row.icon className="h-4 w-4 text-[#6d28d9]" />
                          {row.type}
                        </span>
                      </td>
                      <td className="px-5 py-4 align-top text-slate-600">
                        {row.purpose}
                      </td>
                      <td className="px-5 py-4 align-top text-slate-600">
                        {row.examples}
                      </td>
                      <td className="px-5 py-4 align-top text-slate-600">
                        {row.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Stacked cards (mobile) */}
            <div className="mt-6 space-y-4 sm:hidden">
              {cookieTypes.map((row) => (
                <div
                  key={row.type}
                  className="rounded-xl border border-[#EFDBFF] bg-[#FBF4FF] p-4"
                >
                  <p className="flex items-center gap-2 font-semibold text-slate-800">
                    <row.icon className="h-4 w-4 text-[#6d28d9]" />
                    {row.type}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">{row.purpose}</p>
                  <div className="mt-3 flex justify-between text-xs text-slate-500">
                    <span>{row.examples}</span>
                    <span>{row.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </PolicySection>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-16 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-2xl bg-[#F8F1FF] dark:bg-black p-6 sm:flex-row sm:justify-between sm:p-8">
          <div className="flex items-center gap-4">
            <div className="hidden h-16 w-16 flex-shrink-0 sm:block">
              <CookieJarIllustration className="h-full w-full" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Your Choices</h3>
              <p className="mt-1 max-w-lg text-sm text-slate-600">
                You can choose to accept or decline cookies. You can also
                manage your cookie preferences at any time by clicking the
                &quot;Manage Cookie Preferences&quot; button.
              </p>
            </div>
          </div>
          <button
            onClick={openCookiePreferences}
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-slate-950 dark:bg-[#6d28d9] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#C800FF]/30 transition hover:bg-[#AD00E0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C800FF] focus-visible:ring-offset-2"
          >
            <Settings2 className="h-4 w-4" />
            Manage Cookie Preferences
          </button>
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
        <h2 className="text-lg font-semibold text-slate-800">
          {number}. {title}
        </h2>
        <div className="mt-2 text-slate-600">{children}</div>
      </div>
    </div>
  );
}

function CookieIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 220" className={className} aria-hidden="true">
      <circle cx="180" cy="110" r="90" fill="#C800FF" opacity="0.08" />
      <g>
        <circle cx="185" cy="120" r="65" fill="#D9A066" />
        <circle cx="185" cy="120" r="65" fill="#C800FF" opacity="0.06" />
        {[
          [160, 95],
          [205, 100],
          [225, 130],
          [200, 155],
          [165, 150],
          [150, 120],
          [185, 120],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="7" fill="#5C3A21" />
        ))}
      </g>
      <g opacity="0.9">
        <circle cx="90" cy="70" r="26" fill="#D9A066" />
        {[
          [82, 62],
          [98, 66],
          [86, 78],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="#5C3A21" />
        ))}
      </g>
      <circle cx="60" cy="150" r="4" fill="#C09A6B" />
      <circle cx="255" cy="60" r="5" fill="#C09A6B" />
      <circle cx="40" cy="100" r="3" fill="#C09A6B" />
    </svg>
  );
}

function CookieJarIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect x="15" y="10" width="40" height="12" rx="4" fill="#6d28d9" />
      <rect
        x="20"
        y="25"
        width="60"
        height="65"
        rx="14"
        fill="#F3E6FF"
        stroke="#6d28d9"
        strokeWidth="2.5"
      />
      <circle cx="38" cy="55" r="6" fill="#D9A066" />
      <circle cx="58" cy="48" r="6" fill="#D9A066" />
      <circle cx="50" cy="70" r="6" fill="#D9A066" />
      <circle cx="66" cy="68" r="5" fill="#D9A066" />
    </svg>
  );
}
