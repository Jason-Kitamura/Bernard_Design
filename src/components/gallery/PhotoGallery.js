import React, {} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './gallery.css';

import Bathroom from './bathroom/Bathroom'
import Fireplace from './fireplace/Fireplace';
import Flooring from './flooring/Flooring';
import Kitchen from './kitchen/Kitchen';
import Misc from './misc/Misc';
import Outdoor from './outdoor/Outdoor'

function PhotoGallery (){

    const navBtn = {
        color : 'whitesmoke',
        fontFamily : 'verdana, Deneva, Tahoma, sans-serif',
        fontWeight : 'bold',
        textAlign : 'center'
    }

    return(
        <div id='photoGallery'>
            <h1 id='galleryTitle'>Gallery</h1>
            <div id='galleryNav'>
                <div class='row'>
                    <Router>
                        <div class='col gallNavBtn'>
                            <Link to="/" style={navBtn}>
                                <p>
                                    Bathroom
                                </p>
                            </Link>
                        </div>
                        <div class='col gallNavBtn'>
                            <Link to="/fireplace" style={navBtn}>
                                <p>
                                    Fireplace
                                </p>
                            </Link>
                        </div>
                        <div class='col gallNavBtn'>
                            <Link to="/flooring" style={navBtn}>
                                <p>
                                    Flooring
                                </p>
                            </Link>
                        </div>
                        <div class='col gallNavBtn'>
                            <Link to="/kitchen" style={navBtn}>
                                <p>
                                    Kitchen
                                </p>
                            </Link>
                        </div>
                        <div class='col gallNavBtn'>
                            <Link to="/misc" style={navBtn}>
                                <p>
                                    Misc
                                </p>
                            </Link>
                        </div>
                        <div class='col gallNavBtn'>
                            <Link to="/outdoor" style={navBtn}>
                                <p>
                                    Outdoor
                                </p>
                            </Link>
                        </div>
                    </Router>
                    
                </div>
            </div>
            <Router>
                <Route path={["/"]} component={Bathroom} />
            </Router>
           
        </div>
    )
}

export default PhotoGallery;