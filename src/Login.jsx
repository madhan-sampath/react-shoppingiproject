import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Store";
import "./App.css";


function Login()
{
    let username = useRef(null);
    let password = useRef(null);
    let dispatch = useDispatch();
    let navigate = useNavigate();



    let loginCheck = () => {
        if(username.current.value === "ram" && password.current.value === "ram123"){
            dispatch(login(username.current.value));
            navigate("/home");
        }
        else{
            alert("Your Credentials are Wrong. Check Once !");
        }
    }

    return (
        <>
            <h1>Login Page </h1>
            <br/><br/>
            <label>User Name :</label>
            <input type="text" ref={username}/>
            <br/><br/>
            <label>Password :</label>
            <input type="password" ref={password}/>
            <br/><br/>
            <button onClick={loginCheck}>LogIn</button>

        </>
    )
}


export default Login