'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './Features.module.scss';
import pageData from '@/data/pageData.json';

export default function Features() {
  return (
    <section id="features" className={styles.featuresSection}>
      <Container>
        <h2 className={styles.sectionTitle}>Everything You Need to Stay Healthy</h2>
        <Row className={styles.featuresGrid}>
          {pageData.features.map((feature, idx) => (
            <Col key={idx} md={6} lg={4} className="mb-4">
              <Card className={styles.featureCard}>
                <Card.Body className="text-center">
                  <div className={`${styles.featureIcon} ${styles[feature.iconClass]}`}>
                    <svg viewBox={feature.icon.viewBox} fill="none" stroke="currentColor" strokeWidth="2">
                      {feature.icon.path && (
                        <path 
                          d={feature.icon.path} 
                          strokeLinecap={feature.icon.strokeLinecap as 'round' | 'butt' | 'square' | undefined} 
                          strokeLinejoin={feature.icon.strokeLinejoin as 'round' | 'inherit' | 'miter' | 'bevel' | undefined}
                        />
                      )}
                      {feature.icon.elements && feature.icon.elements.map((el, elIdx) => {
                        if (el.type === 'rect' && 'x' in el && 'y' in el && 'width' in el && 'height' in el) {
                          return <rect key={elIdx} x={el.x} y={el.y} width={el.width} height={el.height} rx={el.rx}/>;
                        } else if (el.type === 'path' && 'd' in el) {
                          return (
                            <path 
                              key={elIdx} 
                              d={el.d} 
                              strokeLinecap={'strokeLinecap' in el ? (el.strokeLinecap as 'round' | 'butt' | 'square' | undefined) : undefined} 
                              strokeLinejoin={'strokeLinejoin' in el ? (el.strokeLinejoin as 'round' | 'inherit' | 'miter' | 'bevel' | undefined) : undefined}
                            />
                          );
                        } else if (el.type === 'circle' && 'cx' in el && 'cy' in el && 'r' in el) {
                          return <circle key={elIdx} cx={el.cx} cy={el.cy} r={el.r} fill={'fill' in el ? el.fill : undefined}/>;
                        } else if (el.type === 'polyline' && 'points' in el) {
                          return <polyline key={elIdx} points={el.points}/>;
                        }
                        return null;
                      })}
                    </svg>
                  </div>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

