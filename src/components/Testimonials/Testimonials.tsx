import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./testimonials.module.scss";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    image:
      "https://images.unsplash.com/photo-1745434159123-4908d0b9df94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
    content:
      "BeHealthy transformed how I approach wellness. The AI report analysis helped me understand my health metrics better than ever. Lost 15 pounds in 3 months!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
    content:
      "As someone with a busy schedule, BeHealthy's reminders and habit tracking keep me on track. The gamification features make staying healthy actually fun!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Yoga Instructor",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
    content:
      "The personalized diet plans and workout library are incredible. I recommend BeHealthy to all my clients. It's the most comprehensive health app I've used.",
    rating: 5,
  },
];

const stats = [
  { value: "50K+", label: "Active Users", color: "#8DC63F" },
  { value: "1M+", label: "Workouts Completed", color: "#2EB5AC" },
  { value: "100K+", label: "Reports Analyzed", color: "#1E5AA8" },
  { value: "4.8★", label: "Average Rating", color: "#8DC63F" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className={styles.section}>
      {/* Background bubbles */}
      <div className={styles.bgDecorations}>
        <div className={`${styles.bubble} ${styles.bubbleGreen}`} />
        <div className={`${styles.bubble} ${styles.bubbleBlue}`} />
      </div>

      <Container className={styles.inner}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <div className={styles.badge}>
            <Icon icon="lucide:star" className={styles.badgeIcon} />
            <span>Testimonials</span>
          </div>

          <h2 className={styles.title}>Loved by Thousands of Users</h2>
          <p className={styles.subtitle}>
            Real stories from people transforming their health with BeHealthy
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <Row className="g-4 mb-5">
          {testimonials.map((t, index) => (
            <Col md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={styles.cardWrapper}
              >
                <div className={styles.cardGlow} />

                <div className={styles.card}>
                  {/* Quote icon */}
                  <div className={styles.quoteIcon}>
                    <Icon icon="lucide:quote" />
                  </div>

                  {/* Stars */}
                  <div className={styles.stars}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Icon key={i} icon="lucide:star" className={styles.star} />
                    ))}
                  </div>

                  <p className={styles.content}>&ldquo;{t.content}&rdquo;</p>

                  {/* Profile */}
                  <div className={styles.profile}>
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                      <Image
                        src={t.image}
                        alt={t.name}
                        className={styles.avatar}
                        width={60}
                        height={60}
                        unoptimized
                      />
                    </motion.div>
                    <div>
                      <div className={styles.name}>{t.name}</div>
                      <div className={styles.role}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={styles.statsSection}
        >
          <Row className="g-4">
            {stats.map((s, index) => (
              <Col xs={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={styles.statCard}
                >
                  <div
                    className={styles.statValue}
                    style={{ color: s.color }}
                  >
                    {s.value}
                  </div>
                  <div className={styles.statLabel}>{s.label}</div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}
