'use client';

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import styles from './page.module.scss';
import Container from 'react-bootstrap/Container';
import { Icon } from '@iconify/react';
import { Row, Col } from 'react-bootstrap';

const values = [
  {
    icon: 'lucide:heart-handshake',
    title: 'User-Centric',
    description: 'Your health and wellness are at the heart of everything we do. We design every feature with your needs in mind.'
  },
  {
    icon: 'lucide:shield-check',
    title: 'Privacy First',
    description: 'Your health data is yours. We use bank-level encryption and never share your information without consent.'
  },
  {
    icon: 'lucide:lightbulb',
    title: 'Innovation',
    description: 'We leverage cutting-edge AI and technology to provide you with the most advanced health solutions available.'
  },
  {
    icon: 'lucide:users',
    title: 'Accessibility',
    description: 'Health and wellness should be accessible to everyone, regardless of background or fitness level.'
  },
  {
    icon: 'lucide:target',
    title: 'Evidence-Based',
    description: 'All our recommendations are backed by scientific research and medical best practices.'
  },
  {
    icon: 'lucide:trending-up',
    title: 'Continuous Improvement',
    description: 'We constantly evolve and improve our platform based on user feedback and the latest health research.'
  }
];

const stats = [
  { number: '100K+', label: 'Active Users', icon: 'lucide:users' },
  { number: '50K+', label: 'Health Plans Created', icon: 'lucide:clipboard-check' },
  { number: '1M+', label: 'Workouts Completed', icon: 'lucide:activity' },
  { number: '95%', label: 'User Satisfaction', icon: 'lucide:star' }
];

const milestones = [
  {
    year: '2023',
    title: 'The Beginning',
    description: 'BeHealthy was founded with a vision to make comprehensive health management accessible to everyone through technology.'
  },
  {
    year: '2024',
    title: 'AI Integration',
    description: 'Launched our revolutionary AI-powered medical report analyzer, making health insights more accessible than ever.'
  },
  {
    year: '2025',
    title: 'Growing Community',
    description: 'Reached 100K+ active users and expanded our platform with advanced analytics and personalized coaching features.'
  }
];

export default function AboutUsPage() {
  return (
    <div className={styles.aboutPage}>
      <Header />
      <div className={styles.contentWrapper}>
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="heroSection"
        >
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="heroContent"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="badge"
              >
                <Icon icon="lucide:info" width={18} height={18} className="badgeIcon" />
                <span>About BeHealthy</span>
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="title"
              >
                Empowering Your Health Journey
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="description"
              >
                We&apos;re on a mission to revolutionize how people manage their health and wellness, 
                making personalized healthcare accessible, affordable, and effective for everyone.
              </motion.p>
            </motion.div>
          </Container>
        </motion.section>

        {/* Mission & Vision Section */}
        <section className={styles.missionSection}>
          <Container>
            <Row className="g-4">
              <Col md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={styles.missionCard}
                >
                  <div className={styles.cardIcon}>
                    <Icon icon="lucide:compass" width={32} height={32} />
                  </div>
                  <h2 className={styles.cardTitle}>Our Mission</h2>
                  <p className={styles.cardText}>
                    To empower individuals to take control of their health through personalized, 
                    AI-driven solutions that make wellness accessible, engaging, and effective. 
                    We believe everyone deserves the tools and knowledge to live their healthiest life.
                  </p>
                </motion.div>
              </Col>
              <Col md={6}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={styles.visionCard}
                >
                  <div className={styles.cardIcon}>
                    <Icon icon="lucide:eye" width={32} height={32} />
                  </div>
                  <h2 className={styles.cardTitle}>Our Vision</h2>
                  <p className={styles.cardText}>
                    To become the world&apos;s most trusted health companion, where millions of people 
                    achieve their wellness goals through intelligent, personalized guidance. We envision 
                    a future where preventive healthcare is the norm, not the exception.
                  </p>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.statsGrid}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={styles.statCard}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className={styles.statIcon}>
                    <Icon icon={stat.icon} width={32} height={32} />
                  </div>
                  <motion.h3
                    className={styles.statNumber}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className={styles.statLabel}>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Our Story Section */}
        <section className={styles.storySection}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.storyContent}
            >
              <h2 className={styles.sectionTitle}>Our Story</h2>
              <p className={styles.storyText}>
                BeHealthy was born from a simple yet powerful observation: managing your health 
                shouldn&apos;t be complicated. In a world where health information is scattered 
                across multiple apps, websites, and healthcare providers, we saw an opportunity 
                to create a unified platform that brings everything together.
              </p>
              <p className={styles.storyText}>
                Our team of health experts, technologists, and designers came together with a 
                shared passion for making wellness accessible. We combined cutting-edge AI 
                technology with evidence-based health practices to create a platform that 
                doesn&apos;t just track your health—it actively guides you toward better outcomes.
              </p>
              <p className={styles.storyText}>
                Today, BeHealthy serves over 100,000 users who trust us with their health journey. 
                From personalized diet plans to AI-powered medical report analysis, we&apos;re 
                constantly innovating to provide you with the tools you need to live your best, 
                healthiest life.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className={styles.timeline}>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={styles.timelineItem}
                >
                  <div className={styles.timelineYear}>{milestone.year}</div>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTitle}>{milestone.title}</h3>
                    <p className={styles.timelineDescription}>{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className={styles.valuesSection}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.valuesHeader}
            >
              <h2 className={styles.sectionTitle}>Our Core Values</h2>
              <p className={styles.sectionSubtitle}>
                These principles guide everything we do and shape how we serve our community
              </p>
            </motion.div>
            <div className={styles.valuesGrid}>
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={styles.valueCard}
                  whileHover={{ y: -8, boxShadow: "0 12px 32px rgba(141, 198, 63, 0.2)" }}
                >
                  <div className={styles.valueIcon}>
                    <Icon icon={value.icon} width={28} height={28} />
                  </div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.ctaCard}
            >
              <h2 className={styles.ctaTitle}>Join Us on This Journey</h2>
              <p className={styles.ctaText}>
                Whether you&apos;re just starting your health journey or looking to take it to the next level, 
                BeHealthy is here to support you every step of the way.
              </p>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="/" style={{ textDecoration: 'none', display: 'inline-block' }}>
                  <Button variant="primary" className={styles.ctaButton}>
                    Start Your Free Journey
                    <Icon icon="lucide:arrow-right" width={20} height={20} />
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </Container>
        </section>
      </div>
      <Footer />
    </div>
  );
}

