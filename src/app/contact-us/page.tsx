'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.scss';
import Container from 'react-bootstrap/Container';
import { Icon } from '@iconify/react';
import { Row, Col } from 'react-bootstrap';

const contactMethods = [
  {
    icon: 'lucide:mail',
    title: 'Email Us',
    description: 'Send us an email and we\'ll respond within 2-4 hours',
    value: 'support@behealthy.com',
    href: 'mailto:support@behealthy.com',
    color: '#8DC63F'
  },
  {
    icon: 'lucide:phone',
    title: 'Call Us',
    description: 'Speak directly with our support team',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    color: '#2EB5AC'
  },
  {
    icon: 'lucide:map-pin',
    title: 'Visit Us',
    description: 'Come see us at our office',
    value: '123 Wellness Street, San Francisco, CA 94102',
    href: 'https://www.google.com/maps/place/123+Wellness+Street,+San+Francisco,+CA+94102',
    color: '#1E5AA8'
  },
  {
    icon: 'lucide:clock',
    title: 'Business Hours',
    description: 'We\'re here to help you',
    value: 'Monday - Friday, 9 AM - 6 PM EST',
    href: '#',
    color: '#8DC63F'
  }
];

const inquiryTypes = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'support', label: 'Technical Support' },
  { value: 'billing', label: 'Billing Question' },
  { value: 'feature', label: 'Feature Request' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'other', label: 'Other' }
];

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = 'Please select an inquiry type';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0] || Object.keys(formData).find(key => !formData[key as keyof typeof formData]);
      if (firstErrorField) {
        const errorElement = document.querySelector(`[name="${firstErrorField}"]`);
        errorElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiryType: '',
          subject: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className={styles.contactUsPage}>
      <Header />
      <div className={styles.contentWrapper}>
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={styles.heroSection}
        >
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={styles.heroContent}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="badge"
              >
                <Icon icon="lucide:mail" width={18} height={18} />
                <span>Get in Touch</span>
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={styles.heroTitle}
              >
                We&apos;d Love to Hear From You
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={styles.heroDescription}
              >
                Have a question, suggestion, or need support? Our team is here to help. 
                Fill out the form below or reach out through any of our contact methods.
              </motion.p>
            </motion.div>
          </Container>
        </motion.section>

        {/* Contact Methods */}
        <section className={styles.contactMethodsSection}>
          <Container>
            <Row className="g-4">
              {contactMethods.map((method, index) => (
                <Col md={6} lg={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={styles.contactMethodCard}
                    whileHover={{ y: -5, boxShadow: "0 8px 24px rgba(0, 59, 70, 0.15)" }}
                  >
                    <div 
                      className={styles.methodIcon}
                      style={{ '--method-color': method.color } as React.CSSProperties}
                    >
                      <Icon icon={method.icon} width={28} height={28} />
                    </div>
                    <h3 className={styles.methodTitle}>{method.title}</h3>
                    <p className={styles.methodDescription}>{method.description}</p>
                    {method.href !== '#' ? (
                      <a href={method.href} className={styles.methodValue}>
                        {method.value}
                      </a>
                    ) : (
                      <span className={styles.methodValue}>{method.value}</span>
                    )}
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Contact Form Section */}
        <section className={styles.formSection}>
          <Container>
            <Row className="g-4">
              <Col lg={8}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={styles.formCard}
                >
                  <div className={styles.formHeader}>
                    <h2 className={styles.formTitle}>Send us a Message</h2>
                    <p className={styles.formSubtitle}>
                      Fill out the form below and we&apos;ll get back to you as soon as possible.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={styles.successMessage}
                    >
                      <div className={styles.successIcon}>
                        <Icon icon="lucide:check-circle" width={48} height={48} />
                      </div>
                      <h3>Message Sent Successfully!</h3>
                      <p>Thank you for contacting us. We&apos;ll get back to you within 2-4 hours.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className={styles.contactForm}>
                      <Row className="g-3">
                        <Col md={6}>
                          <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>
                              Full Name <span className={styles.required}>*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                              placeholder="John Doe"
                            />
                            {errors.name && (
                              <span className={styles.errorMessage}>{errors.name}</span>
                            )}
                          </div>
                        </Col>

                        <Col md={6}>
                          <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>
                              Email Address <span className={styles.required}>*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                              placeholder="john@example.com"
                            />
                            {errors.email && (
                              <span className={styles.errorMessage}>{errors.email}</span>
                            )}
                          </div>
                        </Col>

                        <Col md={6}>
                          <div className={styles.formGroup}>
                            <label htmlFor="phone" className={styles.label}>
                              Phone Number <span className={styles.required}>*</span>
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                              placeholder="+1 (555) 123-4567"
                            />
                            {errors.phone && (
                              <span className={styles.errorMessage}>{errors.phone}</span>
                            )}
                          </div>
                        </Col>

                        <Col md={6}>
                          <div className={styles.formGroup}>
                            <label htmlFor="inquiryType" className={styles.label}>
                              Inquiry Type <span className={styles.required}>*</span>
                            </label>
                            <select
                              id="inquiryType"
                              name="inquiryType"
                              value={formData.inquiryType}
                              onChange={handleChange}
                              className={`${styles.select} ${errors.inquiryType ? styles.inputError : ''}`}
                            >
                              <option value="">Select an option</option>
                              {inquiryTypes.map((type) => (
                                <option key={type.value} value={type.value}>
                                  {type.label}
                                </option>
                              ))}
                            </select>
                            {errors.inquiryType && (
                              <span className={styles.errorMessage}>{errors.inquiryType}</span>
                            )}
                          </div>
                        </Col>

                        <Col md={12}>
                          <div className={styles.formGroup}>
                            <label htmlFor="subject" className={styles.label}>
                              Subject <span className={styles.required}>*</span>
                            </label>
                            <input
                              type="text"
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              className={`${styles.input} ${errors.subject ? styles.inputError : ''}`}
                              placeholder="What is this regarding?"
                            />
                            {errors.subject && (
                              <span className={styles.errorMessage}>{errors.subject}</span>
                            )}
                          </div>
                        </Col>

                        <Col md={12}>
                          <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>
                              Message <span className={styles.required}>*</span>
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              rows={6}
                              maxLength={500}
                              className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                              placeholder="Tell us more about your inquiry..."
                            />
                            <div className={styles.charCount}>
                              {formData.message.length} / 500 characters
                            </div>
                            {errors.message && (
                              <span className={styles.errorMessage}>{errors.message}</span>
                            )}
                          </div>
                        </Col>

                        <Col md={12}>
                          <motion.button
                            type="submit"
                            className={styles.submitButton}
                            disabled={isSubmitting}
                            whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                          >
                            {isSubmitting ? (
                              <>
                                <Icon icon="lucide:loader-2" width={20} height={20} className={styles.spinner} />
                                Sending...
                              </>
                            ) : (
                              <>
                                <Icon icon="lucide:send" width={20} height={20} />
                                Send Message
                              </>
                            )}
                          </motion.button>
                        </Col>
                      </Row>
                    </form>
                  )}
                </motion.div>
              </Col>

              <Col lg={4}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={styles.infoCard}
                >
                  <h3 className={styles.infoTitle}>Why Contact Us?</h3>
                  <ul className={styles.infoList}>
                    <li>
                      <Icon icon="lucide:check-circle" width={20} height={20} />
                      <span>Get personalized support for your health journey</span>
                    </li>
                    <li>
                      <Icon icon="lucide:check-circle" width={20} height={20} />
                      <span>Report bugs or suggest new features</span>
                    </li>
                    <li>
                      <Icon icon="lucide:check-circle" width={20} height={20} />
                      <span>Ask questions about our services</span>
                    </li>
                    <li>
                      <Icon icon="lucide:check-circle" width={20} height={20} />
                      <span>Request partnerships or collaborations</span>
                    </li>
                    <li>
                      <Icon icon="lucide:check-circle" width={20} height={20} />
                      <span>Get help with billing or account issues</span>
                    </li>
                  </ul>

                  <div className={styles.responseTime}>
                    <Icon icon="lucide:clock" width={24} height={24} />
                    <div>
                      <strong>Average Response Time</strong>
                      <p>2-4 hours during business hours</p>
                    </div>
                  </div>

                  <div className={styles.socialSection}>
                    <h4 className={styles.socialTitle}>Follow Us</h4>
                    <div className={styles.socialLinks}>
                      {[
                        { icon: 'lucide:facebook', href: '#', color: '#1877F2' },
                        { icon: 'lucide:twitter', href: '#', color: '#1DA1F2' },
                        { icon: 'lucide:instagram', href: '#', color: '#E4405F' },
                        { icon: 'lucide:linkedin', href: '#', color: '#0A66C2' }
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          className={styles.socialLink}
                          whileHover={{ scale: 1.15, y: -3 }}
                          whileTap={{ scale: 0.9 }}
                          style={{ '--social-color': social.color } as React.CSSProperties}
                        >
                          <Icon icon={social.icon} width={20} height={20} />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <Footer />
    </div>
  );
}

