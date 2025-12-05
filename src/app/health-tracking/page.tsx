'use client';

import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import styles from './page.module.scss';

export default function HealthTrackingPage() {
  const features = [
    {
      title: "Vital Signs Monitoring",
      description: "Track heart rate, blood pressure, body temperature, and oxygen saturation in real-time. Get instant alerts when readings fall outside normal ranges.",
      icon: "lucide:heart-pulse",
      color: "#2EB5AC"
    },
    {
      title: "Activity & Fitness Tracking",
      description: "Monitor steps, calories burned, distance traveled, and active minutes. Sync with wearables and fitness devices for comprehensive activity insights.",
      icon: "lucide:activity",
      color: "#1E5AA8"
    },
    {
      title: "Sleep Analysis",
      description: "Track sleep duration, quality, and patterns. Receive personalized recommendations to improve your sleep hygiene and overall rest quality.",
      icon: "lucide:moon",
      color: "#8DC63F"
    },
    {
      title: "Nutrition Logging",
      description: "Easily log meals, track macronutrients, and monitor hydration. Get real-time feedback on your nutritional balance and dietary goals.",
      icon: "lucide:apple",
      color: "#2EB5AC"
    }
  ];

  const benefits = [
    "Instant insights into your health status and trends",
    "Early detection of potential health issues",
    "Data-driven decisions for better health outcomes",
    "Seamless integration with popular health devices",
    "Comprehensive health dashboard in one place"
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
                <Icon icon="mage:heart-health" className={styles.headerIcon} />
              </div>
              <h1 className="title">Real-time Health Tracking</h1>
              <p className="description">
                Monitor your health metrics continuously and gain actionable insights to optimize your wellness journey
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
                Stay on top of your health with our comprehensive real-time tracking system. Our platform continuously monitors your vital signs, 
                activity levels, sleep patterns, and nutritional intake, providing you with immediate feedback and long-term trend analysis.
              </p>
              <p>
                With seamless integration to over 100+ health devices and wearables, you can automatically sync your data and get a complete 
                picture of your health. Our intelligent algorithms analyze patterns, detect anomalies, and provide personalized recommendations 
                to help you maintain optimal wellness.
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
              className={styles.ctaSection}
            >
              <h2>Start Tracking Today</h2>
              <p>Take control of your health with real-time monitoring</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="primary" className={styles.ctaButton}>
                  Begin Health Tracking
                  <Icon icon="lucide:arrow-right" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

