import React from "react";
import './Profile.css';
import headshot from '../images/headshot.jpg'
import gitIcon from '../images/github.png'
import linkIcon from '../images/linkedin.png'
import resume from '../files/Andrew Ringle Resume.pdf'

const Profile = ({children}) => {
   
    
    return(
        <section id="profile">
      <div class="section__pic-container">
        <img style = {{borderRadius: '25% 10%', border: 'solid black'}}src = {headshot} alt="Andrew Ringle profile" />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Andrew Ringle</h1>
        <p class="section__text__p2">Frontend Developer</p>
        <div class="btn-container">
          <button
            class="btn btn-color-2"
            href = {resume} download target = '_blank'
          >
            Download CV
          </button>
          <button class="btn btn-color-1" onclick="location.href='./#contact'">
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src= {linkIcon}
            alt="My LinkedIn profile"
            class="icon"
            onClick = {() => window.open('https://linkedin.com/in/andrew-ringle', '_blank').focus()}
          />
          <img
            src={gitIcon}
            alt="My Github profile"
            class="icon"
            onClick = {() => window.open('https://github.com/Andrew-Ringle', '_blank').focus()}
          />
        </div>
      </div>
    </section>

    );

};

export default Profile;