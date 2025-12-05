import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../../public/images/logo.png";
import Button from "../Button";
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
    { icon: "lucide:facebook", href: "#", color: "linear-gradient(90deg,#8DC63F,#2EB5AC)" },
    { icon: "lucide:twitter", href: "#", color: "linear-gradient(90deg,#8DC63F,#2EB5AC)" },
    { icon: "lucide:instagram", href: "#", color: "linear-gradient(90deg,#8DC63F,#2EB5AC)" },
    { icon: "lucide:linkedin", href: "#", color: "linear-gradient(90deg,#8DC63F,#2EB5AC)" }
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
              <span>Stay Updated with BeHealthy</span>
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
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="primary">
                    Subscribe
                  </Button>
                </motion.div>
              </div>
            </Col>
          </Row>
        </motion.div>

        <Row className={styles.linksRow}>
          {/* Brand */}
          <Col md={6} lg={4} className={styles.column}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.08, rotate: [0, -3, 3, 0] }}
                transition={{ duration: 0.3 }}
                className={styles.logoWrapper}
              >
                <Image src={logo} alt="BeHealthy Logo" className={styles.logo} />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className={styles.tagline}
              >
                Your complete health companion for a better, healthier lifestyle.
              </motion.p>

              <motion.div
                className={styles.socialIcons}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.icon as string}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                    whileHover={{
                      scale: 1.25,
                      // y: -6,
                      // rotate: 360,
                      boxShadow: `0 6px 20px ${social.color}50`
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={styles.socialItem}
                    style={{ '--social-color': social.color } as React.CSSProperties}
                  >
                    <Icon icon={social.icon} width={18} height={18} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </Col>

          {/* Quick Links */}
          <Col md={6} lg={4} className={`${styles.column} ${styles.quickLinksColumn}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={styles.quickLinksWrapper}
            >
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={styles.quickLinksTitle}
              >
                Quick Links
              </motion.p>
              <ul className={styles.quickLinksList}>
                {["Help Center", "Community", "Feature requests", "About Us", "Blog", "Contact Us"].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + index * 0.06,
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                    className={styles.quickLinkItem}
                  >
                    <motion.a
                      href={item === "Blog" ? "/blog" : item === "About Us" ? "/about-us" : item === "Feature requests" ? "/feature-requests" : item === "Community" ? "/community" : item === "Help Center" ? "/help-center" : item === "Contact Us" ? "/contact-us" : "#"}
                      className={styles.quickLinkText}
                      whileHover={{
                        x: 4,
                        color: "#8DC63F"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>

          {/* Contact */}
          <Col md={6} lg={4} className={`${styles.column} ${styles.contactColumn}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={styles.contactWrapper}
            >
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className={styles.contactTitle}
              >
                Contact Us
              </motion.p>
              <ul className={styles.contactList}>
                {[
                  { icon: "lucide:mail", text: "support@behealthy.com", href: "mailto:support@behealthy.com" },
                  { icon: "lucide:phone", text: "+1 (555) 123-4567", href: "tel:+15551234567" },
                  { icon: "lucide:map-pin", text: "123 Wellness Street, San Francisco, CA 94102", href: "https://www.google.com/maps/place/123+Wellness+Street,+San+Francisco,+CA+94102" }
                ].map((contact, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + index * 0.06,
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                    className={styles.contactItem}
                  >
                    <motion.a
                      href={contact.href}
                      className={styles.contactLink}
                      whileHover={{
                        x: 4,
                        color: "#8DC63F"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={styles.contactIconWrapper}>
                        <Icon icon={contact.icon} width={18} height={18} className={styles.contactIcon} />
                      </div>
                      <span className={styles.contactText}>
                        {contact.text.split('\n').map((line, i) => (
                          <span key={i}>{line}{i < contact.text.split('\n').length - 1 && <br />}</span>
                        ))}
                      </span>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <motion.div
          className={styles.bottomBar}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.p
            className={styles.copyright}
            whileHover={{ scale: 1.02 }}
          >
            © 2025 BeHealthy. Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              className={styles.heartIcon}
            >
              <Icon icon="lucide:heart" width={14} height={14} className={styles.iconGreen} />
            </motion.span>{" "}
            for your wellness
          </motion.p>
          <motion.div
            className={styles.bottomLinks}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.a
              href="/privacy-policy"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              whileHover={{
                scale: 1.1,
                y: -2,
                color: "#8DC63F"
              }}
              className={styles.bottomLink}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="/terms-of-service"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.4 }}
              whileHover={{
                scale: 1.1,
                y: -2,
                color: "#8DC63F"
              }}
              className={styles.bottomLink}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="/cookie-policy"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.4 }}
              whileHover={{
                scale: 1.1,
                y: -2,
                color: "#8DC63F"
              }}
              className={styles.bottomLink}
            >
              Cookie Policy
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll To Top */}
      <motion.button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className={styles.scrollTop}
      >
        <Icon icon="lucide:arrow-up" width={24} height={24} />
      </motion.button>
    </footer>
  );
}
