'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './Features.module.scss';
import pageData from '@/data/pageData.json';

export default function Features() {
  return (
    <section id="features" className={styles.featuresSection}>
      <Container>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Powerful Features</span>
          <h2 className={styles.sectionTitle}>Everything You Need to Stay Healthy</h2>
        </div>
        <Row className={styles.featuresGrid}>
          {pageData.features.map((feature, idx) => (
            <Col key={idx} md={6} lg={4} className="mb-4">
              <Card className={styles.featureCard}>
                <Card.Body className={styles.cardBody}>
                  <div className={styles.cardContent}>
                    <div className={styles.featureImageWrapper}>
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className={styles.featureImage}
                      />
                    </div>
                    <div className={styles.cardTextContent}>
                      <Card.Title className={styles.cardTitle}>{feature.title}</Card.Title>
                      <Card.Text className={styles.cardText}>{feature.description}</Card.Text>
                    </div>
                  </div>
                </Card.Body>
                <div className={styles.cardOverlay}>
                  <a href="#" className={styles.learnMoreLink}>
                    Learn more
                    <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

