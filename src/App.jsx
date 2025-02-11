import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
    faUtensils, faCarrot, faDrumstickBite, faDroplet, 
    faShoppingCart, faClipboardList, faPhone, faInfoCircle, 
    faUserCircle, faSignOutAlt, faSignInAlt, faStore 
} from '@fortawesome/free-solid-svg-icons';

import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import Orders from "./Orders";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Home from "./Home";
import Milk from "./Milk";
import { logout } from "./Store";  // ✅ Ensure the correct path
import Login from "./Login";
import NotFound from "./NotFound";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const cart = useSelector((state) => state.cart);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    let dispatch = useDispatch();

    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/home" className="navbar-brand text-light">
                        <FontAwesomeIcon icon={faUtensils} className="me-2" /> Store
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link to="/veg" className="nav-link text-light" onClick={() => setIsOpen(false)}>
                                    <FontAwesomeIcon icon={faCarrot} className="me-2" /> Veg-Items
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/nonveg" className="nav-link text-light" onClick={() => setIsOpen(false)}>
                                    <FontAwesomeIcon icon={faDrumstickBite} className="me-2" /> Non-Veg
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/milk" className="nav-link text-light" onClick={() => setIsOpen(false)}>
                                    <FontAwesomeIcon icon={faDroplet} className="me-2" /> Milk
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link text-light position-relative" onClick={() => setIsOpen(false)}>
                                    <FontAwesomeIcon icon={faShoppingCart} className="fa-lg me-2" />
                                    {totalItems > 0 && (
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                                            {totalItems}
                                        </span>
                                    )}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/orders" className="nav-link text-light" onClick={() => setIsOpen(false)}>
                                    <FontAwesomeIcon icon={faClipboardList} className="me-2" /> Orders
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contactus" className="nav-link text-light" onClick={() => setIsOpen(false)}>
                                    <FontAwesomeIcon icon={faPhone} className="me-2" /> Contact Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/aboutus" className="nav-link text-light" onClick={() => setIsOpen(false)}>
                                    <FontAwesomeIcon icon={faInfoCircle} className="me-2" /> About Us
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            {isAuthenticated ? (
                                <>
                                    <span className="navbar-text text-light me-3">
                                        <FontAwesomeIcon icon={faUserCircle} className="me-1" /> Welcome, {user || "Guest"}!
                                    </span>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                            dispatch(logout());
                                            setIsOpen(false);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Logout
                                    </button>
                                </>
                            ) : (
                                <Link to="/login" className="btn btn-success" onClick={() => setIsOpen(false)}>
                                    <FontAwesomeIcon icon={faSignInAlt} className="me-2" /> Sign In
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container mt-4">
                <h1 className="text-center text-primary">
                    <FontAwesomeIcon icon={faStore} className="me-2" /> Welcome to Our Store
                </h1>
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