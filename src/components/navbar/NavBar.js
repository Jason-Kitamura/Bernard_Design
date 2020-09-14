import React from 'react';
import { HashLink as Link } from "react-router-hash-link";
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
                                <Link to='/#coverArea'  >
                                    Home
                                </Link>
                            </div>
                            <div class='col-3 navButton'>
                                <Link to='/#aboutArea' >
                                    About
                                </Link>
                            </div>
                            <div class='col-3 navButton'>
                                <Link to='/#gallery'>
                                    Gallery
                                </Link>
                            </div>
                            <div class='col-3 navButton'>
                                <Link to='/#contact'>
                                    Contact
                                </Link>
                            </div>
                        </div> 
                    </row>
                </navBar>
            </Headroom>
        </div>
    )
}

export default NavBar;