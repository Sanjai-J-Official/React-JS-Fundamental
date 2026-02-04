 import {useState,useEffect} from "react"
import Product from "./product"
function App(){

const [value, setValue]=useState("");

const istrue= value=== "true"
return(
<div>
<input type="text"  onChange={(e)=>setValue(e.target.value)}/>

<h1>{value}</h1>
{istrue ? <h1>Hello true</h1>: <h1>Hello false</h1>}
</div> )


}
 
 export default App

 
