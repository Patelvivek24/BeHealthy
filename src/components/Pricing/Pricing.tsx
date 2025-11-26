'use client';

import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import Button from '@/components/Button';
import styles from './Pricing.module.scss';
import pageData from '@/data/pageData.json';

export default function Pricing() {
  return (
    <section id="pricing" className={styles.pricingSection}>
      <Container>
        <h2 className={styles.sectionTitle}>{pageData.pricing.title}</h2>
        <Row className={styles.pricingGrid}>
          {pageData.pricing.plans.map((plan, idx) => (
            <Col key={idx} md={4} className="mb-4">
              <Card className={`${styles.pricingCard} ${plan.featured ? styles.pricingCardFeatured : ''}`}>
                <Card.Body className="text-center">
                  {plan.badge && <Badge className={styles.badge}>{plan.badge}</Badge>}
                  <Card.Title>{plan.name}</Card.Title>
                  <div className={styles.price}>
                    <span className={styles.priceAmount}>${plan.price}</span>
                    <span className={styles.pricePeriod}>{plan.period}</span>
                  </div>
                  <ul className={styles.pricingFeatures}>
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx}>{feature}</li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.buttonVariant === 'primary' ? 'primary' : 'outline'}
                    className={styles.pricingCTA}
                  >
                    {plan.buttonText}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

