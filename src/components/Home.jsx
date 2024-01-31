import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <>  
            <Navbar/>
            <div className="hero">
                <div className="card bg-dark text-white border-0 text-center">
                    <img src="./assets/1.jpg" alt="Background" />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className="container">
                            <h5 className="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
                            <p className="card-text lead fs-2">Check Out All The Trends</p>
                            <Link to="/Product" className="btn btn-primary">Explore All Produts</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default Home;