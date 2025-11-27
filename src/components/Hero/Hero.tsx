'use client';

import { Container, Badge, Row, Col, Card } from 'react-bootstrap';
import Button from '@/components/Button';
import { Icon, loadIcon } from '@iconify/react';
import styles from './Hero.module.scss';
import pageData from '@/data/pageData.json';

// Preload icons immediately when module loads (before component renders)
// This ensures icons start loading as soon as the module is imported
const iconNames = pageData.heroFeatures.map(feature => feature.icon);
// Start preloading icons - don't await, let them load in background
Promise.all(
  iconNames.map(iconName => 
    loadIcon(iconName).catch(err => {
      console.warn(`Failed to preload icon ${iconName}:`, err);
      return null;
    })
  )
);

export default function Hero() {
  // Icons are preloaded at module level when this file is imported
  // This ensures they start loading as early as possible

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}></div>
      <Container className={styles.container}>
        <div className={styles.heroContent}>
          <Badge className={styles.heroTag}>
            <svg className={styles.tagIcon} viewBox={pageData.hero.badge.icon.viewBox} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {pageData.hero.badge.icon.paths.map((path, idx) => (
                <path key={idx} d={path}/>
              ))}
            </svg>
            <span>{pageData.hero.badge.text}</span>
          </Badge>
          <h1 className={styles.heroTitle}>
            <span className={styles.titlePart1}>{pageData.hero.title.part1}</span>
            <span className={styles.titlePart2}>{pageData.hero.title.part2}</span>
          </h1>
          <p className={styles.heroSubtitle}>
            {pageData.hero.subtitle}
          </p>
          <div className={styles.heroButtons}>
            <Button variant="primary">
              {pageData.hero.buttons.primary.text}
              <svg style={{ width: '20px', height: '20px' }} viewBox={pageData.hero.buttons.primary.icon.viewBox} fill="none" stroke="currentColor" strokeWidth="2">
                <path d={pageData.hero.buttons.primary.icon.path}/>
              </svg>
            </Button>
            <Button variant="outline">
              <svg style={{ width: '20px', height: '20px' }} viewBox={pageData.hero.buttons.secondary.icon.viewBox} fill="currentColor">
                <path d={pageData.hero.buttons.secondary.icon.path}/>
              </svg>
              {pageData.hero.buttons.secondary.text}
            </Button>
          </div>
        </div>

        {/* Hero Feature Cards */}
        <Row className={styles.heroFeatures}>
          {pageData.heroFeatures.map((feature, idx) => (
            <Col key={idx} md={6} lg={3} className="mb-3 mb-lg-0">
              <Card className={styles.heroFeatureCard}>
                <Card.Body className="text-center">
                  <div className={`${styles.heroFeatureIcon} ${styles[feature.iconClass]}`}>
                    <Icon 
                      icon={feature.icon} 
                      width={30} 
                      height={30}
                      inline={true}
                      style={{ 
                        minWidth: '30px', 
                        minHeight: '30px',
                        display: 'inline-block'
                      }}
                    />
                  </div>
                  <div className={styles.heroFeatureText}>
                    <strong>{feature.title}</strong>
                    <span>{feature.subtitle}</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

