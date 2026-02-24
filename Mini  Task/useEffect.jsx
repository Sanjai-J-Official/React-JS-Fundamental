 import {useState,useEffect} from "react"
 
function App(){
 
 const [count,setCount]=useState(0);

 useEffect(()=>{
document.title= `count: ${count}`

 },[count])
 return (
< >
 <div style={{textAlign:"center"}}> 
        <button
            onClick={()=>setCount(count+1)}
        >+</button>

<h2  >{count}</h2>

        <button
                onClick={()=>setCount(count-1)}
        >-</button>

  <h2>End of The Code</h2>
        </div>
</>
    )
}
 
 export default App

 
