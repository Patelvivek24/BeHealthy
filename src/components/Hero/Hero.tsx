'use client';

import { Container, Button, Badge, Row, Col, Card } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
import styles from './Hero.module.scss';
import pageData from '@/data/pageData.json';

// Custom hook for counting animation
function useCountAnimation(end: number, duration: number = 2000, format: 'number' | 'k' | 'm' | 'decimal' = 'number', decimals: number = 0, startAnimation: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = startValue + (end - startValue) * easeOutQuart;
      
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, startAnimation]);

  const formatNumber = (num: number): string => {
    if (format === 'decimal') {
      return num.toFixed(decimals);
    }
    
    if (format === 'k') {
      const value = num / 1000;
      return Math.floor(value) + 'K';
    }
    
    if (format === 'm') {
      const value = num / 1000000;
      return value.toFixed(decimals) + 'M';
    }
    
    return Math.floor(num).toLocaleString();
  };

  return formatNumber(count);
}

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startAnimation) {
            setStartAnimation(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = statsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [startAnimation]);

  const activeUsers = useCountAnimation(
    pageData.statistics[0].value, 
    2000, 
    pageData.statistics[0].format as 'number' | 'k' | 'm' | 'decimal', 
    pageData.statistics[0].decimals || 0, 
    startAnimation
  );
  const workouts = useCountAnimation(
    pageData.statistics[1].value, 
    2000, 
    pageData.statistics[1].format as 'number' | 'k' | 'm' | 'decimal', 
    pageData.statistics[1].decimals || 0, 
    startAnimation
  );
  const reports = useCountAnimation(
    pageData.statistics[2].value, 
    2000, 
    pageData.statistics[2].format as 'number' | 'k' | 'm' | 'decimal', 
    pageData.statistics[2].decimals || 0, 
    startAnimation
  );
  const rating = useCountAnimation(
    pageData.statistics[3].value, 
    2000, 
    pageData.statistics[3].format as 'number' | 'k' | 'm' | 'decimal', 
    pageData.statistics[3].decimals || 0, 
    startAnimation
  );
  const stats = [activeUsers, workouts, reports, rating];

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
            <Button className={styles.primaryCTA}>
              {pageData.hero.buttons.primary.text}
              <svg className={styles.arrowIcon} viewBox={pageData.hero.buttons.primary.icon.viewBox} fill="none" stroke="currentColor" strokeWidth="2">
                <path d={pageData.hero.buttons.primary.icon.path}/>
              </svg>
            </Button>
            <Button variant="light" className={styles.secondaryCTA}>
              <svg className={styles.playIcon} viewBox={pageData.hero.buttons.secondary.icon.viewBox} fill="currentColor">
                <path d={pageData.hero.buttons.secondary.icon.path}/>
              </svg>
              {pageData.hero.buttons.secondary.text}
            </Button>
          </div>
          <div 
            className={styles.scrollPrompt}
            onClick={() => {
              const featuresSection = document.getElementById('features');
              if (featuresSection) {
                const headerOffset = 100;
                const elementPosition = featuresSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              } else {
                window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
              }
            }}
          >
            <span>Scroll to explore</span>
            <svg className={styles.scrollArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
        </div>

        {/* Hero Feature Cards */}
        <Row className={styles.heroFeatures}>
          {pageData.heroFeatures.map((feature, idx) => (
            <Col key={idx} md={6} lg={3} className="mb-3 mb-lg-0">
              <Card className={styles.heroFeatureCard}>
                <Card.Body className="text-center">
                  <div className={`${styles.heroFeatureIcon} ${styles[feature.iconClass]}`}>
                    <svg viewBox={feature.icon.viewBox} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {feature.icon.path ? (
                        <path d={feature.icon.path}/>
                      ) : feature.icon.paths ? (
                        feature.icon.paths.map((path, pIdx) => (
                          <path key={pIdx} d={path}/>
                        ))
                      ) : null}
                    </svg>
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

        {/* Hero Statistics Bar */}
        <Row className={styles.heroStats} ref={statsRef}>
          {pageData.statistics.map((stat, idx) => (
            <Col key={idx} md={6} lg={3} className="mb-3 mb-lg-0">
              <div className={styles.heroStat}>
                <div className={styles.heroStatNumber}>
                  {stats[idx]}
                  {stat.showStar && <span className={styles.starIcon}>★</span>}
                  {!stat.showStar && '+'}
                </div>
                <div className={styles.heroStatLabel}>{stat.label}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

