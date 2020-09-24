import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './gallery.css';

import BathroomPic from './assets/BathroomPic.JPG';
import FireplacePic from './assets/FireplacePic.JPG';
import FlooringPic from './assets/FlooringPic.JPG';
import KitchenPic from './assets/KitchenPic.jpeg';
import MiscPic from './assets/MiscPic.jpg';
import OutdoorPic from './assets/OutdoorPic.jpeg';

// import  from 'https://www.lonestarpark.com/wp-content/uploads/2019/04/image--500x500.jpg'


function Gallery (){

    return(  
        <div id='gallery'>
            <h1 class='galleryTitle'>Gallery</h1>
            <div id='container'>
                <div class='row'>
                    <div class='col-sm-6 col-md-4'>
                        <Link to="/gallery/bathroom" >
                            <div class='galleryCard'>
                                <div id='bathroomCard' class='cardPic'>
                                    
                                </div>
                                <p class='cardTitle'>
                                    Bathroom
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div class=' col-sm-6 col-md-4'>
                        <Link to="/gallery/fireplace" >
                            <div class='galleryCard'>
                                <div id='fireplaceCard' class='cardPic'>
                                    
                                </div>
                                <p class='cardTitle'>
                                    Fireplace
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div class='col-sm-6 col-md-4'>
                        <Link to="/gallery/flooring" >
                            <div class='galleryCard'>
                                <div id='flooringCard' class='cardPic'>
                                   
                                </div>
                                <p class='cardTitle'>
                                    Flooring
                                </p>
                            </div>    
                        </Link>              
                    </div>
                    <div class='col-sm-6 col-md-4'>
                        <Link to="/gallery/kitchen" >
                            <div class='galleryCard'>
                                <div id='kitchenCard' class='cardPic'>
                                    
                                </div>
                                <p class='cardTitle'>
                                Kitchen
                                </p>
                            </div> 
                        </Link>
                    </div>
                    <div class='col-sm-6 col-md-4'>
                        <Link to="/gallery/miscellaneous" >
                            <div class='galleryCard'>
                                <div id='miscCard' class='cardPic'>
                                   
                                </div>
                                <p class='cardTitle'>
                                    Miscellaneous
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div class='col-sm-6 col-md-4'>
                        <Link to="/gallery/outdoor" >
                            <div class='galleryCard'>
                                <div id='outdoorCard' class='cardPic'>
                                  
                                </div>
                                <p class='cardTitle'>
                                    Outdoor
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div id='instagram'>
                <a target='_blank' href='https://www.instagram.com/bernardcustombuild/' rel='noopener noreferrer'>
                    <i id='instaIcon' class='fab fa-instagram fa-3x'></i>
                </a>
                <p id='instaDes'>
                    Follow us on Instagram!
                </p>
            </div>
        </div>
    )
}

export default Gallery;