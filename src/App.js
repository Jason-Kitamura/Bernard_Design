import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <navBar id='navBar' class='navbar'>
          <row class='row'>
            <div class='col-6' id='title'>
              Bernard Design
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
      </div>
      
    </div>
  );
}

export default App;
