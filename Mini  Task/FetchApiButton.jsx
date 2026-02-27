 import {useState,useEffect} from "react"
 
function App(){


 
const [message, setMessage]= useState("Loading...")


const  responseGet =async  ()=>{
 const randomChance= Math.floor(Math.random()*10)%2;

 if (randomChance !=1){
  setMessage("You Dont have Luck...!");
  return;
 }
       setMessage("Loading...")  
try {
        const res= await  fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

  
    setMessage(data[0].name)
    }
   


catch{

    console.log("Error");
    
} }



 
 
 
 return (
< >
 
 <div style={{textAlign:"center"}}>
     <h1>This Fetch Is API</h1>
     <h2>{message}</h2>
    <button onClick={responseGet}>Retry</button>
    </div>
</>
    )
}
 
 export default App

 
 
