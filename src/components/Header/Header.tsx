'use client';

import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Button from '@/components/Button';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the hero section height (100vh)
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      // Check if scrolled past the hero banner
      setIsScrolled(scrollPosition > heroHeight);
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar 
      fixed="top" 
      expand="lg" 
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
    >
      <Container>
        <Navbar.Brand className={styles.logoContainer} as={Link} href="/">
          <Image src="/images/logo.png" className={styles.logoImage} alt="BeHealthy" width={100} height={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link href="/" className={styles.navLink} as={Link}>Home</Nav.Link>
            <Nav.Link href="#features" className={styles.navLink}>Features</Nav.Link>
            <Nav.Link href="#pricing" className={styles.navLink}>Pricing</Nav.Link>
            <Nav.Link href="/feature-requests" className={styles.navLink} as={Link}>Feature requests</Nav.Link>
            <Nav.Link href="/blog" className={styles.navLink} as={Link}>Blog</Nav.Link>
            <Button variant="primary" className={styles.navCTA}>Get Started Free</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

