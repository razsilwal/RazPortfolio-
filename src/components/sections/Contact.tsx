import { useState, type FormEvent } from 'react';
import { useInView } from '../../hooks/useInView';
import { SectionHeading } from '../ui/SectionHeading';
import { contactInfo } from '../../data/config';

// ─── Form state type ──────────────────────────────────────────────────────────
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

// ─── Validation ───────────────────────────────────────────────────────────────
function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required.';
  if (!data.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!data.message.trim()) {
    errors.message = 'Message is required.';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }
  return errors;
}

// ─── Small icon components ────────────────────────────────────────────────────
function MailIcon({ size = 20 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon({ size = 20 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function LocationIcon({ size = 20 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

// ─── Contact Info Card ────────────────────────────────────────────────────────
interface InfoCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

function InfoCard({ icon, label, value, href }: InfoCardProps) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-700/20 border border-primary-700/30 flex items-center justify-center text-primary-400">
        {icon}
      </div>
      <div>
        <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-0.5">{label}</p>
        <p className="text-gray-200 text-sm font-medium">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="block p-4 bg-card border border-border rounded-xl hover:border-primary-700/50 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500"
        aria-label={`${label}: ${value}`}
      >
        {content}
      </a>
    );
  }
  return (
    <div className="p-4 bg-card border border-border rounded-xl">
      {content}
    </div>
  );
}

// ─── Main Contact component ───────────────────────────────────────────────────
export function Contact() {
  const { ref, isInView } = useInView();

  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (field: keyof FormData, value: string) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    if (touched[field]) {
      setErrors(validateForm(updated));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validateForm(formData));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitStatus('submitting');

    // ─── Formspree integration point ─────────────────────────────────────────
    // Replace YOUR_FORM_ID below with your Formspree form ID.
    // Sign up at https://formspree.io/ and create a new form to get an ID.
    // Example: https://formspree.io/f/abcde123
    // ─────────────────────────────────────────────────────────────────────────
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTouched({ name: false, email: false, message: false });
        setErrors({});
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  const fieldClass = (field: keyof FormData) =>
    `w-full bg-navy-800 border rounded-lg px-4 py-3 text-gray-200 text-sm placeholder-gray-600
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
    transition-colors duration-200
    ${errors[field] && touched[field] ? 'border-red-500/60' : 'border-border hover:border-primary-700/50'}`;

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 sm:py-28 bg-[#060F20]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionHeading
            title="Contact"
            id="contact-heading"
            subtitle="Get in touch for opportunities, collaborations, or enquiries"
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-1">Raj Krishna Silwal</h2>
                <p className="text-gray-400 text-sm">Computer Science Graduate &amp; Software Developer</p>
              </div>

              <InfoCard
                icon={<MailIcon size={18} />}
                label="Email"
                value={contactInfo.email}
                href={`mailto:${contactInfo.email}`}
              />
              <InfoCard
                icon={<PhoneIcon size={18} />}
                label="Phone"
                value={contactInfo.phone}
                href={`tel:+977${contactInfo.phone}`}
              />
              <InfoCard
                icon={<LocationIcon size={18} />}
                label="Location"
                value={contactInfo.location}
              />

              {/* Social links */}
              <div className="pt-2 flex gap-3">
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border hover:border-primary-700/50 text-gray-300 hover:text-white rounded-lg text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500"
                  aria-label="LinkedIn profile"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border hover:border-primary-700/50 text-gray-300 hover:text-white rounded-lg text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500"
                  aria-label="GitHub profile"
                >
                  <GithubIcon />
                  GitHub
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <h3 className="text-white font-semibold text-base mb-6">Send a Message</h3>

                {submitStatus === 'success' ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 rounded-full bg-green-900/30 border border-green-700/40 flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-green-400" aria-hidden="true">
                        <polyline points="20,6 9,17 4,12" />
                      </svg>
                    </div>
                    <h4 className="text-white font-semibold mb-2">Message sent successfully</h4>
                    <p className="text-gray-400 text-sm mb-6">Thank you for reaching out. I will get back to you as soon as possible.</p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                    <div className="space-y-5">
                      {/* Name */}
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-1.5">
                          Name <span className="text-red-400" aria-label="required">*</span>
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          autoComplete="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          onBlur={() => handleBlur('name')}
                          className={fieldClass('name')}
                          aria-required="true"
                          aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                          aria-invalid={!!(errors.name && touched.name)}
                        />
                        {errors.name && touched.name && (
                          <p id="name-error" className="mt-1.5 text-red-400 text-xs" role="alert">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-1.5">
                          Email <span className="text-red-400" aria-label="required">*</span>
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          autoComplete="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          onBlur={() => handleBlur('email')}
                          className={fieldClass('email')}
                          aria-required="true"
                          aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                          aria-invalid={!!(errors.email && touched.email)}
                        />
                        {errors.email && touched.email && (
                          <p id="email-error" className="mt-1.5 text-red-400 text-xs" role="alert">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-1.5">
                          Message <span className="text-red-400" aria-label="required">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={5}
                          placeholder="Your message..."
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          onBlur={() => handleBlur('message')}
                          className={`${fieldClass('message')} resize-none`}
                          aria-required="true"
                          aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
                          aria-invalid={!!(errors.message && touched.message)}
                        />
                        {errors.message && touched.message && (
                          <p id="message-error" className="mt-1.5 text-red-400 text-xs" role="alert">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Error banner */}
                      {submitStatus === 'error' && (
                        <div className="p-3 bg-red-900/20 border border-red-700/40 rounded-lg" role="alert">
                          <p className="text-red-300 text-sm">
                            Something went wrong. Please try emailing directly at{' '}
                            <a href={`mailto:${contactInfo.email}`} className="underline hover:text-red-200">
                              {contactInfo.email}
                            </a>
                            .
                          </p>
                        </div>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={submitStatus === 'submitting'}
                        className="
                          w-full flex items-center justify-center gap-2 px-6 py-3
                          bg-primary-700 hover:bg-primary-600 disabled:bg-primary-800
                          text-white font-semibold text-sm rounded-lg
                          transition-colors duration-200
                          focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-400
                          focus-visible:outline-offset-2 disabled:cursor-not-allowed
                        "
                      >
                        {submitStatus === 'submitting' ? (
                          <>
                            <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                              <path d="m22 2-7 20-4-9-9-4z" />
                              <path d="M22 2 11 13" />
                            </svg>
                            Send Message
                          </>
                        )}
                      </button>

                      <p className="text-gray-600 text-xs text-center">
                        Messages are processed via Formspree. Configure your endpoint in{' '}
                        <code className="font-mono">src/components/sections/Contact.tsx</code>.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
