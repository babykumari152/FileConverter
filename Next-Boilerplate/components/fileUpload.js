// components/FileUpload.js
import React, { useState } from 'react';
import style from '../public/styles/convert.module.css';
import { useGlobalContext } from '../public/context/GlobalContext';
import { getFileType } from '../public/helper';

function FileUpload() {
  const { setFile,setFileType,setFileSize,setFileBlob } = useGlobalContext();
  const handleFileChange = (event) => {
    const fileRaw = event.target.files[0];
    const sizeInByte = fileRaw.size;
    setFileBlob(fileRaw)
    setFileSize(sizeInByte/1024);
    onFileUpload(fileRaw);
    

  };
  const onFileUpload = (uploadedFile) => {
    let reader= new FileReader();
    reader.onload =(event)=>{
      let fileConentBase64=event.target.result;
      //createBlob(fileConentBase64)
      setFile(fileConentBase64);
      let types=getFileType(uploadedFile.type);
      setFileType(types);
      
    }
    reader.readAsDataURL(uploadedFile);
    
    
    //setFile(uploadedFile);
  };
  const createBlob = (base64String)=>{
    const base64WithoutPrefix = base64String.split(',')[1];
    const binaryData = atob(base64WithoutPrefix);
    const uint8Array = new Uint8Array(binaryData.length);
    for (let i = 0; i < binaryData.length; i++) {
      uint8Array[i] = binaryData.charCodeAt(i);
    }
    const blob = new Blob(uint8Array, { type: 'image/png' });
    setFileBlob(blob);
    console.log(blob);



  }

  const upload=()=>{
    let fileInput= document.getElementById('file');
    fileInput.click();
  }

  return (
    <div className={style.container}>
      <button onClick={upload} className='mar1rem'>Upload File</button>
     <input type="file" id="file" onChange={handleFileChange} style={{display:'none'}} />
    </div>
  );
}

export default FileUpload;
