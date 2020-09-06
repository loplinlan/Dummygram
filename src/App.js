import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function App() {
  //"useState=(null)" because when you first load the page you have not yet selected an image.
  //When an image is selected by clicking on it it has a value, and then it shows.
  const [selectedImg, setSelectedImg] = useState(null); 
  //"selectedImg" is updated inside the ImageGrid when you click on an image.

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />

      {/*Checks for selected image, and renders only when the left side of "&&" is true.*/}
      {/*When an image is clicked, the selectedImg is updated and the enlarged imaged shows.*/}
      {selectedImg &&( <Modal selectedImg={selectedImg} 
      setSelectedImg={setSelectedImg} /> )} 
    </div>
  );
}

export default App;
