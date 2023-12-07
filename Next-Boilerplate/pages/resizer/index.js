import React,{ useState } from 'react';
import FileUpload from '../../components/fileUpload';
import {compress} from 'image-conversion';
import {useGlobalContext} from '../../public/context/GlobalContext';
const Resizer = ()=>{
   const { file,fileSize,fileBlob } = useGlobalContext();
   const [compressedImage,setCompressedImages] = useState('');
    const Compress = async()=>{
      try{
        compress(fileBlob, {
            quality: 0.7, // adjust quality as needed (0.0 to 1.0)
            maxWidth: 800, // adjust maximum width as needed
            maxHeight: 800, // adjust maximum height as needed
          }).then(compressedDataUrl=>{;
        console.log(compressedDataUrl);
        
        setCompressedImages(compressedDataUrl);
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
        
        // if (compressedImage) {
        //   const compressedImageData = compressedImage.replace(/^data:image\/\w+;base64,/, '');

        //     const byteCharacters = atob(compressedImageData);
        //     const byteArrays = [];
        //     for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        //       const slice = byteCharacters.slice(offset, offset + 512);
        //       const byteNumbers = new Array(slice.length);
        //       for (let i = 0; i < slice.length; i++) {
        //         byteNumbers[i] = slice.charCodeAt(i);
        //       }
        //       const byteArray = new Uint8Array(byteNumbers);
        //       byteArrays.push(byteArray);
        //     }
        //     const blob = new Blob(byteArrays, { type: 'image/jpeg' });
      
        //     const link = document.createElement('a');
        //     link.href = URL.createObjectURL(blob);
        //     link.download = 'compressed_image.jpg';
        //     document.body.appendChild(link);
        //     link.click();
        //     document.body.removeChild(link);
        //   }
      
          
        

    }
    return (
        <div><p>With Resizer you can reduce your uploaded file size by using advance AI tech.</p>
        {fileSize && <p>Currently your file size is <strong>{fileSize.toFixed(2)}KB.</strong> </p>}
        {!file ? <FileUpload />: compressedImage?<button ><a id='dowload' onClick={(e)=>Download(e)} >Dowload</a></button>: <button onClick={Compress} >Compress</button>}
        

        </div>
    )
}
export default Resizer;