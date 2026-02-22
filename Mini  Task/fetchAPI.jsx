 import {useState,useEffect} from "react"
 
function App(){
 
const [data, setData]=useState([]);
const [loading,setLoading] = useState(true)
useEffect(()=>{

  fetch("https://jsonplaceholder.typicode.com/posts").then(response=> response.json()

).then(data=>{

    const firstfive=data.slice(0,5);
    setData(firstfive);
    setLoading(false)
  }
).catch(error=>{
  alert("error in data fetch");
  setLoading(false);
}


 
)

},[])
 
 return (
< >
 
 <div style={{textAlign:"center"}}>
   {loading ? <h1>Loading...</h1> : 
   (
    data.map(datas=>
      <p key={datas.id}>{datas.title}</p>
    )
   )
   
}
 </div>
</>
    )
}
 
 export default App

 
 
