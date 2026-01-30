import {useState} from 'react';


 function Todolist(){

  const [task,setTask]=useState("")
  const [tasks,setTasks]=useState([])


  const deleteTask=(index)=>{
const newtask=tasks.filter((t,i)=>i!==index);
setTasks(newtask);
};

const addFunc=()=>{
   if (task.trim() === "") return;
   setTasks([...tasks,task]);
   setTask("")
  

}


  return (<>
  <input id="name" value={task} type="text" placeholder='Enter Name!'
  
  onChange={(e)=>{setTask(e.target.value)}}
  />
  <button onClick={addFunc}>Submit</button>

  <ul>
    {tasks.map((t,index)=>( 

      <li key={index}>{t}
       <button onClick={()=>deleteTask(index)}>delete</button></li>
     
    ))}
     </ul>
  </>)
  

 }

 export default Todolist;
