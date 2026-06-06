import React from 'react';
import './Services.css';

function Services() {
    return (
        <div className="services-page">
            {/* Hero Section */}
            <div className="services-hero">
                <div className="services-hero-badge">OUR SERVICES</div>
                <h1 className="services-hero-title">
                    Complete<br />
                    <span>Cohosting Solutions</span>
                </h1>
                <p className="services-hero-description">
                    We handle every aspect of your short-term rental business so you can focus on<br />
                    growing your portfolio and maximizing returns.
                </p>
                <button className="services-hero-btn" onClick={() => window.location.href = '/get-started'}>
                    Get Started Today →
                </button>
            </div>

            {/* Everything You Need Section */}
            <div className="everything-section">
                <div className="everything-header">
                    <h2>Everything You Need</h2>
                    <p>Our comprehensive suite of services covers every aspect of short-term rental management</p>
                </div>

                {/* First Row - 3 Cards */}
                <div className="features-grid-three">
                    <div className="feature-card">
                        <div className="feature-icon">💬</div>
                        <h3>24/7 Guest Communication</h3>
                        <p>We handle all guest inquiries within 15 minutes, guaranteed. From booking questions to emergency support.</p>
                        <ul className="feature-list">
                            <li>Instant response guarantee</li>
                            <li>Professional communication</li>
                            <li>Emergency hotline</li>
                            <li>Multi-language support</li>
                            <li>Guest satisfaction tracking</li>
                        </ul>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">📊</div>
                        <h3>Dynamic Pricing Optimization</h3>
                        <p>AI-powered pricing that maximizes your revenue based on demand, seasonality, and local events.</p>
                        <ul className="feature-list">
                            <li>Real-time market analysis</li>
                            <li>Seasonal adjustments</li>
                            <li>Local event monitoring</li>
                            <li>Competitor price tracking</li>
                            <li>Revenue maximization</li>
                        </ul>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">📝</div>
                        <h3>Listing Management</h3>
                        <p>Professional optimization of your listings across all major platforms for maximum visibility.</p>
                        <ul className="feature-list">
                            <li>Professional photography</li>
                            <li>SEO-optimized descriptions</li>
                            <li>Multi-platform sync</li>
                            <li>Performance monitoring</li>
                            <li>A/B testing</li>
                        </ul>
                    </div>
                </div>

                {/* Second Row - 3 Aesthetic Cards */}
                <div className="features-grid-three second-row">
                    <div className="feature-card aesthetic-card">
                        <div className="feature-icon-wrapper">
                            <div className="feature-icon-bg">🔧</div>
                        </div>
                        <h3>Property Maintenance</h3>
                        <p>24/7 emergency response and scheduled maintenance with trusted local vendors.</p>
                        <ul className="feature-list">
                            <li>24/7 emergency response</li>
                            <li>Trusted vendor network</li>
                            <li>Preventive maintenance</li>
                            <li>Regular inspections</li>
                            <li>Cost optimization</li>
                        </ul>
                        <div className="card-accent"></div>
                    </div>

                    <div className="feature-card aesthetic-card">
                        <div className="feature-icon-wrapper">
                            <div className="feature-icon-bg">📈</div>
                        </div>
                        <h3>Revenue Analytics</h3>
                        <p>Detailed insights and reporting to track performance and identify growth opportunities.</p>
                        <ul className="feature-list">
                            <li>Real-time dashboard</li>
                            <li>Performance metrics</li>
                            <li>Occupancy tracking</li>
                            <li>Revenue forecasting</li>
                            <li>Custom reporting</li>
                        </ul>
                        <div className="card-accent"></div>
                    </div>

                    <div className="feature-card aesthetic-card">
                        <div className="feature-icon-wrapper">
                            <div className="feature-icon-bg">✓</div>
                        </div>
                        <h3>Guest Screening</h3>
                        <p>Rigorous verification process to ensure only quality guests book your property.</p>
                        <ul className="feature-list">
                            <li>ID verification</li>
                            <li>Previous reviews check</li>
                            <li>Risk assessment</li>
                            <li>Fraud detection</li>
                            <li>Secure booking</li>
                        </ul>
                        <div className="card-accent"></div>
                    </div>
                </div>
            </div>

            {/* How We Work Together Section */}
            <div className="process-section">
                <div className="process-header">
                    <h2>How We Work Together</h2>
                    <p>Our proven process ensures smooth onboarding and ongoing success for every partnership</p>
                </div>

                <div className="process-steps-three">
                    <div className="process-step-card">
                        <div className="step-number-circle">1</div>
                        <h3>Discovery Call</h3>
                        <p>We start with a comprehensive consultation to understand your properties, goals, and current operations.</p>
                        <div className="step-connector"></div>
                    </div>

                    <div className="process-step-card">
                        <div className="step-number-circle">2</div>
                        <h3>Custom Setup</h3>
                        <p>Our team handles complete setup including listing optimization, pricing strategy, and system integration.</p>
                        <div className="step-connector"></div>
                    </div>

                    <div className="process-step-card">
                        <div className="step-number-circle">3</div>
                        <h3>Ongoing Success</h3>
                        <p>Continuous optimization, regular reporting, and dedicated support to maximize your rental performance.</p>
                    </div>
                </div>
            </div>

            {/* Ready to Transform Section */}
            <div className="services-cta-section">
                <div className="services-cta-container">
                    <h2 className="services-cta-title">Ready to Transform Your Rental Business?</h2>
                    <p className="services-cta-description">
                        Join hundreds of successful hosts who've automated their operations and maximized their revenue.
                    </p>
                    <div className="services-cta-buttons">
                        <button className="cta-primary-btn" onClick={() => window.location.href = '/free-consultation'}>
                            Start Free Consultation →
                        </button>
                        <button className="cta-secondary-btn" onClick={() => window.location.href = '/case-studies'}>
                            View Case Studies
                        </button>
                    </div>
                </div>
            </div>
            <footer className="footer-section">
                <div className="footer-container">
                    {/* Left Column - Logo and Description */}
                    <div className="footer-column">
                        <div className="footer-logo">
                            <span className="logo-icon">🏨</span>
                            <span className="logo-text">MY VA BUDDY<span className="logo-highlight">DUDDY</span></span>
                        </div>
                        <p className="footer-description">
                            Transform your short-term rental business with expert cohosting services that maximize revenue and minimize stress.
                        </p>
                        <div className="footer-contact">
                            <h4>GET IN TOUCH</h4>
                            <p>📧 hello@myvaduddy.com</p>
                            <p>📞 +1 (973) 200-3160</p>
                        </div>
                        <div className="footer-copyright">
                            © 2025 MY VA BUDDY. All rights reserved.
                        </div>
                    </div>

                    {/* Middle Left Column - Services */}
                    <div className="footer-column">
                        <h4>SERVICES</h4>
                        <ul>
                            <li><a href="/property-management">Property Management</a></li>
                            <li><a href="/guest-services">Guest Services</a></li>
                            <li><a href="/dynamic-pricing">Dynamic Pricing</a></li>
                            <li><a href="/support">24/7 Support</a></li>
                        </ul>
                    </div>

                    {/* Middle Right Column - Resources */}
                    <div className="footer-column">
                        <h4>RESOURCES</h4>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/case-studies">Case Studies</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/faq">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Right Column - Get Started */}
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

                {/* Bottom Links */}
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
        </div>
    );
}

export default Services;