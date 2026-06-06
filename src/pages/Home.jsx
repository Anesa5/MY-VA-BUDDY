import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Home.css';

function Home() {
    const [counts, setCounts] = useState({
        properties: 0,
        satisfaction: 0,
        support: 0
    });

    // Smooth scroll function for pricing section
    const scrollToPricing = () => {
        const pricingSection = document.getElementById('pricing-section');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Chat Widget Effect
    useEffect(() => {
        const qaSequence = [
            { id: 1, question: "What's the check-in time?", answer: "Check-in is from 3 PM – 10 PM. Late check-in available upon request." },
            { id: 2, question: "Is parking included?", answer: "Yes! Free private parking on premises." },
            { id: 3, question: "Do you provide extra blankets?", answer: "Absolutely. Extra blankets and pillows are in the hallway closet." },
            { id: 4, question: "Can I extend my stay?", answer: "Of course! Just message us 24h before checkout." },
            { id: 5, question: "Is there a cleaning fee?", answer: "Yes, a one-time $45 cleaning fee applies." }
        ];

        let currentIndex = 0;
        let autoRevealInterval = null;
        let currentTypingIndicator = null;
        let isChatInitialized = false;
        const chatFeed = document.getElementById('chatFeed');
        if (!chatFeed || isChatInitialized) return;
        isChatInitialized = true;

        function getCurrentTime() { const now = new Date(); return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); }
        function scrollChatToBottom() { if (chatFeed) chatFeed.scrollTop = chatFeed.scrollHeight; }

        function addChatMessage(role, text, customMeta = null) {
            const wrapper = document.createElement('div');
            wrapper.className = `message-wrapper ${role === 'guest' ? 'guest-message' : 'strivestays-message'}`;
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            bubble.innerText = text;
            wrapper.appendChild(bubble);
            const metaDiv = document.createElement('div');
            metaDiv.className = 'message-meta';
            if (customMeta) metaDiv.innerHTML = customMeta;
            else metaDiv.innerHTML = `${role === 'guest' ? 'Guest' : 'MY VA BUDDY'} • ${getCurrentTime()}`;
            wrapper.appendChild(metaDiv);
            chatFeed.appendChild(wrapper);
            scrollChatToBottom();
            return wrapper;
        }

        function showTypingIndicator() {
            if (currentTypingIndicator?.parentNode) currentTypingIndicator.remove();
            const typingDiv = document.createElement('div');
            typingDiv.className = 'typing-indicator';
            typingDiv.innerHTML = `<span class="typing-text">MY VA BUDDY is typing</span><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>`;
            chatFeed.appendChild(typingDiv);
            currentTypingIndicator = typingDiv;
            scrollChatToBottom();
            return typingDiv;
        }
        function hideTypingIndicator() { if (currentTypingIndicator?.parentNode) { currentTypingIndicator.remove(); currentTypingIndicator = null; } }

        function addQAPair(qaItem) {
            addChatMessage('guest', qaItem.question, `Guest • just now`);
            setTimeout(() => {
                showTypingIndicator();
                setTimeout(() => {
                    hideTypingIndicator();
                    addChatMessage('strivestays', qaItem.answer, `MY VA BUDDY • just now ⚡ responded`);
                    const chip = document.createElement('div');
                    chip.className = 'response-chip';
                    chip.innerText = `✓ Responded in under 2 minutes`;
                    chatFeed.appendChild(chip);
                    scrollChatToBottom();
                }, 1200);
            }, 200);
        }
        function revealNextQAPair() { addQAPair(qaSequence[currentIndex % qaSequence.length]); currentIndex++; }
        function startAutoReveal() { if (autoRevealInterval) clearInterval(autoRevealInterval); autoRevealInterval = setInterval(revealNextQAPair, 8000); }
        function addInitialMessages() {
            setTimeout(() => {
                const divider = document.createElement('div');
                divider.style.cssText = 'text-align:center;font-size:0.7rem;color:#F5365D;margin:0.3rem 0;padding:0.2rem;background:#fff0f2;border-radius:20px';
                divider.innerText = '─── 💬 Frequently Asked Questions ───';
                chatFeed.appendChild(divider);
                scrollChatToBottom();
            }, 1000);
        }
        startAutoReveal();
        addInitialMessages();
        return () => { if (autoRevealInterval) clearInterval(autoRevealInterval); };
    }, []);

    // Counting Animation
    useEffect(() => {
        const duration = 2000, steps = 60, stepTime = duration / steps;
        const targetProperties = 500, targetSatisfaction = 95, targetSupport = 24;
        let currentStep = 0;
        const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            setCounts({
                properties: Math.min(Math.floor(progress * targetProperties), targetProperties),
                satisfaction: Math.min(Math.floor(progress * targetSatisfaction), targetSatisfaction),
                support: Math.min(Math.floor(progress * targetSupport), targetSupport)
            });
            if (currentStep >= steps) clearInterval(interval);
        }, stepTime);
        return () => clearInterval(interval);
    }, []);

    // FAQ Accordion Effect
    useEffect(() => {
        const faqItems = document.querySelectorAll('.faq-item-center');
        const handleClick = (item) => {
            return () => {
                faqItems.forEach(other => {
                    if (other !== item && other.classList.contains('active')) {
                        other.classList.remove('active');
                    }
                });
                item.classList.toggle('active');
            };
        };
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question-center');
            if (question) {
                const clickHandler = handleClick(item);
                question.addEventListener('click', clickHandler);
                item.clickHandler = clickHandler;
            }
        });
        return () => {
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question-center');
                if (question && item.clickHandler) {
                    question.removeEventListener('click', item.clickHandler);
                }
            });
        };
    }, []);

    // Scroll Reveal Animation
    useEffect(() => {
        const revealElements = document.querySelectorAll('.hosts-section, .partnership-section, .statistics-section, .about-story-section, .we-do-different-section, .services-badge-section, .main-two-columns, .support-stats-section, .testimonial-section, .pricing-section-new, .faq-section-center, .transform-section, .testimonials-two-section, .bottom-cta-boxes, .final-bottom-banner');

        const revealOnScroll = () => {
            revealElements.forEach(element => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const revealPoint = 100;
                if (elementTop < windowHeight - revealPoint) {
                    element.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll();
        return () => window.removeEventListener('scroll', revealOnScroll);
    }, []);

    return (
        <div className="home-container">
            {/* Happy Hosts Section */}
            <div className="hosts-section">
                <div className="hosts-wrapper">
                    <div className="hosts-images">
                        <div className="host-avatar"><img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Host" className="host-image" /></div>
                        <div className="host-avatar"><img src="https://randomuser.me/api/portraits/men/72.jpg" alt="Host" className="host-image" /></div>
                        <div className="host-avatar"><img src="https://randomuser.me/api/portraits/women/75.jpg" alt="Host" className="host-image" /></div>
                        <div className="host-avatar"><img src="https://randomuser.me/api/portraits/men/78.jpg" alt="Host" className="host-image" /></div>
                    </div>
                    <div className="hosts-stats">
                        <span className="hosts-text">100+ Happy Hosts</span>
                        <div className="star-rating"><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span></div>
                        <span className="rating-text">4.9/5 Rating</span>
                    </div>
                </div>
            </div>

            {/* Partnership Section */}
            <div className="partnership-section">
                <div className="partnership-content">
                    <h2 className="partnership-title">Only Care About Growing Your Portfolio?</h2>
                    <p className="partnership-description">Yeah, we get it. If you're running a vacation rental business and tired of drowning in day-to-day operations — you're in the right place. We are your Virtual Operations Team. You close the deals, we run the fulfilment. </p>
                    <div className="partnership-buttons">
                        <Link to="/services">
                            <button className="start-btn"><span className="video-icon">▶</span>See How It Works</button>
                        </Link>
                    </div>
                </div>
                <div className="partnership-chat">
                    <div className="support-container">
                        <div className="chat-header"><div className="avatar">🏠</div><div className="header-info"><h2>MY VA BUDDY Support</h2><div className="status-row"><span className="online-dot"></span><span>Always Online</span><span className="response-badge">Responds in 3 min</span></div></div></div>
                        <div className="chat-feed" id="chatFeed">
                            <div className="message-wrapper guest-message"><div className="bubble">Hi! I'm having trouble with the WiFi password. Can you help?</div><div className="message-meta">Guest • just now</div></div>
                            <div className="message-wrapper strivestays-message"><div className="bubble">Of course! The WiFi password is 'Welcome2023'.</div><div className="message-meta">MY VA BUDDY • just now</div></div>
                            <div className="response-chip">✓ Responded in 2 minutes</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="statistics-section">
                <div className="statistics-wrapper">
                    <div className="stat-item"><h3>{counts.properties}+</h3><p>Properties Managed</p></div>
                    <div className="stat-item"><h3 className="static-number">$2M+</h3><p>Revenue Generated</p></div>
                    <div className="stat-item"><h3>{counts.satisfaction}%</h3><p>Guest Satisfaction</p></div>
                    <div className="stat-item"><h3>{counts.support}/7</h3><p>Support Available</p></div>
                </div>
            </div>

            {/* SECTION 4 - About / Our Story */}
            <div className="about-story-section">
                <div className="about-story-container">
                    <h2 className="about-story-headline">
                        We Built This Because Growing a Rental Business<br />
                        Shouldn't Mean Building a Full Team
                    </h2>
                    <div className="about-story-content">
                        <p className="about-story-text">
                            Most vacation rental companies and co-hosting businesses hit a growth ceiling — not because they lack clients
                            or properties, but because operations eat all their time and budget. Hiring guest support, training cleaners,
                            managing OTAs, fixing pricing — it never ends.
                        </p>
                        <p className="about-story-text">
                            My VA Buddy is a preset virtual operations team that contracts directly with your business. One agreement,
                            full fulfilment support. No HR, no salaries, no overhead — just results.
                        </p>
                        <p className="about-story-text mission-text">
                            Our mission: Let you focus on portfolio growth while we make sure every guest, every listing, and every
                            operation runs smoothly behind the scenes.
                        </p>
                        <Link to="/about">
                            <button className="about-story-btn">Learn More About Us →</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* SECTION 5 - We Do Things Differently */}
            <div className="we-do-different-section">
                <div className="we-do-different-container">
                    <h2 className="we-do-different-headline">
                        Other Companies Make You Build a Team.<br />
                        We Are Your Team.
                    </h2>
                    <div className="we-do-different-content">
                        <p className="we-do-different-text">
                            Traditional STR businesses hire virtual assistants one by one — spending weeks training them,
                            managing them, replacing them. That's not scaling, that's surviving.
                        </p>
                        <p className="we-do-different-text">
                            We work differently. My VA Buddy plugs a preset operations team directly into your business
                            through your existing PMS. Guest messages answered, cleaners scheduled, listings optimized,
                            prices updated — all without you lifting a finger.
                        </p>
                        <p className="we-do-different-text">
                            No over-promising. No long onboarding. Just a remote team that already knows how to run
                            short-term rentals at scale.
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Badge Section */}
            <div className="services-badge-section">
                <div className="services-badge">
                    <span className="badge-icon">⚡</span>
                    <span className="badge-text">See What We Handle</span>
                </div>
                <h2 className="services-title">Ready to Scale Without the Hiring Headache? </h2>
                <p className="services-description">My VA Buddy gives vacation rental companies and Airbnb co-hosting businesses a plug-in remote operations team — at a fraction of the cost of building an in-house team. Guest support, pricing, listings, coordination — all handled. You just grow. </p>
            </div>

            {/* MAIN TWO COLUMN SECTION */}
            <div className="main-two-columns">
                {/* LEFT COLUMN */}
                <div className="left-column">
                    <div className="card listing-card">
                        <div className="listing-card-header">
                            <div className="settings-icon">⚙️</div>
                            <div className="rating-badge-card">5.0★ Average Rating</div>
                        </div>
                        <div className="listing-optimization">
                            <h3>Listing Optimization</h3>
                            <p>Professional listings that convert browsers into bookers. We create compelling descriptions and optimize for maximum visibility.</p>
                        </div>
                        <div className="gallery-container">
                            <div className="main-image">
                                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop" alt="Main" />
                                <button className="guest-fav-btn">Guest favorite</button>
                            </div>
                            <div className="side-images-stack">
                                <div className="top-two">
                                    <div className="side-img"><img src="https://picsum.photos/id/106/150/100" alt="Living room" /><div className="heart-icon">❤️</div></div>
                                    <div className="side-img"><img src="https://picsum.photos/id/107/150/100" alt="Bedroom" /></div>
                                </div>
                                <div className="bottom-two">
                                    <img src="https://picsum.photos/id/108/70/70" alt="Kitchen" />
                                    <img src="https://picsum.photos/id/109/70/70" alt="Pool" />
                                </div>
                            </div>
                        </div>
                        <div className="property-details-single">
                            <h4>Luxury Downtown Loft with Skyline Views</h4>
                            <p className="property-meta">Entire loft · 2 bedrooms · 4 guests</p>
                            <div className="amenities-list-single">
                                <span>🔹 Free WiFi</span><span>🔹 Pool access</span><span>🔹 Free parking</span><span>🔹 Full kitchen</span>
                            </div>
                            <div className="price-section-single">
                                <div className="price-left"><span className="price">$189</span><span className="night">/night</span></div>
                                <div className="badges-right"><span className="superhost-badge">Superhost</span><span className="optimized-badge">Optimized</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="two-cards-side">
                        <div className="small-card">
                            <div className="card-header-line"><span className="icon">📊</span><span className="real-time">Real-time Data</span></div>
                            <h4>Revenue Analytics</h4>
                            <p>Detailed insights and reporting to track performance and identify growth opportunities</p>
                            <div className="month-stats"><span>This Month</span><span className="green">+23%</span></div>
                            <div className="progress-bar"><div className="progress-fill" style={{ width: '75%' }}></div></div>
                        </div>
                        <div className="small-card">
                            <div className="card-header-line"><span className="icon">✅</span><span className="real-time">Real-time Data</span></div>
                            <h4>Revenue Analytics</h4>
                            <p>Detailed insights and reporting to track performance and identify growth opportunities</p>
                            <div className="case-resolved-line"><span className="green-dot">●</span><span>Case Resolved</span><span className="success-text">Refund processed successfully</span></div>
                        </div>
                    </div>
                    <div className="card tasks-card-bottom">
                        <div className="card-header-line"><span className="icon">📋</span><span className="real-time">Real-time Data</span></div>
                        <h4>Revenue Analytics</h4>
                        <p>Detailed insights and reporting to track performance and identify growth opportunities</p>
                        <div className="tasks-row">
                            <div className="task"><span className="task-icon">🧹</span> Cleaning <span className="status done">✓ Done</span></div>
                            <div className="task"><span className="task-icon">🔧</span> Maintenance <span className="status progress">In Progress</span></div>
                            <div className="task"><span className="task-icon">🔍</span> Inspection <span className="status scheduled">Scheduled</span></div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="right-column">
                    <div className="right-card">
                        <div className="card-header-line"><span className="icon">💰</span><span className="real-time">Real-time Data</span></div>
                        <h4>Revenue Analytics</h4>
                        <p>Detailed insights and reporting to track performance and identify growth opportunities</p>
                        <div className="price-progress">
                            <div className="tonight-row"><span>Tonight</span><span className="price-val">$189</span></div>
                            <div className="progress-bar"><div className="progress-fill" style={{ width: '75%' }}></div></div>
                            <div className="occupancy-text">95% Occupancy</div>
                        </div>
                    </div>
                    <div className="right-card message-card-final">
                        <div className="card-header-line"><span className="icon">💬</span><span className="real-time">Real-time Data</span></div>
                        <h4>Revenue Analytics</h4>
                        <p>Detailed insights and reporting to track performance and identify growth opportunities</p>
                        <div className="message-box">
                            <div className="message-header-line">
                                <span className="msg-icon">✉️</span>
                                <span className="msg-title">New Message</span>
                                <span className="msg-time">Guest • 2 min ago</span>
                                <span className="green-dot">●</span>
                                <span className="replied">Replied</span>
                            </div>
                            <div className="chat-bubble guest">"Hi! Is early check-in possible?"</div>
                            <div className="chat-bubble host">"Yes! I've arranged 2PM check-in for you. Welcome! 🎉"</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Support Stats Section */}
            <div className="support-stats-section">
                <div className="support-left">
                    <div className="support-header">
                        <div className="thunder-icon">⚡</div>
                        <div className="support-header-text">
                            <span className="lightning-text">Lightning Fast Support</span>
                            <div className="guarantee-text"><span className="dark-pink">15-Minute</span><span className="black-text"> Response Guarantee</span></div>
                        </div>
                    </div>
                    <p className="support-description">Your guests never wait. Our team responds to every inquiry within 15 minutes, 24/7/365. No automated bots - just real people providing exceptional service that keeps your guests happy and your reviews glowing.</p>
                    <div className="stats-cards-row">
                        <div className="stat-circle-card"><div className="circle-progress half-circle"><span className="check-icon">✓</span></div><div className="stat-circle-text">Average response time: 3.2 minutes</div></div>
                        <div className="stat-circle-card"><div className="circle-progress half-circle"><span className="check-icon">✓</span></div><div className="stat-circle-text">98.7% of messages answered within 15 minutes</div></div>
                        <div className="stat-circle-card"><div className="circle-progress half-circle"><span className="check-icon">✓</span></div><div className="stat-circle-text">Native speakers in multiple languages</div></div>
                        <div className="stat-circle-card"><div className="circle-progress half-circle"><span className="check-icon">✓</span></div><div className="stat-circle-text">Escalation to you only when needed</div></div>
                    </div>
                    <div className="mini-stats-row">
                        <div className="mini-card"><div className="mini-number">98.7%</div><div className="mini-label">Response Rate</div></div>
                        <div className="mini-card"><div className="mini-number">3.2min</div><div className="mini-label">Avg Response</div></div>
                        <div className="mini-card"><div className="mini-number">4.9★</div><div className="mini-label">Guest Satisfaction</div></div>
                    </div>
                </div>
                <div className="support-right">
                    <div className="chat-message-card">
                        <div className="chat-message-header"><div className="message-icon">💬</div><div className="chat-header-info"><h4>MY VA BUDDY Support</h4><div className="chat-status"><span className="online-green-dot"></span><span>Always Online</span><span className="sep">•</span><span>Responds in 3 min</span><span className="sep">•</span><span>15 min max</span></div></div></div>
                        <div className="chat-messages">
                            <div className="chat-message-item guest"><div className="message-bubble">"Hi! I'm having trouble with the WiFi password. Can you help?"</div><div className="message-meta-info"><span className="sender">Guest</span><span className="dot">•</span><span className="time">5 min ago</span></div></div>
                            <div className="chat-message-item strive"><div className="message-bubble strive-bubble">"Of course! The WiFi password is 'Welcome2023'. You should be all set! Let me know if you need anything else 😊"</div><div className="message-meta-info"><span className="sender">MY VA BUDDY</span><span className="dot">•</span><span className="time">3 min ago</span></div></div>
                            <div className="chat-message-item guest"><div className="message-bubble">"Perfect! Thank you so much for the quick response! ⭐⭐⭐⭐⭐"</div><div className="message-meta-info"><span className="sender">Guest</span><span className="dot">•</span><span className="time">1 min ago</span></div></div>
                            <div className="response-time-badge"><span>✓</span><span>Responded in 2 minutes ⚡</span></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial Section */}
            <div className="testimonial-section"><div className="testimonial-card"><div className="quote-icon">"</div><p className="testimonial-text">Dynamic pricing optimization has been a game-changer. My occupancy rates and average nightly rates have both increased substantially. The ROI on their services paid for itself in the first month.</p><div className="testimonial-author"><div className="author-name">Emily Thompson</div><div className="author-title">Property Investor • 12 Properties</div></div></div></div>

            {/* PRICING SECTION - with id for smooth scroll */}
            <div id="pricing-section" className="pricing-section-new">
                <div className="pricing-header-new">
                    <div className="pricing-badge-new">PRICING</div>
                    <h2 className="pricing-title-new">Simple, Transparent Pricing</h2>
                    <p className="pricing-description-new">One flat rate. No surprises. Cancel anytime.</p>
                </div>
                <div className="main-package-card">
                    <div className="package-badge">Most Popular</div>
                    <h3 className="package-name">Virtual Operations Partner</h3>
                    <div className="package-price"><span className="price-amount">$125</span><span className="price-period">/ listing / month</span></div>
                    <p className="package-tagline">Everything your STR business needs to run — handled by our team.</p>
                    <div className="package-features">
                        <div className="feature-item-new"><span className="feature-check">✓</span><span>24/7 Guest Support & Communication</span></div>
                        <div className="feature-item-new"><span className="feature-check">✓</span><span>Dynamic Pricing Management</span></div>
                        <div className="feature-item-new"><span className="feature-check">✓</span><span>Listing Optimization (title, photos sequence, description)</span></div>
                        <div className="feature-item-new"><span className="feature-check">✓</span><span>Cleaner & Maintenance Coordination</span></div>
                        <div className="feature-item-new"><span className="feature-check">✓</span><span>Review Management & Responses</span></div>
                        <div className="feature-item-new"><span className="feature-check">✓</span><span>OTA Platform Communication (Airbnb, VRBO, Booking.com, etc.)</span></div>
                        <div className="feature-item-new"><span className="feature-check">✓</span><span>Multi-Platform PMS Support (Hostaway, Guesty, Lodgify, etc.)</span></div>
                    </div>
                    <button className="package-btn" onClick={() => window.location.href = '/get-started'}>Get Started — $125 / listing / mo →</button>
                </div>
                <div className="addons-section-new">
                    <h3 className="addons-title-new">Need More? Add On What You Need.</h3>
                    <div className="addons-table-container">
                        <table className="addons-table">
                            <thead><tr><th>Add-On Service</th><th>What It Includes</th></tr></thead>
                            <tbody>
                                <tr><td className="addon-name">Social Media Management</td><td className="addon-description">Content creation & posting for your STR brand across Instagram, Facebook, etc.</td></tr>
                                <tr><td className="addon-name">Bookkeeping</td><td className="addon-description">Monthly income & expense tracking for your properties</td></tr>
                                <tr><td className="addon-name">Owner Monthly Reports</td><td className="addon-description">Detailed performance reports per property, delivered to your clients</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="addons-note">Add-ons are custom priced based on your portfolio size. Book a call to discuss.</p>
                    <Link to="/contact">
                        <button className="addons-cta-btn">Book a Call →</button>
                    </Link>
                </div>
                <div className="trust-badges">
                    <span>✓ No setup fees</span><span>✓ Cancel anytime</span><span>✓ No hidden charges</span><span>✓ 30-day money-back guarantee</span>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="faq-section-center">
                <div className="faq-badge-center">FAQ</div>
                <h2 className="faq-title-center">Questions?<br />We've got answers</h2>
                <p className="faq-desc-center">Everything you need to know about partnering with MY VA BUDDY</p>
                <div className="faq-list-center" id="faqList">
                    <div className="faq-item-center active"><div className="faq-question-center">How quickly do you respond to guest inquiries?</div><div className="faq-answer-center">We guarantee a response within 15 minutes, 24/7. Our average response time is actually just 3.2 minutes.</div></div>
                    <div className="faq-item-center"><div className="faq-question-center">What platforms do you manage?</div><div className="faq-answer-center">We manage all major booking platforms including Airbnb, VRBO, Booking.com, and direct booking channels.</div></div>
                    <div className="faq-item-center"><div className="faq-question-center">How do you handle pricing optimization?</div><div className="faq-answer-center">We use AI-powered dynamic pricing that analyzes market demand, seasonality, local events, and competitor pricing in real-time.</div></div>
                    <div className="faq-item-center"><div className="faq-question-center">Is there a long-term contract?</div><div className="faq-answer-center">No, we believe in earning your business every month. Our pricing is month-to-month with no lock-in contracts.</div></div>
                    <div className="faq-item-center"><div className="faq-question-center">How do you screen guests?</div><div className="faq-answer-center">We have a rigorous guest screening process including ID verification, previous review checks, and our proprietary risk assessment algorithm.</div></div>
                    <div className="faq-item-center"><div className="faq-question-center">What happens if there's an emergency at my property?</div><div className="faq-answer-center">We have a 24/7 emergency response team. For urgent issues, we'll coordinate with local vendors immediately.</div></div>
                    <div className="faq-item-center"><div className="faq-question-center">How do you handle reviews and guest feedback?</div><div className="faq-answer-center">We proactively manage reviews by responding to every guest review, addressing concerns professionally.</div></div>
                    <div className="faq-item-center"><div className="faq-question-center">What kind of reporting do you provide?</div><div className="faq-answer-center">You get access to a comprehensive dashboard with real-time analytics including revenue trends, occupancy rates, and guest satisfaction scores.</div></div>
                </div>
                <div className="faq-bottom-center"><h3>Still have questions?</h3><Link to="/contact"><button className="schedule-call-btn-center">Schedule a Call →</button></Link></div>
            </div>

            {/* SECTION 7 - Bottom CTA Boxes */}
            <div className="bottom-cta-boxes">
                <div className="cta-box">
                    <h3 className="cta-box-headline">Not Sure If We're a Fit?</h3>
                    <p className="cta-box-body">Book a free 30-minute discovery call. We'll tell you exactly how we plug into your business and what we can take off your plate — no commitment required.</p>
                    <Link to="/contact"><button className="cta-box-btn">Book a Free Call →</button></Link>
                </div>
                <div className="cta-box">
                    <h3 className="cta-box-headline">Already Running a Rental Business?</h3>
                    <p className="cta-box-body">Tell us about your portfolio and current operations. We'll show you exactly where My VA Buddy can save you time and money — starting this week.</p>
                    <Link to="/contact"><button className="cta-box-btn">Talk to Our Team →</button></Link>
                </div>
            </div>

            {/* SECTION 8 - Final Bottom Banner */}
            <div className="final-bottom-banner">
                <div className="final-banner-container">
                    <h2 className="final-banner-text">Only Care About Growing Your Portfolio? Yeah, we get it. Let's talk.</h2>
                    <Link to="/contact"><button className="final-banner-btn">Book a Free Call →</button></Link>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="footer-section">
                <div className="footer-container">
                    <div className="footer-column"><div className="footer-logo"><span className="logo-icon">🏨</span><span className="logo-text">MY VA<span className="logo-highlight">BUDDY</span></span></div><p className="footer-description">Transform your short-term rental business with expert cohosting services that maximize revenue and minimize stress.</p><div className="footer-contact"><h4>GET IN TOUCH</h4><p>📧 hello@myvabuddy.com</p><p>📞 +1 (973) 200-3160</p></div><div className="footer-copyright">© 2025 MY VA BUDDY. All rights reserved.</div></div>
                    <div className="footer-column"><h4>SERVICES</h4><ul><li><Link to="/services">Property Management</Link></li><li><Link to="/services">Guest Services</Link></li><li><Link to="/services">Dynamic Pricing</Link></li><li><Link to="/services">24/7 Support</Link></li></ul></div>
                    <div className="footer-column"><h4>RESOURCES</h4><ul><li><Link to="/about">About Us</Link></li><li><Link to="/contact">Case Studies</Link></li><li><Link to="/blog">Blog</Link></li><li><Link to="/contact">FAQ</Link></li></ul></div>
                    <div className="footer-column"><h4>GET STARTED</h4><ul><li><Link to="/contact">Contact Us</Link></li><li><Link to="/contact">Free Consultation</Link></li><li><Link to="/contact">Partner Portal</Link></li><li><Link to="/contact">Resources</Link></li></ul></div>
                </div>
                <div className="footer-bottom"><div className="footer-bottom-links"><Link to="/privacy">Privacy Policy</Link><span className="separator">|</span><Link to="/terms">Terms of Service</Link><span className="separator">|</span><Link to="/sms-terms">SMS Terms</Link><span className="separator">|</span><Link to="/gdpr">GDPR</Link></div></div>
            </footer>
        </div>
    );
}

export default Home;