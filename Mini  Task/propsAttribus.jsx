import { useState } from "react";
import  "./App.css";


function App(props){


  const toggleValue = props.toggleBool.toString()
  



  return (
    <>

    <h1>{toggleValue=="jai" ? "Name Match : "+` ${toggleValue}`:"false ! Not Name Match"}</h1>

    </>

  )
}

export default App;


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App  toggleBool="jai"/>
  </StrictMode>,
)


 
