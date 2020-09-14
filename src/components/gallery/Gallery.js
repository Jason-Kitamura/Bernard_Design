import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './gallery.css';

// import  from 'https://www.lonestarpark.com/wp-content/uploads/2019/04/image--500x500.jpg'


function Gallery (){

    return(  
        <div id='gallery'>
            <h1 id='galleryTitle'>Gallery</h1>
            <div id='container'>
                <div class='row'>
                    <div class='col-sm-6 col-md-4'>
                        <Link to="/gallery" >
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
                        <Link to="/gallery" >
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
                        <Link to="/gallery" >
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
                        <Link to="/gallery" >
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
                        <Link to="/gallery" >
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
                        <Link to="/gallery" >
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
        </div>
    )
}

export default Gallery;