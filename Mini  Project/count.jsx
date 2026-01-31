 import {useState,useEffect} from "react"

function App(){

 const [count,setCount]=useState(0);

 useEffect(()=>{

  console.log("Count Changed:",count);
  
 },[count])
  return (<>
   <h1>Count Mini Task</h1>
    
  <h1>Count:{count} </h1>
  <button class="button" onClick={()=>setCount(count+1)}>increase</button>
<button class="button" onClick={()=>setCount(count-1)}>Decrease</button>
  
  </>)
}

 export default App
