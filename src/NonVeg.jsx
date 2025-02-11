import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "./Store"
import "./App.css";


function NonVeg()
{

    let dispatch=useDispatch()

    let nonVegItems=useSelector(state=>state.products.nonVeg)

    
    let finalItems = nonVegItems.map((item,index)=>(
        <li key={index}>
            {item.name}-${item.price}
            <button onClick={()=>dispatch(addToCart(item))}>Add to Cart</button>
        </li>
    ))
    return(
        <>
        <h1>Non-Veg items..</h1>
        <ol>{finalItems}</ol>
        
        </>
    )
}
export default NonVeg