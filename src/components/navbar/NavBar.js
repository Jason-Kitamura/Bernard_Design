import React from 'react';
import './navBar.css';

import Headroom from 'react-headroom';
import logo from './assets/bernardLogo.png';

function NavBar(){

    return(
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
                                <a href='#gallery'>
                                    Gallery
                                </a>
                            </div>
                            <div class='col-3 navButton'>
                                <a href='#contact'>
                                    Contact
                                </a>
                            </div>
                        </div> 
                    </row>
                </navBar>
            </Headroom>
        </div>
    )
}

export default NavBar;