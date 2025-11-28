'use client';

import { Navbar, Nav, Container } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import Button from '@/components/Button';
import styles from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <Navbar 
      fixed="top" 
      expand="lg" 
      className={styles.navbar}
    >
      <Container>
        <Navbar.Brand className={styles.logoContainer} as={Link} href="/">
          {/* <div className={styles.logoIcon}>
            <Icon icon="lucide:heart" />
          </div>
          <span className={styles.logo}>BeHealthy</span> */}
          <Image src="/images/logo.png" className={styles.logoImage} alt="BeHealthy" width={100} height={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link href="/" className={styles.navLink} as={Link}>Home</Nav.Link>
            <Nav.Link href="#features" className={styles.navLink}>Features</Nav.Link>
            <Nav.Link href="#pricing" className={styles.navLink}>Pricing</Nav.Link>
            <Nav.Link href="#request-features" className={styles.navLink}>Feature requests</Nav.Link>
            <Nav.Link href="#blog" className={styles.navLink}>Blog</Nav.Link>
            <Button variant="primary" className={styles.navCTA}>Get Started Free</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

