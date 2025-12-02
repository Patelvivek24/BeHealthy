'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.scss';
import Container from 'react-bootstrap/Container';
import { Icon } from '@iconify/react';
import { Row, Col } from 'react-bootstrap';

const helpCategories = [
  {
    icon: 'lucide:user-circle',
    title: 'Getting Started',
    description: 'Learn the basics of using BeHealthy',
    color: '#8DC63F',
    articles: [
      'How to create your account',
      'Setting up your health profile',
      'Understanding your dashboard',
      'First steps with AI plans'
    ]
  },
  {
    icon: 'lucide:clipboard-check',
    title: 'Health Plans',
    description: 'Create and manage your personalized plans',
    color: '#2EB5AC',
    articles: [
      'Creating a custom health plan',
      'Understanding AI recommendations',
      'Modifying your existing plan',
      'Tracking plan progress'
    ]
  },
  {
    icon: 'lucide:file-text',
    title: 'Medical Reports',
    description: 'Upload and analyze your medical reports',
    color: '#1E5AA8',
    articles: [
      'How to upload medical reports',
      'Understanding AI analysis results',
      'Exporting your reports',
      'Report privacy and security'
    ]
  },
  {
    icon: 'lucide:activity',
    title: 'Health Tracking',
    description: 'Track your daily health metrics',
    color: '#8DC63F',
    articles: [
      'Adding health metrics',
      'Setting up reminders',
      'Viewing your health history',
      'Sharing data with healthcare providers'
    ]
  },
  {
    icon: 'lucide:bar-chart',
    title: 'Analytics & Progress',
    description: 'Monitor your health progress',
    color: '#2EB5AC',
    articles: [
      'Understanding your analytics',
      'Progress reports explained',
      'Setting health goals',
      'Comparing progress over time'
    ]
  },
  {
    icon: 'lucide:settings',
    title: 'Account & Settings',
    description: 'Manage your account preferences',
    color: '#1E5AA8',
    articles: [
      'Updating your profile',
      'Privacy settings',
      'Notification preferences',
      'Subscription management'
    ]
  }
];

const faqs = [
  {
    question: 'How do I get started with BeHealthy?',
    answer: 'Getting started is easy! Simply create an account, complete your health profile, and our AI will generate personalized recommendations based on your information. You can start by exploring the dashboard and setting up your first health plan.',
    category: 'Getting Started'
  },
  {
    question: 'Is my health data secure?',
    answer: 'Absolutely! We use bank-level encryption to protect your health data. Your information is never shared without your explicit consent, and we comply with all healthcare privacy regulations including HIPAA. You can review our Privacy Policy for more details.',
    category: 'Account & Settings'
  },
  {
    question: 'How accurate are the AI health recommendations?',
    answer: 'Our AI recommendations are based on evidence-based medical practices and continuously updated with the latest health research. However, these recommendations are not a substitute for professional medical advice. Always consult with healthcare providers for medical decisions.',
    category: 'Health Plans'
  },
  {
    question: 'Can I customize my health plan?',
    answer: 'Yes! You have full control over your health plan. You can modify any aspect of your plan, add or remove activities, adjust goals, and set your own preferences. Our AI will adapt to your changes and provide updated recommendations.',
    category: 'Health Plans'
  },
  {
    question: 'What file formats are supported for medical reports?',
    answer: 'We support common medical report formats including PDF, JPEG, PNG, and DICOM files. The maximum file size is 10MB per report. If you encounter any issues uploading, please contact our support team.',
    category: 'Medical Reports'
  },
  {
    question: 'How do I contact support?',
    answer: 'You can reach our support team via email at support@behealthy.com, through the in-app chat feature, or by calling +1 (555) 123-4567. Our support team is available Monday-Friday, 9 AM - 6 PM EST.',
    category: 'Account & Settings'
  },
  {
    question: 'Can I use BeHealthy on mobile devices?',
    answer: 'Yes! BeHealthy is fully responsive and works on all mobile devices. We also have dedicated mobile apps for iOS and Android available for download. Check the App Download section for links.',
    category: 'Getting Started'
  },
  {
    question: 'How often should I update my health metrics?',
    answer: 'We recommend updating your health metrics daily for the most accurate tracking and insights. However, you can update them as frequently as you prefer. Setting up reminders can help you maintain consistency.',
    category: 'Health Tracking'
  }
];

const popularArticles = [
  {
    title: 'Complete Guide to Setting Up Your Health Profile',
    views: '12.5K',
    category: 'Getting Started'
  },
  {
    title: 'Understanding Your AI-Generated Health Plan',
    views: '9.8K',
    category: 'Health Plans'
  },
  {
    title: 'How to Upload and Analyze Medical Reports',
    views: '8.2K',
    category: 'Medical Reports'
  },
  {
    title: 'Privacy and Security: Your Data Protection',
    views: '7.5K',
    category: 'Account & Settings'
  }
];

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.helpCenterPage}>
      <Header />
      <div className={styles.contentWrapper}>
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="heroSection"
        >
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="heroContent"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="badge"
              >
                <Icon icon="lucide:help-circle" width={18} height={18} className="badgeIcon" />
                <span>Help Center</span>
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="title"
              >
                How can we help you?
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="description"
              >
                Find answers to common questions, learn how to use BeHealthy features, 
                and get the support you need to achieve your health goals.
              </motion.p>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className={styles.searchWrapper}
              >
                <Icon icon="lucide:search" width={24} height={24} className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
                {searchQuery && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={() => setSearchQuery('')}
                    className={styles.clearButton}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon icon="lucide:x" width={20} height={20} />
                  </motion.button>
                )}
              </motion.div>
            </motion.div>
          </Container>
        </motion.section>

        {/* Popular Articles */}
        {!searchQuery && (
          <section className={styles.popularSection}>
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={styles.sectionHeader}
              >
                <h2 className={styles.sectionTitle}>Popular Articles</h2>
                <p className={styles.sectionSubtitle}>Most viewed help articles</p>
              </motion.div>
              <Row className="g-4">
                {popularArticles.map((article, index) => (
                  <Col md={6} lg={3} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={styles.popularCard}
                      whileHover={{ y: -5, boxShadow: "0 8px 24px rgba(0, 59, 70, 0.15)" }}
                    >
                      <div className={styles.popularIcon}>
                        <Icon icon="lucide:file-text" width={24} height={24} />
                      </div>
                      <h3 className={styles.popularTitle}>{article.title}</h3>
                      <div className={styles.popularMeta}>
                        <span className={styles.popularCategory}>{article.category}</span>
                        <span className={styles.popularViews}>
                          <Icon icon="lucide:eye" width={14} height={14} />
                          {article.views}
                        </span>
                      </div>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
        )}

        {/* Help Categories */}
        {!searchQuery && (
          <section className={styles.categoriesSection}>
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={styles.sectionHeader}
              >
                <h2 className={styles.sectionTitle}>Browse by Category</h2>
                <p className={styles.sectionSubtitle}>Find help organized by topic</p>
              </motion.div>
              <Row className="g-4">
                {helpCategories.map((category, index) => (
                  <Col md={6} lg={4} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={styles.categoryCard}
                      whileHover={{ y: -8, boxShadow: "0 12px 32px rgba(0, 59, 70, 0.15)" }}
                      onClick={() => {
                        setSelectedCategory(category.title);
                        setSearchQuery('');
                        window.scrollTo({ top: document.getElementById('faq-section')?.offsetTop || 0, behavior: 'smooth' });
                      }}
                    >
                      <div 
                        className={styles.categoryIcon}
                        style={{ '--category-color': category.color } as React.CSSProperties}
                      >
                        <Icon icon={category.icon} width={32} height={32} />
                      </div>
                      <h3 className={styles.categoryTitle}>{category.title}</h3>
                      <p className={styles.categoryDescription}>{category.description}</p>
                      <ul className={styles.categoryArticles}>
                        {category.articles.slice(0, 3).map((article, i) => (
                          <li key={i}>
                            <Icon icon="lucide:file-text" width={14} height={14} />
                            {article}
                          </li>
                        ))}
                        {category.articles.length > 3 && (
                          <li className={styles.moreArticles}>
                            +{category.articles.length - 3} more articles
                          </li>
                        )}
                      </ul>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
        )}

        {/* Search Results / FAQs */}
        <section id="faq-section" className={styles.faqSection}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.sectionHeader}
            >
              <h2 className={styles.sectionTitle}>
                {searchQuery ? 'Search Results' : selectedCategory ? `${selectedCategory} FAQs` : 'Frequently Asked Questions'}
              </h2>
              <p className={styles.sectionSubtitle}>
                {searchQuery 
                  ? `Found ${filteredFaqs.length} result${filteredFaqs.length !== 1 ? 's' : ''} for "${searchQuery}"`
                  : selectedCategory
                  ? `Common questions about ${selectedCategory}`
                  : 'Quick answers to common questions'}
              </p>
              {(searchQuery || selectedCategory) && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                  }}
                  className={styles.clearFilterButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon icon="lucide:x" width={16} height={16} />
                  Clear filters
                </motion.button>
              )}
            </motion.div>

            <div className={styles.faqList}>
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`${styles.faqItem} ${expandedFaq === index ? styles.expanded : ''}`}
                  >
                    <button
                      className={styles.faqQuestion}
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <span>{faq.question}</span>
                      <Icon 
                        icon="lucide:chevron-down" 
                        width={20} 
                        height={20}
                        className={styles.faqIcon}
                      />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: expandedFaq === index ? 'auto' : 0,
                        opacity: expandedFaq === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className={styles.faqAnswer}
                    >
                      <div className={styles.faqAnswerContent}>
                        <p>{faq.answer}</p>
                        <span className={styles.faqCategory}>{faq.category}</span>
                      </div>
                    </motion.div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={styles.noResults}
                >
                  <Icon icon="lucide:search-x" width={48} height={48} />
                  <h3>No results found</h3>
                  <p>Try adjusting your search terms or browse our categories above.</p>
                </motion.div>
              )}
            </div>
          </Container>
        </section>

        {/* Contact Support */}
        <section className={styles.contactSection}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.contactCard}
            >
              <div className={styles.contactIcon}>
                <Icon icon="lucide:headphones" width={48} height={48} />
              </div>
              <h2 className={styles.contactTitle}>Still need help?</h2>
              <p className={styles.contactText}>
                Our support team is here to assist you. Reach out to us and we&apos;ll get back to you as soon as possible.
              </p>
              <div className={styles.contactButtons}>
                <motion.a
                  href="mailto:support@behealthy.com"
                  className={styles.contactButton}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon icon="lucide:mail" width={20} height={20} />
                  Email Support
                </motion.a>
                <motion.a
                  href="tel:+15551234567"
                  className={styles.contactButtonSecondary}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon icon="lucide:phone" width={20} height={20} />
                  Call Us
                </motion.a>
              </div>
              <div className={styles.contactInfo}>
                <div className={styles.contactInfoItem}>
                  <Icon icon="lucide:clock" width={18} height={18} />
                  <span>Monday - Friday, 9 AM - 6 PM EST</span>
                </div>
                <div className={styles.contactInfoItem}>
                  <Icon icon="lucide:message-circle" width={18} height={18} />
                  <span>Average response time: 2-4 hours</span>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>
      </div>
      <Footer />
    </div>
  );
}

