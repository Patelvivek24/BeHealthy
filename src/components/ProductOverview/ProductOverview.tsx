'use client';

import { Container } from 'react-bootstrap';
import styles from './ProductOverview.module.scss';
import pageData from '@/data/pageData.json';

export default function ProductOverview() {
  return (
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
  );
}

