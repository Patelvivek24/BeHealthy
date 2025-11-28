import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../../public/images/logo.png";
import styles from "./Footer.module.scss";

// Generate deterministic positions based on index
// Using toFixed(2) to ensure exact string match between server and client
const generatePosition = (index: number, type: 'left' | 'top') => {
  const seed = index * 137.508; // Golden angle approximation
  const value = type === 'left' 
    ? (Math.sin(seed) * 0.5 + 0.5) * 100
    : (Math.cos(seed * 1.3) * 0.5 + 0.5) * 100;
  return `${value.toFixed(2)}%`;
};

const DOT_POSITIONS = Array.from({ length: 20 }, (_, i) => ({
  left: generatePosition(i, 'left'),
  top: generatePosition(i, 'top')
}));

export default function Footer() {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: "lucide:facebook", href: "#", color: "#1877F2" },
    { icon: "lucide:twitter", href: "#", color: "#1DA1F2" },
    { icon: "lucide:instagram", href: "#", color: "#E4405F" },
    { icon: "lucide:linkedin", href: "#", color: "#0A66C2" }
  ];

  return (
    <footer id="contact" className={styles.footer}>
      {/* Background dots animation */}
      <div className={styles.dotsWrapper} suppressHydrationWarning>
        {DOT_POSITIONS.map((position, i) => (
          <motion.div
            key={i}
            className={styles.dot}
            style={position}
            suppressHydrationWarning
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2], scale: [1, 1.5, 1] }}
            transition={{
              duration: 3 + (i % 10) * 0.2,
              repeat: Infinity,
              delay: (i % 20) * 0.1
            }}
          />
        ))}
      </div>

      <Container className={styles.contentWrapper}>
        {/* Newsletter */}
        <motion.div
          className={styles.newsletterBox}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Row className="align-items-center">
            <Col md={6}>
              <h3>Stay Updated with BeHealthy</h3>
              <p>Get health tips, feature updates, and exclusive offers delivered to your inbox</p>
            </Col>

            <Col md={6}>
              <div className={styles.newsletterInputWrapper}>
                <motion.input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  whileFocus={{ scale: 1.02 }}
                  className={styles.newsletterInput}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={styles.subscribeBtn}
                >
                  Subscribe
                </motion.button>
              </div>
            </Col>
          </Row>
        </motion.div>

        <Row className={styles.linksRow}>
          {/* Brand */}
          <Col md={6} lg={3} className={styles.column}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image src={logo} alt="BeHealthy Logo" className={styles.logo} />
            </motion.div>
            <p>Your complete health companion for a better, healthier lifestyle.</p>

            <div className={styles.socialIcons}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.icon as string}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className={styles.socialItem}
                >
                  <Icon icon={social.icon} width={20} height={20} />
                </motion.a>
              ))}
            </div>
          </Col>

          {/* Product */}
          <Col md={6} lg={3} className={styles.column}>
            <h4>Product</h4>
            <ul>
              {["Features", "Pricing", "Testimonials", "FAQ", "Integrations"].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <a href="#">{item}</a>
                </motion.li>
              ))}
            </ul>
          </Col>

          {/* Company */}
          <Col md={6} lg={3} className={styles.column}>
            <h4>Company</h4>
            <ul>
              {["About Us", "Careers", "Blog", "Press Kit", "Contact"].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <a href="#">{item}</a>
                </motion.li>
              ))}
            </ul>
          </Col>

          {/* Contact */}
          <Col md={6} lg={3} className={styles.column}>
            <h4>Contact Us</h4>
            <ul className={styles.contactList}>
              <motion.li whileHover={{ x: 5 }}>
                <Icon icon="lucide:mail" width={18} height={18} className={styles.iconGreen} />
                <span>support@behealthy.com</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Icon icon="lucide:phone" width={18} height={18} className={styles.iconGreen} />
                <span>+1 (555) 123-4567</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Icon icon="lucide:map-pin" width={18} height={18} className={styles.iconGreen} />
                <span>
                  123 Wellness Street<br />San Francisco, CA 94102
                </span>
              </motion.li>
            </ul>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>
            © 2025 BeHealthy. Made with <Icon icon="lucide:heart" width={14} height={14} className={styles.iconGreen} /> for your wellness
          </p>
          <div className={styles.bottomLinks}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#">{item}</a>
            ))}
          </div>
        </div>
      </Container>

      {/* Scroll To Top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className={styles.scrollTop}
      >
        <Icon icon="lucide:arrow-up" width={24} height={24} />
      </motion.button>
    </footer>
  );
}
