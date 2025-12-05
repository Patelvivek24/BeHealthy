'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Icon } from '@iconify/react';
import Button from '@/components/Button';

interface Discussion {
  id: string;
  title: string;
  category: string;
  author: string;
  replies: number;
  views: number;
  lastActivity: string;
}

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
}

const categories = [
  { name: 'General Discussion', icon: 'lucide:message-circle', color: '#8DC63F' },
  { name: 'Health Tips', icon: 'lucide:heart', color: '#E4405F' },
  { name: 'Fitness & Exercise', icon: 'lucide:dumbbell', color: '#1DA1F2' },
  { name: 'Nutrition & Diet', icon: 'lucide:apple', color: '#F59E0B' }
];

const discussions: Discussion[] = [
  {
    id: '1',
    title: 'What are your favorite healthy breakfast recipes?',
    category: 'Nutrition & Diet',
    author: 'Sarah Johnson',
    replies: 42,
    views: 328,
    lastActivity: '2 hours ago'
  },
  {
    id: '2',
    title: '30-day fitness challenge - Week 2 progress',
    category: 'Fitness & Exercise',
    author: 'Mike Chen',
    replies: 67,
    views: 512,
    lastActivity: '3 hours ago'
  },
  {
    id: '3',
    title: 'How to maintain motivation during weight loss journey?',
    category: 'Health Tips',
    author: 'Emily Davis',
    replies: 28,
    views: 245,
    lastActivity: '5 hours ago'
  },
  {
    id: '4',
    title: 'My transformation story - 6 months progress',
    category: 'Fitness & Exercise',
    author: 'David Martinez',
    replies: 89,
    views: 678,
    lastActivity: '6 hours ago'
  },
  {
    id: '5',
    title: 'Best supplements for energy and focus',
    category: 'Health Tips',
    author: 'Lisa Anderson',
    replies: 34,
    views: 289,
    lastActivity: '8 hours ago'
  },
  {
    id: '6',
    title: 'Community guidelines and code of conduct',
    category: 'General Discussion',
    author: 'BeHealthy Team',
    replies: 12,
    views: 156,
    lastActivity: '1 day ago'
  }
];

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: ''
  });

  // Comment functionality state - Initialize with dummy comments
  const [comments, setComments] = useState<Record<string, Comment[]>>({
    '1': [
      {
        id: '1',
        author: 'Emma Wilson',
        content: 'I love starting my day with a smoothie bowl! My favorite recipe includes spinach, banana, berries, and a scoop of protein powder. It keeps me full until lunch!',
        timestamp: '1 hour ago'
      },
      {
        id: '2',
        author: 'James Thompson',
        content: 'Overnight oats are my go-to! I prep them the night before with chia seeds, almond milk, and fresh fruit. Quick, healthy, and delicious!',
        timestamp: '45 minutes ago'
      },
      {
        id: '3',
        author: 'Maria Garcia',
        content: 'Avocado toast with poached eggs is my absolute favorite. Add some cherry tomatoes and a sprinkle of everything bagel seasoning - perfection!',
        timestamp: '30 minutes ago'
      }
    ],
    '2': [
      {
        id: '4',
        author: 'Alex Chen',
        content: 'Great progress! I\'m also on week 2. The leg day was tough but I pushed through. Keep it up!',
        timestamp: '2 hours ago'
      },
      {
        id: '5',
        author: 'Sophie Brown',
        content: 'Amazing dedication! I\'ve been following your journey and it\'s so inspiring. What\'s your favorite workout so far?',
        timestamp: '1 hour ago'
      }
    ],
    '4': [
      {
        id: '6',
        author: 'Ryan Martinez',
        content: 'Wow, 6 months! That\'s incredible progress. Can you share what worked best for you? I\'m just starting my journey.',
        timestamp: '3 hours ago'
      },
      {
        id: '7',
        author: 'Jessica Lee',
        content: 'Congratulations on your transformation! Your before and after photos are amazing. This gives me so much motivation!',
        timestamp: '2 hours ago'
      },
      {
        id: '8',
        author: 'David Kim',
        content: 'This is exactly what I needed to see today. Thank you for sharing your story and inspiring others!',
        timestamp: '1 hour ago'
      }
    ]
  });
  const [showAddCommentModal, setShowAddCommentModal] = useState<string | null>(null);
  const [showViewCommentsModal, setShowViewCommentsModal] = useState<string | null>(null);
  const [commentFormData, setCommentFormData] = useState({
    author: '',
    content: ''
  });

  const filteredDiscussions = discussions.filter(d => {
    const matchesCategory = !selectedCategory || d.category === selectedCategory;
    const matchesSearch = !searchQuery || d.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleStartDiscussion = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ title: '', category: '', description: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.category && formData.description) {
      // In a real app, this would submit to an API
      alert('Discussion created successfully!');
      handleCloseModal();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Comment handlers
  const handleAddCommentClick = (discussionId: string) => {
    setShowAddCommentModal(discussionId);
    setCommentFormData({ author: '', content: '' });
  };

  const handleViewCommentsClick = (discussionId: string) => {
    setShowViewCommentsModal(discussionId);
  };

  const handleCloseAddCommentModal = () => {
    setShowAddCommentModal(null);
    setCommentFormData({ author: '', content: '' });
  };

  const handleCloseViewCommentsModal = () => {
    setShowViewCommentsModal(null);
  };

  const handleCommentSubmit = (e: React.FormEvent, discussionId: string) => {
    e.preventDefault();
    if (commentFormData.author && commentFormData.content) {
      const newComment: Comment = {
        id: Date.now().toString(),
        author: commentFormData.author,
        content: commentFormData.content,
        timestamp: 'Just now'
      };

      setComments(prev => ({
        ...prev,
        [discussionId]: [...(prev[discussionId] || []), newComment]
      }));

      handleCloseAddCommentModal();
    }
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCommentFormData({
      ...commentFormData,
      [e.target.name]: e.target.value
    });
  };

  const getCommentCount = (discussionId: string) => {
    return comments[discussionId]?.length || 0;
  };

  return (
    <main className={styles.communityPage}>
      <Header />

      {/* Create Discussion Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>Create New Discussion</h2>
              <button onClick={handleCloseModal} className={styles.closeButton}>
                <Icon icon="lucide:x" width={24} height={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className={styles.modalForm}>
              <div className={styles.formGroup}>
                <label>Discussion Title *</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter a clear, descriptive title..."
                  value={formData.title}
                  onChange={handleChange}
                  maxLength={100}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map(cat => (
                    <option key={cat.name} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Description *</label>
                <textarea
                  name="description"
                  placeholder="Share your thoughts, ask questions, or start a conversation..."
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  maxLength={1000}
                  required
                />
                <span className={styles.charCount}>
                  {formData.description.length}/1000
                </span>
              </div>
              <div className={styles.formActions}>
                <Button type="button" variant="outline" onClick={handleCloseModal} className={styles.cancelButton}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" disabled={!formData.title || !formData.category || !formData.description}>
                  Post Discussion
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Comment Modal */}
      {showAddCommentModal && (
        <div className={styles.modalOverlay} onClick={handleCloseAddCommentModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>Add a Comment</h2>
              <button onClick={handleCloseAddCommentModal} className={styles.closeButton}>
                <Icon icon="lucide:x" width={24} height={24} />
              </button>
            </div>
            <form onSubmit={(e) => handleCommentSubmit(e, showAddCommentModal)} className={styles.modalForm}>
              <div className={styles.formGroup}>
                <label>Your Name *</label>
                <input
                  type="text"
                  name="author"
                  placeholder="Enter your name..."
                  value={commentFormData.author}
                  onChange={handleCommentChange}
                  maxLength={50}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Your Comment *</label>
                <textarea
                  name="content"
                  placeholder="Share your thoughts..."
                  value={commentFormData.content}
                  onChange={handleCommentChange}
                  rows={5}
                  maxLength={500}
                  required
                />
                <span className={styles.charCount}>
                  {commentFormData.content.length}/500
                </span>
              </div>
              <div className={styles.formActions}>
                <Button type="button" variant="outline" onClick={handleCloseAddCommentModal} className={styles.cancelButton}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" disabled={!commentFormData.author || !commentFormData.content}>
                  Post Comment
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Comments Modal */}
      {showViewCommentsModal && (
        <div className={styles.modalOverlay} onClick={handleCloseViewCommentsModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>All Comments</h2>
              <button onClick={handleCloseViewCommentsModal} className={styles.closeButton}>
                <Icon icon="lucide:x" width={24} height={24} />
              </button>
            </div>
            <div className={styles.commentsContainer}>
              {comments[showViewCommentsModal] && comments[showViewCommentsModal].length > 0 ? (
                <div className={styles.commentsList}>
                  {comments[showViewCommentsModal].map((comment) => (
                    <div key={comment.id} className={styles.commentCard}>
                      <div className={styles.commentHeader}>
                        <span className={styles.commentAuthor}>{comment.author}</span>
                        <span className={styles.commentTime}>{comment.timestamp}</span>
                      </div>
                      <p className={styles.commentContent}>{comment.content}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.emptyComments}>
                  <Icon icon="lucide:message-circle" width={48} height={48} />
                  <p>No comments yet. Be the first to comment!</p>
                </div>
              )}
              <div className={styles.commentActions}>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleCloseViewCommentsModal();
                    handleAddCommentClick(showViewCommentsModal);
                  }}
                  className={styles.addCommentButton}
                >
                  <Icon icon="lucide:plus" width={18} height={18} />
                  Add Comment
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

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
                <Icon icon="lucide:message-circle" width={18} height={18} className="badgeIcon" />
                <span>Join Our Growing Community</span>
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="title"
              >
                Connect, Share & Grow Together
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="description"
              >
                Join thousands of health enthusiasts sharing tips, success stories, and supporting each other
                on their wellness journey.
              </motion.p>
            </motion.div>
          </Container>
        </motion.section>

        <Container>

          {/* Discussions Section */}
          <div className={styles.discussionsSection}>
            <div className={styles.discussionsHeader}>
              <h2 className={styles.sectionTitle}>
                {selectedCategory ? `${selectedCategory} Discussions` : 'Recent Discussions'}
              </h2>
              <Button
                variant="primary"
                onClick={handleStartDiscussion}
                className={styles.createButton}
              >
                <Icon icon="lucide:plus" width={18} height={18} />
                Start Discussion
              </Button>
            </div>

            {/* Search Bar with Filters */}
            <div className={styles.searchBar}>
              <div style={{ position: 'relative', flex: 1, minWidth: '250px', maxWidth: '500px' }}>
                <Icon icon="lucide:search" width={20} height={20} className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
              </div>
              <div className={styles.categoryFilters}>
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className={`${styles.categoryFilter} ${selectedCategory === category.name ? styles.active : ''}`}
                    onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                    style={{
                      '--category-color': category.color
                    } as React.CSSProperties}
                  >
                    <Icon icon={category.icon} width={16} height={16} />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
              {(selectedCategory || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSearchQuery('');
                  }}
                  className={styles.clearFilter}
                >
                  Clear Filters
                </button>
              )}
            </div>

            {/* Discussions List */}
            {filteredDiscussions.length === 0 ? (
              <div className={styles.emptyState}>
                <Icon icon="lucide:inbox" width={64} height={64} />
                <h3>No discussions found</h3>
                <p>Try adjusting your search or category filter.</p>
              </div>
            ) : (
              <div className={styles.discussionsList}>
                {filteredDiscussions.map((discussion) => (
                  <div key={discussion.id} className={styles.discussionCard}>
                    <div className={styles.discussionMain}>
                      <h3 className={styles.discussionTitle}>{discussion.title}</h3>
                      <div className={styles.discussionMeta}>
                        <span className={styles.discussionCategory}>{discussion.category}</span>
                        <span className={styles.discussionAuthor}>by {discussion.author}</span>
                        <span className={styles.discussionTime}>{discussion.lastActivity}</span>
                      </div>
                    </div>
                    <div className={styles.discussionStats}>
                      <button
                        className={styles.statButton}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddCommentClick(discussion.id);
                        }}
                        title="Add a comment"
                      >
                        <Icon icon="lucide:message-circle" width={18} height={18} />
                        <span>{discussion.replies + getCommentCount(discussion.id)}</span>
                      </button>
                      <button
                        className={styles.statButton}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewCommentsClick(discussion.id);
                        }}
                        title="View all comments"
                      >
                        <Icon icon="lucide:eye" width={18} height={18} />
                        <span>{discussion.views}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Guidelines Section */}
          <div className={styles.guidelinesSection}>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={styles.sectionTitle}
            >
              Community Guidelines
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={styles.guidelineCardsContainer}
            >
              <Row className="g-4">
                <Col xs={12} sm={6} md={6} lg={3}>
                  <div className={styles.guidelineCard}>
                    <Icon icon="lucide:heart" width={24} height={24} className={styles.guidelineIcon} />
                    <h3>Be Respectful</h3>
                    <p>Treat all members with kindness and respect. We&apos;re all here to support each other.</p>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={3}>
                  <div className={styles.guidelineCard}>
                    <Icon icon="lucide:shield-check" width={24} height={24} className={styles.guidelineIcon} />
                    <h3>Share Accurate Information</h3>
                    <p>Provide evidence-based health information and cite sources when sharing medical advice.</p>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={3}>
                  <div className={styles.guidelineCard}>
                    <Icon icon="lucide:target" width={24} height={24} className={styles.guidelineIcon} />
                    <h3>Stay On Topic</h3>
                    <p>Keep discussions relevant to health, wellness, and fitness. Off-topic posts may be removed to maintain focus.</p>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={6} lg={3}>
                  <div className={styles.guidelineCard}>
                    <Icon icon="lucide:lock" width={24} height={24} className={styles.guidelineIcon} />
                    <h3>Respect Privacy</h3>
                    <p>Protect your privacy and others&apos;. Don&apos;t share personal medical information or private details publicly.</p>
                  </div>
                </Col>
              </Row>
            </motion.div>
          </div>
        </Container>
      </div>
      <Footer />
    </main>
  );
}
