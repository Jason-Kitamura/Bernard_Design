import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './home.css'

import samplePhoto from './assets/kitchenCover.jpg'
import leaf from './assets/leaf.png'


function Home(){

    const coverPhoto = {
        backgroundImage : samplePhoto
      }

    return(
        <div id='coverArea' style={coverPhoto}>
            <div class='row'>
                <div class='col-md-6'>
                    <p id='coverTitle'>
                        BERNARD
                        <br/> <p>Design  <img id='leaf' src={leaf}></img> Build</p>
                    </p>
                </div>
                <div class='col-md-6'>
                    <p id='coverDes'>
                        WELCOME
                        <br/>
                        <p>
                            Quality Work
                            <br/> Building Trust
                        </p>
                            Please Contact
                        <br/>Grayson Bernard
                        <br/> at bernardbuild@gmail.com
                        <br/>(705) 888 0059
                        <br/>
                        <br/> or click 'Book Now' to get in-touch
                        <br/> <button id='bookBtn'><Link smooth to='/#contact'><p>Book Now</p></Link></button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;