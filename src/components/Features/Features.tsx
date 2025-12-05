'use client';

import { Icon } from "@iconify/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Features.module.scss";

const features = [
  {
    icon: "lucide:utensils",
    title: "Personalized Diet Plans",
    description: "Custom meal plans tailored to your goals, preferences, and dietary restrictions.",
    color: "#8DC63F",
    gradient: "greenGradient"
  },
  {
    icon: "lucide:dumbbell",
    title: "Workout Library & Guided Exercises",
    description: "Access hundreds of workouts with video guidance and progress tracking.",
    color: "#2EB5AC",
    gradient: "tealGradient"
  },
  {
    icon: "lucide:droplet",
    title: "Habit & Water Intake Tracking",
    description: "Build healthy habits and stay hydrated with smart reminders and tracking.",
    color: "#1E5AA8",
    gradient: "blueGradient"
  },
  {
    icon: "lucide:activity",
    title: "BP / Sugar / BMI / Heart Rate Monitoring",
    description: "Track vital health metrics and see trends over time with visual charts.",
    color: "#8DC63F",
    gradient: "greenGradient"
  },
  {
    icon: "lucide:brain",
    title: "AI Medical Report Analyzer",
    description: "Upload lab reports and get instant AI-powered insights and recommendations.",
    color: "#2EB5AC",
    gradient: "reverseTealGradient"
  },
  {
    icon: "lucide:bell",
    title: "Reminders & Daily Health Tasks",
    description: "Never miss medications, workouts, or health check-ins with smart notifications.",
    color: "#1E5AA8",
    gradient: "darkBlueGradient"
  }
];

export default function FeaturesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className={styles.featuresSection}>
      <div className={styles.bgPattern}></div>

      <Container className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={styles.headerWrap}
        >
          <div className={styles.badge}>
            <div className={styles.badgeDot} />
            <span>Powerful Features</span>
          </div>

          <h2 className="title">Everything You Need to Thrive</h2>
          <p className="description">
            Comprehensive tools designed for your complete wellness journey
          </p>
        </motion.div>

        <Row className="g-4">
          {features.map((feature, index) => {
            return (
              <Col key={index} md={6} lg={4}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={styles.featureCardWrapper}
                >
                  {/* Hover Gradient Border */}
                  <div className={`${styles.hoverBorder} ${styles[feature.gradient]}`} />

                  <div className={styles.featureCard}>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`${styles.iconBox} ${styles[feature.gradient]}`}
                    >
                      <Icon icon={feature.icon} className={styles.icon} width={24} height={24} />
                    </motion.div>

                    <div>
                      <h3 className={styles.featureTitle}>{feature.title}</h3>
                      <p className={styles.featureDesc}>{feature.description}</p>
                      <motion.div
                        initial={{ opacity: 1, x: 0 }}
                        whileHover={{ x: 4 }}
                        className={styles.learnMore}
                        style={{ color: feature.color }}
                      >
                        Learn more
                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.div>
                    </div>

                  </div>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
