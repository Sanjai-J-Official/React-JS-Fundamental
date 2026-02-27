 import {useState,useEffect} from "react"
 
function App(){

 
const [users,setUsers]=useState([]);
const [Message,setMessage]=useState(false)  
const [error,setError]=useState(null)
 const fetchUser = async ()=>{
    try{
      setMessage(true)
      setError(null)
    const response = await   fetch("https://jsonplaceholder.typicode.com/users");
    const UserData=  await response.json();
    setUsers(UserData);
    setMessage(false);
 
   

    }catch{
        setMessage(false)
        setError(true);
       
        
    }
 setError(false);
 }  
 
 return (
< >
 
 <div style={{textAlign:"center"}}>
     
<h1 style={{color:"#224522"}}>Fetch User Data</h1>

<button onClick={fetchUser}>Click to Load User Data</button>
 

{

!error && !Message

&&
users.map((user)=>(
    <p key={user.id}>{user.name}</p>
)
)}

    </div>
</>
    )
}
 
 export default App

 
 
