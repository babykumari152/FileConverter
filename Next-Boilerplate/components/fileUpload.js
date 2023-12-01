// components/FileUpload.js
import React, { useState } from 'react';
import style from '../public/styles/convert.module.css'

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
    <div className={style.container}>
      <button onClick={upload}>Upload File</button>
     <input type="file" id="file" onChange={handleFileChange} style={{display:'none'}} />
    </div>
  );
}

export default FileUpload;
