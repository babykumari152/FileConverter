// pages/index.js
import React, { useState } from 'react';
import FileUpload from './fileUpload';
import FileConverter from './fileConverted';
import FileDownload from './fileDownload';
import { getFileType } from '../public/helper';
import { fileTypes } from '../public/constant';
import ImageToPDF from './type-conversion/ImageToPDF';

function IndexPage() {
  const [file, setFile] = useState(null);
  const [convertedFile, setConvertedFile] = useState(null);
  const [fileType,setFileType]=useState('');

  const handleFileUpload = (uploadedFile) => {
    console.log(uploadedFile);
    let reader= new FileReader();
    reader.onload =(event)=>{
      let fileConentBase64=event.target.result;
      setFile(fileConentBase64);
      let types=getFileType(uploadedFile.type);
      setFileType(types);
      
    }
    reader.readAsDataURL(uploadedFile);
    
    
    //setFile(uploadedFile);
  };

  const handleFileConvert = (converted) => {

    setConvertedFile(converted);
  };

  return (
    <div>
      <h1>A {fileType} File Converter</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      {fileType==fileTypes.PNG && <ImageToPDF file={file} /> }
      {convertedFile && (
        <FileDownload convertedFile={convertedFile} />
      )}
    </div>
  );
}

export default IndexPage;
