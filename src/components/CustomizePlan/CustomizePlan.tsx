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
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Calculate form progress
  const totalFields = 10;
  const filledFields = [
    formData.name,
    formData.email,
    formData.phone,
    formData.goals.length > 0,
    formData.budget,
    formData.duration,
    formData.fitnessLevel,
    formData.dietaryPreferences,
    formData.healthConditions,
    formData.additionalNotes,
  ].filter(Boolean).length;
  const progress = (filledFields / totalFields) * 100;

  const goalOptions = [
    { id: "weight-loss", label: "Weight Loss", icon: "lucide:trending-down", color: "#8DC63F" },
    { id: "muscle-gain", label: "Muscle Gain", icon: "lucide:dumbbell", color: "#2EB5AC" },
    { id: "general-fitness", label: "General Fitness", icon: "lucide:activity", color: "#1E5AA8" },
    { id: "nutrition", label: "Nutrition Planning", icon: "lucide:utensils", color: "#8DC63F" },
    { id: "medical-monitoring", label: "Medical Monitoring", icon: "lucide:heart-pulse", color: "#2EB5AC" },
    { id: "stress-management", label: "Stress Management", icon: "lucide:brain", color: "#1E5AA8" },
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

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (formData.goals.length === 0) newErrors.goals = "Please select at least one goal";
    if (!formData.budget) newErrors.budget = "Budget is required";
    if (!formData.duration) newErrors.duration = "Duration is required";
    if (!formData.fitnessLevel) newErrors.fitnessLevel = "Fitness level is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    } else {
      // Scroll to first error
      const firstError = Object.keys(errors)[0];
      if (firstError) {
        const errorElement = document.querySelector(`[data-field="${firstError}"]`);
        errorElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  // --------------------------------
  // SUBMITTED PAGE
  // --------------------------------
  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={styles.submittedWrapper}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className={styles.submittedCard}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
            className={styles.successIcon}
          >
            <motion.div
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Icon icon="lucide:check" width={38} height={38} />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={styles.submittedTitle}
          >
            Request Received!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={styles.submittedText}
          >
            Thank you for your interest in a customized plan. Our wellness experts will review your
            requirements and contact you within 24 hours with a personalized proposal tailored to
            your needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={styles.stepsBox}
          >
            <h3 className={styles.stepsTitle}>What happens next?</h3>
            <div className={styles.stepsList}>
              {[
                "Our experts review your requirements",
                "We create a personalized plan proposal",
                "You receive a custom quote via email",
                "Schedule a consultation call with our team",
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className={styles.stepItem}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                    className={styles.stepIcon}
                  >
                    <Icon icon="lucide:check" width={13} height={13} />
                  </motion.div>
                  <span>{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className={styles.submittedButtons}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className={styles.primaryBtn} onClick={handleBack}>
                Back to Home
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className={styles.secondaryBtn} onClick={() => setSubmitted(false)}>
                Submit Another Request
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  // --------------------------------
  // MAIN FORM PAGE
  // --------------------------------
  return (
    <div className={styles.mainWrapper}>
      {/* Header */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.header}
      >
        <Container>
          <motion.button
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBack}
            className={styles.backBtn}
          >
            <Icon icon="lucide:arrow-left" width={20} height={20} />
            <span>Back to Pricing</span>
          </motion.button>
        </Container>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.5 }}
        className={styles.progressBarContainer}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={styles.progressBar}
        />
      </motion.div>

      {/* HERO SECTION */}
      <Container className={styles.heroSection}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.heroContent}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className={styles.sparkBadge}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Icon icon="lucide:sparkles" width={16} height={16} className={styles.sparkIcon} />
            </motion.div>
            <span>Tailored Just for You</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={styles.heroTitle}
          >
            Create Your Custom Plan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={styles.heroSubtitle}
          >
            Tell us about your unique health goals and needs, and we&apos;ll create a personalized plan designed specifically for you.
          </motion.p>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.formWrapper}
        >
          <Form onSubmit={handleSubmit}>
            {/* PERSONAL INFO */}
            <motion.div
              id="section-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.section}
              data-field="personal"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className={styles.sectionTitle}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={styles.sectionIcon}
                >
                  <Icon icon="lucide:user" width={20} height={20} />
                </motion.div>
                Personal Information
              </motion.h2>

              <Row>
                <Col md={4}>
                  <Form.Group className={styles.formGroup} data-field="name">
                    <Form.Label>Full Name *</Form.Label>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className={styles.inputIconWrap}
                    >
                      <Icon icon="lucide:user" width={20} height={20} className={styles.inputIcon} />
                      <Form.Control
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="John Doe"
                        className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                        isInvalid={!!errors.name}
                      />
                      {errors.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={styles.errorMessage}
                        >
                          {errors.name}
                        </motion.div>
                      )}
                    </motion.div>
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group className={styles.formGroup} data-field="email">
                    <Form.Label>Email Address *</Form.Label>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className={styles.inputIconWrap}
                    >
                      <Icon icon="lucide:mail" width={20} height={20} className={styles.inputIcon} />
                      <Form.Control
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="john@example.com"
                        className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                        isInvalid={!!errors.email}
                      />
                      {errors.email && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={styles.errorMessage}
                        >
                          {errors.email}
                        </motion.div>
                      )}
                    </motion.div>
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label>Phone Number</Form.Label>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className={styles.inputIconWrap}
                    >
                      <Icon icon="lucide:phone" width={20} height={20} className={styles.inputIcon} />
                      <Form.Control
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className={styles.input}
                      />
                    </motion.div>
                  </Form.Group>
                </Col>
              </Row>
            </motion.div>

            {/* GOALS */}
            <motion.div
              id="section-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.section}
              data-field="goals"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className={styles.sectionTitle}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={styles.sectionIcon}
                >
                  <Icon icon="lucide:target" width={20} height={20} />
                </motion.div>
                Your Health Goals *
              </motion.h2>

              {errors.goals && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={styles.errorMessage}
                >
                  {errors.goals}
                </motion.div>
              )}

              <Row className={styles.goalsRow}>
                {goalOptions.map((goal, index) => {
                  const isSelected = formData.goals.includes(goal.id);

                  return (
                    <Col sm={6} md={4} key={goal.id}>
                      <motion.button
                        type="button"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.03, y: -4 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => {
                          handleGoalToggle(goal.id);
                          if (errors.goals) setErrors({ ...errors, goals: '' });
                        }}
                        className={`${styles.goalCard} ${isSelected ? styles.activeGoal : ""}`}
                        style={{
                          '--goal-color': goal.color,
                        } as React.CSSProperties}
                      >
                        <motion.div
                          animate={isSelected ? { scale: [1, 1.15, 1] } : {}}
                          transition={{ duration: 0.3 }}
                          className={styles.goalInner}
                        >
                          <motion.div
                            animate={isSelected ? { rotate: [0, 360] } : {}}
                            transition={{ duration: 0.5 }}
                            className={`${styles.goalIcon} ${isSelected ? styles.goalIconActive : ""}`}
                            style={{
                              '--icon-color': goal.color,
                            } as React.CSSProperties}
                          >
                            {isSelected ? (
                              <Icon icon="lucide:check" width={22} height={22} />
                            ) : (
                              <Icon icon={goal.icon} width={22} height={22} />
                            )}
                          </motion.div>
                          <span className={styles.goalLabel}>{goal.label}</span>
                        </motion.div>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className={styles.selectedBadge}
                          >
                            <Icon icon="lucide:check-circle" width={18} height={18} />
                          </motion.div>
                        )}
                      </motion.button>
                    </Col>
                  );
                })}
              </Row>
            </motion.div>

            {/* PLAN DETAILS */}
            <motion.div
              id="section-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.section}
              data-field="plan"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className={styles.sectionTitle}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={styles.sectionIcon}
                >
                  <Icon icon="lucide:calendar" width={20} height={20} />
                </motion.div>
                Plan Details
              </motion.h2>

              <Row>
                <Col md={4}>
                  <Form.Group className={styles.formGroup} data-field="budget">
                    <Form.Label>Budget Range *</Form.Label>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className={styles.selectIconWrap}
                    >
                      <Icon icon="lucide:dollar-sign" width={20} height={20} className={styles.inputIcon} />
                      <Form.Select
                        required
                        value={formData.budget}
                        onChange={(e) => {
                          setFormData({ ...formData, budget: e.target.value });
                          if (errors.budget) setErrors({ ...errors, budget: '' });
                        }}
                        className={`${styles.input} ${styles.selectInput} ${errors.budget ? styles.inputError : ''}`}
                        isInvalid={!!errors.budget}
                      >
                        <option value="">Select budget range</option>
                        <option value="under-50">Under $50/month</option>
                        <option value="50-100">$50 - $100/month</option>
                        <option value="100-200">$100 - $200/month</option>
                        <option value="200-plus">$200+/month</option>
                        <option value="one-time">One-time payment</option>
                      </Form.Select>
                      <Icon icon="lucide:chevron-down" width={20} height={20} className={styles.dropdownArrow} />
                      {errors.budget && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={styles.errorMessage}
                        >
                          {errors.budget}
                        </motion.div>
                      )}
                    </motion.div>
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group className={styles.formGroup} data-field="duration">
                    <Form.Label>Commitment Duration *</Form.Label>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className={styles.selectIconWrap}
                    >
                      <Icon icon="lucide:calendar" width={20} height={20} className={styles.inputIcon} />
                      <Form.Select
                        required
                        value={formData.duration}
                        onChange={(e) => {
                          setFormData({ ...formData, duration: e.target.value });
                          if (errors.duration) setErrors({ ...errors, duration: '' });
                        }}
                        className={`${styles.input} ${styles.selectInput} ${errors.duration ? styles.inputError : ''}`}
                        isInvalid={!!errors.duration}
                      >
                        <option value="">Select duration</option>
                        <option value="1-month">1 Month</option>
                        <option value="3-months">3 Months</option>
                        <option value="6-months">6 Months</option>
                        <option value="12-months">12 Months</option>
                        <option value="flexible">Flexible</option>
                      </Form.Select>
                      <Icon icon="lucide:chevron-down" width={20} height={20} className={styles.dropdownArrow} />
                      {errors.duration && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={styles.errorMessage}
                        >
                          {errors.duration}
                        </motion.div>
                      )}
                    </motion.div>
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group className={styles.formGroup} data-field="fitnessLevel">
                    <Form.Label>Current Fitness Level *</Form.Label>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className={styles.selectIconWrap}
                    >
                      <Icon icon="lucide:activity" width={20} height={20} className={styles.inputIcon} />
                      <Form.Select
                        required
                        value={formData.fitnessLevel}
                        onChange={(e) => {
                          setFormData({ ...formData, fitnessLevel: e.target.value });
                          if (errors.fitnessLevel) setErrors({ ...errors, fitnessLevel: '' });
                        }}
                        className={`${styles.input} ${styles.selectInput} ${errors.fitnessLevel ? styles.inputError : ''}`}
                        isInvalid={!!errors.fitnessLevel}
                      >
                        <option value="">Select fitness level</option>
                        <option value="beginner">Beginner - Just starting out</option>
                        <option value="intermediate">Intermediate - Regular exercise</option>
                        <option value="advanced">Advanced - Highly active</option>
                        <option value="athlete">Athlete - Competitive level</option>
                      </Form.Select>
                      <Icon icon="lucide:chevron-down" width={20} height={20} className={styles.dropdownArrow} />
                      {errors.fitnessLevel && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={styles.errorMessage}
                        >
                          {errors.fitnessLevel}
                        </motion.div>
                      )}
                    </motion.div>
                  </Form.Group>
                </Col>
              </Row>
            </motion.div>

            {/* ADDITIONAL INFO */}
            <motion.div
              id="section-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.section}
              data-field="additional"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className={styles.sectionTitle}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={styles.sectionIcon}
                >
                  <Icon icon="lucide:message-square" width={20} height={20} />
                </motion.div>
                Additional Information
              </motion.h2>

              <Row>
                <Col md={4}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label>Dietary Preferences</Form.Label>
                    <motion.div whileFocus={{ scale: 1.01 }}>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={formData.dietaryPreferences}
                        onChange={(e) => setFormData({ ...formData, dietaryPreferences: e.target.value })}
                        className={styles.textArea}
                        placeholder="e.g., Vegetarian, Vegan, Gluten-free, Allergies..."
                      />
                    </motion.div>
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label>Health Conditions or Limitations</Form.Label>
                    <motion.div whileFocus={{ scale: 1.01 }}>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={formData.healthConditions}
                        onChange={(e) => setFormData({ ...formData, healthConditions: e.target.value })}
                        className={styles.textArea}
                        placeholder="Please mention any health conditions, injuries, or physical limitations..."
                      />
                    </motion.div>
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label>Additional Notes</Form.Label>
                    <motion.div whileFocus={{ scale: 1.01 }}>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={formData.additionalNotes}
                        onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                        className={styles.textArea}
                        placeholder="Any other information that would help us create your perfect plan..."
                      />
                    </motion.div>
                  </Form.Group>
                </Col>
              </Row>
            </motion.div>

            {/* SUBMIT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={styles.submitSection}
            >
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(46, 181, 172, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className={styles.submitBtn}
              >
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Icon icon="lucide:send" width={20} height={20} />
                </motion.span>
                Submit Custom Plan Request
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className={styles.disclaimer}
              >
                Our team will review your request and get back to you within 24 hours with a personalized proposal.
              </motion.p>
            </motion.div>
          </Form>
        </motion.div>
      </Container>
    </div>
  );
}
