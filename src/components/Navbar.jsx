import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {

    const state = useSelector((state) => state.handleCartReducer);
    // console.log(state);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-white py-2 shadow-md">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-2" href="#">SHOP-FOR-ALL</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto lead fw-bolder">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/About" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Product" className="nav-link">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact" className="nav-link">Contact Us</Link>
                            </li>
                        </ul>
                        <div className="buttons">
                            <a className="btn btn-outline-dark">
                                <i className="fa fa-sign-in"></i> Login
                            </a>
                            <a className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus"></i> Register
                            </a>
                            <Link to='/Cart' className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart"></i> Cart ({state.length})
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Navbar;