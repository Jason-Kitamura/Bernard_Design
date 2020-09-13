import React from 'react';
import { BrowserRouter as Router, } from "react-router-dom";

import './App.css';
import PhotoGallery from './components/gallery/PhotoGallery';
import ContactForm from './components/contactForm/contactForm'
import logo from './assets/bernardLogo.png'
import samplePhoto from './assets/kitchenCover.jpg'
import leaf from './assets/leaf.png'

import Headroom from 'react-headroom'

function App() {
  const coverPhoto = {
    backgroundImage : samplePhoto
  }

  return (
    <Router>
    <div className="App">
      
      <div>
        <Headroom>
        <navBar id='navBar' class='navbar'>
          <row class='row'>
            
                <img src={logo} id='logo'></img>
                <div class='row' id='navBtnRow'>
                <div class='col-3 navButton'>
                  <a href='#coverArea'>
                    Home
                  </a>
                </div>
                <div class='col-3 navButton'>
                  <a href='#aboutArea'>
                    About
                  </a>
                </div>
                <div class='col-3 navButton'>
                  <a href='#galleryArea'>
                    Gallery
                  </a>
                </div>
                <div class='col-3 navButton'>
                  <a href='#contactArea'>
                    Contact
                  </a>
                </div>
                </div>
                
          </row>
        </navBar>
        </Headroom>
        
        <div id='coverArea' style={coverPhoto}>
          <div class='row'>
            <div class='col-md-6'>
                <p id='coverTitle'>
                  BERNARD
                  <br/> <p>Design <img id='leaf' src={leaf}></img> Build</p>
                </p>
            </div>
            <div class='col-md-6'>
              <p id='coverDes'>
                WELCOME
                <br/>
                  <p>
                    Quality Work
                    <br/> Building Trust
                  </p>
                    Please Contact
                <br/>Grayson Bernard
                <br/> at bernardbuild@gmail.com
                <br/>(705) 888 0059
                <br/>
                <br/>
                or click 'Book Now' to get in-touch
                <br/> <button id='bookBtn'><a href='#contactArea'>Book Now</a></button>
              </p>
              
            </div>
          </div>
                {/* <img id='coverPhoto' src={coverPhoto}></img> */}

        </div>
        {/*about us area*/}
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
      </div>
      <br/>
      <br/>
      <br/>
      {/* <Gallery/> */}
      <div id='galleryArea'>
        <PhotoGallery/>
      </div>
      <div id='contactArea'>
        <ContactForm/>
      </div>
      <footer class='footer'>
        <div id='footerCopyright'>
          <p>COPYRIGHT © 2020 BERNARDBUILD - ALL RIGHTS RESERVED.</p>
          <p>Created by Jason Kitamura with React.js</p>
        </div>
      </footer>
     
    </div>
    </Router>
  );
}

export default App;
