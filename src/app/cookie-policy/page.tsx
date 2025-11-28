'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.scss';
import Container from 'react-bootstrap/Container';

export default function CookiePolicy() {
  const sections = [
    {
      title: "1. What Are Cookies",
      content: [
        "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners. Cookies allow websites to recognize your device and store some information about your preferences or past actions.",
        "BeHealthy uses cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and provide personalized content and services."
      ]
    },
    {
      title: "2. Types of Cookies We Use",
      content: [
        "We use several types of cookies on our platform:",
        "• Essential Cookies: These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.",
        "• Functional Cookies: These cookies allow the website to remember choices you make (such as your language preference or region) and provide enhanced, personalized features.",
        "• Analytics Cookies: These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
        "• Performance Cookies: These cookies collect information about how you use our website, such as which pages you visit most often, to help us improve the website's performance.",
        "• Targeting/Advertising Cookies: These cookies are used to deliver advertisements relevant to you and your interests. They also help measure the effectiveness of advertising campaigns."
      ]
    },
    {
      title: "3. How We Use Cookies",
      content: [
        "We use cookies for the following purposes:",
        "• Authentication: To identify you when you log in and keep you logged in",
        "• Preferences: To remember your settings and preferences, such as language and region",
        "• Security: To protect against fraud and maintain security",
        "• Analytics: To understand how you use our services and improve them",
        "• Personalization: To provide personalized health and wellness recommendations",
        "• Performance: To monitor and improve website performance",
        "• Advertising: To deliver relevant advertisements and measure their effectiveness"
      ]
    },
    {
      title: "4. Third-Party Cookies",
      content: [
        "In addition to our own cookies, we may also use various third-party cookies:",
        "• Analytics Services: We use analytics services like Google Analytics to understand how users interact with our platform",
        "• Advertising Partners: We work with advertising partners who may set cookies to deliver targeted advertisements",
        "• Social Media: Social media platforms may set cookies when you interact with social sharing features",
        "• Service Providers: Third-party service providers may set cookies to provide their services",
        "These third parties may use cookies to collect information about your online activities across different websites. We do not control these third-party cookies, and you should review their privacy policies."
      ]
    },
    {
      title: "5. Cookie Duration",
      content: [
        "Cookies can be either 'session' or 'persistent' cookies:",
        "• Session Cookies: These are temporary cookies that are deleted when you close your browser. They are used to maintain your session while you navigate the website.",
        "• Persistent Cookies: These remain on your device for a set period or until you delete them. They are used to remember your preferences and settings across multiple visits.",
        "The duration of persistent cookies varies depending on their purpose. Some may last for a few days, while others may remain for up to two years or until you delete them."
      ]
    },
    {
      title: "6. Managing Your Cookie Preferences",
      content: [
        "You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer:",
        "• Browser Settings: You can control cookies through your browser settings. Most browsers allow you to refuse cookies, delete cookies, or be notified when cookies are being set.",
        "• Cookie Consent: When you first visit our website, you will be presented with a cookie consent banner where you can choose which types of cookies to accept.",
        "• Opt-Out Tools: You can use opt-out tools provided by third-party services to manage their cookies.",
        "Please note that disabling certain cookies may affect the functionality of our website and your user experience."
      ]
    },
    {
      title: "7. Specific Cookie Types and Their Purposes",
      content: [
        "Here are some specific cookies we use and their purposes:",
        "• Authentication Cookies: Store your login session to keep you logged in",
        "• Preference Cookies: Remember your language, theme, and display preferences",
        "• Health Data Cookies: Securely store temporary health data for session continuity",
        "• Analytics Cookies: Track page views, user interactions, and feature usage",
        "• Security Cookies: Detect and prevent fraudulent activities",
        "• Performance Cookies: Monitor page load times and optimize performance"
      ]
    },
    {
      title: "8. Mobile App and Cookies",
      content: [
        "In addition to web cookies, our mobile application may use similar technologies:",
        "• Device Identifiers: Unique identifiers associated with your device",
        "• Local Storage: Data stored locally on your device for app functionality",
        "• Analytics Tools: Tools to understand app usage and improve features",
        "• Push Notification Tokens: To deliver personalized health reminders and updates",
        "You can manage these through your device settings and app preferences."
      ]
    },
    {
      title: "9. Cookies and Health Information",
      content: [
        "We take special care with cookies that may relate to health information:",
        "• Health data is never stored in cookies in an unencrypted form",
        "• We use secure, encrypted cookies for any health-related session data",
        "• Health information in cookies is limited to what is necessary for functionality",
        "• We comply with health data protection regulations regarding cookie usage",
        "• You can opt out of health-related cookies, though this may limit some features"
      ]
    },
    {
      title: "10. Updates to This Cookie Policy",
      content: [
        "We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by:",
        "• Posting the updated policy on this page",
        "• Updating the 'Last Updated' date",
        "• Providing notice through our website or app",
        "• Sending an email notification for significant changes",
        "We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies."
      ]
    },
    {
      title: "11. Your Rights",
      content: [
        "You have the following rights regarding cookies:",
        "• Right to Information: You have the right to be informed about the cookies we use",
        "• Right to Consent: You can choose which cookies to accept",
        "• Right to Withdraw: You can withdraw your consent at any time",
        "• Right to Access: You can see what cookies are stored on your device",
        "• Right to Delete: You can delete cookies through your browser settings",
        "• Right to Object: You can object to certain types of cookies, particularly advertising cookies"
      ]
    },
    {
      title: "12. Contact Us",
      content: [
        "If you have any questions about our use of cookies or this Cookie Policy, please contact us at:",
        "Email: privacy@behealthy.com",
        "Address: 123 Wellness Street, San Francisco, CA 94102",
        "Phone: +1 (555) 123-4567"
      ]
    }
  ];

  return (
    <div className={styles.legalPage}>
      <Header />
      <div className={styles.contentWrapper}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          // className={styles.container}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={styles.header}
            >
              <h1>Cookie Policy</h1>
              <p className={styles.lastUpdated}>Last Updated: January 15, 2025</p>
              <p className={styles.intro}>
                This Cookie Policy explains how BeHealthy uses cookies and similar tracking technologies on our website and mobile application. It describes what cookies are, how we use them, and your choices regarding their use.
              </p>
            </motion.div>

            <div className={styles.sections}>
              {sections.map((section, index) => (
                <motion.section
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className={styles.section}
                >
                  <h2>{section.title}</h2>
                  <div className={styles.content}>
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className={styles.footerNote}
            >
              <p>
                By continuing to use BeHealthy, you consent to our use of cookies as described in this Cookie Policy. You can manage your cookie preferences at any time through your browser settings or our cookie consent tool.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

