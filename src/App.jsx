import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import Orders from "./Orders";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Home from "./Home";
import "./App.css";
import Milk from "./Milk";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./Store";
import Login from "./Login";
import NotFound from "./NotFound";

function App() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  let dispatch = useDispatch();

  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/veg" className="nav-link">Veg-Items</Link>
        <Link to="/nonveg" className="nav-link">Non-Veg</Link>
        <Link to="/milk" className="nav-link">Milk-Items</Link>
        <Link to="/cart" className="nav-link">Cart <span className="cart-count">{totalItems}</span></Link>
        <Link to="/orders" className="nav-link">Orders</Link>
        <Link to="/contactus" className="nav-link">Contact Us</Link>
        <Link to="/aboutus" className="nav-link">About Us</Link>

        {isAuthenticated ? (
          <>
            <span className="welcome-text">Welcome, {user}!</span>
            <button className="logout-btn" onClick={() => dispatch(logout())}>Logout</button>
          </>
        ) : (
          <Link to="/login" className="nav-link">Signin</Link>
        )}
      </nav>

      <div className="container">
        <h1>Welcome to Our Store</h1>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/milk" element={<Milk />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
