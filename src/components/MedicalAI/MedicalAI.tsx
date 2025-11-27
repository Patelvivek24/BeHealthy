import { Icon } from "@iconify/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./MedicalAI.module.scss";

export default function MedicalAI() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: "lucide:file-text",
      title: "Upload Any Medical Report",
      desc: "Support for PDFs, images, and scanned documents",
      color: "#8DC63F",
      delay: 0.5
    },
    {
      icon: "lucide:trending-up",
      title: "Get Health Score & Trends",
      desc: "Visual insights into your health metrics over time",
      color: "#2EB5AC",
      delay: 0.6
    },
    {
      icon: "lucide:check-circle",
      title: "Personalized Recommendations",
      desc: "AI-generated action plans based on your results",
      color: "#1E5AA8",
      delay: 0.7
    }
  ];

  const scoreCards = [
    { score: 85, label: "Overall Score", color: "#8DC63F", delay: 0.8 },
    { score: 92, label: "Cholesterol", color: "#2EB5AC", delay: 0.9 },
    { score: 78, label: "Blood Sugar", color: "#1E5AA8", delay: 1.0 }
  ];

  return (
    <section ref={ref} className={styles.section}>
      {/* Background Animated Circle */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={styles.bgCircle}
      />

      <Container className={styles.containerWrapper}>
        <Row className="align-items-center" xs={1} md={2}>
          {/* Left Content */}
          <Col>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={styles.badge}
              >
                <Icon icon="lucide:sparkles" className={styles.badgeIcon} />
                <span>AI-Powered Analysis</span>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={styles.title}
              >
                Understand Your Health Reports Instantly
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={styles.description}
              >
                AI analyzes blood tests, sugar, thyroid, lipid profile, and more
                giving users easy insights, scoring, and personalized recommendations.
              </motion.p>

              {/* Features */}
              <div className={styles.features}>
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: item.delay }}
                    whileHover={{ x: 10 }}
                    className={styles.featureItem}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={styles.featureIconWrapper}
                      style={{
                        background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
                        border: `2px solid ${item.color}30`
                      }}
                    >
                      <Icon icon={item.icon} className={styles.featureIcon} style={{ color: item.color }} />
                    </motion.div>

                    <div>
                      <div className={styles.featureTitle}>{item.title}</div>
                      <div className={styles.featureDesc}>{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Col>

          {/* Right Side Illustration */}
          <Col>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={styles.illustrationWrapper}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className={styles.illustrationBox}
              >
                <img
                  src="https://images.unsplash.com/photo-1758691462667-f2fb90a067ff?w=1080&q=80"
                  alt="Medical Report Analysis"
                  className={styles.image}
                />

                {/* Score Cards */}
                <div className={styles.scoreGrid}>
                  {scoreCards.map((card, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: card.delay }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className={styles.scoreCard}
                      style={{
                        background: `linear-gradient(135deg, ${card.color}15, ${card.color}05)`
                      }}
                    >
                      <div
                        className={styles.scoreValue}
                        style={{ color: card.color }}
                      >
                        {card.score}
                      </div>
                      <div className={styles.scoreLabel}>{card.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
