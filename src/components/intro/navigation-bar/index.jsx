import React, {useState} from 'react';

import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

import './style.scss';
import logo from '../../../images/s-letter-logo-png-862.png';
import CallToAction from '../../shared/CallToAction';
import {scrollToSection} from '../../utils/helper';
const Navigation = () => {
    const[mobileMenu, setMobileMenu]=useState(false);

    const menuItemClickHandler=(section)=>{
      setMobileMenu(!mobileMenu);
      scrollToSection(section);
    };

  return <div 
  className="top-navigation-bar">
<div className="app-log">
    <img src={logo} alt="js dev" />
</div>
<div className="mobile-menu" onClick={()=>setMobileMenu(!mobileMenu)}>

{mobileMenu ? (
                    <IoMdClose
                        size={24}
                        color="#fff"
                    />
                ) : (
                    <CgMenuRight
                        size={24}
                        color="#fff"
                    />
                )}

</div>
<div className={`navigation ${mobileMenu ? "active" : ""}`}>
    <span className="navigation-item" onClick={()=>menuItemClickHandler("skills")}>Skills</span>
    <span className="navigation-item" onClick={()=>menuItemClickHandler("portfolio")}>Portfolio</span>
    <span className="navigation-item" onClick={()=>menuItemClickHandler("blogs")}>Blogs & Articles</span>
    <CallToAction text="Contact me" action={()=>menuItemClickHandler("contact")}/>
</div>
  </div>
}

export default Navigation;