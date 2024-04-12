import React from 'react';

import {
    FaYoutube,
    FaGithub,
    FaLinkedinIn,
    FaStackOverflow,
    FaInstagram,
} from "react-icons/fa";
import SocialIcon from "./social-icon" ;
import Section from "../shared/section";
import Logo from '../../images/s-letter-logo-png-862.png';
import {scrollToSection} from '../utils/helper';
import './style.scss';
const Footer = () => {
  return (
    <Section background="dark" className="footer">

        <div className="footer-content-wrapper">
            <div className="footer-log">
                <img src={Logo} alt="S" />
            </div>
            <ul className="footer-menu-items">
                <li className="footer-menu-item" onClick={()=>scrollToSection("skills")}>Skills</li>
                <li className="footer-menu-item" onClick={()=>scrollToSection("portfolio")}>Portfolio</li>
                <li className="footer-menu-item" onClick={()=>scrollToSection("blogs")}>Blog & Articles</li>
                <li className="footer-menu-item" onClick={()=>scrollToSection("contact")}>Contect me</li>

            </ul>
            <div className="social-icons">
                <SocialIcon color="#FF0000" 
                icon={<FaYoutube/>} 
                link="https://www.youtube.com"
                
                />
                <SocialIcon color="#0D2636" 
                icon={<FaGithub/>} 
                link="https://www.github.com/shivamshankarpandey100"
                
                />
                <SocialIcon color="#0A66C2" 
                icon={<FaLinkedinIn/>} 
                link="https://www.youtube.com"
                
                /> 
                <SocialIcon color="#f2740d" 
                icon={<FaStackOverflow/>} 
                link="https://www.stackoverflow.com"
                
                />
                <SocialIcon color="#E84C88" 
                icon={<FaInstagram/>} 
                link="https://www.instagram.com"
                
                />
            </div>
            <div className="bottom-bar">
                <div className="copyright-text">
                    Copyright 2024 Shivam Shankar Pandey | All Rights Reserved
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Footer