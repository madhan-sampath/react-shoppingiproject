import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "./Store"
import "./App.css";


function Veg()
{

    let dispatch=useDispatch()

    let vegItems=useSelector(state=>state.products.veg)

    
    let finalItems = vegItems.map((item,index)=>(
        <li key={index}>
            {item.name}-${item.price}
            <button onClick={()=>dispatch(addToCart(item))}>Add to Cart</button>
        </li>
    ))
    return(
        <>
        
        <h1>Veg items..</h1>
        <ol>{finalItems}</ol>
        </>
    )
}
export default Veg