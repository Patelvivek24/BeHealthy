'use client';

import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.scss';

export default function AIReportsPage() {
  const features = [
    {
      title: "Medical Report Analysis",
      description: "Upload lab results, imaging reports, and medical documents. Our AI analyzes them to provide clear explanations, identify key findings, and highlight areas of concern.",
      icon: "lucide:file-text",
      color: "#1E5AA8"
    },
    {
      title: "Health Risk Assessment",
      description: "Get comprehensive risk evaluations based on your medical history, current health metrics, and lifestyle factors. Understand your risk profile for various conditions.",
      icon: "lucide:shield-alert",
      color: "#2EB5AC"
    },
    {
      title: "Personalized Recommendations",
      description: "Receive actionable medical advice tailored to your specific health profile. Get recommendations for lifestyle changes, screenings, and preventive measures.",
      icon: "lucide:lightbulb",
      color: "#8DC63F"
    },
    {
      title: "Trend Analysis",
      description: "Track changes in your health metrics over time. Identify patterns, monitor improvements, and detect early warning signs through longitudinal analysis.",
      icon: "lucide:trending-up",
      color: "#1E5AA8"
    }
  ];

  const benefits = [
    "Clear, understandable explanations of complex medical data",
    "Early detection of potential health issues",
    "Better preparation for doctor visits with organized insights",
    "Comprehensive health summaries in one place",
    "Privacy-first approach with secure data handling"
  ];

  return (
    <div className={styles.detailPage}>
      <Header />
      <div className={styles.contentWrapper}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={styles.header}
            >
              <div className={styles.iconWrapper}>
                <Icon icon="si:ai-note-duotone" className={styles.headerIcon} />
              </div>
              <h1 className="title">AI Reports Medical Analysis</h1>
              <p className="description">
                Transform complex medical data into clear, actionable insights with advanced AI-powered analysis
              </p>
            </motion.div>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={styles.overviewSection}
            >
              <h2>Overview</h2>
              <p>
                Medical reports and health data can be overwhelming and difficult to understand. Our AI-powered medical analysis system 
                processes your health documents, lab results, and medical records to provide clear, comprehensive insights that help 
                you make informed decisions about your health.
              </p>
              <p>
                Using advanced natural language processing and medical knowledge databases, our AI identifies key findings, explains 
                medical terminology in plain language, tracks trends over time, and provides personalized recommendations. While our 
                AI provides valuable insights, it&apos;s designed to complement, not replace, professional medical advice.
              </p>
            </motion.section>

            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={styles.featureCard}
                >
                  <div className={styles.featureIcon} style={{ color: feature.color }}>
                    <Icon icon={feature.icon} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className={styles.benefitsSection}
            >
              <h2>Key Benefits</h2>
              <ul className={styles.benefitsList}>
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                    <Icon icon="lucide:check-circle" className={styles.checkIcon} />
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className={styles.disclaimerSection}
            >
              <Icon icon="lucide:info" className={styles.disclaimerIcon} />
              <p>
                <strong>Important:</strong> Our AI analysis is designed to provide educational insights and should not replace 
                professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare providers for 
                medical decisions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className={styles.ctaSection}
            >
              <h2>Get Your Medical Analysis</h2>
              <p>Upload your medical reports and get instant AI-powered insights</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.ctaButton}
              >
                Analyze Medical Reports
                <Icon icon="lucide:arrow-right" />
              </motion.button>
            </motion.div>
          </motion.div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

