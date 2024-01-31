import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="text-center justify-content-center bg-light">
                <div className="container pt-2">
                    <section className="mb-3">
                        <a
                            className="btn btn-floating m-1"
                            role="button"
                        ><i className="fab fa-facebook-f text-dark"></i></a>

                        <a
                            className="btn btn-floating m-1"
                            role="button"
                        ><i className="fab fa-twitter text-dark"></i></a>

                        <a
                            className="btn btn-floating m-1"
                            role="button"
                        ><i className="fab fa-google text-dark"></i></a>

                        <a
                            className="btn btn-floating m-1"
                            role="button"
                        ><i className="fab fa-instagram text-dark"></i></a>

                        <a
                            className="btn btn-floating m-1"
                            role="button"
                        ><i className="fab fa-linkedin-in text-dark"></i></a>
                        <a
                            className="btn btn-floating m-1"
                            role="button"
                        ><i className="fab fa-github text-dark"></i></a>
                    </section>
                </div>
                <div className="text-center pb-1">
                    © 2020 Copyright :
                    <a href="https://mdbootstrap.com/"> ShopForAll.com</a>
                </div>
            </footer>
        </>
    )
};

export default Footer;