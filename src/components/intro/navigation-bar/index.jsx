import React from 'react'
import './style.scss'
import logo from '../../../images/s-letter-logo-png-862.png';
import CallToAction from '../../shared/CallToAction';
import {scrollToSection} from '../../utils/helper';
const Navigation = () => {
  return <div 
  className="top-navigation-bar">
<div className="app-log">
    <img src={logo} alt="js dev" />
</div>
<div className="navigation">
    <span className="navigation-item" onClick={()=>scrollToSection("skills")}>Skills</span>
    <span className="navigation-item" onClick={()=>scrollToSection("portfolio")}>Portfolio</span>
    <span className="navigation-item" onClick={()=>scrollToSection("blogs")}>Blogs & Articles</span>
    <CallToAction text="Contact me" action={()=>scrollToSection("contact")}/>
</div>
  </div>
}

export default Navigation;