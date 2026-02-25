 import {useState,useEffect} from "react"
 
function App(){
 
 const [tex,setTex]=useState("Loading...")
 console.log(tex);
 
useEffect(()=>{

    const tex1= ()=>{
            return new Promise((res,rej)=>{
        setTimeout(()=>{
        res("Successfully loading")

    },2000)
        })
    }
    
    const result= async () =>{

        const restext= await tex1();
        setTex(restext)
    }
   result();

    },[])

 return (
< >
 
 <div style={{textAlign:"center"}}>
    <h2>
        This is Async/ Await Concept
    </h2>
    
<h1>{tex}</h1>

    </div>
</>
    )
}
 
 export default App

 
 
