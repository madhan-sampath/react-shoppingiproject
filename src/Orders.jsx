import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Orders() {
    const ordersObject = useSelector(state => state.orders);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 text-primary">
                <i className="fas fa-shopping-bag me-2"></i> Order History
            </h1>

            {ordersObject.length === 0 ? (
                <div className="alert alert-info text-center">
                    <i className="fas fa-info-circle me-2"></i> No Orders Yet
                </div>
            ) : (
                <div className="row"> {/* Basic row */}
                    {ordersObject.map((purchase, index) => (
                        <div key={index} className="col-md-4 mb-4"> {/* Column for each order */}
                            <div className="card shadow-lg border-light rounded">
                                <div className="card-body">
                                    <h5 className="card-title"> {/* Removed text-center */}
                                        Order #{index + 1}
                                    </h5>
                                    <p> {/* Removed d-flex and align-items-center */}
                                        <i className="fas fa-calendar-alt me-2"></i>
                                        Date: {purchase.date}
                                    </p>
                                    <p> {/* Removed d-flex and align-items-center */}
                                        <i className="fas fa-dollar-sign me-2"></i>
                                        Total: ₹{purchase.totalAmount.toFixed(2)}
                                    </p>
                                    <p> {/* Removed d-flex and align-items-center */}
                                        <i className="fas fa-box-open me-2"></i>
                                        Items:
                                    </p>
                                    <ul className="list-group"> {/* Removed flex-grow-1 */}
                                        {purchase.items.map((item, idx) => (
                                            <li key={idx} className="list-group-item"> {/* Removed d-flex and align-items-center */}
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="me-2 rounded"
                                                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                                />
                                                <div className="item-details"> {/* No special styling */}
                                                    <i className="fas fa-caret-right me-2"></i>
                                                    {item.name} - {item.quantity} x ₹{item.price}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Orders;