'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.scss';
import Container from 'react-bootstrap/Container';
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

  return (
    <div className={styles.communityPage}>
      <Header />
      
      {/* Modal Popup */}
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
                <button type="button" onClick={handleCloseModal} className={styles.cancelButton}>
                  Cancel
                </button>
                <Button type="submit" variant="primary" disabled={!formData.title || !formData.category || !formData.description}>
                  Post Discussion
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className={styles.contentWrapper}>
        <Container>
          {/* Hero Section */}
          <div className={styles.hero}>
            <p className={styles.subtitle}>
              <Icon icon="lucide:users" width={18} height={18} />
              Join Our Growing Community
            </p>
            <h1 className={styles.title}>
              Connect, Share & Grow Together
            </h1>
            <p className={styles.description}>
              Join thousands of health enthusiasts sharing tips, success stories, and supporting each other 
              on their wellness journey.
            </p>
          </div>

          {/* Stats Section */}
          <div className={styles.statsSection}>
            <div className={styles.statCard}>
              <Icon icon="lucide:users" width={32} height={32} className={styles.statIcon} />
              <div className={styles.statContent}>
                <h3 className={styles.statNumber}>12,500+</h3>
                <p className={styles.statLabel}>Active Members</p>
              </div>
            </div>
            <div className={styles.statCard}>
              <Icon icon="lucide:message-square" width={32} height={32} className={styles.statIcon} />
              <div className={styles.statContent}>
                <h3 className={styles.statNumber}>8,900+</h3>
                <p className={styles.statLabel}>Discussions</p>
              </div>
            </div>
            <div className={styles.statCard}>
              <Icon icon="lucide:heart-handshake" width={32} height={32} className={styles.statIcon} />
              <div className={styles.statContent}>
                <h3 className={styles.statNumber}>45,200+</h3>
                <p className={styles.statLabel}>Replies & Support</p>
              </div>
            </div>
          </div>

          {/* Categories Section */}
          <div className={styles.categoriesSection}>
            <h2 className={styles.sectionTitle}>Explore Categories</h2>
            <div className={styles.categoriesGrid}>
              {categories.map((category) => (
                <div
                  key={category.name}
                  className={`${styles.categoryCard} ${selectedCategory === category.name ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                >
                  <div 
                    className={styles.categoryIcon} 
                    style={{ 
                      backgroundColor: `${category.color}15`,
                      color: category.color
                    } as React.CSSProperties}
                  >
                    <Icon icon={category.icon} width={28} height={28} />
                  </div>
                  <div className={styles.categoryContent}>
                    <h3 className={styles.categoryName}>{category.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

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

            {/* Search Bar */}
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
                      <div className={styles.statItem}>
                        <Icon icon="lucide:message-circle" width={18} height={18} />
                        <span>{discussion.replies}</span>
                      </div>
                      <div className={styles.statItem}>
                        <Icon icon="lucide:eye" width={18} height={18} />
                        <span>{discussion.views}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Guidelines Section */}
          <div className={styles.guidelinesSection}>
            <h2 className={styles.sectionTitle}>Community Guidelines</h2>
            <div className={styles.guidelinesGrid}>
              <div className={styles.guidelineCard}>
                <Icon icon="lucide:heart" width={24} height={24} className={styles.guidelineIcon} />
                <h3>Be Respectful</h3>
                <p>Treat all members with kindness and respect. We&apos;re all here to support each other.</p>
              </div>
              <div className={styles.guidelineCard}>
                <Icon icon="lucide:shield-check" width={24} height={24} className={styles.guidelineIcon} />
                <h3>Share Accurate Information</h3>
                <p>Provide evidence-based health information and cite sources when sharing medical advice.</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
