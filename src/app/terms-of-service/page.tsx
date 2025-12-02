'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.scss';
import Container from 'react-bootstrap/Container';

export default function TermsOfService() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using BeHealthy, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
      ]
    },
    {
      title: "2. Description of Service",
      content: [
        "BeHealthy is a comprehensive health and wellness platform that provides:",
        "• Personalized diet and nutrition plans",
        "• Customized workout and fitness programs",
        "• Health monitoring and tracking tools",
        "• AI-powered medical insights and recommendations",
        "• Community features and social support",
        "• Educational content and resources"
      ]
    },
    {
      title: "3. User Accounts and Registration",
      content: [
        "To access certain features, you must register for an account:",
        "• You must provide accurate, current, and complete information",
        "• You are responsible for maintaining the confidentiality of your account credentials",
        "• You are responsible for all activities that occur under your account",
        "• You must notify us immediately of any unauthorized use",
        "• We reserve the right to suspend or terminate accounts that violate these terms"
      ]
    },
    {
      title: "4. Health Information and Medical Disclaimer",
      content: [
        "IMPORTANT: BeHealthy is not a substitute for professional medical advice, diagnosis, or treatment:",
        "• The information provided is for general health and wellness purposes only",
        "• Always seek the advice of your physician or qualified health provider with any questions",
        "• Never disregard professional medical advice or delay seeking it because of information from BeHealthy",
        "• In case of a medical emergency, contact your local emergency services immediately",
        "• We do not provide medical diagnosis, treatment, or prescription services",
        "• AI-generated insights are suggestions and should not replace professional medical judgment"
      ]
    },
    {
      title: "5. User Conduct and Responsibilities",
      content: [
        "You agree to use BeHealthy only for lawful purposes and in accordance with these Terms:",
        "• You will not use the service to violate any laws or regulations",
        "• You will not attempt to gain unauthorized access to any part of the service",
        "• You will not interfere with or disrupt the service or servers",
        "• You will not transmit any viruses, malware, or harmful code",
        "• You will not use automated systems to access the service without permission",
        "• You will respect the rights and privacy of other users",
        "• You will provide accurate health information to the best of your knowledge"
      ]
    },
    {
      title: "6. Intellectual Property Rights",
      content: [
        "All content, features, and functionality of BeHealthy are owned by us:",
        "• The service and its original content are protected by copyright, trademark, and other laws",
        "• You may not reproduce, distribute, modify, or create derivative works without permission",
        "• You retain ownership of any content you submit, but grant us a license to use it",
        "• Our trademarks and logos may not be used without our written permission"
      ]
    },
    {
      title: "7. Subscription and Payment Terms",
      content: [
        "Some features may require a paid subscription:",
        "• Subscription fees are billed in advance on a recurring basis",
        "• All fees are non-refundable except as required by law",
        "• We reserve the right to change pricing with 30 days' notice",
        "• You may cancel your subscription at any time",
        "• Cancellation takes effect at the end of the current billing period",
        "• Refunds are provided only in accordance with our refund policy"
      ]
    },
    {
      title: "8. Data and Privacy",
      content: [
        "Your use of BeHealthy is also governed by our Privacy Policy:",
        "• We collect and process your data as described in our Privacy Policy",
        "• You consent to the collection and use of your information",
        "• We implement security measures to protect your data",
        "• You have rights regarding your personal information as outlined in our Privacy Policy"
      ]
    },
    {
      title: "9. Limitation of Liability",
      content: [
        "To the maximum extent permitted by law:",
        "• BeHealthy is provided 'as is' without warranties of any kind",
        "• We do not guarantee uninterrupted, secure, or error-free service",
        "• We are not liable for any indirect, incidental, or consequential damages",
        "• Our total liability shall not exceed the amount you paid in the past 12 months",
        "• Some jurisdictions do not allow limitations on liability, so some limitations may not apply"
      ]
    },
    {
      title: "10. Indemnification",
      content: [
        "You agree to indemnify and hold harmless BeHealthy, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:",
        "• Your use of the service",
        "• Your violation of these Terms",
        "• Your violation of any rights of another",
        "• Any content you submit or transmit through the service"
      ]
    },
    {
      title: "11. Termination",
      content: [
        "We may terminate or suspend your account and access to the service:",
        "• Immediately, without prior notice, for breach of these Terms",
        "• At our sole discretion, for any reason or no reason",
        "• Upon your request to delete your account",
        "• Upon termination, your right to use the service will cease immediately",
        "• Provisions that by their nature should survive termination will remain in effect"
      ]
    },
    {
      title: "12. Changes to Terms",
      content: [
        "We reserve the right to modify these Terms at any time:",
        "• We will notify you of material changes via email or through the service",
        "• Continued use after changes constitutes acceptance of the new Terms",
        "• If you do not agree to the changes, you must stop using the service",
        "• The 'Last Updated' date at the top indicates when these Terms were last revised"
      ]
    },
    {
      title: "13. Governing Law and Dispute Resolution",
      content: [
        "These Terms are governed by the laws of the State of California, United States:",
        "• Any disputes will be resolved through binding arbitration",
        "• Arbitration will be conducted in San Francisco, California",
        "• You waive your right to a jury trial and to participate in class actions",
        "• Some jurisdictions may not allow arbitration clauses, so this may not apply to you"
      ]
    },
    {
      title: "14. Contact Information",
      content: [
        "If you have any questions about these Terms of Service, please contact us at:",
        "Email: legal@behealthy.com",
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
              <h1 className="title">Terms of Service</h1>
              <p className={styles.lastUpdated}>Last Updated: January 15, 2025</p>
              <p className="description" style={{ maxWidth: '900px', margin: '0 auto' }}>
                These Terms of Service govern your access to and use of BeHealthy. Please read these terms carefully before using our service. By using BeHealthy, you agree to be bound by these terms.
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
              transition={{ duration: 0.5, delay: 1.5 }}
              className={styles.footerNote}
            >
              <p>
                By using BeHealthy, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

