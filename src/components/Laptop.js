import React ,{useState} from "react"
import "./Laptop.css";

function Laptop(props) {

    const [laptopName,changethelaptopName] = useState(props.name); 



const handelr = ()=>{
    changethelaptopName("laptop has been added")
}
const [laptopPrice,pluse10Price]= useState(props.price)
const Pluse=()=>{
    pluse10Price(props.price+10)

}


  return (
    
    <div className="div1">
      <h1>{props.type} </h1>
      <img p="photo" src={props.src}></img>
      <h2>{laptopPrice}</h2>
      <h3>{laptopName}</h3>
      <button onClick={handelr}> add the cat to the cart </button>
      <button onClick={Pluse}>pluss 10 the price</button>
    </div>
  );
}
export default Laptop;