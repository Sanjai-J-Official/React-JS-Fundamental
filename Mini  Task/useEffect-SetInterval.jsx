 import {useState,useEffect} from "react"
 
function App(){
 
 const [count, setCount]= useState(0);

 useEffect(()=>{
 
const timer =setInterval(()=>{
setCount(prev=>prev+1)
},1000);

if (count===5){
  clearInterval(timer)
}

return ()=>{
  clearInterval(timer)
}
 },[count])
 return (
< >
 
 <div style={{textAlign:"center"}}>
  <h1 >Timer Count</h1>
  <h2>
    {count}


   
  </h2>
{count >=5 && <p>Finished</p> }
<h1>End</h1>
 </div>
</>
    )
}
 
 export default App

 
