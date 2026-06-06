import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const scrollToPricing = () => {
        const pricingSection = document.getElementById('pricing-section');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
            closeMenu();
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo" onClick={closeMenu}>

                    <span className="brand-name">
                        MY VA <span className="brand-highlight">BUDDY</span>
                    </span>
                </Link>

                <button className="mobile-toggle-btn" onClick={toggleMenu}>
                    {isMenuOpen ? '✕' : '☰'}
                </button>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li><Link to="/" className="nav-link" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/services" className="nav-link" onClick={closeMenu}>Services</Link></li>
                    <li><button onClick={scrollToPricing} className="nav-link pricing-btn">Pricing</button></li>
                    <li><Link to="/about" className="nav-link" onClick={closeMenu}>About</Link></li>
                    <li><Link to="/blog" className="nav-link" onClick={closeMenu}>Blog</Link></li>
                    <li><Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link></li>
                    <li>
                        <Link to="/contact" onClick={closeMenu}>
                            <button className="contact-btn">Contact Us</button>
                        </Link>
                    </li>
                </ul>

                <div className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
            </div>
        </nav>
    );
}

export default Navbar;