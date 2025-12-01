import { Icon } from "@iconify/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { Container, Row, Col } from "react-bootstrap";
import styles from "./Gamification.module.scss";

export default function Gamification() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className={styles.section}>
      {/* Decorative Background */}
      <div className={styles.bgDecorations}>
        <div className={styles.greenBlob} />
        <div className={styles.tealBlob} />
      </div>

      <Container className={styles.relativeContainer}>
        <Row className="align-items-center">
          {/* IMAGE SIDE */}
          <Col md={6} className={styles.imageCol}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className={styles.imageWrapper}
            >
              <div className={styles.imageGlow} />

              <div className={styles.imageInner}>
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1569793353138-c55e443da090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Fitness Achievement"
                    className={styles.mainImage}
                  />
                </motion.div>

                {/* Trophy floating card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={styles.floatCardTopRight}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={styles.iconBadge}
                  >
                    <Icon icon="lucide:trophy" className={styles.iconWhite} />
                  </motion.div>
                </motion.div>

                {/* Streak card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  whileHover={{ scale: 1.05 }}
                  className={styles.floatCardBottomLeft}
                >
                  <div className={styles.streakCard}>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Icon icon="lucide:flame" className={styles.streakIcon} />
                    </motion.div>
                    <span className={styles.streakText}>7 Day Streak!</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </Col>

          {/* TEXT SIDE */}
          <Col md={6} className={styles.textCol}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={styles.badge}
            >
              <Icon icon="lucide:award" className={styles.badgeIcon} />
              <span>Motivation System</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="title"
            >
              Stay Motivated with Levels, Badges & Streaks
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="description"
            >
              Transform your health journey into an engaging experience. Earn
              rewards, maintain streaks, and compete on leaderboards while
              achieving your wellness goals.
            </motion.p>

            <div className={styles.features}>
              {[
                {
                  icon: "lucide:trophy",
                  title: "Unlock Achievements",
                  desc: "Earn badges for completing workouts, maintaining healthy habits, and reaching milestones.",
                  color: "#8DC63F",
                  delay: 0.5
                },
                {
                  icon: "lucide:flame",
                  title: "Build Streaks",
                  desc: "Keep your momentum going with daily streaks that track your consistency and dedication.",
                  color: "#2EB5AC",
                  delay: 0.6
                },
                {
                  icon: "lucide:target",
                  title: "Compete & Connect",
                  desc: "Join leaderboards, challenge friends, and stay motivated with community support.",
                  color: "#1E5AA8",
                  delay: 0.7
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: item.delay }}
                  whileHover={{ x: -10 }}
                  className={styles.featureCard}
                >
                  <div
                    className={styles.featureIcon}
                    style={{
                      background: `linear-gradient(135deg, ${item.color}, ${item.color}90)`
                    }}
                  >
                    <Icon icon={item.icon} className={styles.iconWhite} />
                  </div>

                  <div>
                    <div className={styles.featureTitle}>{item.title}</div>
                    <p className={styles.featureDesc}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
