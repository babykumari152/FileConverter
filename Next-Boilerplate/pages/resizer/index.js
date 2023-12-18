import React,{ useState } from 'react';
import FileUpload from '../../components/fileUpload';
import {compress} from 'image-conversion';
import {useGlobalContext} from '../../public/context/GlobalContext';
import style from '../../public/styles/resizer.module.css';
const Resizer = ()=>{
   const { file,fileSize,fileBlob } = useGlobalContext();
   const [compressedImage,setCompressedImages] = useState('');
   const [compressedSize, setCompressedSize] = useState('');
   const [height,setHeight] = useState(100);
   const [width,setWidth] = useState(100);
   const [range,setRange] = useState(3);
   const Compress = async()=>{
      try{
        compress(fileBlob, {
            quality: ((10-range)/10).toFixed(1), // adjust quality as needed (0.0 to 1.0)
            maxWidth: width, // adjust maximum width as needed
            maxHeight: height, // adjust maximum height as needed
          }).then(compressedDataUrl=>{
        console.log(compressedDataUrl);        
        setCompressedImages(compressedDataUrl);
        setCompressedSize(compressedDataUrl.size);
      });
      }
      catch(err){
        console.log(err);
      }
       

    };
    const Download = (e)=>{
        e.preventDefault();
        console.log(compressedImage);
        const link = document.createElement('a');
        link.href = URL.createObjectURL(compressedImage);
        link.download = 'compressed_image.jpg'; // Adjust the filename as needed
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }
    const onSizeChange = (e)=>{
      if(e.target.name=='height'){
        setHeight(e.target.value);
      }
      else{
        setWidth(e.target.value);
      }
    }
    const onChangeRange = (e)=>{
      console.log(e.target.value);
      setRange(e.target.value);
    }
    return (
        <div className={style.container}><p className='mar1rem'>With Resizer you can reduce your uploaded file size by using advance AI tech.</p>
        {fileSize && !compressedSize && <p className='compressedSize'>Currently your file size is <strong>{fileSize.toFixed(2)}KB.</strong> </p>}
        {compressedSize && <p className='compressedSize'>Your compressed file size is {(compressedSize/1024).toFixed(2)}KB</p>}
        {!file ? <FileUpload />: compressedImage?<button ><a id='dowload' onClick={(e)=>Download(e)} >Dowload</a></button>:<> 
       <div id='resize' >
        <input type='number' placeholder='width' value={width} className='hidden' name='width' onChange={(e)=>onSizeChange(e)}/>  <input type='number' className='hidden' placeholder='height' value={height} name='height' onChange={(e)=>onSizeChange(e)} />
        <input type="range" value={range} max={9} min={1} onChange={(e)=>onChangeRange(e)} />
        </div>
        <button onClick={Compress} >Compress</button></>}
        

        </div>
    )
}
export default Resizer;