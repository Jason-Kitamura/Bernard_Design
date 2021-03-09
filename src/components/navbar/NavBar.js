import React, {useState} from 'react';
// import { NavHashLink as Link} from "react-router-hash-link";
import {NavLink as Link} from 'react-router-dom';


import './navBar.css';

import logo from './assets/BDBlogo.png';
import facebookIcon from './assets/BDBfacebookIcon.png';
import instagramIcon from './assets/BDBinstagramIcon.png';
import messageIcon from './assets/BDBmessageIcon.png';

function NavBar(){

    const [selectNav, setSelectedNav]=useState(0)

    function toggleDropMenu(){
        document.getElementById('dropMenu').classList.toggle('active');
        console.log('sidebar')
    }
    function selectedStyle( i ){
        const selected = {   
            borderBottom: 'solid white 2px',
            fontWeight: 'bolder',
            paddingBottom: 0,
        }

        const notSelected = {
            
        }
        if ( i === selectNav ){
            return selected    
        } else {
            return notSelected
        }
    }

    return(
        <div id='navArea'>
           
                <navBar id='navBar' class='navbar'>
                    
                    <Link smooth to='/' onClick={e=>setSelectedNav(0)} >
                        <img src={logo} id='logo'></img>
                    </Link>
            
                    <div class='row' id='navBtnRow'>
                        <div id='homeNavBtn' class='col navButton' >
                            <Link to='/' style={selectedStyle(0)} onClick={e=>setSelectedNav(0)}>
                                Home
                            </Link>
                        </div>
                        <div  id='aboutNavBtn' class='col navButton' >
                            <Link smooth to='/about' style={selectedStyle(1)} onClick={e=>setSelectedNav(1)} >
                                About
                            </Link>
                        </div>
                        <div id='galleryNavBtn' class='col navButton' >
                            <Link smooth to='/gallery'style={selectedStyle(2)} onClick={e=>setSelectedNav(2)} >
                                Gallery
                            </Link>
                        </div>
                        <div id='contactNavBtn' class='col navButton' >
                            <Link smooth to='/contact' style={selectedStyle(3)} onClick={e=>setSelectedNav(3)}>
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
                                    <Link smooth to='/contact' onClick={e=>setSelectedNav(3)}>
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
                            <Link smooth to='/' onClick={ e => toggleDropMenu()} >
                                <li>
                                    Home
                                </li>
                            </Link>
                            <Link smooth to='/about' onClick={ e => toggleDropMenu()} >
                                <li>
                                    About
                                </li>
                            </Link>
                            <Link smooth to='/gallery' onClick={ e => toggleDropMenu()} >
                                <li>
                                    Gallery
                                </li>
                            </Link>
                            <Link smooth to='/contact' onClick={ e => toggleDropMenu()} >
                                <li>
                                    Contact
                                </li>
                            </Link>
                        </ul>
                    </div>
                </navBar>
           
        </div>
    )
}

export default NavBar;