import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <div className="about-hero">
                <div className="about-hero-badge">ABOUT MY VA BUDDY</div>
                <h1 className="about-hero-title">
                    Transforming<br />
                    <span>Rental Success</span>
                </h1>
                <p className="about-hero-description">
                    We're passionate about helping property owners maximize their rental income<br />
                    through expert cohosting services and cutting-edge technology.
                </p>
            </div>

            {/* Two Columns Layout */}
            <div className="about-two-columns">
                {/* Left Column */}
                <div className="about-left">
                    <div className="mission-badge">Our Mission</div>
                    <h2 className="mission-title">Empowering Property Owners to Thrive</h2>
                    <p className="mission-text">
                        Founded in 2022, MY VA BUDDY was born from a simple belief: property owners shouldn't have to choose
                        between maximizing revenue and maintaining their sanity.
                    </p>
                    <p className="mission-text">
                        We combine industry expertise with advanced technology to deliver exceptional guest experiences
                        while optimizing every aspect of your rental business. From 24/7 guest communication to dynamic
                        pricing strategies, we handle the complexities so you can focus on what matters most - growing
                        your portfolio.
                    </p>

                    {/* Bottom Two Small Cards */}
                    <div className="left-stats-cards">
                        <div className="left-stat-card">
                            <div className="left-stat-number">2022</div>
                            <div className="left-stat-details">
                                <div className="left-stat-line">Founded</div>
                                <div className="left-stat-line">Growth</div>
                                <div className="left-stat-line">Revenue Optimization</div>
                            </div>
                        </div>
                        <div className="left-stat-card">
                            <div className="left-stat-number">15min</div>
                            <div className="left-stat-details">
                                <div className="left-stat-line">Response</div>
                                <div className="left-stat-line">Guarantee</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="about-right">
                    <div className="right-stats-grid">
                        <div className="right-stat-card">
                            <div className="right-stat-number">100+</div>
                            <div className="right-stat-label">Happy Hosts</div>
                        </div>
                        <div className="right-stat-card">
                            <div className="right-stat-number">500+</div>
                            <div className="right-stat-label">Properties Managed</div>
                        </div>
                        <div className="right-stat-card">
                            <div className="right-stat-number">$2M+</div>
                            <div className="right-stat-label">Revenue Generated</div>
                        </div>
                        <div className="right-stat-card">
                            <div className="right-stat-number">4.9/5</div>
                            <div className="right-stat-label">Client Satisfaction</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Leadership Team Section */}
            <div className="leadership-section">
                <div className="leadership-header">
                    <div className="leadership-badge">LEADERSHIP TEAM</div>
                    <h2 className="leadership-title">Meet Our Leaders</h2>
                    <p className="leadership-description">
                        Our experienced leadership team is dedicated to driving innovation and delivering<br />
                        exceptional results for our clients.
                    </p>
                </div>

                <div className="team-grid">
                    <div className="team-card">
                        <div className="team-avatar">👤</div>
                        <h3 className="team-name">Irtaza Hyder</h3>
                        <div className="team-position">CEO</div>
                        <p className="team-bio">
                            Visionary leader with 8+ years in hospitality and property management. Irtaza founded MY VA BUDDY with a mission to transform rental success.
                        </p>
                    </div>

                    <div className="team-card">
                        <div className="team-avatar">👤</div>
                        <h3 className="team-name">Basit Ali</h3>
                        <div className="team-position">COO</div>
                        <p className="team-bio">
                            Operations expert who ensures seamless execution across all client properties. Basit brings 6+ years of operational excellence.
                        </p>
                    </div>

                    <div className="team-card">
                        <div className="team-avatar">👤</div>
                        <h3 className="team-name">Mahad Ali</h3>
                        <div className="team-position">CHRO</div>
                        <p className="team-bio">
                            Human resource strategist focused on building exceptional teams and fostering a culture of growth and innovation.
                        </p>
                    </div>
                </div>
            </div>
            {/* Our Values Section */}
            <div className="values-section">
                <div className="values-header">
                    <div className="values-badge">OUR VALUES</div>
                    <h2 className="values-title">What Drives Us</h2>
                    <p className="values-description">
                        Our core values guide every decision we make and every service we provide.
                    </p>
                </div>

                <div className="values-grid">
                    {/* Value 1 - Client-First Approach */}
                    <div className="value-card">
                        <div className="value-icon">🎯</div>
                        <h3 className="value-title">Client-First Approach</h3>
                        <p className="value-text">
                            Every decision we make is centered around maximizing our clients' success and satisfaction.
                        </p>
                    </div>

                    {/* Value 2 - Innovation & Technology */}
                    <div className="value-card">
                        <div className="value-icon">⚡</div>
                        <h3 className="value-title">Innovation & Technology</h3>
                        <p className="value-text">
                            We leverage cutting-edge tools and automation to stay ahead of industry trends.
                        </p>
                    </div>

                    {/* Value 3 - Trust & Transparency */}
                    <div className="value-card">
                        <div className="value-icon">🔒</div>
                        <h3 className="value-title">Trust & Transparency</h3>
                        <p className="value-text">
                            Complete transparency in our operations, pricing, and performance metrics.
                        </p>
                    </div>

                    {/* Value 4 - Excellence in Service */}
                    <div className="value-card">
                        <div className="value-icon">⭐</div>
                        <h3 className="value-title">Excellence in Service</h3>
                        <p className="value-text">
                            We maintain the highest standards in guest communication and property management.
                        </p>
                    </div>
                </div>
            </div>
            {/* Ready to Partner Section */}
            <div className="partner-section">
                <div className="partner-container">
                    <h2 className="partner-title">Ready to Partner with Industry Leaders?</h2>
                    <p className="partner-description">
                        Join our growing community of successful property owners who trust MY VA BUDDY with their rental business.
                    </p>
                    <div className="partner-buttons">
                        <button className="partner-primary-btn" onClick={() => window.location.href = '/get-started'}>
                            Start Your Partnership →
                        </button>
                        <button className="partner-secondary-btn" onClick={() => window.location.href = '/schedule-call'}>
                            Schedule a Call
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
                            <span className="logo-text">MY VA <span className="logo-highlight">BUDDY</span></span>
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

export default About;