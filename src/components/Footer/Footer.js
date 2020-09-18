import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-amazon.png';

function Footer() {
    return (
        <div className='footer-container'>
            <div onClick={() => window.scrollTo(0, 0)} className='footer-button'>
                <Link to='' className='footer-link'>Back to top</Link>
            </div>
            <div className='footer'>
                <div className='footer-column'>
                    <text>Get to Know Us</text>
                    <p>Careers</p>
                    <p>About Amazon</p>
                    <p>Investor Relations</p>
                    <p>Amazon Devices</p>
                    <p>Amazon Tours</p>
                </div>
                <div className='footer-column'>
                    <text>Make Money with Us</text>
                    <p>Sell products on Amazon</p>
                    <p>Sell apps on Amazon</p>
                    <p>Become an Affiliate</p>
                    <p>Advertise Your Products</p>

                </div>
                <div className='footer-column'>
                    <text>Amazon Payment Products</text>
                    <p>Amazon Business Card</p>
                    <p>Reload Your Balance</p>
                    <p>Amazon Currency Converter</p>
                    <p>Self-Publish with Us</p>

                </div>
                <div className='footer-column'>
                    <text>Let Us Help You</text>
                    <p>Your Account</p>
                    <p>Your Account</p>
                    <p>Your Account</p>
                    <p>Your Account</p>
                </div>
            </div>
            <img className='footer-image' src={Logo} alt='amazon-logo' />
        </div>
    )
}

export default Footer
