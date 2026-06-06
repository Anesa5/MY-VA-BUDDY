import React, { useState, useEffect } from 'react';
import './Blog.css';

function Blog() {
    const [selectedPost, setSelectedPost] = useState(null);
    const [filterCategory, setFilterCategory] = useState(null);

    // Beautiful Aesthetic Image URLs for different categories
    const categoryImages = {
        "Market Trends": "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?w=800&h=450&fit=crop",
        "Airbnb Rules & Regulations": "https://images.pexels.com/photos/4381393/pexels-photo-4381393.jpeg?w=800&h=450&fit=crop",
        "Revenue Strategy": "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?w=800&h=450&fit=crop",
        "Guest Experience": "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?w=800&h=450&fit=crop",
        "Tools & Technology": "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?w=800&h=450&fit=crop",
        "Property Management": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=800&h=450&fit=crop",
        "Host Success Stories": "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?w=800&h=450&fit=crop",
        "Listing Optimization": "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?w=800&h=450&fit=crop"
    };

    // More aesthetic images for random blogs
    const aestheticImages = [
        "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?w=800&h=450&fit=crop",
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?w=800&h=450&fit=crop",
        "https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?w=800&h=450&fit=crop",
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?w=800&h=450&fit=crop",
        "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?w=800&h=450&fit=crop",
        "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?w=800&h=450&fit=crop",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=800&h=450&fit=crop",
        "https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?w=800&h=450&fit=crop"
    ];

    // Generate 31 Blog Posts
    const generateBlogPosts = () => {
        const categories = [
            "Market Trends",
            "Airbnb Rules & Regulations",
            "Revenue Strategy",
            "Guest Experience",
            "Tools & Technology",
            "Property Management",
            "Host Success Stories"
        ];

        const titles = [
            "NJ Short-Term Rentals: 2026 Data-Driven Forecast for Hosts",
            "Albuquerque STR Regulations Voted Down: 2025 Host Impact",
            "Columbia SC STR Ordinance Update: MY VA BUDDY Host Action Required",
            "Philly Airbnb Domination: Optimize Your Listing for 2026",
            "How to Maximize Your Rental Income in 2026",
            "The Ultimate Guide to Guest Communication",
            "Dynamic Pricing Strategies That Work",
            "10 Tips for Becoming a Superhost",
            "Understanding Local STR Laws in 2026",
            "How to Automate Your Rental Business",
            "The Future of Short-Term Rentals",
            "Guest Screening Best Practices",
            "Revenue Management 101 for Hosts",
            "How to Handle Difficult Guests",
            "Professional Photography Tips for Listings",
            "Seasonal Pricing Strategies",
            "Multi-Platform Listing Management",
            "Guest Review Management Guide",
            "Emergency Response Protocols",
            "Property Maintenance Checklist",
            "Welcome Book Templates for Hosts",
            "How to Reduce Guest Turnover",
            "Smart Home Tech for Rentals",
            "Cleaning Protocols That Work",
            "How to Get More 5-Star Reviews",
            "Handling Late Check-ins and Check-outs",
            "Amenities That Attract More Bookings",
            "How to Price Your First Listing",
            "Marketing Your Rental on Social Media",
            "Understanding Airbnb's Algorithm",
            "How to Scale Your Rental Portfolio"
        ];

        const authors = ["Basit Ali", "Sarah Johnson", "Michael Chen", "Emily Thompson", "David Kim", "Lisa Wong", "James Wilson"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let posts = [];
        for (let i = 1; i <= 31; i++) {
            const randomMonth = months[Math.floor(Math.random() * months.length)];
            const randomDay = Math.floor(Math.random() * 28) + 1;
            const randomYear = 2025 + Math.floor(Math.random() * 2);
            const fullDate = `${randomMonth} ${randomDay}, ${randomYear}`;
            const shortDate = `${randomMonth.slice(0, 3)} ${randomDay}, ${randomYear}`;
            const category = categories[(i - 1) % categories.length];

            // Use category image or random aesthetic image
            const imageToUse = (i % 3 === 0) ? aestheticImages[i % aestheticImages.length] : (categoryImages[category] || categoryImages["Market Trends"]);

            posts.push({
                id: i,
                title: titles[(i - 1) % titles.length],
                category: category,
                image: imageToUse,
                date: shortDate,
                fullDate: fullDate,
                readTime: `${Math.floor(Math.random() * 15) + 5} min read`,
                author: authors[(i - 1) % authors.length],
                excerpt: `Discover the latest insights about ${category.toLowerCase()} and how it affects your short-term rental business in 2026. Expert tips and actionable strategies inside.`,
                longExcerpt: `The Albuquerque City Council rejected new STR restrictions, preserving the status quo for hosts. Learn how this impacts your 2026 strategy and what you need to do to stay compliant while maximizing your revenue potential in this evolving market.`,
                content: generateBlogContent(titles[(i - 1) % titles.length], category, imageToUse)
            });
        }
        return posts;
    };

    const generateBlogContent = (title, category, imageUrl) => {
        return `
            <img src="${imageUrl}" alt="${title}" class="post-featured-image" />
            <h2>Introduction</h2>
            <p>${title} - This comprehensive guide covers everything you need to know about ${category.toLowerCase()} in the current short-term rental market. Whether you're a new host or an experienced property owner, understanding these concepts is crucial for success.</p>
            
            <h2>Market Overview</h2>
            <p>The short-term rental market has seen unprecedented growth over the past few years. With more travelers seeking authentic, home-like experiences, platforms like Airbnb and VRBO have become the go-to choice for millions of guests worldwide.</p>
            
            <h2>Key Insights & Data Analysis</h2>
            <p>Based on our latest data analysis and industry research, here are the most important factors affecting ${category.toLowerCase()} today:</p>
            <ul>
                <li><strong>Occupancy Rates:</strong> Average occupancy across major markets is holding steady at 65-75%</li>
                <li><strong>Revenue Trends:</strong> Dynamic pricing can increase revenue by 20-40%</li>
                <li><strong>Guest Preferences:</strong> 85% of guests prioritize properties with instant booking</li>
                <li><strong>Regulatory Impact:</strong> 30+ cities are considering new STR regulations in 2026</li>
            </ul>
            
            <h2>Actionable Strategies for Success</h2>
            <p>To thrive in this competitive landscape, implement these proven strategies:</p>
            <ul>
                <li><strong>Optimize Your Pricing:</strong> Use AI-powered dynamic pricing tools to maximize revenue</li>
                <li><strong>Enhance Guest Communication:</strong> Implement automated messaging systems for 24/7 support</li>
                <li><strong>Maintain High Standards:</strong> Regular property inspections and professional cleaning</li>
                <li><strong>Stay Compliant:</strong> Keep up with local regulations and obtain necessary permits</li>
                <li><strong>Leverage Technology:</strong> Use smart home devices and channel managers</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>The short-term rental market continues to evolve rapidly. By staying informed about ${category.toLowerCase()} and implementing best practices, you can maximize your revenue and minimize stress. MY VA BUDDY is here to help you every step of the way.</p>
        `;
    };

    const blogPosts = generateBlogPosts();

    // Sidebar Questions
    const sidebarQuestions = [
        { id: 1, question: "Market Trends & Forecasts", category: "Market Trends", icon: "📈" },
        { id: 2, question: "Airbnb Rules & Regulations Updates", category: "Airbnb Rules & Regulations", icon: "⚖️" },
        { id: 3, question: "Revenue & Pricing Optimization", category: "Revenue Strategy", icon: "💰" },
        { id: 4, question: "Guest Communication & Experience", category: "Guest Experience", icon: "💬" },
        { id: 5, question: "Tools, Tech & Automation", category: "Tools & Technology", icon: "🔧" },
        { id: 6, question: "Property Management Tips", category: "Property Management", icon: "🏠" },
        { id: 7, question: "Host Success Stories", category: "Host Success Stories", icon: "⭐" },
        { id: 8, question: "Listing Optimization Guide", category: "Listing Optimization", icon: "📸" }
    ];

    const filteredPosts = filterCategory
        ? blogPosts.filter(post => post.category === filterCategory)
        : blogPosts;

    const featuredPost = filteredPosts[0];
    const remainingPosts = filteredPosts.slice(1);

    if (selectedPost) {
        const relatedPosts = blogPosts.filter(post =>
            post.id !== selectedPost.id && post.category === selectedPost.category
        ).slice(0, 3);

        return <SingleBlogPost post={selectedPost} onBack={() => setSelectedPost(null)} relatedPosts={relatedPosts} />;
    }

    return (
        <div className="blog-page">
            {/* Hero Section */}
            <div className="blog-hero">
                <div className="blog-hero-badge">MY VA BUDDY BLOG</div>
                <h1 className="blog-hero-title">
                    Insights for<br />
                    <span>Smart Hosts</span>
                </h1>
                <p className="blog-hero-description">
                    Expert insights, industry trends, and actionable strategies to help you maximize<br />
                    your short-term rental success.
                </p>
            </div>

            {/* Filter Bar */}
            {filterCategory && (
                <div className="filter-bar">
                    <span>Showing: <strong>{filterCategory}</strong> ({filteredPosts.length} articles)</span>
                    <button className="clear-filter" onClick={() => setFilterCategory(null)}>Clear Filter ✕</button>
                </div>
            )}

            {/* Main Content with Sidebar */}
            <div className="blog-main-layout">
                {/* Blog Posts - Left Side */}
                <div className="blog-posts-vertical">
                    {/* Featured Article - Large Card */}
                    {featuredPost && (
                        <div className="featured-article" onClick={() => setSelectedPost(featuredPost)}>
                            <div className="featured-badge">Featured</div>
                            <div className="featured-image-large">
                                <img src={featuredPost.image} alt={featuredPost.title} />
                            </div>
                            <div className="featured-content-large">
                                <div className="featured-meta">
                                    <span className="featured-category">{featuredPost.category}</span>
                                    <span className="featured-date">{featuredPost.date}</span>
                                </div>
                                <h2 className="featured-title-large">{featuredPost.title}</h2>
                                <p className="featured-excerpt-large">{featuredPost.excerpt}</p>
                                <div className="featured-author-large">
                                    <span className="author-name">{featuredPost.author}</span>
                                    <span className="author-read">{featuredPost.readTime}</span>
                                </div>
                                <button className="read-article-btn">Read Article →</button>
                            </div>
                        </div>
                    )}

                    {/* Regular Blog List - 1,2,3,4... */}
                    {remainingPosts.map((post, index) => (
                        <div
                            key={post.id}
                            className="blog-card-vertical"
                            onClick={() => setSelectedPost(post)}
                        >
                            <div className="blog-card-number">{index + 2}</div>
                            <div className="blog-card-image-vertical">
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="blog-card-content-vertical">
                                <div className="blog-card-meta-vertical">
                                    <span className="blog-card-category">{post.category}</span>
                                    <span className="blog-card-date">{post.date}</span>
                                    <span className="blog-card-read-time">{post.readTime}</span>
                                </div>
                                <h3 className="blog-card-title-vertical">{post.title}</h3>
                                <p className="blog-card-excerpt-vertical">{post.excerpt}</p>
                                <div className="blog-card-footer-vertical">
                                    <div className="blog-card-author-vertical">
                                        <span className="author-avatar">👤</span>
                                        <span className="author-name">{post.author}</span>
                                    </div>
                                    <button className="read-more-btn">Read Article →</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sidebar - Right Side */}
                <div className="blog-sidebar">
                    <div className="sidebar-card">
                        <h3 className="sidebar-title">Browse by Topic</h3>
                        <ul className="sidebar-questions">
                            {sidebarQuestions.map(q => (
                                <li key={q.id} onClick={() => setFilterCategory(q.category)}>
                                    <span className="question-icon">{q.icon}</span>
                                    <span className="question-text">{q.question}</span>
                                    <span className="question-arrow">→</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="sidebar-card">
                        <h3 className="sidebar-title">Need Expert Help?</h3>
                        <p className="sidebar-text">Let MY VA BUDDY handle your property management while you focus on growth.</p>
                        <button className="sidebar-btn" onClick={() => window.location.href = '/contact'}>
                            Get Started Today →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Single Blog Post Component
function SingleBlogPost({ post, onBack, relatedPosts }) {
    return (
        <>
            <div className="single-post-page">
                <div className="single-post-container">
                    <button className="back-to-blog" onClick={onBack}>
                        ← Back to Blog
                    </button>

                    <div className="post-header">
                        <div className="post-meta">
                            <span className="post-category">{post.category}</span>
                            <span className="post-date">{post.fullDate}</span>
                            <span className="post-read-time">{post.readTime}</span>
                        </div>
                        <h1 className="post-title">{post.title}</h1>
                        <div className="post-author-info">
                            <div className="author-detail">
                                <span className="author-label">Published:</span>
                                <span className="author-value">{post.fullDate}</span>
                            </div>
                            <div className="author-detail">
                                <span className="author-label">Category:</span>
                                <span className="author-value">{post.category}</span>
                            </div>
                            <div className="author-detail">
                                <span className="author-label">Read time:</span>
                                <span className="author-value">{post.readTime}</span>
                            </div>
                        </div>
                        <div className="post-author-verified">
                            <span className="author-name-large">{post.author}</span>
                            <span className="verified-badge">Content Author · Verified</span>
                            <span className="share-text">Share</span>
                            <span className="team-name">MY VA BUDDY Content Team</span>
                        </div>
                    </div>

                    <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

                    <div className="post-cta">
                        <h3>Need Expert Help?</h3>
                        <p>Let MY VA BUDDY handle your property management while you focus on growth.</p>
                        <button className="cta-button" onClick={() => window.location.href = '/contact'}>
                            Get Started Today →
                        </button>
                    </div>
                </div>
            </div>

            {/* Related Articles Section */}
            <div className="related-articles-section">
                <div className="related-container">
                    <h2 className="related-title">Related Articles</h2>

                    {relatedPosts.map((relatedPost, idx) => (
                        <div key={relatedPost.id} className="related-article-card" onClick={() => window.location.reload()}>
                            <div className="related-article-category-date">
                                <span className="related-category">{relatedPost.category}</span>
                                <span className="related-date">{relatedPost.date}</span>
                            </div>
                            <h3 className="related-article-title">{relatedPost.title}</h3>
                            <p className="related-excerpt">{relatedPost.longExcerpt || relatedPost.excerpt}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <FooterComponent />
        </>
    );
}

// Footer Component
function FooterComponent() {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-column">
                    <div className="footer-logo">
                        <span className="logo-icon">🏨</span>
                        <span className="logo-text">MY VA<span className="logo-highlight">BUDDY</span></span>
                    </div>
                    <p className="footer-description">
                        Transform your short-term rental business with expert cohosting services that maximize revenue and minimize stress.
                    </p>
                    <div className="footer-contact">
                        <h4>GET IN TOUCH</h4>
                        <p>📧 hello@myvabuddy.com</p>
                        <p>📞 +1 (973) 200-3160</p>
                    </div>
                    <div className="footer-copyright">
                        © 2025 MY VA BUDDY. All rights reserved.
                    </div>
                </div>

                <div className="footer-column">
                    <h4>SERVICES</h4>
                    <ul>
                        <li><a href="/property-management">Property Management</a></li>
                        <li><a href="/guest-services">Guest Services</a></li>
                        <li><a href="/dynamic-pricing">Dynamic Pricing</a></li>
                        <li><a href="/support">24/7 Support</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>RESOURCES</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/case-studies">Case Studies</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>GET STARTED</h4>
                    <ul>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/free-consultation">Free Consultation</a></li>
                        <li><a href="/partner-portal">Partner Portal</a></li>
                        <li><a href="/resources">Resources</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-links">
                    <a href="/privacy">Privacy Policy</a>
                    <span className="separator">|</span>
                    <a href="/terms">Terms of Service</a>
                    <span className="separator">|</span>
                    <a href="/sms-terms">SMS Terms</a>
                    <span className="separator">|</span>
                    <a href="/gdpr">GDPR</a>
                </div>
            </div>
        </footer>
    );
}

export default Blog;