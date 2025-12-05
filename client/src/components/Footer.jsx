import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>BikeAcc</h3>
                        <p>Premium accessories for the modern cyclist.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Shop</h4>
                        <ul>
                            <li><a href="#">Helmets</a></li>
                            <li><a href="#">Lights</a></li>
                            <li><a href="#">Locks</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Returns</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Bike Accessories Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
