import React, {useEffect} from 'react';
import useStorage from '../hooks/useStorage';
import {motion} from 'framer-motion';

//Destructuring the props passed into the progress bar.
const ProgressBar = ({file, setFile}) => {

    //This hook is going to fire everything inside "useEffect", 
    //which will take the file, create a reference and try to upload that file.
    //At that moment we get values back for progress, and when that is done the url as well.
    const {url, progress} = useStorage(file);
    //console.log(progress, url);
    
    useEffect(() => {
        //File is set back to null if url has a valid value (not null/undefined).
        if (url) {
            setFile(null);
        }
    }, [url, setFile])//dependencies

    return (
        //This motion div makes a smooth animation of the progress bar.
        <motion.div className="progress-bar"
            initial={{width: 0}}
            animate={{width: progress + '%'}}
        ></motion.div>
    )
}
export default ProgressBar;