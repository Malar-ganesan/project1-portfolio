import React from "react";
import './Hero.css'
import profile from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id="home" className="hero">
          <img className="profile_img" src={profile} alt="" />
          <h1> <span>I'm malar,</span> frontend developer based in india.</h1>
          <p>I am a frontend developer from India with 10 years of experience in muliple companies like microsoft, tesla and apple.</p>
          <div className="buttons">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <button className="connect">Connect With me</button>
            </AnchorLink>
            <button className="resume">My Resume</button>
          </div>
        </div>
    )
}

export default Hero