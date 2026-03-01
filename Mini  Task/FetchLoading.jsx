 import {useState,useEffect} from "react"
 
function App(){
// https://jsonplaceholder.typicode.com/users
   
const [userDatas, setData] =useState([])
const [loading, setLoading] =useState(false)
const [error, setError] =useState(null)

const fetchData= async ()=>{

try{
setLoading(true)
    
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData=await response.json();
    setData(userData);
}
catch{
    setError(true);
}
finally{

    setLoading(false)
}

}
 
 return (
< >
 
 <div style={{textAlign:"center"}}>
  <h1>This is Loading & UI Part</h1>   
 
<button onClick={fetchData}>Load Data</button>

{
    loading && <p>Loading....</p>

}
{
error && <p>Error Found</p>
}
{

    !loading && !error &&  
      userDatas.map((user)=>(<p key= {user.id}>{user.name}</p>))
    
}
 </div>
</>
    )

}
 export default App

 
 
