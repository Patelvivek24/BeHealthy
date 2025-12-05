'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Icon } from '@iconify/react';
import styles from './AppDownload.module.scss';

export default function AppDownload() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const
      }
    }
  };

  const phoneVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
        delay: 0.3
      }
    }
  };

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className={styles.bgOrb1}
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.08, 0.12, 0.08],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className={styles.bgOrb2}
      />
      <Container>
      <div className={styles.appDownloadMainSection}>
        
          <Row className={styles.row}>
            {/* Left Content - Text and Buttons */}
            <Col lg={8} className={styles.leftContent}>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                >
                  {/* Badge */}
                  <motion.div
                    variants={itemVariants}
                    className="badge"
                  >
                    <Icon icon="lucide:sparkles" className="badgeIcon" />
                    <span>Available Now</span>
                  </motion.div>

                  {/* Headline */}
                  <motion.h1
                    variants={itemVariants}
                    className="title"
                  >
                    Start Your Health Journey Today
                  </motion.h1>

                  {/* Description */}
                  <motion.p
                    variants={itemVariants}
                    className="description"
                  >
                    Join thousands of users already transforming their health with personalized plans, AI-powered insights, and smart tracking. Download the app now and take control of your wellness.
                  </motion.p>

                  {/* Button Group */}
                  <motion.div
                    variants={itemVariants}
                    className={styles.buttonGroup}
                  >
                  <motion.a
                    href="#"
                    className={styles.downloadButton}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <Icon icon="mdi:apple" className={styles.appleIcon} />
                    <div className={styles.buttonText}>
                      <span className={styles.buttonLabel}>Download on the</span>
                      <span className={styles.buttonStore}>App store</span>
                    </div>
                  </motion.a>

                  <motion.a
                    href="#"
                    className={styles.downloadButton}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <Icon icon="mdi:google-play" className={styles.playIcon} />
                    <div className={styles.buttonText}>
                      <span className={styles.buttonLabel}>Get it on</span>
                      <span className={styles.buttonStore}>Google play</span>
                    </div>
                  </motion.a>
                </motion.div>
              </motion.div>
            </Col>

            {/* Right Content - Phone Mockup */}
            <Col lg={4} className={styles.rightContent}>
              <motion.div
                className={styles.phoneMockup}
                variants={phoneVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.div
                  animate={isInView ? "float" : false}
                  variants={{
                    float: {
                      y: [0, -8, 0],
                      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
                    }
                  }}
                  className={styles.phoneFrame}
                >
                  {/* Phone Screen Image */}
                  <motion.img
                    src="/images/download_app.png"
                    alt="App Screenshot"
                    className={styles.phoneImage}
                    width={1080}
                    height={2329}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  />
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
