import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome

function Milk() {
    let dispatch = useDispatch();
    let milkItems = useSelector(state => state.products.milk);

    const [filterLessThan150, setFilterLessThan150] = useState(false);
    const [filterGreaterThan150, setFilterGreaterThan150] = useState(false);

    let filteredItems = milkItems.filter(item => {
        if (filterLessThan150 && item.price >= 150) return false;
        if (filterGreaterThan150 && item.price <= 150) return false;
        return true;
    });

    return (
        <div className="container mt-4">
            <h2 className="text-primary text-center mb-4">
                <i className="fas fa-glass-milk me-2"></i> Deserts {/* Font Awesome icon */}
            </h2>

            <div className="d-flex justify-content-center mb-3">
                <span className="me-3 fw-bold"><i className="fas fa-filter"></i> Filter by Price:</span> {/* Font Awesome icon */}

                <div className="form-check form-check-inline">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={filterLessThan150}
                        onChange={() => setFilterLessThan150(!filterLessThan150)}
                    />
                    <label className="form-check-label">
                        <i className="fas fa-rupee-sign"></i> &lt; 150 {/* Font Awesome icon */}
                    </label>
                </div>

                <div className="form-check form-check-inline">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={filterGreaterThan150}
                        onChange={() => setFilterGreaterThan150(!filterGreaterThan150)}
                    />
                    <label className="form-check-label">
                        <i className="fas fa-rupee-sign"></i> &gt; 150 {/* Font Awesome icon */}
                    </label>
                </div>
            </div>

            <div className="row">
                {filteredItems.map((item, index) => (
                    <div key={index} className="col-md-3 mb-4"> {/* 4 items per row */}
                        <div className="card h-100">
                            <img src={item.image} className="card-img-top img-fluid" alt={item.name} style={{ height: '150px', objectFit: 'cover' }} /> {/* Image styling */}
                            <div className="card-body d-flex flex-column">
                                <div className="d-flex justify-content-between align-items-center"> {/* Name and price on one line */}
                                    <h6 className="card-title mb-0" style={{fontSize:"14px"}}>{item.name}</h6>
                                    <p className="card-text mb-0" style={{fontSize:"14px"}}>₹{item.price}</p>
                                </div>
                                <div className="mt-auto"> {/* Push button to the bottom */}
                                    <div className="d-flex justify-content-center"> {/* Center the button */}
                                        <button className="btn btn-primary btn-sm w-75 d-flex align-items-center justify-content-center" onClick={() => dispatch(addToCart(item))}>
                                            <span style={{fontSize:"12px"}}>Add To Cart</span> {/* Button text only */}
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

export default Milk;