import { useSelector } from "react-redux";
import "./App.css";


function Orders() {
    const ordersObject = useSelector(state => state.orders);

    return (
        <>
            <h1>Order History</h1>
            {ordersObject.length === 0 ? (
                <p>No Orders Yet</p>
            ) : (
                <ol>
                    {ordersObject.map((purchase, index) => (
                        <div key={index}>
                            <p>Date: {purchase.purchageDate}</p>
                            <p>Total Amount: {purchase.totalAmount.toFixed(2)}</p>
                            <p>Items:</p>
                            <ul>
                                {purchase.items.map((item, idx) => (
                                    <li key={idx}>
                                        {item.name} - {item.quantity} x {item.price}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </ol>
            )}
        </>
    );
}

export default Orders;