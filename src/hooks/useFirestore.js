import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    //All of the database communication is inside this useEffect hook basically.
    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
        .orderBy('createdAt', 'desc') //Ordering the documents by creation in descending order.
        .onSnapshot((snap) => { //Everytime a new image is added to the database, this snapshot will basically notify.
            
            //This listener setup retrieves the documents once initially, 
            //and everytime a new document is added to so the documents are always in sync with what's in the database.
            let documents = []; //Each document stored in this array is going to have both properties from the data and the id associated with it.
            snap.forEach(doc => { //Basically cycling through all documents
                documents.push({...doc.data(), id: doc.id});
            });
            setDocs(documents);
        });
        return () => unsub(); //This cleanup function invokes the unsub method, which "unsubscribes" from the collection when it's no longer used.
    }, [collection])
    return {docs};
}
export default useFirestore;