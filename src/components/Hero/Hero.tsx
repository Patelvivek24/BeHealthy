'use client';

import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import styles from "./Hero.module.scss";

export default function Hero() {
  const router = useRouter();
  
  const features = [
    { icon: "hugeicons:ai-dna", label: "Personalized Plans", value: "AI-Powered", color: "#1E5AA8", path: "/ai-powered-plans" },
    { icon: "mage:heart-health", label: "Health Tracking", value: "Real-time", color: "#1E5AA8", path: "/health-tracking" },
    { icon: "carbon:analytics", label: "Progress Analytics", value: "Advanced", color: "#1E5AA8", path: "/progress-analytics" },
    { icon: "si:ai-note-duotone", label: "Medical Analysis", value: "AI Reports", color: "#1E5AA8", path: "/ai-reports" }
  ];

  const handleCardClick = (path: string) => {
    router.push(path);
  };

  return (
    <section className={styles.heroSection}>
      {/* Background */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={styles.bgWrapper}
      >
        <div className={styles.bgOverlay} />
        <div
          className={styles.bgImage}
          style={{
            backgroundImage: `url('/images/hero-2.jpeg')`
          }}
        />
      </motion.div>

      {/* Floating Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15], x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={styles.orbGreen}
      />

      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2], x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className={styles.orbTeal}
      />

      {/* Hero Content */}
      <Container className={styles.heroContent}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.centerBox}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className={styles.badge}
          >
            <Icon icon="lucide:brain" className="badgeIcon" />
            <span>AI-Powered Complete Health Platform</span>
          </motion.div>

          {/* Heading */}
          <h1 className={styles.mainHeading}>
            Your Complete Health <br />
            <span className={styles.gradientText}>Journey Starts Here</span>
          </h1>

          {/* Description */}
          <p className={styles.description}>
            Transform your wellness with personalized diet plans, guided workouts,
            AI medical report analysis, and smart habit tracking all unified in one beautiful platform.
          </p>

          {/* CTA Buttons */}
          <div className={styles.ctaWrapper}>
            <Button className={styles.primaryCTA}>
              Start Your Free Journey <Icon icon="lucide:arrow-right" className={styles.arrowIcon} />
            </Button>

            <Button className={styles.secondaryCTA}>
              <Icon icon="lucide:play" className={styles.playIcon} /> Watch Demo
            </Button>
          </div>

          {/* Feature Cards */}
          <div className={styles.featureGrid}>
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className={styles.featureCard}
                onClick={() => handleCardClick(f.path)}
              >
                <div className={styles.featureIconWrapper}>
                  <Icon icon={f.icon} className={styles.featureIcon} style={{ color: f.color }} />
                </div>
                <div>
                  <div className={styles.featureValue}>{f.value}</div>
                  <div className={styles.featureLabel}>{f.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
