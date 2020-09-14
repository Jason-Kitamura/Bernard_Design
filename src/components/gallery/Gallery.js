import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './gallery.css';

// import  from 'https://www.lonestarpark.com/wp-content/uploads/2019/04/image--500x500.jpg'


function Gallery (){

    return(  
        <div id='gallery'>
            <h1 class='galleryTitle'>Gallery</h1>
            <div id='container'>
                <div class='row'>
                    <div class='col-sm-6 col-md-4'>
                        <Link to="/gallery/bathroom" >
                            <div id='bathroomCard' class='galleryCard'>
                                <div class='cardPic'>
                                    <img src={'https://www.lonestarpark.com/wp-content/uploads/2019/04/image-placeholder-500x500.jpg'}>

                                    </img>
                                </div>
                                <p class='cardTitle'>
                                    Bathroom
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div class=' col-sm-6 col-md-4'>
                        <Link to="/gallery/fireplace" >
                            <div id='fireplaceCard' class='galleryCard'>
                                <div class='cardPic'>
                                    <img src={'https://www.lonestarpark.com/wp-content/uploads/2019/04/image-placeholder-500x500.jpg'}>

                                    </img>

                                </div>
                                <p class='cardTitle'>
                                    Fireplace
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div class='col-sm-6 col-md-4'>
                        <Link to="/gallery/flooring" >
                            <div id='flooringCard' class='galleryCard'>
                                <div class='cardPic'>
                                    <img src={'https://www.lonestarpark.com/wp-content/uploads/2019/04/image-placeholder-500x500.jpg'}>

                                    </img>
                                </div>
                                <p class='cardTitle'>
                                    Flooring
                                </p>
                            </div>    
                        </Link>              
                    </div>
                    <div class='col-sm-6 col-md-4'>
                        <Link to="/gallery/kitchen" >
                            <div id='kitchenCard' class='galleryCard'>
                                <div class='cardPic'>
                                    <img src={'https://www.lonestarpark.com/wp-content/uploads/2019/04/image-placeholder-500x500.jpg'}>

                                    </img>
                                </div>
                                <p class='cardTitle'>
                                Kitchen
                                </p>
                            </div> 
                        </Link>
                    </div>
                    <div class='col-sm-6 col-md-4'>
                        <Link to="/gallery/miscellaneous" >
                            <div id='miscCard' class='galleryCard'>
                                <div class='cardPic'>
                                    <img src={'https://www.lonestarpark.com/wp-content/uploads/2019/04/image-placeholder-500x500.jpg'}>

                                    </img>
                                </div>
                                <p class='cardTitle'>
                                    Miscellaneous
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div class='col-sm-6 col-md-4'>
                        <Link to="/gallery/outdoor" >
                            <div id='outdoorCard' class='galleryCard'>
                                <div class='cardPic'>
                                    <img src={'https://www.lonestarpark.com/wp-content/uploads/2019/04/image-placeholder-500x500.jpg'}>

                                    </img>
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