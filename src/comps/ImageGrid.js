import React from 'react';
import useFirestore from '../hooks/useFirestore';
import {motion} from 'framer-motion';

const ImageGrid = ({setSelectedImg}) => {
    //Retrieves the data from the images collection in the database.
    const {docs} = useFirestore('images'); 
    console.log(docs);

    //Basically shows the images.
    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                //This div is output for each individual image.
                <motion.div className="img-wrap" key={doc.id}
                    layout //Basically makes a smooth repositioning of all the images whenever a new image is uploaded.
                    whileHover={{opacity: 1}} //Changes the opacity slightly when you hover over an image.
                    
                    //When an image is clicked, the value of "selectedImg" updates with the url of the image (doc.url).
                    onClick={() => setSelectedImg(doc.url)}
                    >

                    {/*Basically makes the images wait for a second before they animate onto the page.*/}
                    <motion.img src={doc.url} alt="uploaded pic" 
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{ delay: 1}}
                    />
                </motion.div>
            ))}
        </div>
    )
}
export default ImageGrid;