// components/FileUpload.js
import React, { useState } from 'react';

function FileUpload({ onFileUpload }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onFileUpload(file);
  };
  const upload=()=>{
    let fileInput= document.getElementById('file');
    fileInput.click();
  }

  return (
    <div>
      <button onClick={upload}>Upload File</button>
     <input type="file" id="file" onChange={handleFileChange} style={{display:'none'}} />
    </div>
  );
}

export default FileUpload;
