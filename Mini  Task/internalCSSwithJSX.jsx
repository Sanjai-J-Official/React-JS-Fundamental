import { useState } from "react";
import  "./App.css";
function App() {

const cardstyle = {
  width: "150px",
  border: "5px solid black",
  color: "red",
  textAlign: "center",
  
};

  return (

    <div  >
<h1>This is Css Part</h1>

<div style={cardstyle} >
  This is Content Area
</div>

    </div>
  );
}

export default App;
 
