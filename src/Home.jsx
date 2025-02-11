import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store"; // Assuming your Redux actions are here
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Home() {
    const dispatch = useDispatch();
    const vegItems = useSelector(state => state.products.veg) || [];
    const nonVegItems = useSelector(state => state.products.nonVeg) || [];
    const milkItems = useSelector(state => state.products.milk) || [];

    const allItems = [...vegItems, ...nonVegItems, ...milkItems]; // Combine all items
    const [searchTerm, setSearchTerm] = useState("");

    const filteredItems = allItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <h1>Welcome to Our Restaurant</h1>

            {/* Search Bar */}
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for items..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="row">
                {filteredItems.map((item, index) => (
                    <div key={index} className="col-md-3 mb-4">
                        <div className="card h-100">
                            <img 
                                src={item.image} 
                                className="card-img-top img-fluid" 
                                alt={item.name} 
                                style={{ height: "150px", objectFit: "cover" }} 
                            />
                            <div className="card-body d-flex flex-column">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="card-title mb-0" style={{ fontSize: "14px" }}>{item.name}</h6>
                                    <p className="card-text mb-0" style={{ fontSize: "14px" }}>₹{item.price}</p>
                                </div>
                                <div className="mt-auto">
                                    <div className="d-flex justify-content-center">
                                        <button
                                            className={`btn btn-${item.category === "veg" ? "success" : item.category === "nonveg" ? "danger" : "primary"} btn-sm w-75 d-flex align-items-center justify-content-center`} 
                                            onClick={() => dispatch(addToCart(item))}
                                        >
                                            <span style={{ fontSize: "12px" }}>Add To Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
