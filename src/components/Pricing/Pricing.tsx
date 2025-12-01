'use client';

import { Icon } from "@iconify/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./Pricing.module.scss";

const plans = [
  {
    name: "Free Plan",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with basic health tracking",
    features: [
      "Basic workout library",
      "Water intake tracking",
      "Daily habit reminders",
      "BMI calculator",
      "Community access",
    ],
    cta: "Get Started",
    featured: false,
    gradient: "blue",
  },
  {
    name: "Premium Analytics",
    price: "$9.99",
    period: "per month",
    description: "Advanced insights and comprehensive health monitoring",
    features: [
      "Everything in Free",
      "AI Medical Report Analysis",
      "Advanced vital tracking",
      "Personalized diet plans",
      "Workout progress analytics",
      "Priority support",
      "No ads",
    ],
    cta: "Start Free Trial",
    featured: true,
    gradient: "premium",
  },
  {
    name: "Personal Coaching",
    price: "$29.99",
    period: "per month",
    description: "One-on-one guidance from certified health professionals",
    features: [
      "Everything in Premium",
      "Dedicated health coach",
      "Weekly video consultations",
      "Custom meal planning",
      "24/7 coach messaging",
      "Advanced goal setting",
      "Monthly health reports",
    ],
    cta: "Start Free Trial",
    featured: false,
    gradient: "green",
  },
];

export default function Pricing() {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleCustomizePlan = () => {
    router.push('/customize-plan');
  };

  return (
    <section id="pricing" ref={ref} className={styles.pricingSection}>
      {/* Background Orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 10, repeat: Infinity }}
        className={styles.greenOrb}
      />
      <motion.div
        animate={{ scale: [1.3, 1, 1.3], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 12, repeat: Infinity }}
        className={styles.tealOrb}
      />

      <div className={styles.container}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className={styles.header}
        >
          <div className={styles.badge}>
            <Icon icon="lucide:zap" width={16} />
            <span>Flexible Pricing</span>
          </div>

          <h2 className="title">Choose Your Path to Wellness</h2>

          <p className={styles.subtitle}>
            Flexible plans designed to fit your health goals and budget
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className={styles.highlights}
          >
            <span><Icon icon="lucide:check" width={16} /> 14-day free trial</span>
            <span className={styles.separator}>•</span>
            <span><Icon icon="lucide:check" width={16} /> Cancel anytime</span>
            <span className={styles.separator}>•</span>
            <span><Icon icon="lucide:check" width={16} /> No credit card required</span>
          </motion.div>
        </motion.div>

        {/* Plans */}
        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ y: plan.featured ? -15 : -10 }}
              className={`${styles.cardWrapper} ${
                plan.featured ? styles.featuredWrapper : ""
              }`}
            >
              {plan.featured && (
                <div className={`${styles.glowBorder} ${styles[plan.gradient]}`} />
              )}

              <div
                className={`${styles.card} ${
                  plan.featured ? styles.featuredCard : styles.normalCard
                }`}
              >
                {plan.featured && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className={styles.popularTag}
                  >
                    <Icon icon="lucide:zap" width={16} /> Most Popular
                  </motion.div>
                )}

                <div className={styles.cardHeader}>
                  <h3>{plan.name}</h3>
                  <div className={styles.priceRow}>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      className={styles.price}
                    >
                      {plan.price}
                    </motion.span>
                    <span className={styles.period}>{plan.period}</span>
                  </div>
                  <p className={styles.description}>{plan.description}</p>
                </div>

                <ul className={styles.features}>
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      className={styles.featureItem}
                    >
                      <div
                        className={`${styles.iconCircle} ${
                          plan.featured ? styles.iconFeatured : ""
                        }`}
                      >
                        <Icon icon="lucide:check" width={14} />
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button className={styles.ctaButton}>
                  {plan.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}

          {/* Custom Plan */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            whileHover={{ y: -10 }}
            className={styles.customCardWrapper}
          >
            <div className={styles.customCard}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                className={styles.customTag}
              >
                <Icon icon="lucide:sparkles" width={16} /> Build Your Own
              </motion.div>

              <div className={styles.cardHeader}>
                <h3>Custom Plan</h3>
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  className={styles.price}
                >
                  Custom
                </motion.span>
                <p className={styles.description}>
                  Tailored specifically to your unique needs and goals
                </p>
              </div>

              <ul className={styles.features}>
                {[
                  "Personalized feature selection",
                  "Flexible pricing options",
                  "Custom duration",
                  "Dedicated account manager",
                  "Priority implementation",
                  "White-glove onboarding",
                ].map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    className={styles.featureItem}
                  >
                    <div className={styles.iconCircle}>
                      <Icon icon="lucide:check" width={14} />
                    </div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                onClick={handleCustomizePlan}
                className={styles.customButton}
              >
                Customize Your Plan
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
