'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.scss';
import Container from 'react-bootstrap/Container';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        "We collect information that you provide directly to us, including:",
        "• Personal Information: Name, email address, phone number, date of birth, gender, and profile picture",
        "• Health Information: Medical history, health goals, fitness data, dietary preferences, medication information, and health metrics",
        "• Usage Data: Information about how you interact with our services, including features used, time spent, and preferences",
        "• Device Information: Device type, operating system, unique device identifiers, and mobile network information",
        "• Location Data: With your permission, we may collect and process location data to provide location-based services"
      ]
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "We use the information we collect to:",
        "• Provide, maintain, and improve our services",
        "• Personalize your experience and deliver customized health and wellness recommendations",
        "• Process transactions and send related information",
        "• Send you technical notices, updates, security alerts, and support messages",
        "• Respond to your comments, questions, and requests",
        "• Monitor and analyze trends, usage, and activities",
        "• Detect, prevent, and address technical issues and fraudulent activities"
      ]
    },
    {
      title: "3. Information Sharing and Disclosure",
      content: [
        "We do not sell your personal information. We may share your information in the following circumstances:",
        "• With your consent or at your direction",
        "• With service providers who perform services on our behalf",
        "• In connection with a merger, sale, or acquisition",
        "• To comply with legal obligations or protect rights and safety",
        "• In aggregated or anonymized form that cannot reasonably be used to identify you"
      ]
    },
    {
      title: "4. Health Information Protection",
      content: [
        "We understand the sensitive nature of health information and take extra precautions:",
        "• All health data is encrypted both in transit and at rest",
        "• We comply with applicable health data protection regulations",
        "• Access to your health information is restricted to authorized personnel only",
        "• You have the right to access, modify, or delete your health information at any time",
        "• We never share your health information with third parties for marketing purposes without your explicit consent"
      ]
    },
    {
      title: "5. Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect your personal information:",
        "• Encryption of data in transit using SSL/TLS protocols",
        "• Secure storage with industry-standard encryption",
        "• Regular security assessments and updates",
        "• Access controls and authentication mechanisms",
        "• Employee training on data protection and privacy"
      ]
    },
    {
      title: "6. Your Rights and Choices",
      content: [
        "You have the following rights regarding your personal information:",
        "• Access: Request a copy of the personal information we hold about you",
        "• Correction: Update or correct inaccurate information",
        "• Deletion: Request deletion of your personal information",
        "• Portability: Request transfer of your data to another service",
        "• Opt-out: Unsubscribe from marketing communications",
        "• Restrict Processing: Request limitation of how we process your data",
        "• Object: Object to certain types of processing"
      ]
    },
    {
      title: "7. Cookies and Tracking Technologies",
      content: [
        "We use cookies and similar tracking technologies to:",
        "• Remember your preferences and settings",
        "• Analyze how you use our services",
        "• Provide personalized content and advertisements",
        "• Improve security and prevent fraud",
        "You can control cookies through your browser settings, though this may affect functionality"
      ]
    },
    {
      title: "8. Children's Privacy",
      content: [
        "Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately."
      ]
    },
    {
      title: "9. International Data Transfers",
      content: [
        "Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy."
      ]
    },
    {
      title: "10. Changes to This Privacy Policy",
      content: [
        "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date. You are advised to review this Privacy Policy periodically for any changes."
      ]
    },
    {
      title: "11. Contact Us",
      content: [
        "If you have any questions about this Privacy Policy or our privacy practices, please contact us at:",
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
            <h1 className="title">Privacy Policy</h1>
            <p className={styles.lastUpdated}>Last Updated: January 15, 2025</p>
            <p className="description" style={{ maxWidth: '900px', margin: '0 auto' }}>
              At BeHealthy, we are committed to protecting your privacy and ensuring the security of your personal and health information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our health and wellness platform.
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
            transition={{ duration: 0.5, delay: 1 }}
            className={styles.footerNote}
          >
            <p>
              By using BeHealthy, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of your information as described herein.
            </p>
          </motion.div>
        </motion.div>
        </Container> 
      </div>
      <Footer />
    </div>
  );
}

