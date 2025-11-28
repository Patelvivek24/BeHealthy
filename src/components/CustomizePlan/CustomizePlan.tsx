'use client';

import { Icon } from '@iconify/react';
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import styles from "./CustomizePlan.module.scss";

export default function CustomizePlan() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goals: [] as string[],
    budget: "",
    duration: "",
    fitnessLevel: "",
    dietaryPreferences: "",
    healthConditions: "",
    additionalNotes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const goalOptions = [
    { id: "weight-loss", label: "Weight Loss", icon: "lucide:activity" },
    { id: "muscle-gain", label: "Muscle Gain", icon: "lucide:activity" },
    { id: "general-fitness", label: "General Fitness", icon: "lucide:heart" },
    { id: "nutrition", label: "Nutrition Planning", icon: "lucide:utensils" },
    { id: "medical-monitoring", label: "Medical Monitoring", icon: "lucide:heart" },
    { id: "stress-management", label: "Stress Management", icon: "lucide:heart" },
  ];

  const handleBack = () => {
    router.push('/');
  };

  const handleGoalToggle = (goalId: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goalId)
        ? prev.goals.filter((g) => g !== goalId)
        : [...prev.goals, goalId],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Form submitted:", formData);
  };

  // --------------------------------
  // SUBMITTED PAGE
  // --------------------------------
  if (submitted) {
    return (
      <div className={styles.submittedWrapper}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.submittedCard}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className={styles.successIcon}
          >
            <Icon icon="lucide:check" width={38} height={38} />
          </motion.div>

          <h2 className={styles.submittedTitle}>Request Received!</h2>
          <p className={styles.submittedText}>
            Thank you for your interest in a customized plan. Our wellness experts will review your
            requirements and contact you within 24 hours with a personalized proposal tailored to
            your needs.
          </p>

          <div className={styles.stepsBox}>
            <h3 className={styles.stepsTitle}>What happens next?</h3>
            <div className={styles.stepsList}>
              {[
                "Our experts review your requirements",
                "We create a personalized plan proposal",
                "You receive a custom quote via email",
                "Schedule a consultation call with our team",
              ].map((step, index) => (
                <div key={index} className={styles.stepItem}>
                  <div className={styles.stepIcon}>
                    <Icon icon="lucide:check" width={13} height={13} />
                  </div>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.submittedButtons}>
            <Button className={styles.primaryBtn} onClick={handleBack}>
              Back to Home
            </Button>

            <Button className={styles.secondaryBtn} onClick={() => setSubmitted(false)}>
              Submit Another Request
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  // --------------------------------
  // MAIN FORM PAGE
  // --------------------------------
  return (
    <div className={styles.mainWrapper}>
      {/* Header */}
      <div className={styles.header}>
        <Container>
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBack}
            className={styles.backBtn}
          >
            <Icon icon="lucide:arrow-left" width={20} height={20} />
            <span>Back to Pricing</span>
          </motion.button>
        </Container>
      </div>

      {/* HERO SECTION */}
      <Container className={styles.heroSection}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className={styles.heroContent}>
          <div className={styles.sparkBadge}>
            <Icon icon="lucide:sparkles" width={16} height={16} className={styles.sparkIcon} />
            <span>Tailored Just for You</span>
          </div>

          <h1 className={styles.heroTitle}>Create Your Custom Plan</h1>
          <p className={styles.heroSubtitle}>
            Tell us about your unique health goals and needs, and we&apos;ll create a personalized plan designed specifically for you.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className={styles.formWrapper}>
          <Form onSubmit={handleSubmit}>
            {/* PERSONAL INFO */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <div className={styles.sectionIcon}>
                  <Icon icon="lucide:user" width={20} height={20} />
                </div>
                Personal Information
              </h2>

              <Row>
                <Col md={6}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label>Full Name *</Form.Label>
                    <div className={styles.inputIconWrap}>
                      <Icon icon="lucide:user" width={20} height={20} className={styles.inputIcon} />
                      <Form.Control
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className={styles.input}
                      />
                    </div>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label>Email Address *</Form.Label>
                    <div className={styles.inputIconWrap}>
                      <Icon icon="lucide:mail" width={20} height={20} className={styles.inputIcon} />
                      <Form.Control
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className={styles.input}
                      />
                    </div>
                  </Form.Group>
                </Col>

                <Col md={12}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label>Phone Number</Form.Label>
                    <div className={styles.inputIconWrap}>
                      <Icon icon="lucide:phone" width={20} height={20} className={styles.inputIcon} />
                      <Form.Control
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className={styles.input}
                      />
                    </div>
                  </Form.Group>
                </Col>
              </Row>
            </div>

            {/* GOALS */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <div className={styles.sectionIcon}>
                  <Icon icon="lucide:target" width={20} height={20} />
                </div>
                Your Health Goals *
              </h2>

              <Row>
                {goalOptions.map((goal) => {
                  const isSelected = formData.goals.includes(goal.id);

                  return (
                    <Col sm={6} md={4} key={goal.id}>
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleGoalToggle(goal.id)}
                        className={`${styles.goalCard} ${isSelected ? styles.activeGoal : ""}`}
                      >
                        <div className={styles.goalInner}>
                          <div className={`${styles.goalIcon} ${isSelected ? styles.goalIconActive : ""}`}>
                            {isSelected ? (
                              <Icon icon="lucide:check" width={20} height={20} />
                            ) : (
                              <Icon icon={goal.icon} width={20} height={20} />
                            )}
                          </div>
                          <span>{goal.label}</span>
                        </div>
                      </motion.button>
                    </Col>
                  );
                })}
              </Row>
            </div>

            {/* PLAN DETAILS */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <div className={styles.sectionIcon}>
                  <Icon icon="lucide:calendar" width={20} height={20} />
                </div>
                Plan Details
              </h2>

              <Row>
                <Col md={6}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label>Budget Range *</Form.Label>
                    <div className={styles.inputIconWrap}>
                      <Icon icon="lucide:dollar-sign" width={20} height={20} className={styles.inputIcon} />
                      <Form.Select
                        required
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className={styles.input}
                      >
                        <option value="">Select budget range</option>
                        <option value="under-50">Under $50/month</option>
                        <option value="50-100">$50 - $100/month</option>
                        <option value="100-200">$100 - $200/month</option>
                        <option value="200-plus">$200+/month</option>
                        <option value="one-time">One-time payment</option>
                      </Form.Select>
                    </div>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label>Commitment Duration *</Form.Label>
                    <div className={styles.inputIconWrap}>
                      <Icon icon="lucide:calendar" width={20} height={20} className={styles.inputIcon} />
                      <Form.Select
                        required
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        className={styles.input}
                      >
                        <option value="">Select duration</option>
                        <option value="1-month">1 Month</option>
                        <option value="3-months">3 Months</option>
                        <option value="6-months">6 Months</option>
                        <option value="12-months">12 Months</option>
                        <option value="flexible">Flexible</option>
                      </Form.Select>
                    </div>
                  </Form.Group>
                </Col>

                <Col md={12}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label>Current Fitness Level *</Form.Label>
                    <div className={styles.inputIconWrap}>
                      <Icon icon="lucide:activity" width={20} height={20} className={styles.inputIcon} />
                      <Form.Select
                        required
                        value={formData.fitnessLevel}
                        onChange={(e) => setFormData({ ...formData, fitnessLevel: e.target.value })}
                        className={styles.input}
                      >
                        <option value="">Select fitness level</option>
                        <option value="beginner">Beginner - Just starting out</option>
                        <option value="intermediate">Intermediate - Regular exercise</option>
                        <option value="advanced">Advanced - Highly active</option>
                        <option value="athlete">Athlete - Competitive level</option>
                      </Form.Select>
                    </div>
                  </Form.Group>
                </Col>
              </Row>
            </div>

            {/* ADDITIONAL INFO */}
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <div className={styles.sectionIcon}>
                  <Icon icon="lucide:message-square" width={20} height={20} />
                </div>
                Additional Information
              </h2>

              <Form.Group className={styles.formGroup}>
                <Form.Label>Dietary Preferences</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={formData.dietaryPreferences}
                  onChange={(e) => setFormData({ ...formData, dietaryPreferences: e.target.value })}
                  className={styles.textArea}
                  placeholder="e.g., Vegetarian, Vegan, Gluten-free, Allergies..."
                />
              </Form.Group>

              <Form.Group className={styles.formGroup}>
                <Form.Label>Health Conditions or Limitations</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={formData.healthConditions}
                  onChange={(e) => setFormData({ ...formData, healthConditions: e.target.value })}
                  className={styles.textArea}
                  placeholder="Please mention any health conditions, injuries, or physical limitations..."
                />
              </Form.Group>

              <Form.Group className={styles.formGroup}>
                <Form.Label>Additional Notes</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  className={styles.textArea}
                  placeholder="Any other information that would help us create your perfect plan..."
                />
              </Form.Group>
            </div>

            {/* SUBMIT */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={styles.submitBtn}
            >
              <Icon icon="lucide:send" width={20} height={20} />
              Submit Custom Plan Request
            </motion.button>

            <p className={styles.disclaimer}>
              Our team will review your request and get back to you within 24 hours with a personalized proposal.
            </p>
          </Form>
        </motion.div>
      </Container>
    </div>
  );
}
