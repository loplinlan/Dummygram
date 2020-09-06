import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

//Hooks (in react) is a way to create a small chunk of reusable code, and those hooks can be used in whatever components need them. 

//This hook will be responsible for handling file uploads and return some useful values about an upload, 
//such as upload progress, any errors, and the image url after it's uploaded
const useStorage = (file) => {
    //Three pieces of state that are set inside the upload progress further down.
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    //The function inside "useEffect" will run every time the dependency changes.
    useEffect(() => {
        //Inside this function is where all the logic to upload the file is going to go.

        // references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100; //formula for percentage, which will be the percentage of an upload.
            setProgress(percentage); //set progress to be the percentage.
        }, (err) => {
            setError(err); //set error if there is one.
        }, async() => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({url, createdAt});
            setUrl(url); //set url after the image has uploaded.
            //Once an upload is complete we have the url, 
            //and a new document is created inside the images collection to match the uploaded image,
            //and the url and the time of creation of that image is stored.
        })
    },  [file]); //the dependency inside the array = file.
    return { progress, url, error }
}
export default useStorage;