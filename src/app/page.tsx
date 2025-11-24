'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import { Container, Button, Card, Row, Col, Badge, Form } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
import styles from './page.module.scss';

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

  const activeUsers = useCountAnimation(50000, 2000, 'k', 0, startAnimation);
  const workouts = useCountAnimation(1000000, 2000, 'm', 0, startAnimation);
  const reports = useCountAnimation(100000, 2000, 'k', 0, startAnimation);
  const rating = useCountAnimation(4.8, 2000, 'decimal', 1, startAnimation);
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
              <svg className={styles.tagIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
              </svg>
              <span>AI-Powered Complete Health Platform</span>
            </Badge>
            <h1 className={styles.heroTitle}>
              <span className={styles.titlePart1}>Your Complete Health</span>
              <span className={styles.titlePart2}>Journey Starts Here</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Transform your wellness with personalized diet plans, guided workouts, AI medical report analysis, and smart habit tracking all unified in one beautiful platform.
            </p>
            <div className={styles.heroButtons}>
              <Button className={styles.primaryCTA}>
                Start Your Free Journey
                <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Button>
              <Button variant="light" className={styles.secondaryCTA}>
                <svg className={styles.playIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Watch Demo
              </Button>
            </div>
            <div className={styles.scrollPrompt}>
              <span>Scroll to explore</span>
              <svg className={styles.scrollArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </div>
          </div>

          {/* Hero Feature Cards */}
          <Row className={styles.heroFeatures}>
            <Col md={6} lg={3} className="mb-3 mb-lg-0">
              <Card className={styles.heroFeatureCard}>
                <Card.Body className="text-center">
                  <div className={`${styles.heroFeatureIcon} ${styles.heroIconGreen}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="1 12 3 8 5 12 7 6 9 12 11 4 13 12 15 8 17 12 19 6 21 12 23 10"/>
                    </svg>
                  </div>
                  <div className={styles.heroFeatureText}>
                    <strong>AI-Powered</strong>
                    <span>Personalized Plans</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-3 mb-lg-0">
              <Card className={styles.heroFeatureCard}>
                <Card.Body className="text-center">
                  <div className={`${styles.heroFeatureIcon} ${styles.heroIconTeal}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </div>
                  <div className={styles.heroFeatureText}>
                    <strong>Real-time</strong>
                    <span>Health Tracking</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-3 mb-lg-0">
              <Card className={styles.heroFeatureCard}>
                <Card.Body className="text-center">
                  <div className={`${styles.heroFeatureIcon} ${styles.heroIconBlue}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 6 13.5 14.5 8.5 9.5 2 16"/>
                      <polyline points="16 6 22 6 22 12"/>
                    </svg>
                  </div>
                  <div className={styles.heroFeatureText}>
                    <strong>Advanced</strong>
                    <span>Progress Analytics</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-3 mb-lg-0">
              <Card className={styles.heroFeatureCard}>
                <Card.Body className="text-center">
                  <div className={`${styles.heroFeatureIcon} ${styles.heroIconGreen}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <div className={styles.heroFeatureText}>
                    <strong>AI Reports</strong>
                    <span>Medical Analysis</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Hero Statistics Bar */}
          <Row className={styles.heroStats} ref={statsRef}>
            <Col md={6} lg={3} className="mb-3 mb-lg-0">
              <div className={styles.heroStat}>
                <div className={styles.heroStatNumber}>{activeUsers}+</div>
                <div className={styles.heroStatLabel}>Active Users</div>
              </div>
            </Col>
            <Col md={6} lg={3} className="mb-3 mb-lg-0">
              <div className={styles.heroStat}>
                <div className={styles.heroStatNumber}>{workouts}+</div>
                <div className={styles.heroStatLabel}>Workouts Completed</div>
              </div>
            </Col>
            <Col md={6} lg={3} className="mb-3 mb-lg-0">
              <div className={styles.heroStat}>
                <div className={styles.heroStatNumber}>{reports}+</div>
                <div className={styles.heroStatLabel}>Reports Analyzed</div>
              </div>
            </Col>
            <Col md={6} lg={3} className="mb-3 mb-lg-0">
              <div className={styles.heroStat}>
                <div className={styles.heroStatNumber}>
                  {rating}<span className={styles.starIcon}>★</span>
                </div>
                <div className={styles.heroStatLabel}>App Rating</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Product Overview */}
      <section className={styles.section}>
        <Container>
          <h2 className={styles.productOverviewTitle}>Your Complete Health Companion</h2>
          <div className={styles.segmentedLine}>
            <div className={styles.lineSegmentGreen}></div>
            <div className={styles.lineSegmentBlue}></div>
          </div>
          <p className={styles.productOverviewText}>
            BeHealthy is an all-in-one platform that helps users build and maintain a healthier 
            lifestyle through <span className={styles.highlightedText}>personalized diet plans</span>, <span className={styles.highlightedText}>guided workouts</span>, <span className={styles.highlightedText}>habit tracking</span>, <span className={styles.highlightedText}>medical 
            reminders</span>, <span className={styles.highlightedText}>vital monitoring</span>, and <span className={styles.highlightedText}>smart medical report analysis</span> — all in one app.
          </p>
          <div className={styles.productBadges}>
            <span className={styles.productBadge}>AI-Powered</span>
            <span className={styles.productBadge}>Personalized</span>
            <span className={styles.productBadge}>All-in-One</span>
            <span className={styles.productBadge}>Evidence-Based</span>
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section id="features" className={`${styles.section} ${styles.featuresSection}`}>
        <Container>
          <h2 className={styles.sectionTitle}>Everything You Need to Stay Healthy</h2>
          <Row className={styles.featuresGrid}>
            <Col md={6} lg={4} className="mb-4">
              <Card className={styles.featureCard}>
                <Card.Body className="text-center">
                  <div className={`${styles.featureIcon} ${styles.iconGreen}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <Card.Title>Personalized Diet Plans</Card.Title>
                  <Card.Text>Custom meal plans tailored to your goals, preferences, and dietary needs.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className={styles.featureCard}>
                <Card.Body className="text-center">
                  <div className={`${styles.featureIcon} ${styles.iconTeal}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6"/>
                      <path d="M3 3h18v18H3z"/>
                    </svg>
                  </div>
                  <Card.Title>Workout Library & Guided Exercises</Card.Title>
                  <Card.Text>Access hundreds of workouts with step-by-step video guidance and form tips.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className={styles.featureCard}>
                <Card.Body className="text-center">
                  <div className={`${styles.featureIcon} ${styles.iconBlue}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                    </svg>
                  </div>
                  <Card.Title>Habit & Water Intake Tracking</Card.Title>
                  <Card.Text>Build healthy habits with daily tracking and reminders for water intake.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className={styles.featureCard}>
                <Card.Body className="text-center">
                  <div className={`${styles.featureIcon} ${styles.iconGreen}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                  </div>
                  <Card.Title>BP / Sugar / BMI / Heart Rate Monitoring</Card.Title>
                  <Card.Text>Track vital signs and health metrics with easy-to-use monitoring tools.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className={styles.featureCard}>
                <Card.Body className="text-center">
                  <div className={`${styles.featureIcon} ${styles.iconTeal}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                  </div>
                  <Card.Title>AI Medical Report Analyzer</Card.Title>
                  <Card.Text>Get instant insights from your medical reports with AI-powered analysis.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <Card className={styles.featureCard}>
                <Card.Body className="text-center">
                  <div className={`${styles.featureIcon} ${styles.iconBlue}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <Card.Title>Reminders & Daily Health Tasks</Card.Title>
                  <Card.Text>Never miss a medication, workout, or health check with smart reminders.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Medical AI Section */}
      <section className={`${styles.section} ${styles.aiSection}`}>
        <Container>
          <Row className={styles.aiContent}>
            <Col lg={6} className={styles.aiText}>
              <h2 className={styles.sectionTitle}>Understand Your Health Reports Instantly</h2>
              <p className={styles.sectionText}>
                AI analyzes blood tests, sugar, thyroid, lipid profile, and more — giving users 
                easy insights, scoring, and personalized recommendations. No more confusion about 
                complex medical terminology.
              </p>
            </Col>
            <Col lg={6} className={styles.aiVisual}>
              <Card className={styles.reportCard}>
                <Card.Body>
                  <div className={styles.reportHeader}>
                    <div className={styles.reportTitle}>Health Score</div>
                    <div className={styles.reportScore}>87/100</div>
                  </div>
                  <div className={styles.reportChart}>
                    <div className={styles.chartBar} style={{height: '70%'}}></div>
                    <div className={styles.chartBar} style={{height: '85%'}}></div>
                    <div className={styles.chartBar} style={{height: '60%'}}></div>
                    <div className={styles.chartBar} style={{height: '90%'}}></div>
                  </div>
                  <div className={styles.reportInsights}>
                    <div className={styles.insight}>✓ Blood Sugar: Normal</div>
                    <div className={styles.insight}>✓ Cholesterol: Good</div>
                    <div className={styles.insight}>⚠ Thyroid: Monitor</div>
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
          <h2 className={styles.sectionTitle}>Stay Motivated with Levels, Badges & Streaks</h2>
          <p className={styles.sectionText}>
            Earn rewards, maintain streaks, and compete on leaderboards. Turn your health journey 
            into an engaging experience that keeps you coming back every day.
          </p>
          <Row className={styles.gamificationGrid}>
            <Col md={6} lg={3} className="mb-4">
              <Card className={styles.gamificationCard}>
                <Card.Body className="text-center">
                  <div className={`${styles.gamificationIcon} ${styles.iconGreen}`}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  </div>
                  <Card.Title>Earn Badges</Card.Title>
                  <Card.Text>Unlock achievements as you reach milestones</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className={styles.gamificationCard}>
                <Card.Body className="text-center">
                  <div className={`${styles.gamificationIcon} ${styles.iconTeal}`}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13 3C9.23 3 6.19 5.95 6 9.66L4 15L5.5 16.5L7 15L8.34 14.66C8.55 17.3 10.76 19.45 13.5 19.89V22H15.5V19.89C18.24 19.45 20.45 17.3 20.66 14.66L22 15L23.5 16.5L25 15L23 9.66C22.81 5.95 19.77 3 16 3H13M13 5H16C18.21 5 20 6.79 20 9C20 11.21 18.21 13 16 13H13C10.79 13 9 11.21 9 9C9 6.79 10.79 5 13 5Z"/>
                    </svg>
                  </div>
                  <Card.Title>Maintain Streaks</Card.Title>
                  <Card.Text>Build consistency with daily activity tracking</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className={styles.gamificationCard}>
                <Card.Body className="text-center">
                  <div className={`${styles.gamificationIcon} ${styles.iconBlue}`}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.5 21H2V9H7.5V21ZM14.25 21H9V3H14.25V21ZM21 21H15.5V13.5H21V21Z"/>
                    </svg>
                  </div>
                  <Card.Title>Leaderboards</Card.Title>
                  <Card.Text>Compete with friends and the community</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className={styles.gamificationCard}>
                <Card.Body className="text-center">
                  <div className={`${styles.gamificationIcon} ${styles.iconGreen}`}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
                    </svg>
                  </div>
                  <Card.Title>Level Up</Card.Title>
                  <Card.Text>Progress through levels as you improve</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Subscription Plans */}
      <section id="pricing" className={`${styles.section} ${styles.pricingSection}`}>
        <Container>
          <h2 className={styles.sectionTitle}>Choose Your Plan</h2>
          <Row className={styles.pricingGrid}>
            <Col md={4} className="mb-4">
              <Card className={styles.pricingCard}>
                <Card.Body className="text-center">
                  <Card.Title>Free Plan</Card.Title>
                  <div className={styles.price}>
                    <span className={styles.priceAmount}>$0</span>
                    <span className={styles.pricePeriod}>/month</span>
                  </div>
                  <ul className={styles.pricingFeatures}>
                    <li>Basic health tracking</li>
                    <li>Limited workout library</li>
                    <li>Water intake tracking</li>
                    <li>Basic reminders</li>
                  </ul>
                  <Button className={styles.pricingCTA} variant="outline-primary">Get Started</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className={`${styles.pricingCard} ${styles.pricingCardFeatured}`}>
                <Card.Body className="text-center">
                  <Badge className={styles.badge}>Popular</Badge>
                  <Card.Title>Premium Analytics</Card.Title>
                  <div className={styles.price}>
                    <span className={styles.priceAmount}>$9.99</span>
                    <span className={styles.pricePeriod}>/month</span>
                  </div>
                  <ul className={styles.pricingFeatures}>
                    <li>Everything in Free</li>
                    <li>AI Medical Report Analysis</li>
                    <li>Advanced health insights</li>
                    <li>Unlimited workouts</li>
                    <li>Priority support</li>
                  </ul>
                  <Button className={`${styles.pricingCTA} ${styles.pricingCTAPrimary}`}>Start Free Trial</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className={styles.pricingCard}>
                <Card.Body className="text-center">
                  <Card.Title>Personal Coaching</Card.Title>
                  <div className={styles.price}>
                    <span className={styles.priceAmount}>$29.99</span>
                    <span className={styles.pricePeriod}>/month</span>
                  </div>
                  <ul className={styles.pricingFeatures}>
                    <li>Everything in Premium</li>
                    <li>1-on-1 personal coach</li>
                    <li>Custom meal plans</li>
                    <li>Weekly check-ins</li>
                    <li>24/7 support</li>
                  </ul>
                  <Button className={styles.pricingCTA} variant="outline-primary">Start Free Trial</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className={`${styles.section} ${styles.testimonialsSection}`}>
        <Container>
          <h2 className={styles.sectionTitle}>Loved by Thousands</h2>
          <p className={styles.testimonialsSubtitle}>
            Join our community of health-conscious individuals achieving their wellness goals
          </p>
          <Row className={styles.testimonialsGrid}>
            <Col md={6} lg={3} className="mb-4">
              <Card className={styles.testimonialCard}>
                <Card.Body>
                  <div className={styles.quoteIcon}>&quot;</div>
                  <div className={styles.testimonialStars}>
                    <span className={styles.star}>★</span>
                    <span className={styles.star}>★</span>
                    <span className={styles.star}>★</span>
                    <span className={styles.star}>★</span>
                    <span className={styles.star}>★</span>
                  </div>
                  <Card.Text className={styles.testimonialText}>
                    BeHealthy has completely transformed how I approach wellness. The AI report analysis helped me understand my health metrics better than my doctor&apos;s explanations!
                  </Card.Text>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar}>
                      <div className={styles.avatarPlaceholder}>SM</div>
                    </div>
                    <div className={styles.authorInfo}>
                      <strong>Sarah Mitchell</strong>
                      <span>Marketing Manager</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className={styles.testimonialCard}>
                <Card.Body>
                  <div className={styles.quoteIcon}>&quot;</div>
                  <div className={styles.testimonialStars}>
                    <span className={styles.star}>★</span>
                    <span className={styles.star}>★</span>
                    <span className={styles.star}>★</span>
                    <span className={styles.star}>★</span>
                    <span className={styles.star}>★</span>
                  </div>
                  <Card.Text className={styles.testimonialText}>
                    The gamification features keep me motivated! I&apos;ve maintained a 45-day streak and lost 15 pounds. Best health investment I&apos;ve made.
                  </Card.Text>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar}>
                      <div className={styles.avatarPlaceholder}>JR</div>
                    </div>
                    <div className={styles.authorInfo}>
                      <strong>James Rodriguez</strong>
                      <span>Software Engineer</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className={styles.testimonialCard}>
                <Card.Body>
                  <div className={styles.quoteIcon}>&quot;</div>
                  <div className={styles.testimonialStars}>
                    <span className={styles.star}>★</span>
                    <span className={styles.star}>★</span>
                    <span className={styles.star}>★</span>
                    <span className={styles.star}>★</span>
                    <span className={styles.star}>★</span>
                  </div>
                  <Card.Text className={styles.testimonialText}>
                    I love how everything is in one place - diet, exercise, meditation, and health tracking. The personalized recommendations are spot-on!
                  </Card.Text>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar}>
                      <div className={styles.avatarPlaceholder}>EC</div>
                    </div>
                    <div className={styles.authorInfo}>
                      <strong>Emily Chen</strong>
                      <span>Yoga Instructor</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className={styles.testimonialCard}>
                <Card.Body>
                  <div className={styles.quoteIcon}>&quot;</div>
                  <div className={styles.testimonialStars}>
                    <span className={styles.star}>★</span>
                    <span className={styles.star}>★</span>
                    <span className={styles.star}>★</span>
                    <span className={styles.star}>★</span>
                    <span className={styles.star}>★</span>
                  </div>
                  <Card.Text className={styles.testimonialText}>
                    As someone with diabetes, the vital monitoring and medication reminders are lifesavers. BeHealthy keeps me accountable every single day.
                  </Card.Text>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar}>
                      <div className={styles.avatarPlaceholder}>MP</div>
                    </div>
                    <div className={styles.authorInfo}>
                      <strong>Michael Park</strong>
                      <span>Business Owner</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className={styles.testimonialsCTA}>
            <p className={styles.testimonialsCTAText}>Join 100,000+ satisfied users transforming their health</p>
            <Button className={styles.testimonialsCTAButton}>Start Your Journey Today</Button>
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletterSection}>
        <Container>
          <Card className={styles.newsletterCard}>
            <Card.Body className="text-center">
              <Card.Title className={styles.newsletterTitle}>Stay Updated with BeHealthy</Card.Title>
              <Card.Text className={styles.newsletterSubtext}>
                Get health tips, feature updates, and exclusive offers delivered to your inbox
              </Card.Text>
              <Form className={styles.newsletterForm}>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className={styles.newsletterInput}
                />
                <Button type="submit" className={styles.newsletterButton}>
                  Subscribe
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <Container>
          <Row className={styles.footerContent}>
            <Col md={6} lg={3} className="mb-4">
              <div className={styles.footerSection}>
                <div className={styles.footerLogoPlaceholder}>
                  <Image src="/images/logo.png" alt="BeHealthy Logo" width={80} height={80} />
                </div>    
                <p className={styles.footerDescription}>
                  Your complete health companion for a better, healthier lifestyle.
                </p>
                <div className={styles.socialLinks}>
                  <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="Twitter" className={styles.socialIcon}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <div className={styles.footerSection}>
                <h4>Product</h4>
                <ul>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#testimonials">Testimonials</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Integrations</a></li>
                </ul>
              </div>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <div className={styles.footerSection}>
                <h4>Company</h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Press Kit</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <div className={styles.footerSection}>
                <h4>Contact Us</h4>
                <ul className={styles.contactList}>
                  <li>
                    <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <span>support@behealthy.com</span>
                  </li>
                  <li>
                    <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span>+1 (555) 123-4567</span>
                  </li>
                  <li>
                    <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>123 Wellness Street<br />San Francisco, CA 94102</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <div className={styles.footerBottom}>
            <p className={styles.footerCopyright}>
              © 2025 BeHealthy. Made with <span className={styles.heartIcon}>❤️</span> for your wellness
            </p>
            <div className={styles.footerLegal}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}