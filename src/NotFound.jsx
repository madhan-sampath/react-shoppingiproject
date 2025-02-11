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
                    src="https://deep-image.ai/blog/content/images/size/w1000/2024/04/e8b03cd2-bbf1-4153-9e33-403a2e0f8ea3-generated.png" 
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