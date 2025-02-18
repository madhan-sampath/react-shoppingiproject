import { useDispatch, useSelector } from "react-redux";
import { clearCart, decreament, increament, purchageDetailsReducer, remove } from "./Store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Cart() {
    const cartObject = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [showDiscount, setShowDiscount] = useState(false);
    const [showCoupon, setShowCoupon] = useState(false);
    const [couponCode, setcouponCode] = useState('');
    const [couponCodeDiscountPer, setCouponCodeDiscountPer] = useState(0);

    const totalAmount = cartObject.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discountAmount = (totalAmount * discountPercentage) / 100;
    const finalAmount = totalAmount - discountAmount;
    const couponDiscountAmount = (totalAmount * couponCodeDiscountPer) / 100;
    const finalAmountWithCoupon = finalAmount - couponDiscountAmount;

    const handlingCouponPer = () => {
        switch (couponCode.toUpperCase()) {
            case 'RATAN10': setCouponCodeDiscountPer(10); break;
            case 'RATAN20': setCouponCodeDiscountPer(20); break;
            case 'RATAN30': setCouponCodeDiscountPer(30); break;
            case 'RATAN40': setCouponCodeDiscountPer(40); break;
            default:
                alert('Invalid coupon code');
                setCouponCodeDiscountPer(0);
                break;
        }
    };

    const handlePurchageDetails = () => {
        if (cartObject.length === 0) {
            alert("Cart is empty!");
            return;
        }

        const purchageDate = new Date().toLocaleDateString();
        let purchageDetails = { items: [...cartObject], totalAmount, purchageDate };

        dispatch(purchageDetailsReducer(purchageDetails));
        dispatch(clearCart());
    };

    return (
        <div className="container mt-5">
            <header className="text-center mb-4">
                <h1>
                    <i className="fas fa-shopping-cart me-2"></i> Shopping Cart
                </h1>
            </header>

            {cartObject.length > 0 ? (
                <div className="row">
                    <div className="col-lg-8">
                        <ul className="list-group mb-3">
                            {cartObject.map((item, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', marginRight: '15px', borderRadius: '8px' }} />
                                        <div>
                                            <div className="fw-bold">{item.name}</div>
                                            <div className="text-muted">₹{item.price}</div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="me-3">
                                            <button className="btn btn-warning btn-sm me-1" onClick={() => dispatch(decreament(item))}>
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            <span className="mx-2">{item.quantity}</span>
                                            <button className="btn btn-success btn-sm me-1" onClick={() => dispatch(increament(item))}>
                                                <i className="fas fa-plus"></i>
                                            </button>
                                        </div>
                                        <button className="btn btn-danger btn-sm" onClick={() => dispatch(remove(item))}>
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-4">
                        <aside className="card shadow-sm p-4">
                            <h4 className="mb-3 text-center">Order Summary</h4>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <span className="fw-bold">Total Price:</span>
                                <span>₹{totalAmount.toFixed(2)}</span>
                            </div>

                            {showDiscount && (
                                <div className="d-flex justify-content-between align-items-center mb-2 text-success">
                                    <span>Discount ({discountPercentage}%):</span>
                                    <span>-₹{discountAmount.toFixed(2)}</span>
                                </div>
                            )}

                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <span className="fw-bold">Net Amount:</span>
                                <span>₹{finalAmount.toFixed(2)}</span>
                            </div>

                            <div className="d-grid gap-2 mb-3">
                                <button className="btn btn-outline-primary btn-sm" onClick={() => { setDiscountPercentage(10); setShowDiscount(true); }}>
                                    <i className="fas fa-percent me-2"></i> 10% Off
                                </button>
                                <button className="btn btn-outline-primary btn-sm" onClick={() => { setDiscountPercentage(20); setShowDiscount(true); }}>
                                    <i className="fas fa-percent me-2"></i> 20% Off
                                </button>
                                <button className="btn btn-outline-primary btn-sm" onClick={() => { setDiscountPercentage(30); setShowDiscount(true); }}>
                                    <i className="fas fa-percent me-2"></i> 30% Off
                                </button>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Apply Coupon:</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={couponCode}
                                        onChange={(e) => setcouponCode(e.target.value)}
                                        placeholder="Enter coupon code"
                                    />
                                    <button className="btn btn-secondary" onClick={() => { handlingCouponPer(); setShowCoupon(true); }}>
                                        <i className="fas fa-gift"></i> Apply
                                    </button>
                                </div>
                            </div>

                            {showCoupon && (
                                <div className="alert alert-success p-2">
                                    <p className="mb-1">Coupon Applied: <strong>{couponCode}</strong></p>
                                    <p className="mb-1">Discount: -₹{couponDiscountAmount.toFixed(2)}</p>
                                    <p className="fw-bold">Final Payable: ₹{finalAmountWithCoupon.toFixed(2)}</p>
                                </div>
                            )}

                            <button className="btn btn-success w-100" onClick={handlePurchageDetails}>
                                <i className="fas fa-check-circle me-2"></i> Complete Purchase
                            </button>
                        </aside>
                    </div>
                </div>
            ) : (
                <div className="text-center text-muted">
                    <p>Your Cart is Empty</p>
                </div>
            )}
        </div>
    );
}

export default Cart;
