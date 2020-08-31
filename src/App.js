import React from 'react';
import './App.css';
import Gallery from './components/Gallery/gallery/photoGallery'
import logo from './assets/bernardLogo.png'
import samplePhoto from './assets/livingRoomSample.jpg'
import leaf from './assets/leaf.png'

function App() {
  const coverPhoto = {
    backgroundImage : samplePhoto
  }
  return (
    <div className="App">
      <div>
        <navBar id='navBar' class='navbar'>
          <row class='row'>
            <div class='col-6' >
              <div class='row'>
              <div class='col-4'>
                <img src={logo} id='logo'></img>
                </div>
                
                <div class='col-8'>
                </div>
               
              </div>
            </div>
            <div class='col-6'>
              <div class='row'>
                <div class='col-3 navButton'>
                  Home
                </div>
                <div class='col-3 navButton'>
                  About
                </div>
                <div class='col-3 navButton'>
                  Gallery
                </div>
                <div class='col-3 navButton'>
                  Contact
                </div>
              </div>
            </div>
          </row>
        </navBar>
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
                <br/>(519) 215- 0437 or
                <br/>(705) 888- 0059
                <br/>
                <br/>
                or click 'Book Now' to get in-touch
                <br/> <button id='bookBtn'>Book Now</button>
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
                    We offer an end-to-end client experience that includes seamless communication, budgeting, organization and quality workmanship. A breath of interior finishing experience specializing in tile and stone. 
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
      <Gallery/>
      <br/>
      <br/>
      <footer class='footer'>
        hi
      </footer>
      
    </div>
  );
}

export default App;
