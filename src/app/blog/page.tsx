'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.scss';
import Container from 'react-bootstrap/Container';
import { Icon } from '@iconify/react';
import Image from 'next/image';

// Sample blog data - replace with actual data
const blogPosts = [
  {
    id: 1,
    title: "5 AI Video Generation Tools You Need to Try",
    description: "Explore five leading AI video generators—HeyGen, Kling AI, DeepAny.AI, Veo, and Immersity AI—helping creators produce high-quality, cinematic, and engaging video content.",
    image: "/images/hero-2.jpeg",
    tags: ["Video Generation", "AI Tools", "Content Creation"],
    author: "Ishika Sharma",
    date: "28 November 2025"
  },
  {
    id: 2,
    title: "From Idea to Copy: Best AI Content Creation Tools",
    description: "AI content creation tools help creators design, write, edit, translate, and produce content faster across formats. These top tools boost quality, cut production time, and enhance creativity.",
    image: "/images/hero-2.jpeg",
    tags: ["Writing Assistants", "Content Creation", "Productivity", "AI Tools"],
    author: "Ishika Sharma",
    date: "26 November 2025"
  },
  {
    id: 3,
    title: "Gemini The Latest Release & New vs Earlier Versions",
    description: "Gemini 3 brings advanced reasoning, multimodal support, and enterprise-grade features. This summary outlines how it improves on past versions and what it means for users.",
    image: "/images/hero-2.jpeg",
    tags: ["Text Generator", "AI Models", "Technology", "Updates", "Google"],
    author: "Ishika Sharma",
    date: "24 November 2025"
  },
  {
    id: 4,
    title: "AI Coding Tools That Make Developers Lives Easier",
    description: "This blog explores 13 AI coding tools that automate development, improve code quality, speed up debugging, simplify documentation, and help developers work more efficiently.",
    image: "/images/hero-2.jpeg",
    tags: ["Programming"],
    author: "Ishika Sharma",
    date: "21 November 2025"
  },
  {
    id: 5,
    title: "Top AI Productivity Tools for Teams & Remote Work",
    description: "Remote teams need AI tools that cut manual work, improve collaboration, and reduce burnout. This blog highlights 10 SansSapien AI tools that streamline workflows and boost productivity.",
    image: "/images/hero-2.jpeg",
    tags: ["Productivity", "Remote Work"],
    author: "Ishika Sharma",
    date: "21 November 2025"
  },
  {
    id: 6,
    title: "How Businesses Use AI Tools to Automate Daily Operations",
    description: "Learn how leading companies use business AI tools to automate workflows, enhance customer experiences, optimize marketing, and boost productivity across departments.",
    image: "/images/hero-2.jpeg",
    tags: ["Customer Engagement", "Business Automation", "AI Tools"],
    author: "Ishika Sharma",
    date: "12 November 2025"
  },
  {
    id: 7,
    title: "10 Ways AI Tools Are Revolutionizing Every Industry",
    description: "AI tools are transforming industries by automating communication, security, and decision-making. From Metigan to FullEnrich, they boost productivity, reduce costs, and drive innovation.",
    image: "/images/hero-2.jpeg",
    tags: ["Artificial Intelligence", "Industry Trends", "Innovation"],
    author: "Ishika",
    date: "10 November 2025"
  },
  {
    id: 8,
    title: "What AI Services Provide the Fastest Document Processing",
    description: "Explore the fastest AI document processing services of 2025. Compare Google Document AI, Azure Document Intelligence, Mistral OCR, Mindee, and other leading solutions.",
    image: "/images/hero-2.jpeg",
    tags: ["Document Analysis", "AI Services", "Automation"],
    author: "Ishika Sharma",
    date: "16 October 2025"
  },
  {
    id: 9,
    title: "Best AI Collaboration Tools & Platforms (2025 Guide)",
    description: "Discover top AI collaboration tools that boost productivity, streamline communication, and automate workflows. Explore platforms like Google Workspace, Microsoft Teams, and more.",
    image: "/images/hero-2.jpeg",
    tags: ["Productivity", "Collaboration"],
    author: "Ishika Sharma",
    date: "15 October 2025"
  }
];

const categories = ["All", "Video Generation", "Writing Assistants", "Text Generator", "Programming", "Productivity", "Customer Engagement", "Artificial Intelligence", "Document Analysis"];

export default function BlogPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Latest");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [expandedTags, setExpandedTags] = useState<Record<number, boolean>>({});
  const categoryRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setShowCategoryDropdown(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setShowSortDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredPosts = blogPosts
    .filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || post.tags.includes(selectedCategory);
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "Oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "A-Z":
          return a.title.localeCompare(b.title);
        case "Z-A":
          return b.title.localeCompare(a.title);
        case "Latest":
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

  return (
    <main className={styles.blogPage}>
      <Header />
      <div className={styles.contentWrapper}>
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="heroSection"
        >
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="heroContent"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="badge"
              >
                <Icon icon="lucide:book-open" width={18} height={18} className="badgeIcon" />
                <span>Here&apos;s the Latest in Health &amp; Wellness 2025</span>
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="title"
              >
                Together, Realize the Promise of Better Health
              </motion.h1>
            </motion.div>
          </Container>
        </motion.section>

        <Container>

          {/* Search and Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.filterBar}
          >
            <div className={styles.filterGroup} ref={categoryRef}>
              <button
                className={styles.filterButton}
                onClick={() => {
                  setShowCategoryDropdown(!showCategoryDropdown);
                  setShowSortDropdown(false);
                }}
              >
                Categories
                <Icon icon="lucide:chevron-down" width={16} height={16} />
              </button>
              {showCategoryDropdown && (
                <div className={styles.filterDropdown}>
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setShowCategoryDropdown(false);
                      }}
                      className={selectedCategory === cat ? styles.active : ''}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.searchWrapper}>
              <Icon icon="lucide:search" width={20} height={20} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search blogs here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>

            <div className={styles.filterGroup} ref={sortRef}>
              <button
                className={styles.filterButton}
                onClick={() => {
                  setShowSortDropdown(!showSortDropdown);
                  setShowCategoryDropdown(false);
                }}
              >
                Sort By
                <Icon icon="lucide:chevron-down" width={16} height={16} />
              </button>
              {showSortDropdown && (
                <div className={styles.filterDropdown}>
                  {["Latest", "Oldest", "A-Z", "Z-A"].map(option => (
                    <button
                      key={option}
                      onClick={() => {
                        setSortBy(option);
                        setShowSortDropdown(false);
                      }}
                      className={sortBy === option ? styles.active : ''}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Blog Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.blogGrid}
          >
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className={styles.blogCard}
                whileHover={{ y: -5, boxShadow: "0 8px 24px rgba(0, 59, 70, 0.15)" }}
                onClick={() => router.push(`/blog/${post.id}`)}
              >
                <div className={styles.cardImage}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgZmlsbD0iI0Y5RkJGRCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5CbG9nIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
                    }}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.cardDescription}>{post.description}</p>
                  <div className={styles.cardTags}>
                    {expandedTags[post.id] ? (
                      // Show all tags when expanded
                      <>
                        {post.tags.map((tag, i) => (
                          <span key={i} className={styles.tag}>{tag}</span>
                        ))}
                        {post.tags.length > 1 && (
                          <span 
                            className={styles.tagMore}
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedTags(prev => ({
                                ...prev,
                                [post.id]: false
                              }));
                            }}
                          >
                            Show Less
                          </span>
                        )}
                      </>
                    ) : (
                      // Show first tag and "more" indicator when collapsed
                      <>
                        {post.tags.slice(0, 1).map((tag, i) => (
                          <span key={i} className={styles.tag}>{tag}</span>
                        ))}
                        {post.tags.length > 1 && (
                          <span 
                            className={styles.tagMore}
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedTags(prev => ({
                                ...prev,
                                [post.id]: true
                              }));
                            }}
                          >
                            +{post.tags.length - 1}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                  <div className={styles.cardMeta}>
                    <span className={styles.author}>{post.author}</span>
                    <span className={styles.date}>{post.date}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={styles.noResults}
            >
              <p>No blog posts found matching your search criteria.</p>
            </motion.div>
          )}
        </Container>
      </div>
      <Footer />
    </main>
  );
}

