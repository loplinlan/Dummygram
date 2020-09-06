import React, {useState} from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null); //Storing a file in a local piece of state with useState hook.
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg']; //An array of allowed image types.

    //I guess you can call this some sort of event handling.
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        //console.log('changed');
        //console.log(selected);

        //Checks if there is a file selected, and if it's a valid file. else an error message will show.
        if (selected && types.includes(selected.type)) { 
            
            setFile(selected);
            setError('');//This resets the error message basically (makes the error message go away).
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)');
        }
    }
    
    return (
        <form>
            <label>
                {/*some JSX stuff below.*/}
                <input type="file" onChange={changeHandler} /> 
                <span>+</span>
            </label>

            {/*This outputs either an error or an image depending on what is selected etc.*/}
            {/*NOTE! The right side of the "&&" is only output if the left side is true.*/}
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}

                {/*This outputs when a file is selected. 
                   "file={file}" is a prop that is equal to the file.
                   "setFile={setFile}" sets the file back null once progress is complete, and the progress bar doesn't show again.*/}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}
export default UploadForm;