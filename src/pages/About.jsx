import React from "react";
import './About.css';
import headshot from '../images/headshot.jpg'
import exIcon from '../images/experience.png'
import eduIcon from '../images/education.png'
import arrow from '../images/arrow.png'
import resume from '../files/Andrew Ringle Resume.pdf'

const About = ({children}) => {
   
    
    return(
        <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="section__pic-container">
          <img
            src= {headshot}
            alt="Profile picture"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#experience'"
      />
    </section>

    );

};

export default About;