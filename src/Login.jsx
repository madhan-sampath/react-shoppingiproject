import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";  // Import Bootstrap CSS
import "bootstrap-icons/font/bootstrap-icons.css";  // Import Bootstrap Icons

function Login() {
    let username = useRef(null);
    let password = useRef(null);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    let loginCheck = () => {
        if (username.current.value === "Shiva" && password.current.value === "Shiva@123") {
            dispatch(login(username.current.value));
            navigate("/home");
        } else {
            alert("Your Credentials are Wrong. Check Once !");
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h1 className="text-center text-primary mb-4">Login</h1>

                            {/* Username */}
                            <div className="mb-3">
                                <label className="form-label">
                                    <i className="bi bi-person-fill me-2"></i> UserName
                                </label>
                                <input type="text" className="form-control" ref={username} placeholder="Enter Username" />
                            </div>

                            {/* Password */}
                            <div className="mb-3">
                                <label className="form-label">
                                    <i className="bi bi-lock-fill me-2"></i> Password
                                </label>
                                <input type="password" className="form-control" ref={password} placeholder="Enter Password" />
                            </div>

                            {/* Login Button */}
                            <div className="text-center">
                                <button onClick={loginCheck} className="btn btn-primary w-100">
                                    <i className="bi bi-box-arrow-in-right me-2"></i> Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;