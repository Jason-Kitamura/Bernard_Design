import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './home.css'


import BernardCard from './assets/BCard.png'


function Home(){


    return(
        <div id='coverArea' >
            <div id='coverRow' class='row'>
                <div id='leftBar' class='col-4 '>
                    <div id='infoRow' class=' row'>
                        <div id='sidePhoto' class='col-2'>
                            
                        </div>
                        <div id='headerBar' class='col-10'>
                            <img src={BernardCard}></img>
                        </div>
                    </div>
                </div>
                
                <div id='photoBar' class='col-8 '>
                    
                    
                </div>
                {/* <div class='col-md-6'>
                    <img src={BernardCard}></img>
                </div>
                <div class='col-md-6'>
                    {/* <p id='coverDes'>
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
                    </p> */}
                {/* </div> */}
            </div>
            <div id='iconBar' class='row'>

            </div>
        </div>
    )
}

export default Home;