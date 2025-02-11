import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";


function NotFound()
{
    const navigate = useNavigate();
    useEffect ( ()=> {
        setTimeout( ()=> {
            navigate("/home")
        },5000)
    },[])

    return(
        <>
        <h1>404 page Not found </h1>
       <img src="404.jpg"></img>
        </>
    )
}
export default NotFound;