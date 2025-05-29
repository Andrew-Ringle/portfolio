import React from "react";
import './About.css';
import './mediaqueries.css';
import exIcon from '../images/experience.png'
import eduIcon from '../images/education.png'
import friends from '../images/friends.png'


const About = ({children}) => {
   
    
    return(
        <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="section__pic-container">
          <img
            src= {friends}
            alt="Profile"
            class="about-pic"
          />
        </div>
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <img
                src={exIcon}
                alt="Experience icon"
                class="icon"
              />
              <h3>Experience</h3>
              <p>1+ years <br />Frontend Development</p>
            </div>
            <div class="details-container">
              <img
                src={eduIcon}
                alt="Education icon"
                class="icon"
              />
              <h3>Education</h3>
              <p>B.Sc. Bachelors Degree<br />Computer Science</p>
            </div>
          </div>
          <div class="text-container">
            <p>
              Outside of my work as a developer, I'm a passionate hobbyist who loves cooking, reading, gaming, playing pickleball, and staying active through weight lifting.
              These interests keep me balanced and energized, while my incredible friends and family provide constant support and motivation. 
              I'm truly grateful for the strong relationships in my life that inspire me to grow both personally and professionally.
            </p>
          </div>
        </div>
      </div>
     
    </section>

    );

};

export default About;