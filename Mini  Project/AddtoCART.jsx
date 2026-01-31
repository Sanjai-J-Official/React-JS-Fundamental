 import {useState,useEffect} from "react"
import Product from "./product"
function App(){

  const [cart,setc]=useState(0);

   const products = [
  {id:1,name:"Mobile",price:"$2000", stock:true},
  {id:2,name:"Laptop",price:"$4000", stock:true},
  {id:3,name:"watch",price:"$200", stock:true},
  {id:4,name:"Headphone",price:"$50", stock:true}
]


  return (
    <div className="products">

   <h1>Welcome to Store</h1>
    <h2>Cart : {cart}</h2>

    
 {products.map((p)=>(
<Product key={p.id} 
name={p.name} 
price={p.price} 
stock={p.stock}
add={()=>setc(cart+1)} />

 ))}
 
 
    </div>
  );
}

 export default App

 function Product({name,price,stock,add}){

 

    return (
 
< div className="card">
<h3>{name} {price} </h3>
    {stock ? (
      <button onClick={add}>
   
    Add to Cart
    </button> ):(
 <h3>out of stock</h3>)}
 
 
</div>

 
    );
}

export default Product;
