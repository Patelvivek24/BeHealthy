'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './MedicalAI.module.scss';
import pageData from '@/data/pageData.json';

export default function MedicalAI() {
  return (
    <section className={styles.aiSection}>
      <Container>
        <Row className={styles.aiContent}>
          <Col lg={6} className={styles.aiText}>
            <h2 className={styles.sectionTitle}>{pageData.medicalAI.title}</h2>
            <p className={styles.sectionText}>
              {pageData.medicalAI.description}
            </p>
          </Col>
          <Col lg={6} className={styles.aiVisual}>
            <Card className={styles.reportCard}>
              <Card.Body>
                <div className={styles.reportHeader}>
                  <div className={styles.reportTitle}>{pageData.medicalAI.reportCard.title}</div>
                  <div className={styles.reportScore}>{pageData.medicalAI.reportCard.score}</div>
                </div>
                <div className={styles.reportChart}>
                  {pageData.medicalAI.reportCard.chartBars.map((bar, idx) => (
                    <div key={idx} className={styles.chartBar} style={{height: bar.height}}></div>
                  ))}
                </div>
                <div className={styles.reportInsights}>
                  {pageData.medicalAI.reportCard.insights.map((insight, idx) => (
                    <div key={idx} className={styles.insight}>
                      {insight.type === 'success' ? '✓' : '⚠'} {insight.text}
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

