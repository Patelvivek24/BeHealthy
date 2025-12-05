'use client';

import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import styles from './page.module.scss';

export default function AIPoweredPlansPage() {
  const features = [
    {
      title: "Personalized Nutrition Plans",
      description: "Get custom meal plans tailored to your dietary preferences, health goals, and lifestyle. Our AI analyzes your body composition, activity level, and nutritional needs to create the perfect plan for you.",
      icon: "lucide:utensils",
      color: "#8DC63F"
    },
    {
      title: "Adaptive Workout Routines",
      description: "Dynamic exercise programs that evolve with your fitness journey. The AI adjusts intensity, duration, and exercises based on your progress, recovery, and performance data.",
      icon: "lucide:dumbbell",
      color: "#2EB5AC"
    },
    {
      title: "Smart Goal Setting",
      description: "Set realistic, achievable goals with AI-powered recommendations. Our system breaks down long-term objectives into manageable milestones with personalized timelines.",
      icon: "lucide:target",
      color: "#1E5AA8"
    },
    {
      title: "Continuous Learning",
      description: "The AI learns from your habits, preferences, and results to continuously refine your plans. Every interaction makes your experience more personalized.",
      icon: "lucide:brain",
      color: "#8DC63F"
    }
  ];

  const benefits = [
    "Saves time by eliminating manual planning and research",
    "Increases success rates with data-driven recommendations",
    "Adapts to your changing needs and circumstances",
    "Provides 24/7 personalized guidance and support",
    "Reduces decision fatigue with clear, actionable steps"
  ];

  return (
    <main className={styles.detailPage}>
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
                <Icon icon="hugeicons:ai-dna" className={styles.headerIcon} />
              </div>
              <h1 className="title">AI-Powered Personalized Plans</h1>
              <p className="description">
                Experience the future of health and wellness with intelligent, adaptive plans designed specifically for you
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
                Our AI-Powered Personalized Plans revolutionize how you approach health and wellness. By leveraging advanced machine learning algorithms, 
                we analyze thousands of data points including your health metrics, lifestyle patterns, genetic predispositions, and personal preferences 
                to create comprehensive plans that adapt in real-time to your needs.
              </p>
              <p>
                Whether you&apos;re looking to lose weight, build muscle, improve cardiovascular health, or manage chronic conditions, our AI creates a 
                personalized roadmap that evolves with you. No two plans are alike because no two people are the same.
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
              <h2>Ready to Get Started?</h2>
              <p>Experience the power of AI-driven personalization today</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="primary" className={styles.ctaButton}>
                  Create Your Personalized Plan
                  <Icon icon="lucide:arrow-right" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </div>
      <Footer />
    </main>
  );
}

