import React from 'react';
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>I am a frontend developer from India with 10 years of experience in muliple companies like microsoft, tesla and apple.</p>
                </div>
                <div className="footer-top-right">
                    <div className="mail-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subs">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="bottom-left">@ 2024 alex Benet. All Rights Reserved</p>
                <div className="bottom-right">
                    <p>Term of services</p>
                    <p>Privacy Poicy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        
        </div>
    )
}

export default Footer