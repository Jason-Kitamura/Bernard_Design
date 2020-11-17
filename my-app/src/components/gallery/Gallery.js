import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './gallery.css';

import bathroomPic from './assets/BathroomPic.JPG';
import fireplacePic from './assets/FireplacePic.JPG';
import flooringPic from './assets/FlooringPic.JPG';
import kitchenPic from './assets/KitchenPic.jpeg';
import miscPic from './assets/MiscPic.jpg';
import outdoorPic from './assets/OutdoorPic.jpeg';


import bath2 from './assets/bathroom/bath2.jpg';
import bath3 from './assets/bathroom/bath3.jpg';
import bath4 from './assets/bathroom/bath4.JPG';
import bath5 from './assets/bathroom/bath5.JPG';

import instaIcon from './assets/BDBinstagramIcon.png';

// import  from 'https://www.lonestarpark.com/wp-content/uploads/2019/04/image--500x500.jpg'


function Gallery (props){

    const [ bathroomStyle, setBathroomStyle ] = useState({ backgroundImage: `url(${bathroomPic})`});
    const [ flooringStyle, setFlooringStyle ] = useState({ backgroundImage: `url(${flooringPic})`});
    const [ fireplaceStyle, setFireplaceStyle ] = useState({ backgroundImage: `url(${fireplacePic})`});
    const [ kitchenStyle, setKitchenStyle ] = useState({ backgroundImage: `url(${kitchenPic})`});
    const [ miscStyle, setMiscStyle ] = useState({ backgroundImage: `url(${miscPic})`});
    const [ outdoorStyle, setOutdoorStyle ] = useState({ backgroundImage: `url(${outdoorPic})`});

    // function bathroomSlideshow (){
    //     console.log('mouse is over bathroom');
    //     setBathroomStyle( {backgroundImage: `url(${bath2})`})
    //     // e.target.style.backgroundImage = `url(${bath2})`;
    //     setTimeout( () =>{
    //         setBathroomStyle({ backgroundImage: `url(${bath2})`});
    //     },500);
    //     setTimeout( () =>{
    //         setBathroomStyle({ backgroundImage: `url(${bath3})`});
    //     },1000);
    //     setTimeout( () =>{
    //         setBathroomStyle({ backgroundImage: `url(${bath4})`});
    //     },1500);
    //     setTimeout( () =>{
    //         setBathroomStyle({ backgroundImage: `url(${bath5})`});
    //     },2000);
    //     setTimeout( () =>{
    //         setBathroomStyle({ backgroundImage: `url(${bathroomPic})`});
    //     },2500);
        
    // }
    // function restoreBathroom(){
    //     setBathroomStyle( { backgroundImage: `url(${bathroomPic})`})
    // }

    return(  
        <div id='gallery'>
            <h1 class='galleryTitle'>Gallery</h1>
            <div id='container'>
                <div class='row'>
                    <div class='col-sm-6 col-md-4'>
                        <Link to="/gallery/bathroom" >
                            <div class='galleryCard' onClick={e => props.setState(0)}>
                                <div id='bathroomCard' class='cardPic' style={bathroomStyle} >
                                    
                                </div>
                                <p class='cardTitle'>
                                    Bathroom
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div class=' col-sm-6 col-md-4'>
                        <Link to="/gallery/fireplace" >
                            <div class='galleryCard' onClick={e => props.setState(1)}>
                                <div id='fireplaceCard' class='cardPic' style={flooringStyle} >
                                    
                                </div>
                                <p class='cardTitle'>
                                    Fireplace
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div class='col-sm-6 col-md-4'>
                        <Link to="/gallery/flooring" >
                            <div class='galleryCard'  onClick={e => props.setState(2)}>
                                <div id='flooringCard' class='cardPic' style={fireplaceStyle}>
                                   
                                </div>
                                <p class='cardTitle'>
                                    Flooring
                                </p>
                            </div>    
                        </Link>              
                    </div>
                    <div class='col-sm-6 col-md-4'>
                        <Link to="/gallery/kitchen" >
                            <div class='galleryCard' onClick={e => props.setState(3)}>
                                <div id='kitchenCard' class='cardPic' style={kitchenStyle}>
                                    
                                </div>
                                <p class='cardTitle'>
                                Kitchen
                                </p>
                            </div> 
                        </Link>
                    </div>
                    <div class='col-sm-6 col-md-4'>
                        <Link to="/gallery/miscellaneous" >
                            <div class='galleryCard' onClick={e => props.setState(4)}>
                                <div id='miscCard' class='cardPic' style={miscStyle}>
                                   
                                </div>
                                <p class='cardTitle'>
                                    Miscellaneous
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div class='col-sm-6 col-md-4'>
                        <Link to="/gallery/outdoor" >
                            <div class='galleryCard' onClick={e => props.setState(5)}>
                                <div id='outdoorCard' class='cardPic' style={outdoorStyle}>
                                  
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
                    <img id='instaIcon' src={instaIcon} alt='instagram icon'></img>
                </a>
                <p id='instaDes'>
                    Follow us on Instagram!
                </p>
            </div>
        </div>
    )
}

export default Gallery;