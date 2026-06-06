import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        properties: '',
        goals: ''
    });

    const [consent, setConsent] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!consent) {
            alert('Please agree to the SMS terms to continue.');
            return;
        }
        console.log('Form submitted:', formData);
        alert('Thank you for reaching out! We will get back to you within 24 hours.');
        setFormData({ fullName: '', email: '', phone: '', properties: '', goals: '' });
        setConsent(false);
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <div className="contact-hero">
                <div className="contact-hero-badge">CONTACT US</div>
                <h1 className="contact-hero-title">
                    Let's Start Your<br />
                    <span>Success Story</span>
                </h1>
                <p className="contact-hero-description">
                    Ready to transform your rental business? Get in touch with our team for a free<br />
                    consultation and personalized strategy session.
                </p>
            </div>

            {/* Support Cards Section - 3 Cards */}
            <div className="support-cards-section">
                <div className="support-card">
                    <div className="support-icon">📞</div>
                    <div className="support-content">
                        <h3>Phone Support</h3>
                        <p>Speak directly with our team</p>
                        <p className="support-number">+1 (973) 200-3160</p>
                        <p className="support-time">24/7 Emergency Line</p>
                    </div>
                </div>

                <div className="support-card">
                    <div className="support-icon">✉️</div>
                    <div className="support-content">
                        <h3>Email Support</h3>
                        <p>Get detailed responses</p>
                        <p className="support-number">hello@myvabuddy.com</p>
                        <p className="support-time">Response within 2 hours</p>
                    </div>
                </div>

                <div className="support-card">
                    <div className="support-icon">💬</div>
                    <div className="support-content">
                        <h3>Live Chat</h3>
                        <p>Instant messaging support</p>
                        <p className="support-number">Available on website</p>
                        <p className="support-time">Mon–Fri 9AM–6PM EST</p>
                    </div>
                </div>
            </div>

            {/* Get Started + FAQ Section - Two Columns */}
            <div className="get-started-faq-section">
                {/* Left Side - Form */}
                <div className="get-started-left">
                    <h2 className="section-title">Get Started Today</h2>
                    <p className="section-subtitle">
                        Fill out the form below and we'll get back to you within 24 hours with a personalized proposal.
                    </p>

                    <form className="contact-form-full" onSubmit={handleSubmit}>
                        <div className="form-group-full">
                            <label>Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Your full name"
                                required
                            />
                        </div>

                        <div className="form-group-full">
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                required
                            />
                        </div>

                        <div className="form-group-full">
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+1 (555) 123-4567"
                                required
                            />
                        </div>

                        <div className="form-group-full">
                            <label>Number of Properties</label>
                            <select name="properties" value={formData.properties} onChange={handleChange} required>
                                <option value="">Select range</option>
                                <option value="1">1 property</option>
                                <option value="2-5">2-5 properties</option>
                                <option value="6-10">6-10 properties</option>
                                <option value="10+">10+ properties</option>
                            </select>
                        </div>

                        <div className="form-group-full">
                            <label>Tell us about your goals</label>
                            <textarea
                                name="goals"
                                rows="4"
                                value={formData.goals}
                                onChange={handleChange}
                                placeholder="What are your main goals with short-term rental management?"
                                required
                            ></textarea>
                        </div>

                        <div className="checkbox-group">
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    checked={consent}
                                    onChange={(e) => setConsent(e.target.checked)}
                                />
                                <span className="checkbox-text">
                                    By checking this box, I consent to receive text messages related to property management services
                                    from MY VA BUDDY. You can reply "STOP" at any time to opt out. Message and data rates may apply.
                                    Message frequency may vary, text HELP to +1 (973) 200-3160 for assistance. For more information,
                                    please refer to our Privacy Policy and SMS Terms & Conditions.
                                </span>
                            </label>
                        </div>

                        <button type="submit" className="send-message-btn">Send Message</button>
                    </form>
                </div>

                {/* Right Side - FAQ */}
                <div className="faq-right">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <p className="section-subtitle">
                        Find quick answers to the most common questions about our cohosting services.
                    </p>

                    <div className="faq-list">
                        <div className="faq-item">
                            <h3>How quickly do you respond to guest inquiries?</h3>
                            <p>We guarantee a response within 15 minutes, 24/7. Our team is always monitoring your property communications.</p>
                        </div>

                        <div className="faq-item">
                            <h3>What are your fees for cohosting?</h3>
                            <p>Our fees are competitive and transparent, and depend on your portfolio size and specific service requirements. Contact us for a personalized quote tailored to your needs.</p>
                        </div>

                        <div className="faq-item">
                            <h3>Do you handle property maintenance and cleaning?</h3>
                            <p>Yes, we coordinate all cleaning between guests and manage maintenance issues. We work with vetted local service providers.</p>
                        </div>

                        <div className="faq-item">
                            <h3>Can I still have control over my property?</h3>
                            <p>Absolutely! You maintain full ownership and final say. We provide recommendations and handle day-to-day operations based on your preferences.</p>
                        </div>
                    </div>

                    <div className="need-assistance">
                        <h3>Need immediate assistance?</h3>
                        <p>Our team is available 24/7 for emergency support and urgent inquiries.</p>
                    </div>
                </div>
            </div>

            {/* Final CTA Section */}
            <div className="final-cta-section">
                <div className="final-cta-container">
                    <h2>Ready to Get Started?</h2>
                    <p>Join hundreds of successful hosts who've transformed their rental business with MY VA BUDDY.</p>
                    <div className="final-cta-buttons">
                        <button className="cta-primary" onClick={() => window.location.href = '/schedule-call'}>
                            Schedule Free Consultation →
                        </button>
                        <button className="cta-secondary" onClick={() => window.location.href = '/case-studies'}>
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
                            <span className="logo-text">MY VA <span className="logo-highlight">BUDDY</span></span>
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

export default Contact;