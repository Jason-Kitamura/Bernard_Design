
import React, { useState, useCallback} from "react";
import BasicRows from './gallery'
import './gallery.css'

function Gallery () {


    return(
        <div>
            <div class='row'>
                <div class='col'>
                    <h1 id='galleryTitle'>Gallery</h1>
                </div>
                <div class='col'>
                    <p id='instagram'><i class='fab fa-instagram fa-4x' id='instagramIcon'></i></p>
                </div>
            </div>
                
                
            
           
            
            
            <BasicRows/>
        </div>
    )
}
export default Gallery;