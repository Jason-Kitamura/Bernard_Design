import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './gallery.css';

import Bathroom from './bathroom/Bathroom'
import Fireplace from './fireplace/Fireplace';
import Flooring from './flooring/Flooring';
import Kitchen from './kitchen/Kitchen';
import Misc from './misc/Misc';
import Outdoor from './outdoor/Outdoor'

function PhotoGallery (){

    const [ state, setState ] = useState(0)

    const navBtn = {
        color : 'whitesmoke',
        fontWeight : 'bold',
        textAlign : 'center'
    }

    function selectedStyle( i ){
        const selected = {   
            boxShadow : '0px 10px 15px -10px white',
            borderBottom : 'white solid 1px'
        }

        const notSelected = {
            
        }
        if ( i === state ){
            return selected    
        } else {
            return notSelected
        }
    }

    return(
        
        <div id='photoGallery'>
            <h1 class='galleryTitle'>Gallery</h1>
            <div id='galleryNav'>
                <div class='row'>
                    <div class='col gallNavBtn'>
                        <Link to="/gallery/bathroom" style={navBtn} onClick={e => setState(0)}>
                            <p style={selectedStyle( 0)}>
                                Bathroom
                            </p>
                        </Link>
                    </div>
                    <div class='col gallNavBtn'>
                        <Link to="/gallery/fireplace" style={navBtn} onClick={e => setState(1)} >
                            <p style={selectedStyle( 1)}>
                                Fireplace
                            </p>
                        </Link>
                    </div>
                    <div class='col gallNavBtn'>
                        <Link to="/gallery/flooring" style={navBtn} onClick={e => setState(2)}>
                            <p style={selectedStyle( 2)}>
                                Flooring
                            </p>
                        </Link>
                    </div>
                    <div class='col gallNavBtn'>
                        <Link to="/gallery/kitchen" style={navBtn} onClick={e => setState(3)}>
                            <p style={selectedStyle( 3)}>
                                Kitchen
                            </p>
                        </Link>
                    </div>
                    <div class='col gallNavBtn'>
                        <Link to="/gallery/miscellaneous" style={navBtn} onClick={e => setState(4)}>
                            <p style={selectedStyle( 4)}>
                                Misc
                            </p>
                        </Link>
                    </div>
                    <div class='col gallNavBtn'>
                        <Link to="/gallery/outdoor" style={navBtn} onClick={e => setState(5)}>
                            <p style={selectedStyle( 5)}>
                                Outdoor
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <div id='photoArea'>
                <Switch>
                <Route path={["/gallery/bathroom"]} component={Bathroom} />
                    <Route path={["/gallery/fireplace"]} component={Fireplace} />
                    <Route path={["/gallery/flooring"]} component={Flooring} />
                    <Route path={["/gallery/kitchen"]} component={Kitchen} />
                    <Route path={["/gallery/miscellaneous"]} component={Misc} />
                    <Route path={["/gallery/outdoor"]} component={Outdoor} />
                </Switch>
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

export default PhotoGallery;