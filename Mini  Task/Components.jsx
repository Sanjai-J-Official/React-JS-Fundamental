import { useState } from "react";
import UserCard from "./components/userCard" 
function App() {


    //   File name and Function also pascalcase mean-  > UserData,  UserCard like
    const usersData =[

        {id:1, name:"sanjai",email:"sanjai@gmail.com"}
    ,    {id:2, name:"jai",email:"jai@gmail.com"}
    ]

  return (

    <div style={{ textAlign: "center" }}>
      
{usersData.map((user)=>(
<UserCard 
key={user.id} 
id= {user.id}
name={user.name} 
email={user.email}/>
))}
    </div>
  );
}

export default App;

function UserCard(props){

return ( <>
    
    
    <p>{props.id} {props.name}  {props.email}</p>

</>


)
}

export default UserCard ;
