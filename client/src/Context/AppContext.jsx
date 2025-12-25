import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URI;
  

const AppContext = createContext();


export const AppContextProvider = ({children}) => {

    const [loading , setLoading] = useState(false);
    const [shortURL, setShortURL] = useState('');
    const [showResult, setShowResult] = useState(false)
    


    const value = {
      setLoading, loading, shortURL, setShortURL, setShowResult, showResult, axios
    }

  return (
    <AppContext.Provider value={value}>
            {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)