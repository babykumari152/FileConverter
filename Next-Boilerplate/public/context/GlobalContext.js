// contexts/GlobalContext.js
import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({
    // your initial global state here
    user: null,
    theme: 'light',
  });
  const [file, setFile] = useState(null);
  const [convertedFile, setConvertedFile] = useState(null);
  const [fileType,setFileType]=useState('');
  const [fileSize,setFileSize] = useState('');
  const[fileBlob,setFileBlob]=useState();


  const updateGlobalState = (newState) => {
    setGlobalState((prev) => ({ ...prev, ...newState }));
  };

  return (
    <GlobalContext.Provider value={{ file,setFile,fileType,setFileType,convertedFile,setConvertedFile,
    fileSize,setFileSize,fileBlob,setFileBlob }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
