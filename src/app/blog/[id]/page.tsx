'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.scss';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

// Enhanced blog data with more information
const blogPosts = [
  {
    id: 1,
    title: "5 AI Video Generation Tools You Need to Try",
    description: "Explore five leading AI video generators—HeyGen, Kling AI, DeepAny.AI, Veo, and Immersity AI—helping creators produce high-quality, cinematic, and engaging video content.",
    image: "/images/hero-2.jpeg",
    tags: ["Video Generation", "AI Tools", "Content Creation"],
    author: "Ishika Sharma",
    authorRole: "Content Strategist",
    authorBio: "Ishika is a content strategist with over 5 years of experience in digital marketing and AI technology. She specializes in helping businesses leverage AI tools for content creation and marketing automation.",
    authorImage: "/images/hero-2.jpeg",
    date: "28 November 2025",
    readingTime: "8 min read",
    views: 1245,
    likes: 89,
    content: "In today's digital landscape, video content reigns supreme. Whether you're a content creator, marketer, or business owner, producing high-quality videos can be time-consuming and expensive. Enter AI video generation tools—revolutionary platforms that leverage artificial intelligence to streamline video creation processes.\n\nHeyGen stands out as one of the most advanced AI video generation platforms. It offers realistic avatar creation, voice cloning, and multilingual support, making it perfect for creating personalized video content at scale.\n\nKling AI brings cinematic quality to AI-generated videos. With its advanced algorithms, it can create stunning visual effects and smooth transitions that rival traditional video production.\n\nDeepAny.AI specializes in deepfake technology and video manipulation, offering tools for face swapping, voice synthesis, and realistic character animation.\n\nVeo, developed by Google, represents the cutting edge of AI video generation. It excels at creating natural-looking videos with impressive detail and coherence.\n\nImmersity AI focuses on immersive and interactive video experiences, perfect for creating engaging content that captivates audiences.\n\nEach of these tools brings unique capabilities to the table, helping creators produce professional-quality videos faster and more efficiently than ever before.",
    keyTakeaways: [
      "AI video generation tools can significantly reduce production time and costs",
      "Each platform offers unique features tailored to different use cases",
      "Voice cloning and avatar creation are becoming increasingly realistic",
      "Multilingual support enables global content creation at scale"
    ]
  },
  {
    id: 2,
    title: "From Idea to Copy: Best AI Content Creation Tools",
    description: "AI content creation tools help creators design, write, edit, translate, and produce content faster across formats. These top tools boost quality, cut production time, and enhance creativity.",
    image: "/images/hero-2.jpeg",
    tags: ["Writing Assistants", "Content Creation", "Productivity", "AI Tools"],
    author: "Ishika Sharma",
    authorRole: "Content Strategist",
    authorBio: "Ishika is a content strategist with over 5 years of experience in digital marketing and AI technology. She specializes in helping businesses leverage AI tools for content creation and marketing automation.",
    authorImage: "/images/hero-2.jpeg",
    date: "26 November 2025",
    readingTime: "6 min read",
    views: 987,
    likes: 72,
    content: "Content creation has evolved dramatically with the advent of AI tools. From brainstorming ideas to polishing final copy, AI-powered platforms are transforming how creators work.\n\nModern AI writing assistants can help you generate ideas, create outlines, write drafts, and refine content across multiple formats. They understand context, tone, and style, enabling you to produce high-quality content that resonates with your audience.\n\nThese tools aren't just about speed—they enhance creativity by offering fresh perspectives and suggestions. They can help overcome writer's block, improve clarity, and ensure consistency across all your content.\n\nWhether you're creating blog posts, social media content, marketing copy, or technical documentation, AI content creation tools provide the support you need to produce exceptional work efficiently.",
    keyTakeaways: [
      "AI tools enhance creativity rather than replace human input",
      "Context understanding enables personalized content generation",
      "Multi-format support streamlines content workflows",
      "Consistency across content improves brand voice"
    ]
  },
  {
    id: 3,
    title: "Gemini The Latest Release & New vs Earlier Versions",
    description: "Gemini 3 brings advanced reasoning, multimodal support, and enterprise-grade features. This summary outlines how it improves on past versions and what it means for users.",
    image: "/images/hero-2.jpeg",
    tags: ["Text Generator", "AI Models", "Technology", "Updates", "Google"],
    author: "Ishika Sharma",
    authorRole: "Content Strategist",
    authorBio: "Ishika is a content strategist with over 5 years of experience in digital marketing and AI technology. She specializes in helping businesses leverage AI tools for content creation and marketing automation.",
    authorImage: "/images/hero-2.jpeg",
    date: "24 November 2025",
    readingTime: "7 min read",
    views: 1523,
    likes: 134,
    content: "Google's Gemini 3 represents a significant leap forward in AI capabilities. This latest iteration introduces advanced reasoning capabilities, improved multimodal understanding, and enterprise-grade features that set it apart from earlier versions.\n\nCompared to Gemini 2, the new version offers enhanced accuracy, better context understanding, and more reliable outputs. It can process and understand complex queries across text, images, audio, and video with unprecedented precision.\n\nEnterprise users will appreciate the improved security features, better integration capabilities, and enhanced performance metrics. The model demonstrates superior performance in reasoning tasks, making it ideal for complex problem-solving scenarios.\n\nFor developers and businesses, Gemini 3 opens up new possibilities for building AI-powered applications that can understand and interact with multiple types of content seamlessly.",
    keyTakeaways: [
      "Gemini 3 offers significant improvements in accuracy and reasoning",
      "Multimodal capabilities enable richer application development",
      "Enterprise features enhance security and integration options",
      "Performance metrics show substantial improvements over previous versions"
    ]
  },
  {
    id: 4,
    title: "AI Coding Tools That Make Developers Lives Easier",
    description: "This blog explores 13 AI coding tools that automate development, improve code quality, speed up debugging, simplify documentation, and help developers work more efficiently.",
    image: "/images/hero-2.jpeg",
    tags: ["Programming"],
    author: "Ishika Sharma",
    authorRole: "Content Strategist",
    authorBio: "Ishika is a content strategist with over 5 years of experience in digital marketing and AI technology. She specializes in helping businesses leverage AI tools for content creation and marketing automation.",
    authorImage: "/images/hero-2.jpeg",
    date: "21 November 2025",
    readingTime: "10 min read",
    views: 2134,
    likes: 198,
    content: "Developers are increasingly turning to AI-powered coding tools to streamline their workflows and boost productivity. These tools can automate repetitive tasks, suggest code improvements, help with debugging, and even generate entire functions.\n\nModern AI coding assistants understand context, learn from your codebase, and provide intelligent suggestions that align with your coding style and project requirements. They can help with everything from writing boilerplate code to complex algorithm implementation.\n\nDebugging becomes faster with AI tools that can analyze error messages, trace issues, and suggest fixes. Documentation generation is automated, ensuring your code is always well-documented.\n\nThese tools are transforming software development, making it more accessible and efficient for developers of all skill levels.",
    keyTakeaways: [
      "AI coding tools significantly reduce development time",
      "Context-aware suggestions improve code quality",
      "Automated debugging accelerates problem resolution",
      "Documentation automation ensures code maintainability"
    ]
  },
  {
    id: 5,
    title: "Top AI Productivity Tools for Teams & Remote Work",
    description: "Remote teams need AI tools that cut manual work, improve collaboration, and reduce burnout. This blog highlights 10 SansSapien AI tools that streamline workflows and boost productivity.",
    image: "/images/hero-2.jpeg",
    tags: ["Productivity", "Remote Work"],
    author: "Ishika Sharma",
    authorRole: "Content Strategist",
    authorBio: "Ishika is a content strategist with over 5 years of experience in digital marketing and AI technology. She specializes in helping businesses leverage AI tools for content creation and marketing automation.",
    authorImage: "/images/hero-2.jpeg",
    date: "21 November 2025",
    readingTime: "9 min read",
    views: 1678,
    likes: 145,
    content: "Remote work has become the norm, and AI productivity tools are essential for keeping distributed teams efficient and connected. These tools automate routine tasks, facilitate better communication, and help teams collaborate more effectively.\n\nFrom automated scheduling and meeting summaries to intelligent task management and workflow optimization, AI productivity tools reduce the administrative burden on teams. They enable focus on high-value work while handling repetitive tasks automatically.\n\nCollaboration features powered by AI help teams stay aligned, share knowledge effectively, and maintain productivity regardless of time zones or locations. These tools are becoming indispensable for modern remote teams.",
    keyTakeaways: [
      "AI tools reduce administrative overhead for remote teams",
      "Automated scheduling improves meeting efficiency",
      "Intelligent task management enhances team productivity",
      "Knowledge sharing features bridge time zone gaps"
    ]
  },
  {
    id: 6,
    title: "How Businesses Use AI Tools to Automate Daily Operations",
    description: "Learn how leading companies use business AI tools to automate workflows, enhance customer experiences, optimize marketing, and boost productivity across departments.",
    image: "/images/hero-2.jpeg",
    tags: ["Customer Engagement", "Business Automation", "AI Tools"],
    author: "Ishika Sharma",
    authorRole: "Content Strategist",
    authorBio: "Ishika is a content strategist with over 5 years of experience in digital marketing and AI technology. She specializes in helping businesses leverage AI tools for content creation and marketing automation.",
    authorImage: "/images/hero-2.jpeg",
    date: "12 November 2025",
    readingTime: "8 min read",
    views: 1890,
    likes: 167,
    content: "Businesses across industries are leveraging AI tools to automate operations and drive efficiency. From customer service chatbots to automated data analysis, AI is transforming how companies operate.\n\nCustomer engagement has been revolutionized by AI-powered tools that provide personalized experiences, 24/7 support, and intelligent recommendations. Marketing teams use AI to optimize campaigns, analyze customer behavior, and predict trends.\n\nOperational efficiency improves significantly when routine tasks are automated. AI handles data entry, report generation, inventory management, and more, freeing employees to focus on strategic work.\n\nThe result is improved customer satisfaction, reduced operational costs, and increased productivity across all departments.",
    keyTakeaways: [
      "AI automation reduces operational costs significantly",
      "Personalized customer experiences drive engagement",
      "Predictive analytics improve marketing effectiveness",
      "Strategic work becomes the focus when routine tasks are automated"
    ]
  },
  {
    id: 7,
    title: "10 Ways AI Tools Are Revolutionizing Every Industry",
    description: "AI tools are transforming industries by automating communication, security, and decision-making. From Metigan to FullEnrich, they boost productivity, reduce costs, and drive innovation.",
    image: "/images/hero-2.jpeg",
    tags: ["Artificial Intelligence", "Industry Trends", "Innovation"],
    author: "Ishika",
    authorRole: "Content Strategist",
    authorBio: "Ishika is a content strategist with over 5 years of experience in digital marketing and AI technology. She specializes in helping businesses leverage AI tools for content creation and marketing automation.",
    authorImage: "/images/hero-2.jpeg",
    date: "10 November 2025",
    readingTime: "12 min read",
    views: 2456,
    likes: 223,
    content: "Artificial intelligence is no longer a futuristic concept—it's reshaping industries today. From healthcare to finance, manufacturing to retail, AI tools are driving unprecedented transformation.\n\nIn healthcare, AI assists with diagnosis, drug discovery, and personalized treatment plans. Financial institutions use AI for fraud detection, risk assessment, and algorithmic trading. Manufacturing benefits from predictive maintenance and quality control automation.\n\nRetail experiences are personalized through AI-powered recommendation engines. Transportation is being revolutionized by autonomous vehicles and smart traffic management systems.\n\nEvery industry is finding new ways to leverage AI, resulting in improved efficiency, better decision-making, and innovative solutions to complex challenges.",
    keyTakeaways: [
      "AI transformation spans across all major industries",
      "Healthcare benefits from improved diagnosis and treatment",
      "Financial services enhance security through AI",
      "Manufacturing achieves higher quality through automation"
    ]
  },
  {
    id: 8,
    title: "What AI Services Provide the Fastest Document Processing",
    description: "Explore the fastest AI document processing services of 2025. Compare Google Document AI, Azure Document Intelligence, Mistral OCR, Mindee, and other leading solutions.",
    image: "/images/hero-2.jpeg",
    tags: ["Document Analysis", "AI Services", "Automation"],
    author: "Ishika Sharma",
    authorRole: "Content Strategist",
    authorBio: "Ishika is a content strategist with over 5 years of experience in digital marketing and AI technology. She specializes in helping businesses leverage AI tools for content creation and marketing automation.",
    authorImage: "/images/hero-2.jpeg",
    date: "16 October 2025",
    readingTime: "7 min read",
    views: 1345,
    likes: 112,
    content: "Document processing is a critical business function that AI has transformed. Modern AI services can extract, analyze, and process documents at speeds and accuracy levels that were previously impossible.\n\nGoogle Document AI offers powerful OCR capabilities and intelligent document understanding. Azure Document Intelligence provides enterprise-grade document processing with high accuracy. Mistral OCR specializes in multilingual document recognition.\n\nMindee excels at extracting structured data from unstructured documents, making it ideal for forms and invoices. These services can process thousands of documents in minutes, extracting key information automatically.\n\nBusinesses are using these tools to digitize archives, automate data entry, and streamline workflows that previously required manual processing.",
    keyTakeaways: [
      "AI document processing dramatically increases speed and accuracy",
      "OCR capabilities enable digitization of physical documents",
      "Structured data extraction automates data entry workflows",
      "Multilingual support expands global document processing capabilities"
    ]
  },
  {
    id: 9,
    title: "Best AI Collaboration Tools & Platforms (2025 Guide)",
    description: "Discover top AI collaboration tools that boost productivity, streamline communication, and automate workflows. Explore platforms like Google Workspace, Microsoft Teams, and more.",
    image: "/images/hero-2.jpeg",
    tags: ["Productivity", "Collaboration"],
    author: "Ishika Sharma",
    authorRole: "Content Strategist",
    authorBio: "Ishika is a content strategist with over 5 years of experience in digital marketing and AI technology. She specializes in helping businesses leverage AI tools for content creation and marketing automation.",
    authorImage: "/images/hero-2.jpeg",
    date: "15 October 2025",
    readingTime: "6 min read",
    views: 1123,
    likes: 98,
    content: "Effective collaboration is essential for modern teams, and AI-powered tools are making it easier than ever. These platforms integrate AI capabilities to enhance communication, streamline workflows, and improve team productivity.\n\nGoogle Workspace and Microsoft Teams have integrated AI features that help with meeting summaries, intelligent scheduling, and content suggestions. These tools understand context and provide relevant information when teams need it.\n\nAI collaboration tools can automate meeting notes, suggest action items, and even facilitate better decision-making by analyzing team discussions and providing insights.\n\nThe result is more efficient meetings, better knowledge sharing, and improved team alignment—all critical for successful collaboration in today's fast-paced work environment.",
    keyTakeaways: [
      "AI enhances team communication and collaboration",
      "Automated meeting summaries save time and improve retention",
      "Intelligent scheduling optimizes team availability",
      "Context-aware suggestions improve decision-making processes"
    ]
  }
];

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<typeof blogPosts[0] | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<typeof blogPosts>([]);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const postId = parseInt(params.id as string);
    const foundPost = blogPosts.find(p => p.id === postId);
    setPost(foundPost || null);

    // Get related posts (same tags or same author, excluding current post)
    if (foundPost) {
      const related = blogPosts
        .filter(p => p.id !== postId && (
          p.tags.some(tag => foundPost.tags.includes(tag)) || 
          p.author === foundPost.author
        ))
        .slice(0, 3);
      setRelatedPosts(related);
    }
  }, [params.id]);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post?.title || '';
    const text = post?.description || '';

    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      copy: url
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    } else {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  if (!post) {
    return (
      <main className={styles.blogDetailPage}>
        <Header />
        <Container>
          <div className={styles.notFound}>
            <h1>Blog Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist.</p>
            <Link href="/blog" className={styles.backButton}>
              <Icon icon="lucide:arrow-left" width={20} height={20} />
              Back to Blog
            </Link>
          </div>
        </Container>
        <Footer />
      </main>
    );
  }

  return (
    <main className={styles.blogDetailPage}>
      <Header />
      <div className={styles.contentWrapper}>
        <Container>
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.backButtonWrapper}
          >
            <Link href="/blog" className={styles.backButton}>
              <Icon icon="lucide:arrow-left" width={20} height={20} />
              Back to Blog
            </Link>
          </motion.div>

          <Row>
            {/* Main Content */}
            <Col lg={8}>
              {/* Article Header */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={styles.article}
              >
                {/* Hero Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className={styles.heroImage}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </motion.div>

                {/* Article Content */}
                <div className={styles.articleContent}>
                  {/* Tags */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={styles.tags}
                  >
                    {post.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>{tag}</span>
                    ))}
                  </motion.div>

                  {/* Title */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={styles.title}
                  >
                    {post.title}
                  </motion.h1>

                  {/* Meta Information */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={styles.meta}
                  >
                    <div className={styles.metaLeft}>
                      <div className={styles.authorInfo}>
                        <div className={styles.authorAvatar}>
                          <Image
                            src={post.authorImage}
                            alt={post.author}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <div>
                          <div className={styles.authorName}>{post.author}</div>
                          <div className={styles.authorRole}>{post.authorRole}</div>
                        </div>
                      </div>
                      <div className={styles.metaDivider}></div>
                      <div className={styles.dateInfo}>
                        <Icon icon="lucide:calendar" width={18} height={18} />
                        <span>{post.date}</span>
                      </div>
                      <div className={styles.readingTime}>
                        <Icon icon="lucide:clock" width={18} height={18} />
                        <span>{post.readingTime}</span>
                      </div>
                    </div>
                    <div className={styles.metaRight}>
                      <div className={styles.stats}>
                        <div className={styles.statItem}>
                          <Icon icon="lucide:eye" width={18} height={18} />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                        <button 
                          className={`${styles.likeButton} ${isLiked ? styles.liked : ''}`}
                          onClick={() => setIsLiked(!isLiked)}
                        >
                          <Icon icon={isLiked ? "lucide:heart" : "lucide:heart"} width={18} height={18} />
                          <span>{post.likes + (isLiked ? 1 : 0)}</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className={styles.description}
                  >
                    {post.description}
                  </motion.p>

                  {/* Key Takeaways */}
                  {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className={styles.keyTakeaways}
                    >
                      <div className={styles.keyTakeawaysHeader}>
                        <Icon icon="lucide:lightbulb" width={24} height={24} />
                        <h3>Key Takeaways</h3>
                      </div>
                      <ul>
                        {post.keyTakeaways.map((takeaway, i) => (
                          <li key={i}>{takeaway}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Article Body */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className={styles.body}
                  >
                    {post.content.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </motion.div>

                  {/* Social Sharing */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className={styles.socialSharing}
                  >
                    <span className={styles.shareLabel}>Share this article:</span>
                    <div className={styles.shareButtons}>
                      <button onClick={() => handleShare('twitter')} className={styles.shareButton} aria-label="Share on Twitter">
                        <Icon icon="lucide:twitter" width={20} height={20} />
                      </button>
                      <button onClick={() => handleShare('facebook')} className={styles.shareButton} aria-label="Share on Facebook">
                        <Icon icon="lucide:facebook" width={20} height={20} />
                      </button>
                      <button onClick={() => handleShare('linkedin')} className={styles.shareButton} aria-label="Share on LinkedIn">
                        <Icon icon="lucide:linkedin" width={20} height={20} />
                      </button>
                      <button onClick={() => handleShare('copy')} className={styles.shareButton} aria-label="Copy link">
                        <Icon icon="lucide:link" width={20} height={20} />
                      </button>
                    </div>
                  </motion.div>
                </div>
              </motion.article>

              {/* Author Bio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className={styles.authorBio}
              >
                <div className={styles.authorBioImage}>
                  <Image
                    src={post.authorImage}
                    alt={post.author}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.authorBioContent}>
                  <h3>{post.author}</h3>
                  <p className={styles.authorBioRole}>{post.authorRole}</p>
                  <p className={styles.authorBioText}>{post.authorBio}</p>
                </div>
              </motion.div>
            </Col>

            {/* Sidebar */}
            <Col lg={4}>
              <div className={styles.sidebar}>
                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className={styles.relatedPosts}
                  >
                    <h3 className={styles.relatedPostsTitle}>
                      <Icon icon="lucide:book-open" width={20} height={20} />
                      Related Articles
                    </h3>
                    <div className={styles.relatedPostsList}>
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.id}
                          href={`/blog/${relatedPost.id}`}
                          className={styles.relatedPostCard}
                        >
                          <div className={styles.relatedPostImage}>
                            <Image
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              fill
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                          <div className={styles.relatedPostContent}>
                            <h4>{relatedPost.title}</h4>
                            <div className={styles.relatedPostMeta}>
                              <span>{relatedPost.date}</span>
                              <span>•</span>
                              <span>{relatedPost.readingTime}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Popular Tags */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className={styles.popularTags}
                >
                  <h3 className={styles.popularTagsTitle}>
                    <Icon icon="lucide:tag" width={20} height={20} />
                    Popular Tags
                  </h3>
                  <div className={styles.tagsList}>
                    {["AI Tools", "Productivity", "Content Creation", "Technology", "Innovation", "Automation"].map((tag, i) => (
                      <Link key={i} href={`/blog?tag=${tag}`} className={styles.tagLink}>
                        {tag}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </main>
  );
}
