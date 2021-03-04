import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './gallery.css';

import bathroomPic from './assets/BathroomPic.jpg';
import fireplacePic from './assets/FireplacePic.jpg';
import flooringPic from './assets/FlooringPic.jpg';
import kitchenPic from './assets/KitchenPic.jpg';
import miscPic from './assets/MiscPic.jpg';
import outdoorPic from './assets/OutdoorPic.jpg';
import instaLeaf from './assets/instaLeafPNG.png';


import instaIcon from './assets/BDBinstagramIcon.png';



function Gallery (props){

    const [ bathroomStyle, setBathroomStyle ] = useState({ backgroundImage: `url(${bathroomPic})`});
    const [ flooringStyle, setFlooringStyle ] = useState({ backgroundImage: `url(${flooringPic})`});
    const [ fireplaceStyle, setFireplaceStyle ] = useState({ backgroundImage: `url(${fireplacePic})`});
    const [ kitchenStyle, setKitchenStyle ] = useState({ backgroundImage: `url(${kitchenPic})`});
    const [ miscStyle, setMiscStyle ] = useState({ backgroundImage: `url(${miscPic})`});
    const [ outdoorStyle, setOutdoorStyle ] = useState({ backgroundImage: `url(${outdoorPic})`});


    return(  
        <div id='gallery'>
            <div id='galleryGrid'>
                <div class='galleryCell' onClick={e => props.setState(0)}>
                    <Link to="/photogallery/bathroom" >
                        <div class='cardPic' style={bathroomStyle}></div>
                        <div class='cardTitle'>
                            <p>Bathroom</p>
                        </div> 
                    </Link>
                </div>
                <div class='galleryCell'>
                    <Link to="/photogallery/bathroom" onClick={e => props.setState(1)} >
                        <div class='cardPic' style={fireplaceStyle}></div>
                        <div class='cardTitle'>
                            <p>Fireplace</p>
                        </div> 
                    </Link>
                </div>
                <div class='galleryCell'>
                <Link to="/photogallery/bathroom" onClick={e => props.setState(2)} >
                        <div class='cardPic' style={flooringStyle}></div>
                        <div class='cardTitle'>
                            <p>Flooring</p>
                        </div> 
                    </Link>
                </div>
                <div class='galleryCell'>
                <Link to="/photogallery/bathroom" onClick={e => props.setState(3)}>
                        <div class='cardPic' style={kitchenStyle}></div>
                        <div class='cardTitle'>
                            <p>Kitchen</p>
                        </div> 
                    </Link>
                </div>
                <div class='galleryCell'>
                <Link to="/photogallery/bathroom" onClick={e => props.setState(4)}>
                        <div class='cardPic' style={miscStyle}></div>
                        <div class='cardTitle'>
                            <p>Misc</p>
                        </div> 
                    </Link>
                </div>
                <div class='galleryCell'>
                <Link to="/photogallery/bathroom" onClick={e => props.setState(5)}>
                        <div class='cardPic' style={outdoorStyle}></div>
                        <div class='cardTitle'>
                            <p>Outdoor</p>
                        </div> 
                    </Link>
                </div>
            </div>
            {/* <div id='container'>
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
                                <div id='fireplaceCard' class='cardPic' style={fireplaceStyle} >
                                    
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
                                <div id='flooringCard' class='cardPic' style={flooringStyle}>
                                   
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
            </div> */}
            <div id='instagram'>
                <a target='_blank' href='https://www.instagram.com/bernardcustombuild/' rel='noopener noreferrer'>
                    <img src={instaLeaf}></img>
                </a>
                
            </div>
            <div id='galleryFooter'>
                <p>
                    Gallery
                </p>

            </div>
        </div>
    )
}

export default Gallery;