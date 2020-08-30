import React from 'react';
import './App.css';
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
                {/* <p id='title'>
                  Bernard 
                  <br/> Design & Build
                </p> */}
                </div>
               
              </div>
            </div>
            <div class='col-6'>
              <div class='row'>
                <div class='col-3 navButton'>
                  Home
                </div>
                <div class='col-3 navButton'>
                  Gallery
                </div>
                <div class='col-3 navButton'>
                  About
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
            <div class='col'>
                <p id='coverTitle'>
                  BERNARD
                  <br/> <p>Design <img id='leaf' src={leaf}></img> Build</p>
                </p>
            </div>
            <div class='col'>
              <p id='coverDes'>
                WELCOME
                <br/>
                  <p>
                    Quality Work
                    <br/> Building Trust
                  </p>
                <br/>Please Contact
                <br/>Grayson Bernard
                <br/> at bernardbuild@gmail.com
                <br/>(519) 215- 0437 or
                <br/>(705) 888- 0059
              </p>
              
            </div>
          </div>
                {/* <img id='coverPhoto' src={coverPhoto}></img> */}

        </div>
      </div>
      
    </div>
  );
}

export default App;
