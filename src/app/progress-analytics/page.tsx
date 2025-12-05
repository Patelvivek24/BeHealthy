'use client';

import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import styles from './page.module.scss';

export default function ProgressAnalyticsPage() {
  const features = [
    {
      title: "Visual Progress Dashboards",
      description: "Beautiful, interactive charts and graphs that visualize your journey. Track weight, body composition, fitness metrics, and health indicators over time.",
      icon: "lucide:trending-up",
      color: "#1E5AA8"
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered forecasting shows where you're heading based on current trends. Get insights into future outcomes and adjust your strategy accordingly.",
      icon: "lucide:line-chart",
      color: "#2EB5AC"
    },
    {
      title: "Goal Achievement Tracking",
      description: "Monitor your progress toward specific goals with detailed breakdowns. See what's working, what needs adjustment, and celebrate milestones along the way.",
      icon: "lucide:target",
      color: "#8DC63F"
    },
    {
      title: "Comparative Analysis",
      description: "Compare your current performance with historical data, identify patterns, and understand the impact of lifestyle changes on your health outcomes.",
      icon: "lucide:bar-chart",
      color: "#1E5AA8"
    }
  ];

  const benefits = [
    "Clear visualization of your health and fitness progress",
    "Data-driven insights to optimize your strategy",
    "Early identification of plateaus and challenges",
    "Motivation through visible progress and achievements",
    "Comprehensive reports for healthcare providers"
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
                <Icon icon="carbon:analytics" className={styles.headerIcon} />
              </div>
              <h1 className="title">Advanced Progress Analytics</h1>
              <p className="description">
                Unlock deep insights into your health journey with powerful analytics and data visualization tools
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
                Transform raw health data into meaningful insights with our advanced analytics platform. Our sophisticated algorithms process 
                thousands of data points to reveal patterns, trends, and correlations that help you understand your health journey like never before.
              </p>
              <p>
                From simple progress tracking to complex predictive modeling, our analytics engine provides actionable insights that guide your 
                decisions. Whether you&apos;re monitoring weight loss, fitness gains, or health improvements, you&apos;ll have the tools to see the big picture 
                and make informed choices.
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
              <h2>Explore Your Analytics</h2>
              <p>Discover insights that drive better health decisions</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="primary" className={styles.ctaButton}>
                  View Analytics Dashboard
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

