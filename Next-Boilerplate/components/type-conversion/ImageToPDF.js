'use client'
import React, { useState } from 'react';
import {} from 'pdf-lib';
import Image from 'next/image';
import jsPDF from 'jspdf';

const ImageToPDF = ({file})=>{
    const [pdfFile,setPDF] = useState('');
    console.log(file)
    const convert =()=>{
        let pdf = new jsPDF();
        let byteString = atob(file.split(',')[1]);
        let uint8Array = new Uint8Array(byteString.length);

        for (let i = 0; i < byteString.length; i++) {
          uint8Array[i] = byteString.charCodeAt(i);
        }
        console.log(uint8Array)
        pdf.addImage(uint8Array, 'PNG', 10, 10,100,100);
        setPDF(pdf);
        
  
    };
    const download =()=>{
        pdfFile.save('converted.pdf');

    }
    
    return(<><Image src={file} width={150} height={150} className='floatLeft'  />
        {!pdfFile && <button onClick={convert} className='mar1rem'>convert to pdf</button>}
        {pdfFile &&<button onClick={download} className='mar1rem'>Download</button>}
        </>)

}
export default ImageToPDF;