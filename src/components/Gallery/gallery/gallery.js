import React, { useState, useCallback} from "react";
import Gallery from "react-photo-gallery";
import Carousel from "react-images";
import { photos } from "./photos";



/* popout the browser and maximize to see more rows! -> */
function BasicRows () {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
    }, []);
  

    return (
        <div>
            <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                    }))}
            />
            <Gallery photos={photos} onClick={openLightbox}  />
            {/* <p id='instagram'>Follow us on Instagram! <i class='fab fa-instagram'></i></p> */}
            
                    
               
        </div>
    )
} 
// render(<BasicRows />, document.getElementById("masonry"));

export default BasicRows;