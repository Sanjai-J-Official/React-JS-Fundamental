 import {useState,useEffect} from "react"
 
function App(){
 
  const [times, setTime]= useState(new Date());
 
 useEffect(()=>{

  const timer= setInterval(()=>{

    setTime(new Date());
  },1000)

return ()=> {
  clearInterval(timer)
}
 },[times])  

 

 
 return (
< >
 
 <div style={{textAlign:"center"}}>
   
<h1>Clock Timer</h1>
 <p>{times.toLocaleString()}</p>
 </div>
</>
    )
}
 
 export default App

 
