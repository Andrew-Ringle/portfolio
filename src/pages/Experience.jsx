import React from "react";
import './Experience.css';
import './mediaqueries.css';
import checkIcon from '../images/checkmark.png'


const Experience = ({children}) => {
   
    
    return(
        <section id="experience">
      <p class="section__text__p1">Explore My</p>
      <h1 class="title">Experience</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container">
            <h2 class="experience-sub-title">Frontend Development</h2>
            <div class="article-container">
              <article>
                <img
                  src={checkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>React.js</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                  src={checkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>TypeScript</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Material UI</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div class="details-container">
            <h2 class="experience-sub-title">Backend Development</h2>
            <div class="article-container">
              <article>
                <img
                  src={checkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Java</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>SQL</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>MSSQL</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkIcon}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      
    </section>

    );

};

export default Experience;