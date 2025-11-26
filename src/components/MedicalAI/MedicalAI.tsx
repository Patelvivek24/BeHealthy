'use client';

import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import styles from './MedicalAI.module.scss';
import pageData from '@/data/pageData.json';
import Image from 'next/image';

export default function MedicalAI() {
  const { badge, title, description, features, visualSection } = pageData.medicalAI;

  return (
    <section className={styles.aiSection}>
      <Container fluid="lg">
        <Row className={styles.aiContent}>
          {/* Left Part - Text Content */}
          <Col 
            xs={12} 
            md={12} 
            lg={6} 
            xl={6}
            className={styles.aiText}
          >
            <div className={styles.badge}>
              <Icon icon={badge.icon} className={styles.badgeIcon} />
              <span>{badge.text}</span>
            </div>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <p className={styles.sectionText}>{description}</p>
            <div className={styles.features}>
              {features.map((feature, idx) => (
                <div key={idx} className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <Icon icon={feature.icon} />
                  </div>
                  <div className={styles.featureContent}>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          {/* Right Part - Visual Content */}
          <Col 
            xs={12} 
            md={12} 
            lg={6} 
            xl={6}
            className={styles.aiVisual}
          >
            <div className={styles.visualContainer}>
              <div className={styles.imageWrapper}>
                <Image
                  src={visualSection.image}
                  alt="Medical AI Analysis"
                  fill
                  className={styles.medicalImage}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.scoreCards}>
                {visualSection.scores.map((score, idx) => (
                  <div key={idx} className={`${styles.scoreCard} ${styles[score.color]}`}>
                    <div className={styles.scoreValue}>{score.value}</div>
                    <div className={styles.scoreLabel}>{score.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

