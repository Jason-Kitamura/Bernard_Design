import React from 'react';
import '../../App.css';
import './about.css';

function About(){

    return(
        <div id='aboutArea'>
            <div id='aboutTitle'>
                <p>About Us</p>
            </div>
            <div class='row' id='desArea'>
              <div class='col-8' id='aboutDes'>
                  <h1>What We Do</h1>
                    <br/>
                  <p>
                    We build beautiful, lasting spaces, special to our clients. Thoughtful design, quality installation and care for detail is standard to every project.   Whether it be a renovation or new installation we are happy to help make your space come to life.  Please take a look at our gallery of projects from Southern Georgian Bay to Caledon and Orangeville area.
                  </p>
                    <br/>
                  <h1>Working Together</h1>
                    <br/>
                  <p>
                    We offer an end-to-end client experience that includes seamless communication, budgeting, organization and quality workmanship. A full range of interior finishing services, specializing in tile and stone. 
                    <br/>
                    <br/>
                    <ul>
                      <li>Renovations</li>
                      <li>Bathrooms</li>
                      <li>Fireplaces</li>
                      <li>Tile</li>
                      <li>Stone</li>
                      <li>Cabinetry</li>
                      <li>Flooring</li>
                      <li>Landscape</li>
                    </ul>
                  </p>
              </div>
              <div class='col-4' id='desPhoto'>

              </div>
            </div>
            
        </div>
    )
}

export default About;