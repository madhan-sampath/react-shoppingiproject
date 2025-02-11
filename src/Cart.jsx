import { useDispatch, useSelector } from "react-redux";
import { clearCart, decreament, increament, purchageDetailsReducer, remove } from "./Store";
import { useState } from "react";
import "./App.css";


function Cart() {
    // Getting the data from cart
    const cartObject = useSelector(state => state.cart);
    const dispatch = useDispatch();

    // Discount state
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [showDiscount, setShowDiscount] = useState(false);
    const [showCoupon, setShowCoupon] = useState(false);
    const [couponCode, setcouponCode] = useState('');
    const [couponCodeDiscountPer, setCouponCodeDiscountPer] = useState(0);

    // Calculating total amounts
    const totalAmount = cartObject.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discountAmount = (totalAmount * discountPercentage) / 100;
    const finalAmount = totalAmount - discountAmount;
    const couponDiscountAmount = (totalAmount * couponCodeDiscountPer) / 100;
    const finalAmountWithCoupon = finalAmount - couponDiscountAmount;

    // Handle coupon discount
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

    // Handle purchase and clear cart
    const handlePurchageDetails = () => {
        if (cartObject.length === 0) {
            alert("Cart is empty!");
            return;
        }

        const purchageDate = new Date().toLocaleDateString();
        let purchageDetails = {items:[...cartObject], totalAmount, purchageDate };

        dispatch(purchageDetailsReducer(purchageDetails)); // Save order history
        dispatch(clearCart()); // Clear the cart
    };

    // Rendering cart items
    const cartItems = cartObject.map((item, index) => (
        <li key={index}>
            {item.name} - {item.price} -  Quantity :
            <button onClick={() => dispatch(decreament(item))}>-</button>
            {item.quantity}
            <button onClick={() => dispatch(increament(item))}>+</button>
            <button onClick={() => dispatch(remove(item))}>Remove</button>
        </li>
    ));

    return (
        <>
            {cartObject.length > 0 ? (
                <div>
                    <ol>{cartItems}</ol>

                    <p>Total Price: {totalAmount.toFixed(2)}</p>

                    {showDiscount && (
                        <div>
                            <p>Discount Applied: {discountPercentage}%</p>
                            <p>Discount Amount: {discountAmount.toFixed(2)}</p>
                        </div>
                    )}

                    <p>Net Amount: {finalAmount.toFixed(2)}</p>

                    <button onClick={() => { setDiscountPercentage(10); setShowDiscount(true); }}>Apply 10%</button>
                    <button onClick={() => { setDiscountPercentage(20); setShowDiscount(true); }}>Apply 20%</button>
                    <button onClick={() => { setDiscountPercentage(30); setShowDiscount(true); }}>Apply 30%</button>
                    <br/><br/>

                    {/* Coupon Code Section */}
                    <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setcouponCode(e.target.value)}
                        placeholder="Enter coupon code"
                    />
                    <br/><br/>
                    <button onClick={() => { handlingCouponPer(), setShowCoupon(true) }}>Apply Coupon</button>
                    <br/><br/>

                    {showCoupon && (
                        <div>
                            <p>Coupon Applied: {couponCode}</p>
                            <p>Coupon Discount: {couponDiscountAmount.toFixed(2)}</p>
                            <p>Final Payable Amount: {finalAmountWithCoupon.toFixed(2)}</p>
                        </div>
                    )}

                    {/* Complete Purchase */}
                    <button onClick={() => handlePurchageDetails()}>Complete Purchase</button>
                </div>
            ) : (
                <p>Your Cart is Empty</p>
            )}
        </>
    );
}

export default Cart;