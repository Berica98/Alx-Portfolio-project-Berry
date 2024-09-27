import React from "react";
import './Footer.css';  // Assuming you'll add some CSS for styling

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* About Us Section */}
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>Learn more about our company’s story and mission to empower entrepreneurs worldwide.</p>
                    <a href="/about-us">Read Our Story</a>
                </div>

                {/* Services/Products Section */}
                <div className="footer-section">
                    <h4>Services/Products</h4>
                    <ul>
                        <li><a href="/services/consulting">Consulting Services</a></li>
                        <li><a href="/services/design">Design Solutions</a></li>
                        <li><a href="/products/software">Software Products</a></li>
                    </ul>
                </div>

                {/* Blog Section */}
                <div className="footer-section">
                    <h4>Blog</h4>
                    <p>Stay updated with the latest news and insights from our industry experts.</p>
                    <a href="/blog">Visit Our Blog</a>
                </div>

                {/* FAQs Section */}
                <div className="footer-section">
                    <h4>FAQs</h4>
                    <p>Have questions? Find answers to common inquiries about our platform.</p>
                    <a href="/faqs">Read FAQs</a>
                </div>

                {/* Privacy Policy & Terms of Service Section */}
                <div className="footer-section">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms-of-service">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>&copy; 2024 Fashionvoiz International. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;