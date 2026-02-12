 import {useState,useEffect} from "react"
import Product from "./product"
function App(){

 const [val, setVal]=useState("")
  
function handleSubmit(e){

    e.preventDefault();
    console.log(val);
    

}

    return(
       <>
       
       <form onSubmit={handleSubmit} >
            <h1> Form Handling </h1>
            <input 
            type="name"
            placeholder="enter"
            onChange={(e)=> setVal(e.target.value)}
            />
            <button type="submit"> Submit</button>
                </form>
                </>
            )
    


}
 
 export default App
