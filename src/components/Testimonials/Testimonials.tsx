'use client';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styles from './Testimonials.module.scss';
import pageData from '@/data/pageData.json';

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <Container>
        <h2 className={styles.sectionTitle}>{pageData.testimonials.title}</h2>
        <p className={styles.testimonialsSubtitle}>
          {pageData.testimonials.subtitle}
        </p>
        <Row className={styles.testimonialsGrid}>
          {pageData.testimonials.items.map((testimonial, idx) => (
            <Col key={idx} md={6} lg={3} className="mb-4">
              <Card className={styles.testimonialCard}>
                <Card.Body>
                  <div className={styles.quoteIcon}>&quot;</div>
                  <div className={styles.testimonialStars}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <span key={i} className={styles.star}>★</span>
                    ))}
                  </div>
                  <Card.Text className={styles.testimonialText}>
                    {testimonial.text}
                  </Card.Text>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar}>
                      <div className={styles.avatarPlaceholder}>{testimonial.author.initials}</div>
                    </div>
                    <div className={styles.authorInfo}>
                      <strong>{testimonial.author.name}</strong>
                      <span>{testimonial.author.role}</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className={styles.testimonialsCTA}>
          <p className={styles.testimonialsCTAText}>{pageData.testimonials.cta.text}</p>
          <Button className={styles.testimonialsCTAButton}>{pageData.testimonials.cta.buttonText}</Button>
        </div>
      </Container>
    </section>
  );
}

