 import {useState,useEffect} from "react"
 
function App(){
 
 const randomChance= Math.floor(Math.random()*10)%2
 
const [message, setMessage]= useState("Loading...")

useEffect (()=>{


    const  responseGet =async  ()=>{
try {
        const res= await  fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    if (randomChance==1){
    setMessage(data[0].name)
    }
    else{
        setMessage("You Dont have Luck...!")
    }
}
catch{

    console.log("Error");
    
} 
 
}
responseGet();
 
},[])
 

 return (
< >
 
 <div style={{textAlign:"center"}}>
     <h1>This Fetch Is API</h1>
     <h2>{message}</h2>

    </div>
</>
    )
}
 
 export default App

 
 
