import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import { Link, NavLink } from 'react-router-dom';
import './Product.css';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';

const Products = () => {

    const [productList, setProductList] = useState([]);
    const [filter, setFilter] = useState(productList);
    const [loading, setLoading] = useState(false);

    const [cartItem, setCartItem] = useState([]);
    
    const state = useSelector((state) => state.handleCartReducer);

    let componentMounted = true;

    useEffect(() => {
        const getAllProductOnPage = async () => {
            setLoading(true);
            const response = await fetch("http://localhost:7777/products")
            if (componentMounted) {
                setProductList(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        }
        getAllProductOnPage();
    }, []);

    const getAllCartItem = () => {
        fetch("http://localhost:7777/cart")
            .then((response) => response.json())
            .then(data => {
                setCartItem(data);
                // console.log(data);
            })
    }

    useEffect(() => {
        getAllCartItem();
    }, [cartItem.length]);


    const addProductToCart = () => {
        
    }

    // const addProductToCart = (product) => {

    //     const productExist = cartItem.find((item) => item.title === product.title);

    //     const newQuantityUpdate = {...cartItem, quantity : cartItem.quantity + 1}

    //     const newItem = { ...product, quantity : 1 };

    //     console.log(cartItem);

    //     console.log(productExist);
    //     if (productExist) {
    //         const url = "http://localhost:7777/cart";

    //         const postData = {
    //             headers: { 'Content-Type': 'application/json' },
    //             method: 'PATCH',
    //             body: JSON.stringify(newQuantityUpdate)
    //         }
            
    //         fetch(url, postData)
    //             .then(response => response.text())
    //             .then(data => {
    //                 console.log(data);
    //             })
    //     } else {
    //         const url = "http://localhost:7777/cart";

    //         const postData = {
    //             headers: { 'Content-Type': 'application/json' },
    //             method: 'POST',
    //             body: JSON.stringify(newItem)
    //         }
    //         fetch(url, postData)
    //             .then(response => response.json())
    //             .then(data => {
    //                 console.log(data);
    //             })
    //     }
    //     getAllCartItem();
    // }

    const Loading = () => {
        return (
            <>
                <div className='col-md-3'>
                    <Skeleton height={100} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={100} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={100} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={100} />
                </div>
            </>
        )
    }

    const filterProduct = (categoryList) => {
        const updatedList = productList.filter((x) => x.category.name === categoryList);
        setFilter(updatedList);
    }

    const ShowProduct = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center mb-2 pb-5'>
                    <span className='mt-3'>Filter Products Based On Categories : </span>
                    <button className="btn btn-outline-dark me-2 bg-primary text-white" onClick={() => filterProduct("Clothes")}>Clothes</button>
                    <button className="btn btn-outline-dark me-2 bg-primary text-white" onClick={() => filterProduct("Electronics")}>Electronics</button>
                    <button className="btn btn-outline-dark me-2 bg-primary text-white" onClick={() => filterProduct("Shoes")}>Shoes</button>
                    <button className="btn btn-outline-dark me-2 bg-primary text-white" onClick={() => filterProduct("Furniture")}>Furniture</button>
                    <button className="btn btn-outline-dark me-2 bg-primary text-white" onClick={() => filterProduct("Others")}>Others</button>
                    <button className="btn btn-outline-dark me-2 bg-primary text-white" onClick={() => setFilter(productList)}>All Products</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className='col-md-3 mb-3' key={product.id}>
                                <div className="card h-100 shadow text-center">
                                    <img className="card-img-top product_img" src={product.images[0]} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <p className="card-price"><b>&#x20B9; {product.price}</b></p>
                                        {/* <p>{product.category.name}</p> */}
                                        <NavLink to={`/Product/${product.id}`} className="btn btn-warning text-dark">Product Details </NavLink>
                                        <button className='btn btn-primary text-dark' onClick={() => addProductToCart()}>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light py-2 shadow-md">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-2" href="#">SHOP-FOR-ALL</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto lead fw-bolder">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                        <div className="buttons">
                            <Link to="/Cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart"></i> Cart({state.length})
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12 text-center mb-5 mt-4'>
                        <div className='row'>
                            <h1 className='display-7 fw-bolder'>Latest Products</h1>
                            <hr />
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        {
                            loading ? <Loading /> : <ShowProduct />
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Products;