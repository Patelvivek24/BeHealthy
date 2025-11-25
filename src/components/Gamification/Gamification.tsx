'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './Gamification.module.scss';
import pageData from '@/data/pageData.json';

export default function Gamification() {
  return (
    <section className={styles.gamificationSection}>
      <Container>
        <h2 className={styles.sectionTitle}>{pageData.gamification.title}</h2>
        <p className={styles.sectionText}>
          {pageData.gamification.description}
        </p>
        <Row className={styles.gamificationGrid}>
          {pageData.gamification.cards.map((card, idx) => (
            <Col key={idx} md={6} lg={3} className="mb-4">
              <Card className={styles.gamificationCard}>
                <Card.Body className="text-center">
                  <div className={`${styles.gamificationIcon} ${styles[card.iconClass]}`}>
                    <svg viewBox={card.icon.viewBox} fill="currentColor">
                      <path d={card.icon.path}/>
                    </svg>
                  </div>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

