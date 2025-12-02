import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Testimonials.module.scss";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    image:
      "https://images.unsplash.com/photo-1745434159123-4908d0b9df94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
    content:
      "BeHealthy transformed how I approach wellness. The AI report analysis helped me understand my health metrics better than ever. Lost 15 pounds in 3 months!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
    content:
      "As someone with a busy schedule, BeHealthy's reminders and habit tracking keep me on track. The gamification features make staying healthy actually fun!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Yoga Instructor",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
    content:
      "The personalized diet plans and workout library are incredible. I recommend BeHealthy to all my clients. It's the most comprehensive health app I've used.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Health Coach",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
    content:
      "The progress analytics feature is a game-changer. I can track my clients' improvements over time and adjust their plans accordingly. Highly recommend!",
    rating: 5,
  },
  {
    name: "Lisa Park",
    role: "Nutritionist",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
    content:
      "BeHealthy's AI-powered meal planning is incredibly accurate. It considers dietary restrictions and preferences perfectly. My patients love it!",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Marathon Runner",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
    content:
      "The health tracking features help me monitor my training progress. The community support is amazing too. Best health app I've ever used!",
    rating: 5,
  },
];

// Custom Arrow Components
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const PrevArrow = ({ className, style, onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    className={`${styles.customArrow} ${styles.prevArrow} ${className || ""}`}
    style={style}
    aria-label="Previous testimonial"
    type="button"
  >
    <Icon icon="lucide:chevron-left" width={24} height={24} />
  </button>
);

const NextArrow = ({ className, style, onClick }: ArrowProps) => (
  <button
    onClick={onClick}
    className={`${styles.customArrow} ${styles.nextArrow} ${className || ""}`}
    style={style}
    aria-label="Next testimonial"
    type="button"
  >
    <Icon icon="lucide:chevron-right" width={24} height={24} />
  </button>
);

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className={styles.section}>
      {/* Background bubbles */}
      <div className={styles.bgDecorations}>
        <div className={`${styles.bubble} ${styles.bubbleGreen}`} />
        <div className={`${styles.bubble} ${styles.bubbleBlue}`} />
      </div>

      <Container className={styles.inner}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <div className="badge">
            <Icon icon="lucide:star" className="badgeIcon" />
            <span>Testimonials</span>
          </div>

          <h2 className="title">Loved by Thousands of Users</h2>
          <p className={styles.subtitle}>
            Real stories from people transforming their health with BeHealthy
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.sliderWrapper}
        >
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
            pauseOnHover={true}
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
            className={styles.slider}
          >
            {testimonials.map((t, index) => (
              <div key={index} className={styles.slideItem}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className={styles.cardWrapper}
                >
                  <div className={styles.cardGlow} />

                  <div className={styles.card}>
                    {/* Quote icon */}
                    <div className={styles.quoteIcon}>
                      <Icon icon="lucide:quote" />
                    </div>

                    {/* Stars */}
                    <div className={styles.stars}>
                      {[...Array(t.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          icon="lucide:star"
                          className={styles.star}
                        />
                      ))}
                    </div>

                    <p className={styles.content}>&ldquo;{t.content}&rdquo;</p>

                    {/* Profile */}
                    <div className={styles.profile}>
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                        <Image
                          src={t.image}
                          alt={t.name}
                          className={styles.avatar}
                          width={60}
                          height={60}
                          unoptimized
                        />
                      </motion.div>
                      <div>
                        <div className={styles.name}>{t.name}</div>
                        <div className={styles.role}>{t.role}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </Container>
    </section>
  );
}
