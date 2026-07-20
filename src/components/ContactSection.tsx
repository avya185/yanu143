import React, { useState, useEffect, useMemo } from 'react';
import { SERVICES } from '../data';
import { Mail, Phone, MapPin, Globe, Send, MessageCircle, ArrowUpRight, CheckSquare, Sparkles, AlertCircle } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import { motion, AnimatePresence } from 'motion/react';
import { enhanceImageUrl, enhancedSrcSet } from '../utils/images';
import { init, send } from '@emailjs/browser';
import { CONTACT_EMAILJS_SERVICE_ID, CONTACT_EMAILJS_TEMPLATE_ID, CONTACT_EMAILJS_PUBLIC_KEY } from '../emailjsConfig';
import PageHero from './ui/PageHero';
import { cardFadeUp, cardViewport, useCardTransition } from '../utils/animations';

interface ContactSectionProps {
  bookingPreset: {
    mainService: string;
    subService: string;
    preferredDate: string;
    budget: string;
    notes?: string;
  } | null;
  onClearPreset: () => void;
}

export default function ContactSection({ bookingPreset, onClearPreset }: ContactSectionProps) {
  const cardTransition = useCardTransition();
  const { selectedCurrency, convertAmount, formatAmount, translatePriceText } = useCurrency();
  // Input fields state
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userCountryCode, setUserCountryCode] = useState('+91');
  const [userPhone, setUserPhone] = useState('');
  const [userIndustry, setUserIndustry] = useState('');
  const [mainService, setMainService] = useState('');
  const [subServicesList, setSubServicesList] = useState<string[]>([]);
  const [subService, setSubService] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [budget, setBudget] = useState('');
  const [userMessage, setUserMessage] = useState('');

  // Form visual state
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [budgetAdvice, setBudgetAdvice] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submissionMode, setSubmissionMode] = useState<'sent' | 'saved' | 'draft'>('draft');
  const [successCountdown, setSuccessCountdown] = useState(10);

  // Inline errors state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    init(CONTACT_EMAILJS_PUBLIC_KEY);
  }, []);

  // Parse preset parameters if present on mount/update
  useEffect(() => {
    if (bookingPreset) {
      setMainService(bookingPreset.mainService || '');
      // populate list
      const cat = SERVICES.find(c => c.label === bookingPreset.mainService);
      if (cat) {
        setSubServicesList(cat.subs.map(s => s.label));
      } else {
        setSubServicesList([]);
      }
      setSubService(bookingPreset.subService || '');
      setPreferredDate(bookingPreset.preferredDate || '');
      setBudget(bookingPreset.budget || '');
      if (bookingPreset.notes) {
        setUserMessage(bookingPreset.notes);
      }
    }
  }, [bookingPreset]);

  // Update budget advice based on subservice selection
  useEffect(() => {
    if (!subService || !budget) {
      setBudgetAdvice('');
      return;
    }

    const catObj = SERVICES.find(c => c.label === mainService);
    const subObj = catObj?.subs.find(s => s.label === subService);

    if (subObj) {
      const basicStr = subObj.pricing.basic;
      const numMatch = basicStr.replace(/[^0-9]/g, '');
      const basicPrice = numMatch ? parseInt(numMatch, 10) : 10000;

      const userNum = parseInt(budget, 10);
      const convertedBasicPrice = convertAmount(basicPrice);
      if (!isNaN(userNum)) {
        if (userNum < convertedBasicPrice * 0.5) {
          setBudgetAdvice(`Alert: Standard starting package estimate for '${subService}' is ${translatePriceText(basicStr)}. Your target budget might be too low to implement this deliverable completely.`);
        } else if (userNum < convertedBasicPrice * 0.75) {
          setBudgetAdvice(`Guidance: Our promotional 25% discounted price for ${subService} is around ${formatAmount(basicPrice * 0.75, true)}. This aligns nicely!`);
        } else {
          setBudgetAdvice(`Guidance: Excellent coverage. This budget allows ample scope to integrate standard core revisions and add-ons.`);
        }
      }
    } else {
      setBudgetAdvice('');
    }
  }, [subService, budget, mainService]);

  const handleMainServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setMainService(selected);
    setSubService('');
    setBudgetAdvice('');

    const cat = SERVICES.find(c => c.label === selected);
    if (cat) {
      setSubServicesList(cat.subs.map(s => s.label));
    } else {
      setSubServicesList([]);
    }
  };

  useEffect(() => {
    if (!submitSuccess) return;

    const timerId = window.setTimeout(() => {
      if (successCountdown <= 1) {
        handleResetForm();
        return;
      }

      setSuccessCountdown(successCountdown - 1);
    }, 1000);

    return () => window.clearTimeout(timerId);
  }, [submitSuccess, successCountdown]);

const ABUSIVE_WORDS = [
  'fuck', 'shit', 'asshole', 'bitch', 'bastard', 'cunt', 'dick', 'pussy', 'idiot', 'stupid', 'dumbass', 'retard', 'scam', 'spam', 'fraud', 'cheat', 'abuse', 'bullshit', 'motherfucker', 'cocksucker'
];

const containsAbusiveContent = (text: string): { found: boolean; word: string } => {
  const normalized = text.toLowerCase();
  for (const word of ABUSIVE_WORDS) {
    const rx = new RegExp(`\\b${word}\\b`, 'i');
    if (rx.test(normalized)) {
      return { found: true, word };
    }
  }
  return { found: false, word: '' };
};

  const countryCodes = [
    { code: '+1', label: 'United States / Canada' },
    { code: '+7', label: 'Russia / Kazakhstan' },
    { code: '+20', label: 'Egypt' },
    { code: '+27', label: 'South Africa' },
    { code: '+30', label: 'Greece' },
    { code: '+31', label: 'Netherlands' },
    { code: '+32', label: 'Belgium' },
    { code: '+33', label: 'France' },
    { code: '+34', label: 'Spain' },
    { code: '+36', label: 'Hungary' },
    { code: '+39', label: 'Italy' },
    { code: '+40', label: 'Romania' },
    { code: '+41', label: 'Switzerland' },
    { code: '+43', label: 'Austria' },
    { code: '+44', label: 'United Kingdom' },
    { code: '+45', label: 'Denmark' },
    { code: '+46', label: 'Sweden' },
    { code: '+47', label: 'Norway' },
    { code: '+48', label: 'Poland' },
    { code: '+49', label: 'Germany' },
    { code: '+51', label: 'Peru' },
    { code: '+52', label: 'Mexico' },
    { code: '+53', label: 'Cuba' },
    { code: '+54', label: 'Argentina' },
    { code: '+55', label: 'Brazil' },
    { code: '+56', label: 'Chile' },
    { code: '+57', label: 'Colombia' },
    { code: '+58', label: 'Venezuela' },
    { code: '+60', label: 'Malaysia' },
    { code: '+61', label: 'Australia' },
    { code: '+62', label: 'Indonesia' },
    { code: '+63', label: 'Philippines' },
    { code: '+64', label: 'New Zealand' },
    { code: '+65', label: 'Singapore' },
    { code: '+66', label: 'Thailand' },
    { code: '+81', label: 'Japan' },
    { code: '+82', label: 'South Korea' },
    { code: '+84', label: 'Vietnam' },
    { code: '+86', label: 'China' },
    { code: '+90', label: 'Turkey' },
    { code: '+91', label: 'India' },
    { code: '+92', label: 'Pakistan' },
    { code: '+93', label: 'Afghanistan' },
    { code: '+94', label: 'Sri Lanka' },
    { code: '+95', label: 'Myanmar' },
    { code: '+98', label: 'Iran' },
    { code: '+211', label: 'South Sudan' },
    { code: '+212', label: 'Morocco' },
    { code: '+213', label: 'Algeria' },
    { code: '+216', label: 'Tunisia' },
    { code: '+218', label: 'Libya' },
    { code: '+220', label: 'Gambia' },
    { code: '+221', label: 'Senegal' },
    { code: '+222', label: 'Mauritania' },
    { code: '+223', label: 'Mali' },
    { code: '+224', label: 'Guinea' },
    { code: '+225', label: 'Ivory Coast' },
    { code: '+226', label: 'Burkina Faso' },
    { code: '+227', label: 'Niger' },
    { code: '+228', label: 'Togo' },
    { code: '+229', label: 'Benin' },
    { code: '+230', label: 'Mauritius' },
    { code: '+231', label: 'Liberia' },
    { code: '+232', label: 'Sierra Leone' },
    { code: '+233', label: 'Ghana' },
    { code: '+234', label: 'Nigeria' },
    { code: '+235', label: 'Chad' },
    { code: '+236', label: 'Central African Republic' },
    { code: '+237', label: 'Cameroon' },
    { code: '+238', label: 'Cape Verde' },
    { code: '+239', label: 'Sao Tome and Principe' },
    { code: '+240', label: 'Equatorial Guinea' },
    { code: '+241', label: 'Gabon' },
    { code: '+242', label: 'Republic of the Congo' },
    { code: '+243', label: 'Democratic Republic of the Congo' },
    { code: '+244', label: 'Angola' },
    { code: '+245', label: 'Guinea-Bissau' },
    { code: '+246', label: 'Diego Garcia' },
    { code: '+248', label: 'Seychelles' },
    { code: '+249', label: 'Sudan' },
    { code: '+250', label: 'Rwanda' },
    { code: '+251', label: 'Ethiopia' },
    { code: '+252', label: 'Somalia' },
    { code: '+253', label: 'Djibouti' },
    { code: '+254', label: 'Kenya' },
    { code: '+255', label: 'Tanzania' },
    { code: '+256', label: 'Uganda' },
    { code: '+257', label: 'Burundi' },
    { code: '+258', label: 'Mozambique' },
    { code: '+260', label: 'Zambia' },
    { code: '+261', label: 'Madagascar' },
    { code: '+262', label: 'Reunion / Mayotte' },
    { code: '+263', label: 'Zimbabwe' },
    { code: '+264', label: 'Namibia' },
    { code: '+265', label: 'Malawi' },
    { code: '+266', label: 'Lesotho' },
    { code: '+267', label: 'Botswana' },
    { code: '+268', label: 'Eswatini' },
    { code: '+269', label: 'Comoros' },
    { code: '+290', label: 'Saint Helena / Tristan da Cunha' },
    { code: '+291', label: 'Eritrea' },
    { code: '+297', label: 'Aruba' },
    { code: '+298', label: 'Faroe Islands' },
    { code: '+299', label: 'Greenland' },
    { code: '+350', label: 'Gibraltar' },
    { code: '+351', label: 'Portugal' },
    { code: '+352', label: 'Luxembourg' },
    { code: '+353', label: 'Ireland' },
    { code: '+354', label: 'Iceland' },
    { code: '+355', label: 'Albania' },
    { code: '+356', label: 'Malta' },
    { code: '+357', label: 'Cyprus' },
    { code: '+358', label: 'Finland / Aland Islands' },
    { code: '+359', label: 'Bulgaria' },
    { code: '+370', label: 'Lithuania' },
    { code: '+371', label: 'Latvia' },
    { code: '+372', label: 'Estonia' },
    { code: '+373', label: 'Moldova' },
    { code: '+374', label: 'Armenia' },
    { code: '+375', label: 'Belarus' },
    { code: '+376', label: 'Andorra' },
    { code: '+377', label: 'Monaco' },
    { code: '+378', label: 'San Marino' },
    { code: '+379', label: 'Vatican City' },
    { code: '+380', label: 'Ukraine' },
    { code: '+381', label: 'Serbia' },
    { code: '+382', label: 'Montenegro' },
    { code: '+383', label: 'Kosovo' },
    { code: '+385', label: 'Croatia' },
    { code: '+386', label: 'Slovenia' },
    { code: '+387', label: 'Bosnia and Herzegovina' },
    { code: '+389', label: 'North Macedonia' },
    { code: '+420', label: 'Czechia' },
    { code: '+421', label: 'Slovakia' },
    { code: '+423', label: 'Liechtenstein' },
    { code: '+500', label: 'Falkland Islands' },
    { code: '+501', label: 'Belize' },
    { code: '+502', label: 'Guatemala' },
    { code: '+503', label: 'El Salvador' },
    { code: '+504', label: 'Honduras' },
    { code: '+505', label: 'Nicaragua' },
    { code: '+506', label: 'Costa Rica' },
    { code: '+507', label: 'Panama' },
    { code: '+508', label: 'Saint Pierre and Miquelon' },
    { code: '+509', label: 'Haiti' },
    { code: '+590', label: 'Guadeloupe / Saint Barthelemy / Saint Martin' },
    { code: '+591', label: 'Bolivia' },
    { code: '+592', label: 'Guyana' },
    { code: '+593', label: 'Ecuador' },
    { code: '+594', label: 'French Guiana' },
    { code: '+595', label: 'Paraguay' },
    { code: '+596', label: 'Martinique' },
    { code: '+597', label: 'Suriname' },
    { code: '+598', label: 'Uruguay' },
    { code: '+599', label: 'Curacao / Caribbean Netherlands' },
    { code: '+670', label: 'Timor-Leste' },
    { code: '+672', label: 'Norfolk Island / Australian External Territories' },
    { code: '+673', label: 'Brunei' },
    { code: '+674', label: 'Nauru' },
    { code: '+675', label: 'Papua New Guinea' },
    { code: '+676', label: 'Tonga' },
    { code: '+677', label: 'Solomon Islands' },
    { code: '+678', label: 'Vanuatu' },
    { code: '+679', label: 'Fiji' },
    { code: '+680', label: 'Palau' },
    { code: '+681', label: 'Wallis and Futuna' },
    { code: '+682', label: 'Cook Islands' },
    { code: '+683', label: 'Niue' },
    { code: '+685', label: 'Samoa' },
    { code: '+686', label: 'Kiribati' },
    { code: '+687', label: 'New Caledonia' },
    { code: '+688', label: 'Tuvalu' },
    { code: '+689', label: 'French Polynesia' },
    { code: '+690', label: 'Tokelau' },
    { code: '+691', label: 'Micronesia' },
    { code: '+692', label: 'Marshall Islands' },
    { code: '+850', label: 'North Korea' },
    { code: '+852', label: 'Hong Kong' },
    { code: '+853', label: 'Macau' },
    { code: '+855', label: 'Cambodia' },
    { code: '+856', label: 'Laos' },
    { code: '+880', label: 'Bangladesh' },
    { code: '+886', label: 'Taiwan' },
    { code: '+960', label: 'Maldives' },
    { code: '+961', label: 'Lebanon' },
    { code: '+962', label: 'Jordan' },
    { code: '+963', label: 'Syria' },
    { code: '+964', label: 'Iraq' },
    { code: '+965', label: 'Kuwait' },
    { code: '+966', label: 'Saudi Arabia' },
    { code: '+967', label: 'Yemen' },
    { code: '+968', label: 'Oman' },
    { code: '+970', label: 'Palestine' },
    { code: '+971', label: 'United Arab Emirates' },
    { code: '+972', label: 'Israel' },
    { code: '+973', label: 'Bahrain' },
    { code: '+974', label: 'Qatar' },
    { code: '+975', label: 'Bhutan' },
    { code: '+976', label: 'Mongolia' },
    { code: '+977', label: 'Nepal' },
    { code: '+992', label: 'Tajikistan' },
    { code: '+993', label: 'Turkmenistan' },
    { code: '+994', label: 'Azerbaijan' },
    { code: '+995', label: 'Georgia' },
    { code: '+996', label: 'Kyrgyzstan' },
    { code: '+998', label: 'Uzbekistan' },
  ];

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};

    // 1. Name validation
    const nameTrim = userName.trim();
    if (nameTrim.length < 2) {
      tempErrors.name = 'Full name must be at least 2 characters';
    } else if (nameTrim.length > 70) {
      tempErrors.name = 'Full name cannot exceed 70 characters';
    } else {
      const abuseCheck = containsAbusiveContent(nameTrim);
      if (abuseCheck.found) {
        tempErrors.name = 'Name contains inappropriate words';
      }
    }

    // 2. Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(userEmail.trim())) {
      tempErrors.email = 'Specify a valid professional email address';
    } else if (userEmail.trim().length > 100) {
      tempErrors.email = 'Email address is too long';
    } else {
      const abuseCheck = containsAbusiveContent(userEmail.trim());
      if (abuseCheck.found) {
        tempErrors.email = 'Email contains inappropriate words';
      }
    }

    // 3. Country code + phone verification: standard 10 digit local number
    if (!userCountryCode) {
      tempErrors.countryCode = 'Select your country code';
    }

    const phoneTrim = userPhone.trim();
    const digitsOnly = phoneTrim.replace(/\D/g, '');
    if (digitsOnly.length !== 10) {
      tempErrors.phone = 'Enter a valid 10 digit phone number';
    }

    if (!userIndustry) {
      tempErrors.industry = 'Please select your target business industry';
    }

    if (!mainService) {
      tempErrors.mainService = 'Select a main capability';
    }

    if (!subService) {
      tempErrors.subService = 'Choose a specific deliverable';
    }

    // 4. Date validation: Launch date cannot be in the past
    if (!preferredDate) {
      tempErrors.date = 'Select your ideal week of launching';
    } else {
      const selectedDate = new Date(preferredDate);
      const today = new Date();
      // Reset hours to compare dates cleanly
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        tempErrors.date = 'Launch date cannot be in the past';
      }
    }

    // 5. Budget validation
    const minBudgetInSelectedCurrency = Math.round(convertAmount(2000));
    if (!budget || isNaN(Number(budget)) || Number(budget) < minBudgetInSelectedCurrency) {
      tempErrors.budget = `Specify an expected budget of at least ${formatAmount(2000, true)}`;
    } else if (Number(budget) > 100000000) {
      tempErrors.budget = 'Please enter a realistic commercial budget limit';
    }

    // 6. Message / Brief validation & abuse check
    const msgTrim = userMessage.trim();
    if (msgTrim.length < 20) {
      tempErrors.message = 'Please specify brief details of your request (at least 20 characters)';
    } else if (msgTrim.length > 2000) {
      tempErrors.message = 'Requirements description cannot exceed 2000 characters';
    } else {
      const abuseCheck = containsAbusiveContent(msgTrim);
      if (abuseCheck.found) {
        tempErrors.message = 'Inappropriate language detected. Please write a professional business brief.';
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitError('Please complete the highlighted fields before generating your proposal.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    const payload = {
      userName,
      userEmail,
      userCountryCode,
      userPhone,
      userIndustry,
      mainService,
      subService,
      preferredDate,
      budget,
      userMessage,
      currencyCode: selectedCurrency.code,
    };

    const emailJsParams = {
      name: userName,
      email: userEmail,
      phone: `${userCountryCode} ${userPhone}`.trim(),
      industry: userIndustry,
      service: mainService,
      deliverable: subService,
      launch_date: preferredDate,
      budget: `${selectedCurrency.code} ${budget}`,
      message: userMessage,
      time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    try {
      // Submit to backend and attempt client-side EmailJS send. If client send fails, try server proxy.
      const backendPromise = fetch('/api/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      let emailjsPromise = send(CONTACT_EMAILJS_SERVICE_ID, CONTACT_EMAILJS_TEMPLATE_ID, emailJsParams).catch(async (err) => {
        console.error('EmailJS client send failed, invoking server proxy', err);
        // Fallback to server-side EmailJS proxy if configured
        try {
          const resp = await fetch('/api/emailjs/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ service_id: CONTACT_EMAILJS_SERVICE_ID, template_id: CONTACT_EMAILJS_TEMPLATE_ID, template_params: emailJsParams }),
          });
          if (!resp.ok) throw new Error('Server EmailJS proxy failed');
          return { ok: true };
        } catch (proxyErr) {
          throw proxyErr;
        }
      });

      const [backendResult, emailjsResult] = await Promise.allSettled([backendPromise, emailjsPromise]);

      let backendOk = false;
      let emailjsOk = false;
      let backendMessage = '';
      let emailjsMessage = '';

      if (backendResult.status === 'fulfilled') {
        const response = backendResult.value;
        const data = await response.json().catch(() => ({}));
        if (response.ok) {
          backendOk = true;
          backendMessage = data.message || 'Backend delivery succeeded.';
          setSubmissionMode(data.delivery === 'smtp_sent' ? 'sent' : 'saved');
        } else {
          backendMessage = data.error || 'Backend delivery failed.';
        }
      } else {
        backendMessage = backendResult.reason?.message || String(backendResult.reason);
      }

      if (emailjsResult.status === 'fulfilled') {
        emailjsOk = true;
        emailjsMessage = 'EmailJS delivery succeeded.';
      } else {
        emailjsMessage = emailjsResult.reason?.text || emailjsResult.reason?.message || String(emailjsResult.reason);
      }

      if (!backendOk && !emailjsOk) {
        throw new Error(`EmailJS error: ${emailjsMessage} | Backend error: ${backendMessage}`);
      }

      const combinedMessage = [backendOk ? backendMessage : null, emailjsOk ? emailjsMessage : null]
        .filter(Boolean)
        .join(' | ');

      setSuccessCountdown(10);
      setSubmitSuccess(true);
      if (!backendOk) {
        setSubmissionMode('saved');
        setSubmitError(`Backend submission failed, but EmailJS worked. ${backendMessage}`);
      } else if (!emailjsOk) {
        setSubmissionMode('sent');
        setSubmitError(`EmailJS submission failed, but backend delivery worked. ${emailjsMessage}`);
      } else {
        setSubmissionMode('sent');
      }

      if (combinedMessage) {
        console.info('Contact submission results:', combinedMessage);
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      setSubmitError(error?.message || 'Could not submit the form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Compile pre-filled template payloads
  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${subService} - MaVionix`);
      const fullPhone = `${userCountryCode} ${userPhone}`.trim();
      const body = encodeURIComponent(
        `Hello MaVionix Technical Team,\n\n` +
        `My Name: ${userName}\n` +
        `My Email: ${userEmail}\n` +
        `Phone: ${fullPhone}\n` +
        `Target Industry: ${userIndustry}\n` +
        `Selected Service: ${mainService} -> ${subService}\n` +
        `Estimated Launch: ${preferredDate}\n` +
        `Expected Budget: ${selectedCurrency.code} ${budget}\n\n` +
        `Description:\n${userMessage}\n\n` +
        `Please review my request guidelines and draft a customized milestone proposal. Thanks!`
      );
      return `mailto:mavionix360@gmail.com?subject=${subject}&body=${body}`;
    };

    const getWhatsAppLink = () => {
      const fullNumber = `${userCountryCode}${userPhone}`.replace(/\D/g, '');
      const text = encodeURIComponent(
        `*MaVionix Project Request Brief*\n` +
        `----------------------------------\n` +
        `*Name:* ${userName}\n` +
        `*Email:* ${userEmail}\n` +
        `*Phone:* ${userCountryCode} ${userPhone}\n` +
        `*Industry:* ${userIndustry}\n` +
        `*Service:* ${mainService} -> ${subService}\n` +
        `*Timeline:* Launch by ${preferredDate}\n` +
        `*Budget Limit:* ${selectedCurrency.code} ${budget}\n\n` +
        `*Aims:* ${userMessage}`
      );
      return `https://wa.me/${fullNumber}?text=${text}`;
    };

  const handleResetForm = () => {
    setUserName('');
    setUserEmail('');
    setUserCountryCode('+91');
    setUserPhone('');
    setUserIndustry('');
    setMainService('');
    setSubService('');
    setSubServicesList([]);
    setPreferredDate('');
    setBudget('');
    setUserMessage('');
    setErrors({});
    setSubmitSuccess(false);
    setBudgetAdvice('');
    setSubmitError('');
    setSubmissionMode('draft');
    setSuccessCountdown(10);
    onClearPreset();
  };

  const industries = ["E-commerce", "Healthcare", "EdTech", "Real Estate", "B2B Services", "Other"];

  const countryCodeOptions = useMemo(() => (
    countryCodes.map((country) => (
      <option key={`${country.code}-${country.label}`} value={country.code}>
        {country.code} {country.label}
      </option>
    ))
  ), []);

  const industryOptions = useMemo(() => (
    industries.map(ind => (
      <option key={ind} value={ind}>{ind}</option>
    ))
  ), []);

  const mainServiceOptions = useMemo(() => (
    SERVICES.map(c => (
      <option key={c.label} value={c.label}>{c.label}</option>
    ))
  ), []);

  const subServiceOptions = useMemo(() => (
    subServicesList.map(s => (
      <option key={s} value={s}>{s}</option>
    ))
  ), [subServicesList]);

  const labelClass = (field: string) =>
    `text-[10px] font-bold uppercase tracking-widest block transition-colors ${
      errors[field]
        ? 'text-red-600 dark:text-red-400'
        : 'text-slate-700 dark:text-slate-300'
    }`;

  const requiredClass = (field: string) =>
    errors[field] ? 'text-red-600 dark:text-red-400' : 'text-blue-600';

  const fieldClass = (field: string, extra = '') =>
    `${extra} border text-xs sm:text-sm rounded-sm focus:outline-none transition-colors ${
      errors[field]
        ? 'border-red-500 bg-red-50/70 text-red-700 placeholder-red-300 focus:border-red-600 focus:ring-2 focus:ring-red-500/15 dark:border-red-500/70 dark:bg-red-950/25 dark:text-red-100 dark:placeholder-red-300/60'
        : 'border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:border-blue-550'
    }`;

  const phoneHasError = Boolean(errors.countryCode || errors.phone);
  const phoneFieldClass = (extra = '') =>
    `${extra} border text-xs sm:text-sm rounded-sm focus:outline-none transition-colors ${
      phoneHasError
        ? 'border-red-500 bg-red-50/70 text-red-700 placeholder-red-300 focus:border-red-600 focus:ring-2 focus:ring-red-500/15 dark:border-red-500/70 dark:bg-red-950/25 dark:text-red-100 dark:placeholder-red-300/60'
        : 'border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:border-blue-550'
    }`;

  return (
    <div className="w-full relative pt-10 pb-16 bg-white dark:bg-[#07070f]">
      
      {/* Background radial soft grid pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        
        
        {/* 1. INTRO SPLASH */}
        <PageHero
        
svg=   {<Sparkles size={14} className="text-purple-700 dark:text-purple-300" />}
          badge="Let's Coordinate"
          title={
            <>
              Consult With Our <span className="text-gradient-royal">Engineering</span>{' '}
              <span className="text-slate-950 dark:text-white">Team</span> and{' '}
              <span className="text-gradient-lead">Plan</span>
              
            </>
          }
          description="Submit your parameters below. Our staff reviews incoming requests from our Rohini, Delhi headquarters and Modinagar, Ghaziabad office within 24 hours to coordinate a brief 30-minute discovery consultation."
          stats={[
            { value: '24hrs', label: 'Response window' },
            { value: '30m', label: 'Discovery call' },
            { value: '2+', label: 'Indian offices' },
          ]}
          className="border-b-0 pb-0"
        />

        {/* 2. LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start opacity-100">
          
          {/* LEFT COLUMN: CONTACT DETAILS PANEL (LG: COL-SPAN-4) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 space-y-6"
          >
            <span className="sr-only">Headquarters contact coordinates</span>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={cardViewport}
              variants={cardFadeUp}
              transition={cardTransition(0)}
              className="p-6 bg-[#fbfbfe] dark:bg-[#0b0b13] border border-slate-200/50 dark:border-slate-900 rounded-sm space-y-6 shadow-sm"
            >
              <h3 className="text-[10px] font-black text-purple-700 dark:text-purple-300 uppercase tracking-widest leading-none">
                Support Parameters
              </h3>

              {/* Email Block */}
              <div className="flex gap-4 items-start text-xs sm:text-sm">
                <div className="w-9 h-9 rounded-sm bg-purple-50/50 dark:bg-purple-950/20 text-purple-700 dark:text-purple-300 flex items-center justify-center shrink-0 border border-purple-100/10">
                  <Mail size={16} />
                </div>
                <div>
                  <h4 className="text-slate-400 font-bold uppercase text-[9px] tracking-wider mb-0.5">Write General Help</h4>
                  <a href="mailto:mavionix360@gmail.com" className="text-slate-800 dark:text-slate-200 font-black hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                    mavionix360@gmail.com
                  </a>
                  <p className="text-[10px] text-slate-400 mt-1 font-medium">Response times under 24 hours</p>
                </div>
              </div>

              {/* Website Block */}
              <div className="flex gap-4 items-start text-xs sm:text-sm">
                <div className="w-9 h-9 rounded-sm bg-purple-50/50 dark:bg-purple-950/20 text-purple-700 dark:text-purple-300 flex items-center justify-center shrink-0 border border-purple-100/10">
                  <Globe size={16} />
                </div>
                <div>
                  <h4 className="text-slate-400 font-bold uppercase text-[9px] tracking-wider mb-0.5">Official Website</h4>
                  <a href="https://www.mavionix.com" target="_blank" rel="noopener noreferrer" className="text-slate-800 dark:text-slate-200 font-black hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                    www.mavionix.com
                  </a>
                </div>
              </div>

              {/* Phone Block */}
              <div className="flex gap-4 items-start text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                <div className="w-9 h-9 rounded-sm bg-purple-50/50 dark:bg-purple-950/20 text-purple-700 dark:text-purple-300 flex items-center justify-center shrink-0 border border-purple-100/10">
                  <Phone size={16} />
                </div>
                <div>
                  <h4 className="text-slate-400 font-bold uppercase text-[9px] tracking-wider mb-0.5">Call / WhatsApp Desk</h4>
                  <a href="tel:+917818037404" className="text-slate-805 dark:text-slate-200  font-black hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                    +91 78180 37404
                  </a>
                  <p className="text-[10px] text-slate-400 mt-1 font-medium">Mon - Sat, 10 AM to 7 PM IST</p>
                </div>
              </div>

              {/* Office Location Block */}
              <div className="flex gap-4 items-start text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                <div className="w-9 h-9 rounded-sm bg-purple-50/50 dark:bg-purple-950/20 text-purple-700 dark:text-purple-300 flex items-center justify-center shrink-0 border border-purple-100/10">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="text-slate-400 font-bold uppercase text-[9px] tracking-wider mb-0.5">Office Coordinates</h4>
                  <span className="text-slate-805 dark:text-slate-200 font-black">
                    HQ: Rohini, Delhi - 110085
                    <br />
                    Office: Modinagar, Ghaziabad - 201204
                  </span>
                  <p className="text-[10px] text-slate-400 mt-1 font-medium">Delhi NCR operations across Delhi and Uttar Pradesh</p>
                </div>
              </div>
            </motion.div>

            {/* SLA Promises Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={cardViewport}
              variants={cardFadeUp}
              transition={cardTransition(1)}
              className="p-6 bg-white  dark:bg-purple-900  border border-purple-800 rounded-sm text-black"
            >
              <h4 className="font-extrabold text-xs tracking-wider uppercase flex items-center gap-1.5 mb-3 text-black">
                <Sparkles size={16} className="text-purple-300 opacity-80" />
                The MaVionix SLA Standard
              </h4>
              <ul className="space-y-2.5 text-xs text-black bg-transparent">
                <li className="flex items-center gap-2">
                  <span className="text-purple-300 font-bold" aria-hidden="true">&bull;</span>
                  <span>Detailed scope estimation in 24 hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-300 font-bold" aria-hidden="true">&bull;</span>
                  <span>Clear, modular codebase delivery (TypeScript)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-300 font-bold" aria-hidden="true">&bull;</span>
                  <span>Strict Indian business laws MSME compliant</span>
                </li>
              </ul>
            </motion.div>

          
          </motion.div>

          {/* RIGHT COLUMN: PROJECT REQUEST FORM / SUCCESS BANNER (LG: COL-SPAN-8) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <span className="sr-only">Interactive form block</span>
            
            {submitSuccess ? (
              /* CLEAN SUCCESS BOARD */
              <div className="bg-white dark:bg-[#0c0c14] border border-slate-200 dark:border-slate-800 rounded-sm p-6 sm:p-10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[3.5px] bg-gradient-to-r from-purple-700 via-indigo-600 to-violet-500 z-10" />

                <div className="space-y-6 text-center sm:text-left">
                  <div className="w-14 h-14 rounded-sm bg-purple-50/50 dark:bg-purple-950/30 border border-purple-105 flex items-center justify-center text-purple-700 mx-auto sm:mx-0 shadow-sm">
                    <CheckSquare size={28} />
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-tight">
                      Form Submitted. Thank You!
                    </h2>
                    <h2 className="hidden">
                      ✓ Inquiry Submitted Successfully!
                    </h2>
                    <p className="text-xs text-slate-405 mt-1">
                      Your project details have been submitted successfully. We will contact you within <strong>24 hours</strong> by email or WhatsApp.
                    </p>
                    <div className="mt-4 inline-flex items-center justify-center gap-3 rounded-sm border border-purple-200 bg-purple-50 px-4 py-3 text-purple-800 dark:border-purple-800 dark:bg-purple-950/30 dark:text-purple-200">
                      <span className="text-2xl font-black font-mono leading-none">{successCountdown}</span>
                      <span className="text-[11px] font-black uppercase tracking-wider">
                        seconds before this form resets
                      </span>
                    </div>
                    <p className="hidden">
                      {submissionMode === 'sent' ? (
                        <>Your project inquiry has been delivered to the MaVionix engineering team. We will review your request and contact you within <strong>24 hours</strong> via email or WhatsApp at <strong>{userPhone}</strong>.</>
                      ) : (
                        <>Your proposal email draft is ready. If your email app did not open automatically, use WhatsApp or Email below to send the captured details directly.</>
                      )}
                    </p>
                    <p className="hidden">
                      Your project inquiry has been delivered to the MaVionix engineering team. We will review your request and contact you within <strong>24 hours</strong> via email or WhatsApp at <strong>{userPhone}</strong>.
                    </p>
                  </div>

                  {/* Summary row cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-950/60 p-5 rounded-sm border border-slate-200/50 dark:border-slate-900 text-xs text-slate-700 dark:text-slate-300">
                    <div>
                      <p className="text-[9px] text-slate-400 uppercase font-black">Authorized Representative</p>
                      <p className="font-extrabold text-slate-900 dark:text-white mt-1">{userName} ({userEmail})</p>
                    </div>
                    <div>
                      <p className="text-[9px] text-slate-400 uppercase font-black">WhatsApp Phone</p>
                      <p className="font-extrabold text-slate-900 dark:text-white mt-1">{userPhone}</p>
                    </div>
                    <div className="sm:col-span-2 border-t border-slate-200/50 dark:border-slate-800 pt-3 mt-1">
                      <p className="text-[9px] text-slate-400 uppercase font-black">Selected Service System</p>
                      <p className="font-extrabold text-blue-600 dark:text-blue-400 mt-1">{mainService} &rarr; {subService}</p>
                    </div>
                    <div>
                      <p className="text-[9px] text-slate-400 uppercase font-black">Expected Launch Cycle</p>
                      <p className="font-extrabold text-slate-900 dark:text-white mt-1">{preferredDate}</p>
                    </div>
                    <div>
                      <p className="text-[9px] text-slate-400 uppercase font-black">Proposed Budget Capacity</p>
                      <p className="font-extrabold text-slate-900 dark:text-white mt-1">{selectedCurrency.symbol} {parseInt(budget, 10).toLocaleString()}</p>
                    </div>
                  </div>

                  {/* High action channel routing */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3.5 px-5 rounded-sm bg-[#1ebe5d] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-95"
                      aria-label="Contact MaVionix on WhatsApp for urgent matters"
                    >
                      <MessageCircle size={16} />
                      WhatsApp (Urgent)
                    </a>

                    <a
                      href={getMailtoLink()}
                      className="flex-1 py-3.5 px-5 rounded-sm bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-95"
                      aria-label="Email MaVionix with additional information"
                    >
                      <Send size={16} />
                      Email Support
                    </a>
                  </div>

                  {/* Additional message */}
                  <div className="bg-blue-50/30 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-sm p-4 text-center">
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      {submissionMode === 'sent' ? (
                        <>A confirmation email has been sent to <strong>{userEmail}</strong>. Check your inbox and spam folder to confirm receipt.</>
                      ) : submissionMode === 'saved' ? (
                        <>Your inquiry is saved to our system successfully. We were unable to confirm email delivery, but your details are stored and our team will reach out shortly.</>
                      ) : (
                        <>The site could not confirm server email delivery, so it generated a direct email draft instead. Your form data is preserved here.</>
                      )}
                    </p>
                    <div className="mt-3 text-[11px] font-black uppercase tracking-wider text-blue-700 dark:text-blue-300">
                      Form remains visible for {successCountdown} seconds
                    </div>
                  </div>

                  {/* Reset form channel links */}
                  <div className="text-center">
                    <button
                      onClick={handleResetForm}
                      className="text-xs text-slate-400 hover:text-slate-900 dark:hover:text-white hover:underline mt-2 font-black uppercase tracking-wider text-[10px]"
                    >
                      &larr; Submit Another Project Inquiry
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* CORE FORMS BLOCK */
              <form onSubmit={handleFormSubmit} className="bg-white dark:bg-[#0c0c14] border border-slate-200/50 dark:border-slate-900 p-6 sm:p-8 rounded-sm shadow-sm space-y-5" noValidate>
                
                {/* Error message alert */}
                {submitError && (
                  <div className="p-3 bg-red-50/50 dark:bg-red-950/25 border border-red-500/20 rounded-sm text-red-600 dark:text-red-400 text-xs font-bold flex items-center gap-2">
                    <AlertCircle size={16} className="text-red-500" />
                    {submitError}
                  </div>
                )}

                {/* Visual indicator alert if preset was loaded */}
                {bookingPreset && (
                  <div className="p-3 bg-blue-50/50 dark:bg-blue-950/25 border border-blue-500/20 rounded-sm text-blue-600 dark:text-blue-400 text-xs font-bold flex items-center justify-between gap-2">
                    <span className="flex items-center gap-2">
                      <Sparkles size={14} className="text-blue-500" />
                      Dynamic Parameters presets loaded from your selection.
                    </span>
                    <button onClick={handleResetForm} className="text-xs uppercase text-red-500 font-extrabold hover:underline" type="button">
                      Undo presets
                    </button>
                  </div>
                )}

                {/* Sub-grid of user bio */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="userName" className={labelClass('name')}>
                      Your Full Name <span className={requiredClass('name')}>*</span>
                    </label>
                    <input
                      type="text"
                      id="userName"
                      required
                      maxLength={70}
                      placeholder="e.g. Aman Kohli"
                      value={userName}
                      onChange={(e) => {
                        setUserName(e.target.value);
                        if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                      }}
                      className={fieldClass('name', 'w-full h-11 px-3 py-2')}
                    />
                    {errors.name && <p className="text-[11px] text-red-600 dark:text-red-400 font-bold" role="alert">{errors.name}</p>}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="userEmail" className={labelClass('email')}>
                      Email Address <span className={requiredClass('email')}>*</span>
                    </label>
                    <input
                      type="email"
                      id="userEmail"
                      required
                      maxLength={100}
                      placeholder="e.g. business@gmail.com"
                      value={userEmail}
                      onChange={(e) => {
                        setUserEmail(e.target.value);
                        if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                      }}
                      className={fieldClass('email', 'w-full h-11 px-3 py-2')}
                    />
                    {errors.email && <p className="text-[11px] text-red-600 dark:text-red-400 font-bold" role="alert">{errors.email}</p>}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label htmlFor="userPhone" className={phoneHasError ? labelClass(errors.countryCode ? 'countryCode' : 'phone') : labelClass('phone')}>
                      Phone Number <span className={phoneHasError ? 'text-red-600 dark:text-red-400' : 'text-blue-600'}>*</span>
                    </label>
                    <div className="grid grid-cols-[84px_1fr] sm:grid-cols-[110px_1fr] gap-1.5 sm:gap-2">
                      <select
                        id="userCountryCode"
                        aria-label="Country code"
                        value={userCountryCode}
                        onChange={(e) => {
                          setUserCountryCode(e.target.value);
                          if (errors.countryCode) setErrors(prev => ({ ...prev, countryCode: '' }));
                        }}
                        className={phoneFieldClass('h-11 px-1.5 sm:px-3 text-[13px] sm:text-sm')}
                      >
                        {countryCodeOptions}
                      </select>
                      <input
                        type="tel"
                        id="userPhone"
                        required
                        inputMode="numeric"
                        maxLength={10}
                        placeholder="e.g. 7818077404"
                        value={userPhone}
                        onChange={(e) => {
                          const digitsOnly = e.target.value.replace(/\D/g, '');
                          setUserPhone(digitsOnly);
                          if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
                        }}
                        className={phoneFieldClass('w-full h-11 px-2.5 sm:px-3 py-2 placeholder:text-[11px] min-w-0' ) }
                      />
                    </div>
                    <p className={`text-[10px] ${phoneHasError ? 'text-red-500 dark:text-red-400 font-bold' : 'text-slate-400 dark:text-slate-500'}`}>
                      Select country code and enter a valid 10 digit number.
                    </p>
                    {(errors.countryCode || errors.phone) && (
                      <p className="text-[11px] text-red-600 dark:text-red-400 font-bold" role="alert">
                        {errors.countryCode || errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Sub-grid of business/services details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Target business industry */}
                  <div className="space-y-1.5">
                    <label htmlFor="userIndustry" className={labelClass('industry')}>
                      Business Industry <span className={requiredClass('industry')}>*</span>
                    </label>
                    <select
                      id="userIndustry"
                      required
                      value={userIndustry}
                      onChange={(e) => {
                        setUserIndustry(e.target.value);
                        if (errors.industry) setErrors(prev => ({ ...prev, industry: '' }));
                      }}
                      className={fieldClass('industry', 'w-full h-11 px-3 py-2')}
                    >
                      <option value="" disabled>Select Target Industry</option>
                      {industryOptions}
                    </select>
                    {errors.industry && <p className="text-[11px] text-red-600 dark:text-red-400 font-bold" role="alert">{errors.industry}</p>}
                  </div>

                  {/* Select main service capability */}
                  <div className="space-y-1.5">
                    <label htmlFor="mainService" className={labelClass('mainService')}>
                      Main Service Sector <span className={requiredClass('mainService')}>*</span>
                    </label>
                    <select
                      id="mainService"
                      required
                      value={mainService}
                      onChange={handleMainServiceChange}
                      className={fieldClass('mainService', 'w-full h-11 px-3 py-2')}
                    >
                      <option value="" disabled>Select Capability</option>
                      {mainServiceOptions}
                      {mainService && !SERVICES.some(c => c.label === mainService) && (
                        <option key={mainService} value={mainService}>{mainService}</option>
                      )}
                    </select>
                    {errors.mainService && <p className="text-[11px] text-red-600 dark:text-red-400 font-bold" role="alert">{errors.mainService}</p>}
                  </div>
                </div>

                {/* Sub-grid of subservices & timing options */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  {/* Target Deliverables subservice */}
                  <div className="space-y-1.5 sm:col-span-1">
                    <label htmlFor="subService" className={labelClass('subService')}>
                      Target Deliverable <span className={requiredClass('subService')}>*</span>
                    </label>
                    <select
                      id="subService"
                      required
                      value={subService}
                      onChange={(e) => {
                        setSubService(e.target.value);
                        if (errors.subService) setErrors(prev => ({ ...prev, subService: '' }));
                      }}
                      disabled={subServicesList.length === 0 && !subService}
                      className={fieldClass('subService', 'w-full h-11 px-3 py-2 disabled:opacity-50')}
                    >
                      <option value="" disabled>Select Sub-Service</option>
                      {subServiceOptions}
                      {subService && !subServicesList.includes(subService) && (
                        <option key={subService} value={subService}>{subService}</option>
                      )}
                    </select>
                    {errors.subService && <p className="text-[11px] text-red-600 dark:text-red-400 font-bold" role="alert">{errors.subService}</p>}
                  </div>

                  {/* Ideal Launch week */}
                  <div className="space-y-1.5">
                    <label htmlFor="preferredDate" className={labelClass('date')}>
                      Ideal Launch Week <span className={requiredClass('date')}>*</span>
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={preferredDate}
                      onChange={(e) => {
                        setPreferredDate(e.target.value);
                        if (errors.date) setErrors(prev => ({ ...prev, date: '' }));
                      }}
                      className={fieldClass('date', 'w-full h-11 px-3 py-2')}
                    />
                    {errors.date && <p className="text-[11px] text-red-600 dark:text-red-400 font-bold" role="alert">{errors.date}</p>}
                  </div>

                  {/* Target Budget capacity */}
                  <div className="space-y-1.5">
                    <label htmlFor="budget" className={labelClass('budget')}>
                      Expected Budget ({selectedCurrency.code} {selectedCurrency.symbol}) <span className={requiredClass('budget')}>*</span>
                    </label>
                      <input
                        type="number"
                        id="budget"
                        required
                        inputMode="numeric"
                      placeholder={`e.g. ${Math.round(convertAmount(15000))}`}
                      value={budget}
                      onChange={(e) => {
                        setBudget(e.target.value);
                        if (errors.budget) setErrors(prev => ({ ...prev, budget: '' }));
                      }}
                      className={fieldClass('budget', 'w-full h-11 px-3 py-2')}
                    />
                    {errors.budget && <p className="text-[11px] text-red-600 dark:text-red-400 font-bold" role="alert">{errors.budget}</p>}
                  </div>
                </div>

                {/* Interactive budget advice message */}
                {budgetAdvice && (
                  <div className={`p-3 border rounded-sm text-xs font-bold leading-relaxed flex items-start gap-2 ${
                    budgetAdvice.includes('Alert:')
                      ? 'bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/45 text-amber-700 dark:text-amber-400'
                      : 'bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900/45 text-blue-700 dark:text-blue-400'
                  }`}>
                    <AlertCircle size={14} className="shrink-0 mt-0.5" />
                    <span>{budgetAdvice}</span>
                  </div>
                )}

                {/* Detailed project guidelines description */}
                <div className="space-y-1.5">
                  <div className={`flex justify-between items-center text-[10px] ${errors.message ? 'text-red-500 dark:text-red-400' : 'text-slate-400'}`}>
                    <label htmlFor="userMessage" className={labelClass('message')}>
                      Detailed Brief &amp; Guidelines <span className={requiredClass('message')}>*</span>
                    </label>
                    <span className="font-mono text-[9px]">{userMessage.length} / 2000 chars</span>
                  </div>
                  <textarea
                    id="userMessage"
                    required
                    maxLength={2000}
                    rows={4}
                    placeholder="Briefly state target functions, payment choices, key competitors, or specific support retentions required..."
                    value={userMessage}
                    onChange={(e) => {
                      setUserMessage(e.target.value);
                      if (errors.message) setErrors(prev => ({ ...prev, message: '' }));
                    }}
                    className={fieldClass('message', 'w-full px-3 py-2.5 resize-none')}
                  />
                  {errors.message && <p className="text-[11px] text-red-600 dark:text-red-400 font-bold" role="alert">{errors.message}</p>}
                </div>

                {/* Submission CTA button */}
                <div className="pt-2">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="w-full py-4 dark:bg-[#6d28d9] text-white bg-slate-950 dark:text-white cursor-pointer font-black text-xs uppercase tracking-wider rounded-sm hover:opacity-95 transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block animate-spin" aria-hidden="true">...</span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit
                        <ArrowUpRight size={16} />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
