'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import styles from './CustomizePlan.module.scss';

interface FormData {
  name: string;
  email: string;
  company?: string;
  phone: string;
  features: string[];
  budget: string;
  duration: string;
  additionalInfo: string;
}

const availableFeatures = [
  'AI Medical Report Analysis',
  'Advanced vital tracking',
  'Personalized diet plans',
  'Workout progress analytics',
  'Dedicated health coach',
  'Weekly video consultations',
  'Custom meal planning',
  '24/7 coach messaging',
  'Advanced goal setting',
  'Monthly health reports',
  'Priority support',
  'White-glove onboarding',
];

export default function CustomizePlan() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    features: [],
    budget: '',
    duration: '',
    additionalInfo: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after 3 seconds and redirect
    setTimeout(() => {
      router.push('/');
    }, 3000);
  };

  if (submitSuccess) {
    return (
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className={styles.successMessage}
          >
            <div className={styles.successIcon}>
              <Icon icon="lucide:check-circle" width={64} />
            </div>
            <h2>Thank You!</h2>
            <p>We&apos;ve received your custom plan request. Our team will contact you within 24 hours.</p>
            <p className={styles.redirectText}>Redirecting to home page...</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      {/* Background Orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 10, repeat: Infinity }}
        className={styles.greenOrb}
      />
      <motion.div
        animate={{ scale: [1.3, 1, 1.3], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 12, repeat: Infinity }}
        className={styles.tealOrb}
      />

      <div className={styles.container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.header}
        >
          <div className={styles.badge}>
            <Icon icon="lucide:sparkles" width={16} />
            <span>Custom Plan Builder</span>
          </div>

          <h1 className={styles.title}>Customize Your Plan</h1>

          <p className={styles.subtitle}>
            Tell us about your needs and we&apos;ll create a personalized plan just for you
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className={styles.form}
        >
          {/* Personal Information */}
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>
              <Icon icon="lucide:user" width={20} />
              Personal Information
            </h2>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="name">
                  Full Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">
                  Email Address <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">
                  Phone Number <span className={styles.required}>*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="company">Company (Optional)</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company Name"
                />
              </div>
            </div>
          </div>

          {/* Feature Selection */}
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>
              <Icon icon="lucide:layers" width={20} />
              Select Features
            </h2>
            <p className={styles.sectionDescription}>
              Choose the features you&apos;d like to include in your custom plan
            </p>

            <div className={styles.featuresGrid}>
              {availableFeatures.map((feature) => (
                <motion.div
                  key={feature}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`${styles.featureCard} ${
                    formData.features.includes(feature) ? styles.featureSelected : ''
                  }`}
                  onClick={() => handleFeatureToggle(feature)}
                >
                  <div className={styles.featureCheckbox}>
                    {formData.features.includes(feature) && (
                      <Icon icon="lucide:check" width={16} />
                    )}
                  </div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Budget & Duration */}
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>
              <Icon icon="lucide:settings" width={20} />
              Plan Details
            </h2>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="budget">
                  Budget Range <span className={styles.required}>*</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select budget range</option>
                  <option value="under-50">Under $50/month</option>
                  <option value="50-100">$50 - $100/month</option>
                  <option value="100-200">$100 - $200/month</option>
                  <option value="200-500">$200 - $500/month</option>
                  <option value="500+">$500+/month</option>
                  <option value="custom">Custom pricing</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="duration">
                  Plan Duration <span className={styles.required}>*</span>
                </label>
                <select
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select duration</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly (3 months)</option>
                  <option value="semi-annual">Semi-Annual (6 months)</option>
                  <option value="annual">Annual (12 months)</option>
                  <option value="custom">Custom duration</option>
                </select>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>
              <Icon icon="lucide:message-square" width={20} />
              Additional Information
            </h2>

            <div className={styles.formGroup}>
              <label htmlFor="additionalInfo">
                Tell us more about your needs, goals, or any specific requirements
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows={5}
                placeholder="Describe your health goals, team size, special requirements, or anything else that would help us create the perfect plan for you..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className={styles.formActions}>
            <motion.button
              type="button"
              onClick={() => router.back()}
              className={styles.cancelButton}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <Icon icon="lucide:loader-2" width={20} className={styles.spinner} />
                  Submitting...
                </>
              ) : (
                <>
                  <Icon icon="lucide:send" width={20} />
                  Submit Request
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

