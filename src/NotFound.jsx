import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/home");
        }, 3000);
    }, [navigate]);

    return (
        <div >
            <div>
                {/* <h1 className="display-4 text-danger mb-4">404 - Page Not Found</h1> */}
                <img 
                    src="https://tse1.mm.bing.net/th?id=OIP.3_D6Cl2xR5Fc202Yh4k5FQHaE9&pid=Api&P=0&h=180" 
                    alt="404 Error"
                    className="img-fluid mb-4" 
                    style={{ maxWidth: '80%', height: 'auto' }} 
                />
                <p className="lead text-muted mb-3">The page you are looking for might have been moved or deleted.</p>
                <p>You will be redirected to the home page in 3 seconds...</p>
            </div>
        </div>
    );
}

export default NotFound;