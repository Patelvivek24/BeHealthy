'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Container, Button, Card, Row, Col, Badge, Form } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
import styles from './page.module.scss';
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

export default function Home() {
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
    <div className={styles.landingPage}>
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
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

      {/* Product Overview */}
      <section className={styles.section}>
        <Container>
          <h2 className={styles.productOverviewTitle}>{pageData.productOverview.title}</h2>
          <div className={styles.segmentedLine}>
            <div className={styles.linegradientSegment}></div>
          </div>
          <p className={styles.productOverviewText}>
            {pageData.productOverview.text.split(/\{([^}]+)\}/).map((part, idx) => {
              if (idx % 2 === 0) return part;
              const highlight = part;
              return <span key={idx} className={styles.highlightedText}>{highlight}</span>;
            })}
          </p>
          <div className={styles.productBadges}>
            {pageData.productOverview.badges.map((badge, idx) => (
              <span key={idx} className={styles.productBadge}>{badge}</span>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section id="features" className={`${styles.section} ${styles.featuresSection}`}>
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

      {/* Medical AI Section */}
      <section className={`${styles.section} ${styles.aiSection}`}>
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

      {/* Gamification Section */}
      <section className={`${styles.section} ${styles.gamificationSection}`}>
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

      {/* Subscription Plans */}
      <section id="pricing" className={`${styles.section} ${styles.pricingSection}`}>
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
                      className={`${styles.pricingCTA} ${plan.buttonVariant === 'primary' ? styles.pricingCTAPrimary : ''}`}
                      variant={plan.buttonVariant === 'primary' ? 'primary' : 'outline-primary'}
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

      {/* Testimonials */}
      <section id="testimonials" className={`${styles.section} ${styles.testimonialsSection}`}>
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

      {/* Newsletter Section */}
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

      {/* Footer */}
      <Footer />
    </div>
  );
}