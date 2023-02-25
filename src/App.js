import React, { useState, useEffect } from 'react';
import { BrowserRouter} from 'react-router-dom';

import Navbar from './UI/Navbar/Navbar';
import './App.css';
import AppRouter from './API/AppRouter';
import { AuthContext } from './context';

function App() {

  const [isAuth, setAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setAuth(true)
    }
    setIsLoading(false)
  },[])

  return(
    <AuthContext.Provider value ={{
      isAuth,
      setAuth,
      isLoading
    }}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
     
  )
}

export default App;
