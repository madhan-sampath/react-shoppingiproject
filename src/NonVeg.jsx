import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome

function NonVeg() {
    let dispatch = useDispatch();
    let nonVegItems = useSelector(state => state.products.nonVeg);

    const [filterLessThan150, setFilterLessThan150] = useState(false);
    const [filterGreaterThan150, setFilterGreaterThan150] = useState(false);

    let filteredItems = nonVegItems.filter(item => {
        if (filterLessThan150 && item.price >= 150) return false;
        if (filterGreaterThan150 && item.price <= 150) return false;
        return true;
    });

    return (
        <div className="container mt-4">
            <h2 className="text-danger text-center mb-4">
                <i className="fas fa-drumstick-alt me-2"></i> Non-Veg Items
            </h2>

            <div className="d-flex justify-content-center mb-3">
                <span className="me-3 fw-bold"><i className="fas fa-filter"></i> Filter by Price:</span>

                <div className="form-check form-check-inline">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={filterLessThan150}
                        onChange={() => setFilterLessThan150(!filterLessThan150)}
                    />
                    <label className="form-check-label">
                        <i className="fas fa-rupee-sign"></i> &lt; 150
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
                        <i className="fas fa-rupee-sign"></i> &gt; 150
                    </label>
                </div>
            </div>

            <div className="row">
                {filteredItems.map((item, index) => (
                    <div key={index} className="col-md-3 mb-4">
                        <div className="card h-100">
                            <img src={item.image} className="card-img-top img-fluid" alt={item.name} style={{ height: '150px', objectFit: 'cover' }} />
                            <div className="card-body d-flex flex-column">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6 className="card-title mb-0" style={{ fontSize: "14px" }}>{item.name}</h6>
                                    <p className="card-text mb-0" style={{ fontSize: "14px" }}>₹{item.price}</p>
                                </div>
                                <div className="mt-auto">
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-danger btn-sm w-75 d-flex align-items-center justify-content-center" onClick={() => dispatch(addToCart(item))}>
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
export default NonVeg;