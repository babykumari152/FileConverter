import { fileTypes } from "./constant"
export const getFileType=(type)=>{
    switch(type){
        case('application/pdf'):
           return fileTypes.PDF;
           break;
        case('text/plain'):
          return fileTypes.TXT;
          break;
        case('image/png'):
           return fileTypes.PNG;
        case('jpeg'):
           return fileTypes.JPEG;
        case('application/msword'):
           return fileTypes.DOCX;

        default:
            return false     
    }
}