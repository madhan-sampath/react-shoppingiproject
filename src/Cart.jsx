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
            <h1 className="text-center mb-4">
                <i className="fas fa-shopping-cart me-2"></i> Shopping Cart
            </h1>

            {cartObject.length > 0 ? (
                <div className="row">
                    <div className="col-lg-8">
                        <ul className="list-group mb-3">
                            {cartObject.map((item, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                                        <div className="fw-bold">
                                            <span style={{ display: 'inline-block' }}>{item.name}</span> -
                                            <span style={{ display: 'inline-block' }}>₹{item.price}</span>
                                            <span className="text-muted ms-2" style={{ display: 'inline-block' }}> (Qty: {item.quantity})</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn btn-success btn-sm me-1" onClick={() => dispatch(increament(item))}>
                                            <i className="fas fa-plus-circle"></i>
                                        </button>
                                        <button className="btn btn-warning btn-sm me-1" onClick={() => dispatch(decreament(item))}>
                                            <i className="fas fa-minus-circle"></i>
                                        </button>
                                        <button className="btn btn-danger btn-sm" onClick={() => dispatch(remove(item))}>
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-4">
                        <div className="card shadow-sm p-4">
                            <h4 className="mb-3 text-center">Order Summary</h4>
                            <p className="fw-bold"><span style={{ display: 'inline-block' }}>Total Price:</span> <span style={{ display: 'inline-block' }}>₹{totalAmount.toFixed(2)}</span></p>

                            {showDiscount && (
                                <p className="text-success"><span style={{ display: 'inline-block' }}>Discount ({discountPercentage}%):</span> <span style={{ display: 'inline-block' }}>-₹{discountAmount.toFixed(2)}</span></p>
                            )}

                            <p className="fw-bold"><span style={{ display: 'inline-block' }}>Net Amount:</span> <span style={{ display: 'inline-block' }}>₹{finalAmount.toFixed(2)}</span></p>

                            <div className="d-flex justify-content-between mb-3">
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
                                    <p className="mb-1"><span style={{ display: 'inline-block' }}>Coupon Applied:</span> <strong>{couponCode}</strong></p>
                                    <p className="mb-1"><span style={{ display: 'inline-block' }}>Discount:</span> <span style={{ display: 'inline-block' }}>-₹{couponDiscountAmount.toFixed(2)}</span></p>
                                    <p className="fw-bold"><span style={{ display: 'inline-block' }}>Final Payable:</span> <span style={{ display: 'inline-block' }}>₹{finalAmountWithCoupon.toFixed(2)}</span></p>
                                </div>
                            )}

                            <button className="btn btn-success w-100" onClick={handlePurchageDetails}>
                                <i className="fas fa-check-circle me-2"></i> Complete Purchase
                            </button>
                        </div>
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