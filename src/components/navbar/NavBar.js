import React from 'react';
import { HashLink as Link } from "react-router-hash-link";
import Headroom from 'react-headroom';

import './navBar.css';

import logo from './assets/BDBlogo.png';
import facebookIcon from './assets/BDBfacebookIcon.png';
import instagramIcon from './assets/BDBinstagramIcon.png';
import messageIcon from './assets/BDBmessageIcon.png';

function NavBar(){

    function toggleDropMenu(){
        document.getElementById('dropMenu').classList.toggle('active');
        console.log('sidebar')
    }

    return(
        <div id='navArea'>
            <Headroom>
                <navBar id='navBar' class='navbar'>
                    
                    <Link smooth to='/#coverArea'  >
                        <img src={logo} id='logo'></img>
                    </Link>
            
                    <div class='row' id='navBtnRow'>
                        <div id='homeNavBtn' class='col navButton'>
                            <Link smooth to='/#coverArea'  >
                                Home
                            </Link>
                        </div>
                        <div  id='aboutNavBtn' class='col navButton'>
                            <Link smooth to='/#aboutArea' >
                                About
                            </Link>
                        </div>
                        <div id='galleryNavBtn' class='col navButton'>
                            <Link smooth to='/#gallery'>
                                Gallery
                            </Link>
                        </div>
                        <div id='contactNavBtn' class='col navButton'>
                            <Link smooth to='/#contact'>
                                Contact
                            </Link>
                        </div>
                        <div class='col'>
                            <div id='iconRow' class='row'>
                                <div class='col-4'>
                                    <a target='_blank' href='https://www.facebook.com' rel='noopener noreferrer'>
                                        <img src={facebookIcon}></img>
                                    </a>
                                </div>
                                <div class='col-4'>
                                    <a target='_blank' href='https://www.instagram.com/bernardcustombuild/' rel='noopener noreferrer'>
                                        <img src={instagramIcon}></img>
                                    </a>
                                </div>
                                <div class='col-4'>
                                    <Link smooth to='/#contact'>
                                        <img src={messageIcon}></img>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div id='dropDownDiv' class='col' onClick={ e => toggleDropMenu()}>
                            <i class='fa fa-bars fa-3x'></i>
                    </div>
                    <div id='dropMenu' >
                        <ul>
                            <Link smooth to='/#coverArea' onClick={ e => toggleDropMenu()} >
                                <li>
                                    Home
                                </li>
                            </Link>
                            <Link smooth to='/#aboutArea' onClick={ e => toggleDropMenu()} >
                                <li>
                                    About
                                </li>
                            </Link>
                            <Link smooth to='/#gallery' onClick={ e => toggleDropMenu()} >
                                <li>
                                    Gallery
                                </li>
                            </Link>
                            <Link smooth to='/#contact' onClick={ e => toggleDropMenu()} >
                                <li>
                                    Contact
                                </li>
                            </Link>
                        </ul>
                    </div>
                </navBar>
            </Headroom>
        </div>
    )
}

export default NavBar;