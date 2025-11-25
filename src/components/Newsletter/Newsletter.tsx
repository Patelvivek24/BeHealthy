'use client';

import { Container, Card, Button, Form } from 'react-bootstrap';
import styles from './Newsletter.module.scss';
import pageData from '@/data/pageData.json';

export default function Newsletter() {
  return (
    <section className={styles.newsletterSection}>
      <Container>
        <Card className={styles.newsletterCard}>
          <Card.Body className="text-center">
            <Card.Title className={styles.newsletterTitle}>{pageData.newsletter.title}</Card.Title>
            <Card.Text className={styles.newsletterSubtext}>
              {pageData.newsletter.subtitle}
            </Card.Text>
            <Form className={styles.newsletterForm}>
              <Form.Control
                type="email"
                placeholder={pageData.newsletter.placeholder}
                className={styles.newsletterInput}
              />
              <Button type="submit" className={styles.newsletterButton}>
                {pageData.newsletter.buttonText}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}

