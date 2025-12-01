'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef, startTransition } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.scss';
import Container from 'react-bootstrap/Container';
import { Icon } from '@iconify/react';
import Button from '@/components/Button';

interface FeatureRequest {
  id: string;
  title: string;
  description: string;
  upvotes: number;
  createdAt: string;
  status: 'under-review' | 'planned' | 'in-progress' | 'completed';
  userUpvoted?: boolean;
}

const STATUS_LABELS = {
  'under-review': 'Under Review',
  'planned': 'Planned',
  'in-progress': 'In Progress',
  'completed': 'Completed'
};

const STATUS_COLORS = {
  'under-review': '#6B7280',
  'planned': '#3B82F6',
  'in-progress': '#F59E0B',
  'completed': '#10B981'
};

export default function FeatureRequestsPage() {
  const [featureRequests, setFeatureRequests] = useState<FeatureRequest[]>([]);
  const hasInitialized = useRef(false);
  const [formData, setFormData] = useState({ title: '', description: '' });
  const [sortBy, setSortBy] = useState<'newest' | 'popular'>('popular');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Load feature requests from localStorage only on client after mount
  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;
    
    const loadData = () => {
      const saved = localStorage.getItem('featureRequests');
      
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            startTransition(() => {
              setFeatureRequests(parsed);
            });
            return;
          }
        } catch (e) {
          console.error('Error loading feature requests:', e);
        }
      }
      
      // Initialize with sample data if nothing was loaded
      const now = Date.now();
      const sampleData: FeatureRequest[] = [
        {
          id: '1',
          title: 'Dark Mode Support',
          description: 'Add a dark mode option to reduce eye strain during nighttime use and improve battery life on OLED devices.',
          upvotes: 45,
          createdAt: new Date(now - 2 * 24 * 60 * 60 * 1000).toISOString(),
          status: 'planned'
        },
        {
          id: '2',
          title: 'Offline Mode for Health Tracking',
          description: 'Allow users to track their health metrics even when offline, with automatic sync when connection is restored.',
          upvotes: 38,
          createdAt: new Date(now - 5 * 24 * 60 * 60 * 1000).toISOString(),
          status: 'in-progress'
        },
        {
          id: '3',
          title: 'Integration with Apple Health',
          description: 'Sync data with Apple Health app to consolidate all health information in one place.',
          upvotes: 52,
          createdAt: new Date(now - 1 * 24 * 60 * 60 * 1000).toISOString(),
          status: 'under-review'
        },
        {
          id: '4',
          title: 'Weekly Health Reports via Email',
          description: 'Send weekly summary emails with progress updates, achievements, and personalized recommendations.',
          upvotes: 29,
          createdAt: new Date(now - 7 * 24 * 60 * 60 * 1000).toISOString(),
          status: 'completed'
        },
        {
          id: '5',
          title: 'Multi-language Support',
          description: 'Add support for multiple languages to make the app accessible to users worldwide.',
          upvotes: 34,
          createdAt: new Date(now - 3 * 24 * 60 * 60 * 1000).toISOString(),
          status: 'under-review'
        }
      ];
      
      // Save sample data to localStorage
      localStorage.setItem('featureRequests', JSON.stringify(sampleData));
      startTransition(() => {
        setFeatureRequests(sampleData);
      });
    };

    loadData();
  }, []);

  // Save to localStorage whenever featureRequests changes (only after initialization)
  useEffect(() => {
    if (hasInitialized.current && featureRequests.length > 0) {
      localStorage.setItem('featureRequests', JSON.stringify(featureRequests));
    }
  }, [featureRequests]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.description.trim()) {
      return;
    }

    setSubmitting(true);
    
    const newRequest: FeatureRequest = {
      id: Date.now().toString(),
      title: formData.title.trim(),
      description: formData.description.trim(),
      upvotes: 0,
      createdAt: new Date().toISOString(),
      status: 'under-review'
    };

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    setFeatureRequests(prev => [newRequest, ...prev]);
    setFormData({ title: '', description: '' });
    setShowForm(false);
    setSubmitting(false);
  };

  const handleUpvote = (id: string) => {
    setFeatureRequests(prev => prev.map(request => {
      if (request.id === id) {
        const wasUpvoted = request.userUpvoted;
        return {
          ...request,
          upvotes: wasUpvoted ? request.upvotes - 1 : request.upvotes + 1,
          userUpvoted: !wasUpvoted
        };
      }
      return request;
    }));
  };

  const filteredAndSorted = featureRequests
    .filter(request => filterStatus === 'all' || request.status === filterStatus)
    .sort((a, b) => {
      if (sortBy === 'popular') {
        return b.upvotes - a.upvotes;
      } else {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className={styles.featureRequestsPage}>
      <Header />
      <div className={styles.contentWrapper}>
        <Container>
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.header}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={styles.subtitle}
            >
              <Icon icon="lucide:lightbulb" width={18} height={18} />
              Share Your Ideas
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={styles.title}
            >
              Feature Requests
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={styles.description}
            >
              Help us improve BeHealthy by sharing your ideas. Vote on features you&apos;d like to see, 
              and we&apos;ll prioritize the most requested ones.
            </motion.p>
          </motion.div>

          {/* Submit Feature Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.formSection}
          >
            {!showForm ? (
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowForm(true)}
                className={styles.submitButton}
              >
                <Icon icon="lucide:plus" width={20} height={20} />
                Submit a Feature Request
              </motion.button>
            ) : (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                onSubmit={handleSubmit}
                className={styles.form}
              >
                <div className={styles.formHeader}>
                  <h3>Submit a New Feature Request</h3>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setFormData({ title: '', description: '' });
                    }}
                    className={styles.closeButton}
                  >
                    <Icon icon="lucide:x" width={20} height={20} />
                  </button>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="title">Feature Title *</label>
                  <input
                    id="title"
                    type="text"
                    placeholder="e.g., Dark Mode Support"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    maxLength={100}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="description">Description *</label>
                  <textarea
                    id="description"
                    placeholder="Describe the feature you'd like to see. Be as detailed as possible..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    rows={5}
                    maxLength={500}
                  />
                  <span className={styles.charCount}>
                    {formData.description.length}/500
                  </span>
                </div>
                <div className={styles.formActions}>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setFormData({ title: '', description: '' });
                    }}
                    className={styles.cancelButton}
                  >
                    Cancel
                  </button>
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={submitting || !formData.title.trim() || !formData.description.trim()}
                    className={styles.submitFormButton}
                  >
                    {submitting ? 'Submitting...' : 'Submit Request'}
                  </Button>
                </div>
              </motion.form>
            )}
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.filters}
          >
            <div className={styles.filterGroup}>
              <label>Sort by:</label>
              <div className={styles.filterButtons}>
                <button
                  onClick={() => setSortBy('popular')}
                  className={sortBy === 'popular' ? styles.active : ''}
                >
                  <Icon icon="lucide:trending-up" width={16} height={16} />
                  Most Popular
                </button>
                <button
                  onClick={() => setSortBy('newest')}
                  className={sortBy === 'newest' ? styles.active : ''}
                >
                  <Icon icon="lucide:clock" width={16} height={16} />
                  Newest
                </button>
              </div>
            </div>
            <div className={styles.filterGroup}>
              <label>Filter by status:</label>
              <div className={styles.filterButtons}>
                <button
                  onClick={() => setFilterStatus('all')}
                  className={filterStatus === 'all' ? styles.active : ''}
                >
                  All
                </button>
                {Object.entries(STATUS_LABELS).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setFilterStatus(key)}
                    className={filterStatus === key ? styles.active : ''}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Feature Requests List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.requestsList}
          >
            {filteredAndSorted.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={styles.emptyState}
              >
                <Icon icon="lucide:inbox" width={64} height={64} />
                <h3>No feature requests found</h3>
                <p>Be the first to suggest a feature!</p>
              </motion.div>
            ) : (
              filteredAndSorted.map((request, index) => (
                <motion.div
                  key={request.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                  className={styles.requestCard}
                  whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0, 59, 70, 0.15)' }}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.cardTitleRow}>
                      <h3 className={styles.cardTitle}>{request.title}</h3>
                      <span
                        className={styles.statusBadge}
                        style={{
                          color: STATUS_COLORS[request.status],
                          background: `${STATUS_COLORS[request.status]}15`,
                          borderColor: `${STATUS_COLORS[request.status]}30`
                        }}
                      >
                        {STATUS_LABELS[request.status]}
                      </span>
                    </div>
                    <p className={styles.cardDate}>{formatDate(request.createdAt)}</p>
                  </div>
                  <p className={styles.cardDescription}>{request.description}</p>
                  <div className={styles.cardFooter}>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleUpvote(request.id)}
                      className={`${styles.upvoteButton} ${request.userUpvoted ? styles.upvoted : ''}`}
                    >
                      <Icon 
                        icon={request.userUpvoted ? "lucide:thumbs-up" : "lucide:thumbs-up"} 
                        width={18} 
                        height={18} 
                      />
                      <span>{request.upvotes}</span>
                      {request.userUpvoted && <span className={styles.upvotedLabel}>Upvoted</span>}
                    </motion.button>
                    <div className={styles.cardMeta}>
                      <Icon icon="lucide:users" width={16} height={16} />
                      <span>{request.upvotes} {request.upvotes === 1 ? 'vote' : 'votes'}</span>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

