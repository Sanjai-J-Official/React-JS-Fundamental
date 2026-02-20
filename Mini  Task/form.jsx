 import {useState,useEffect} from "react"
 
function App(){

 const [form,setForm]=useState({
    name:"",
    email:"",
    password:"",
    agree:false
    })
  const [ Error, setError] = useState("")
  const [ success, setSuccess] = useState("")

{

id: 21069099
id:ff0000
id:3002
id:letter

}


function handleSubmit(e){

    e.preventDefault();
 if (!form.name || !form.email || !form.password || !form.agree){

    setError("Fill Missing Details")
setSuccess("");
return

 }
 else{

     setError("");
     setSuccess("Successfully Register..!");

 }
}

function handleForm(e){
    setForm({
        ...form,
        [e.target.name]:e.target.value
    })
}

    return( 
            
    <>
    <h1>
        Form Register
    </h1>
    <form onSubmit={handleSubmit}>
<input 
name="name" 
type="text" 
value={form.name}
placeholder="Enter the Name" 
onChange={handleForm}

/>


<input 
name="email" 
value={form.email}
type="email" 
placeholder="Enter the Email" 
onChange={handleForm}
/>


<input 
name="password" 
value={form.password}
type="password" 
placeholder="Enter the Password" 
onChange={handleForm}
/>
<br />
<br />
<label>
<input 
name="agree" 
value={form.agree}
type="checkbox" 
onChange={handleForm} 
/>
 
I agree to   <a href="" style={{color:"red"}}>terms</a>  & Condition
</label>
<button>Submit</button>

    </form>

    {Error && <p style={{color:"red"}}> {Error} </p>} 
    {success && <p style={{color:"Green"}}> {success} </p>}
    </>

    )
}
 
 export default App

 
