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
        fontFamily : 'verdana, Deneva, Tahoma, sans-serif',
        fontWeight : 'bold',
        textAlign : 'center'
    }

    function selectedStyle( i ){
        const selected = {   
            boxShadow : '0px 15px 15px  -8px white'
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
            <h1 id='galleryTitle'>Gallery</h1>
            <div id='galleryNav'>
                <div class='row'>
                    
                        <div class='col gallNavBtn'>
                            <Link to="/" style={navBtn} onClick={e => setState(0)}>
                                <p style={selectedStyle( 0)}>
                                    Bathroom
                                </p>
                            </Link>
                        </div>
                        <div class='col gallNavBtn'>
                            <Link to="/fireplace" style={navBtn} onClick={e => setState(1)} >
                                <p style={selectedStyle( 1)}>
                                    Fireplace
                                </p>
                            </Link>
                        </div>
                        <div class='col gallNavBtn'>
                            <Link to="/flooring" style={navBtn} onClick={e => setState(2)}>
                                <p style={selectedStyle( 2)}>
                                    Flooring
                                </p>
                            </Link>
                        </div>
                        <div class='col gallNavBtn'>
                            <Link to="/kitchen" style={navBtn} onClick={e => setState(3)}>
                                <p style={selectedStyle( 3)}>
                                    Kitchen
                                </p>
                            </Link>
                        </div>
                        <div class='col gallNavBtn'>
                            <Link to="/misc" style={navBtn} onClick={e => setState(4)}>
                                <p style={selectedStyle( 4)}>
                                    Misc
                                </p>
                            </Link>
                        </div>
                        <div class='col gallNavBtn'>
                            <Link to="/outdoor" style={navBtn} onClick={e => setState(5)}>
                                <p style={selectedStyle( 5)}>
                                    Outdoor
                                </p>
                            </Link>
                        </div>
                    
                    
                </div>
            </div>
            
                <Switch>
                    <Route path={["/fireplace"]} component={Fireplace} />
                    <Route path={["/flooring"]} component={Flooring} />
                    <Route path={["/kitchen"]} component={Kitchen} />
                    <Route path={["/misc"]} component={Misc} />
                    <Route path={["/outdoor"]} component={Outdoor} />
                    <Route  exact path={["/"]} component={Bathroom} />
                </Switch>
                    
                   
               
           
           
        </div>
        
    )
}

export default PhotoGallery;