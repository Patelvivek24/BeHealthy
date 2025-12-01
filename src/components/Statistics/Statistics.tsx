'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Statistics.module.scss";

const stats = [
  { value: "50K+", label: "Active Users", color: "#8DC63F" },
  { value: "1M+", label: "Workouts Completed", color: "#2EB5AC" },
  { value: "100K+", label: "Reports Analyzed", color: "#1E5AA8" },
  { value: "4.8★", label: "Average Rating", color: "#8DC63F" },
];

export default function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="statistics" ref={ref} className={styles.section}>
      <Container>
        <Row className="g-4">
          {stats.map((s, index) => (
            <Col xs={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
      </Container>
    </section>
  );
}

