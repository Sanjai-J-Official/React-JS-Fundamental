import { useState } from "react";
import  "./App.css";


function App(){

  const [toggleValue,setToggle]=useState(false)


const changeValue =()=>{

  setToggle(!toggleValue)
}


  return (
    <>

    <h1>{toggleValue.toString()}</h1>

    <button onClick={ ()=>setToggle(!toggleValue)}>Toggle</button>
    
    
    </>


  )
}
export default App;

 
