import { useState, useEffect, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

type CookieConsentProps = {
  onViewChange: (view: string) => void;
};

const STORAGE_KEY = "mavionix_cookie_consent";

export function getConsent(): ConsentState | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
}



export default function CookieConsent({ onViewChange }: CookieConsentProps) {
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!getConsent()) setVisible(true);
  }, []);

  const save = (state: Omit<ConsentState, "timestamp">) => {
    const consent: ConsentState = { ...state, timestamp: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    setVisible(false);
  };
  const dismiss = () => setVisible(false);

  const acceptAll = () => save({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () => save({ necessary: true, analytics: false, marketing: false });
  const savePreferences = () => save({ necessary: true, analytics, marketing });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{ position: "fixed", bottom: 8, left: 8, right: 8, zIndex: 100 }}
          className="w-auto max-w-xs sm:max-w-sm sm:right-auto"
        >
          <div
            className="relative rounded-2xl shadow-xl border p-4 pr-9 sm:p-5 sm:pr-10
                       bg-white dark:bg-[#0d0f1a]
                       border-[#C800FF33] dark:border-[#C800FF55]"
          >
            <p className="text-sm mb-3 text-gray-800 dark:text-gray-100">
              We use cookies to improve your experience and understand how you use MaVionix. Read our{" "}

              <button className="underline text-[#6d28d9] dark:text-[#6d28d9]" onClick={() => onViewChange('cookie-policy')}>Cookie Policy</button>
            </p>
            <button
    onClick={dismiss}
    aria-label="Dismiss cookie notice"
    className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-200"
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
    </svg>
  </button>

            {showCustomize && (
              <div className="mb-3 space-y-2 text-sm">
                <label className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <input type="checkbox" checked disabled />
                  Necessary (always on)
                </label>
                <label className="flex items-center gap-2 text-gray-800 dark:text-gray-100">
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setAnalytics(e.target.checked)}
                  />
                  Analytics
                </label>
                <label className="flex items-center gap-2 text-gray-800 dark:text-gray-100">
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setMarketing(e.target.checked)}
                  />
                  Marketing
                </label>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              <button
                onClick={acceptAll}
                className="px-3 py-1.5 rounded-lg text-white text-xs sm:text-sm font-medium dark:bg-[#6d28d9] bg-slate-950 hover:opacity-90"
              >
                Accept All
              </button>
              <button
                onClick={rejectAll}
                className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium border
                           border-[#6d28d9] text-[#6d28d9] dark:text-[#6d28d9] dark:border-[#6d28d9]"
              >
                Reject All
              </button>
              {!showCustomize ? (
                <button
                  onClick={() => setShowCustomize(true)}
                  className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium
                             text-gray-600 dark:text-gray-300 hover:underline"
                >
                  Customize
                </button>
              ) : (
                <button
                  onClick={savePreferences}
                  className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium underline
                             text-gray-600 dark:text-gray-300"
                >
                  Save Preferences
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}