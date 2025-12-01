import { Icon } from "@iconify/react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import styles from "./FAQ.module.scss";
import Container from "react-bootstrap/Container";

const faqs = [
  {
    question: "How does the AI-powered medical report analysis work?",
    answer:
      "Our advanced AI technology analyzes your medical reports, lab results, and health documents to provide easy-to-understand insights. Simply upload your reports, and our system will identify key health markers, flag abnormal values, and provide personalized recommendations based on medical best practices.",
  },
  {
    question: "Can I use BeHealthy without any prior fitness experience?",
    answer:
      "Absolutely! BeHealthy is designed for everyone, from complete beginners to fitness enthusiasts. Our personalized workout plans adapt to your current fitness level, and our AI coaching provides step-by-step guidance. You'll start with beginner-friendly exercises and gradually progress at your own pace.",
  },
  {
    question: "Is my health data secure and private?",
    answer:
      "Yes, your privacy and data security are our top priorities. We use bank-level encryption (256-bit SSL) to protect your information. Your health data is stored securely and never shared with third parties without your explicit consent. We comply with HIPAA and GDPR regulations to ensure maximum data protection.",
  },
  {
    question: "What's included in the free plan?",
    answer:
      "The free plan includes access to our basic workout library, water intake tracking, daily habit reminders, BMI calculator, and community access. It's perfect for getting started with your health journey. You can upgrade anytime to unlock premium features like AI report analysis and personalized coaching.",
  },
  {
    question: "How does the gamification system work?",
    answer:
      "Our gamification features make health fun and engaging! Earn badges for completing workouts, maintaining streaks, and hitting milestones. Compete with friends on leaderboards, unlock achievements, and level up your health profile. The system is designed to keep you motivated and celebrate your progress every step of the way.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you have complete flexibility. You can cancel your subscription at any time with just one click from your account settings. There are no cancellation fees or hidden charges. If you cancel, you'll retain access to premium features until the end of your current billing period.",
  },
  {
    question: "Do you offer personalized diet plans?",
    answer:
      "Yes! Our Premium and Coaching plans include personalized diet plans tailored to your goals, dietary preferences, allergies, and lifestyle. Our AI analyzes your nutritional needs and creates meal plans with recipes, shopping lists, and macro tracking. Personal Coaching members also get custom meal planning with their dedicated health coach.",
  },
  {
    question: "How does the personal coaching work?",
    answer:
      "With our Personal Coaching plan, you're paired with a certified health professional who becomes your dedicated wellness partner. You'll have weekly video consultations, 24/7 messaging access, custom workout and meal plans, and monthly progress reports. Your coach provides accountability, motivation, and expert guidance tailored specifically to your goals.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={ref} className={styles.faqSection}>
      {/* Background Orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className={styles.orbTeal}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className={styles.orbGreen}
      />

      <Container>
        <div className={styles.faqMainSection}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={styles.header}
          >
            <div className={styles.badge}>
              <Icon icon="lucide:help-circle" className={styles.badgeIcon} />
              <span>Got Questions?</span>
            </div>

            <h2 className="title">Frequently Asked Questions</h2>
            <p className={styles.subtitle}>
              Everything you need to know about BeHealthy and your wellness
              journey
            </p>
          </motion.div>

          {/* FAQ List */}
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.faqItem}
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className={`${styles.card} ${openIndex === index ? styles.cardOpen : ""
                    }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={styles.questionRow}
                  >
                    <span className={styles.question}>{faq.question}</span>

                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`${styles.iconCircle} ${openIndex === index ? styles.iconCircleOpen : ""
                        }`}
                    >
                      {openIndex === index ? (
                        <Icon icon="lucide:minus" className={styles.iconWhite} />
                      ) : (
                        <Icon icon="lucide:plus" className={styles.iconDark} />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={styles.answerWrapper}
                      >
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className={styles.answerBox}
                        >
                          <p className={styles.answer}>{faq.answer}</p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Support Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className={styles.supportBox}
          ><div>
              <h3 className={styles.supportTitle}>Still have questions?</h3>
              <p className={styles.supportSubtitle}>
                Our support team is here to help you on your wellness journey
              </p>
            </div>

            <div className={styles.supportButtonsWrapper}>
              <div className={styles.supportButtons}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={styles.buttonPrimary}
                >
                  Contact Support
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={styles.buttonOutline}
                >
                  Schedule a Demo
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
