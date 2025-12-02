'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './Features.module.scss';
import pageData from '@/data/pageData.json';

export default function Features() {
  return (
    <section id="features" className={styles.featuresSection}>
      <Container>
        <div className={styles.sectionHeader}>
          <div className="badge">
            <svg
              className="badgeIcon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span>Powerful Features</span>
          </div>
          <h2 className="title" style={{ marginBottom: '0px' }}>Everything You Need to Stay Healthy</h2>
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

