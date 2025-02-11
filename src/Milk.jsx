import { createSlice } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "./Store"
import "./App.css";


function Milk()
{

    let dispatch=useDispatch()

    let milkItems=useSelector(state=>state.products.milk)

    
    let finalItems = milkItems.map((item,index)=>(
        <li key={index}>
            {item.name}-${item.price}
            <button onClick={()=>dispatch(addToCart(item))}>Add to Cart</button>
        </li>
    ))
    return(
        <>
        <h1>Milk items..</h1>
        <ol>{finalItems}</ol>
        
        </>
    )
}
export default Milk