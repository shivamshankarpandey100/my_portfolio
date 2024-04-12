import React from 'react';
import Section from "../shared/section";
import ContactInfo from "./contect-info";
import './style.scss';
const Contact = () => {
  return (
    <Section id="contact" title="Any Question? Feel Free to Contact" background="light">
        <div className="contect-content-wrapper">
            <ContactInfo/>
        </div>
    </Section>
  )
}

export default Contact