import React from "react";
import './Contact.css';
import emailIcon from '../images/email.png'
import linkIcon from '../images/linkedin.png'

const Contact = ({children}) => {
   
    
    return(
    <section id="contact">
      <p class="section__text__p1">Get in Touch</p>
      <h1 class="title">Contact Me</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src= {emailIcon}
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p><a href="mailto:andrewringle1@gmail.com">andrewringle1@gmail.com</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src={linkIcon}
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p><a onClick = {() => window.open('https://linkedin.com/in/andrew-ringle', '_blank').focus()}>LinkedIn</a></p>
        </div>
      </div>
    </section>

    );

};

export default Contact;