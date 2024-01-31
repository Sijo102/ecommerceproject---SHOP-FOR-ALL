import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/action/actionCreator';


const ProductDetail = () => {

    const { id } = useParams();
    const [productDetail, setProductDetail] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const addProductToCart = (productDetail) => {
        dispatch(addToCart(productDetail));
    }


    useEffect(() => {
        const getProductDetailOnPage = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:7777/products/${id}`);
            setProductDetail(await response.json());
            setLoading(false);
        }

        getProductDetailOnPage();
    }, []);


    const Loading = () => {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-4'>
                        <Skeleton height={400} />
                    </div>
                    <div className='col-lg-6' style={{ lineHeight: 2 }}>
                        <Skeleton height={50} width={300} />
                        <Skeleton height={75} />
                        <Skeleton height={25} width={150} />
                        <Skeleton height={25} width={150} />
                    </div>
                    <div className='col-lg-1'></div>
                </div>
            </div>
        )
    }

    const ShowProduct = () => {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-4'>
                        <img src={productDetail.images} alt={productDetail.title} className="shadow"
                            height="400px" width="400px"
                        />
                    </div>
                    <div className='col-lg-6'>
                        {/* <h3>
                       {productDetail.category.name} 
                    </h3> */}
                        <h1 className='display-5'>
                            {productDetail.name}
                        </h1>
                        <p className='lead fw-bolder'>
                            Rating : {productDetail.rating} {" "}
                            <i className='fa fa-star'></i>
                        </p>
                        <h3 className='display-5 fw-bold my-4'>
                            ₹ {productDetail.price}
                        </h3>
                        <p className='lead'>{productDetail.description}</p>
                        <div className='btn btn-outline-warning btn-md' onClick={() => addProductToCart(productDetail)}>Add To Cart</div>
                        <NavLink to="/Cart" className="btn btn-outline-success btn-md">
                            Go To Cart
                        </NavLink>
                    </div>
                    <div className='col-lg-1'></div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <Navbar />
                </div>
            </div>
            <div className='container-fluid py-5'>
                <div className='row py-5'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-10'>
                        {
                            loading ? <Loading /> : <ShowProduct />
                        }
                    </div>
                    <div className='col-lg-1'></div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;