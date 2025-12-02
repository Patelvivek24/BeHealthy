import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "react-bootstrap/Container";
import styles from "./ProductOverview.module.scss";
interface ProductOverviewProps {
  onTagClick?: (tag: string) => void;
}

export default function ProductOverview({ onTagClick }: ProductOverviewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tags = [
    { name: "AI-Powered", color: "#8DC63F" },
    { name: "Personalized", color: "#2EB5AC" },
    { name: "All-in-One", color: "#1E5AA8" },
    { name: "Evidence-Based", color: "#003B46" }
  ];

  return (
    <section ref={ref} className={styles.section}>
      {/* Decorative circles */}
      <div className={styles.circleGreen}></div>
      <div className={styles.circleBlue}></div>

      <Container className={styles.innerContainer}>
        <div className={styles.contentCenter}>
          
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="badge"
          >
            <div className="badgeDot"></div>
            <span>Complete Health Solution</span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="title"
          >
            Your Complete Health Companion
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="description"
          >
            BeHealthy is an all-in-one platform that helps users build and maintain
            a healthier lifestyle through personalized diet plans, guided workouts,
            habit tracking, medical reminders, vital monitoring, and smart medical
            report analysis all in one app.
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.tags}
          >
            {tags.map((tag, index) => (
              <motion.button
                key={tag.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onTagClick?.(tag.name)}
                className={styles.tagButton}
                style={{
                  borderColor: `${tag.color}40`,
                  backgroundColor: `${tag.color}10`,
                  color: tag.color
                }}
              >
                {tag.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
