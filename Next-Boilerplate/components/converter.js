// pages/index.js
import React, { useState } from 'react';
import FileUpload from './fileUpload';
import FileConverter from './fileConverted';
import FileDownload from './fileDownload';
import { fileTypes } from '../public/constant';
import ImageToPDF from './type-conversion/ImageToPDF';
import style from '../public/styles/convert.module.css';
import { useGlobalContext } from '../public/context/GlobalContext';

function IndexPage() {
  const { file,fileType,convertedFile,setConvertedFile,setFile,setFileType } = useGlobalContext();
  // const [file, setFile] = useState(null);
  // const [convertedFile, setConvertedFile] = useState(null);
  // const [fileType,setFileType]=useState('');

 
  const handleFileConvert = (converted) => {

    setConvertedFile(converted);
  };

  return (
    <div className={style.container}>
      <h1 className='mar1rem'>A {fileType} File Converter</h1>
      <div className={style.uploadContainer+' '+'mar1rem'}>
        
      { fileType !==fileTypes.PNG &&<FileUpload  />}
      {fileType==fileTypes.PNG && !convertedFile? <ImageToPDF file={file} /> : !fileType?
      <p>Please Upload Image File</p>: <p>Please upload supported file</p>}
      {convertedFile && (
        <FileDownload convertedFile={convertedFile} />
      )}
      
      </div>
    </div>
  );
}

export default IndexPage;
