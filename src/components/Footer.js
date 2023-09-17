import React from 'react';
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";

const Footer = () => {
  return (
    <div>
        <div className="footer-background">
            <div className="footer-container">
                <img src={ Logo } alt="Little Lemon logo" />
                <p>Little Lemon is a delightful local bistro renowned for its cozy ambiance, offering a range of uncomplicated dishes and timeless cocktails. The establishment prides itself on its menu, which highlights locally-sourced ingredients and includes daily specials.</p>
                <div className="footer-content">
                    <div className="locations">
                        <h5>OUR LOCATIONS</h5>
                        <ul>
                            <li>New York City</li>
                            <li>Los Angeles</li>
                            <li>Chicago</li>
                            <li>Miami</li>
                        </ul>
                    </div>
                    <div className="opening-times">
                        <h5>OPENING HOURS</h5>
                        <ul>
                            <li>Mon - Thu: 11:30AM - 10:00PM</li>
                            <li>Fri - Sat: 11:30AM - 11:00PM</li>
                            <li>Sunday: 12:00PM - 9:00PM</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h5>CONTACT US</h5>
                        <ul>
                            <li>123 Limene Street, Urbanville, USA</li>
                            <li>Phone: (123) 456-7890</li>
                            <li>Email: info@littlelemon.com</li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>© 2023 Little Lemon. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;