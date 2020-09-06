import React from 'react';
import {motion} from 'framer-motion';

//This component enables so that you can open and show a full sized image when you click on a small one.

//selectedImg = a destructured prop.
const Modal = ({selectedImg, setSelectedImg}) => {

    //This function, along with the onClick event, enables so that you can close the modal when you click on the backdrop.
    const handleClick = (e) => {
        //The if statement makes sure that if you click on the enlarged image, the modal doesn't close down, only if you click on the backdrop.
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    }

    return (
        //This motion div makes a smooth opacity animation when you click on an image
        <motion.div className="backdrop" onClick={handleClick} //backdrop = the grey "background" that surrounds the image.
            initial={{opacity: 0}}
            animate={{opacity: 1}}

        > {/*This motion image makes the image "fall" from the top to the center of the page.*/}
            <motion.img src={selectedImg} alt="enlarged pic" 
                initial={{y: "-100vh"}} //vh = view height
                animate={{y: 0}}
            />
        </motion.div>
    )
}
export default Modal;