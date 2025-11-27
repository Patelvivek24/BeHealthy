'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProductOverview from '@/components/ProductOverview';
import Features from '@/components/Features';
import MedicalAI from '@/components/MedicalAI';
import Gamification from '@/components/Gamification';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.landingPage}>
      <Header />
      <Hero />
      <ProductOverview />
      <Features />
      <MedicalAI />
      <Gamification />
      <Pricing />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
