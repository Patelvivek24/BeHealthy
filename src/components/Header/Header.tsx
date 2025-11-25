'use client';

import Image from 'next/image';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Button from '@/components/Button';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <Navbar 
      fixed="top" 
      expand="lg" 
      className={styles.navbar}
    >
      <Container className={styles.container}>
        <Navbar.Brand className={styles.logoContainer}>
          <Image 
            src="/images/logo.png" 
            alt="BeHealthy Logo" 
            width={50} 
            height={50}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link href="#features" className={styles.navLink}>Features</Nav.Link>
            <Nav.Link href="#pricing" className={styles.navLink}>Pricing</Nav.Link>
            <Nav.Link href="#testimonials" className={styles.navLink}>Testimonials</Nav.Link>
            <Button variant="primary" className={styles.navCTA}>Get Started Free</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

