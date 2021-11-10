import React from 'react';

//css
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-container text-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="footer-menu">
                            <div>
                                <h4>Tour Packages</h4>
                                {/* package lists */}
                                <ul>
                                    <li><a href="/home" className="menu">Paris Hill Tower</a></li>
                                    <li><a href="/home" className="menu">Late Ganda</a></li>
                                    <li><a href="/home" className="menu">Bali</a></li>
                                    <li><a href="/home" className="menu">Kashmir</a></li>
                                    <li><a href="/home" className="menu">Niagara falls</a></li>
                                    <li><a href="/home" className="menu">Everest</a></li>
                                    <li><a href="/home" className="menu">Switzerland</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="footer-details mt-5">
                            {/* <div className="footer-logo mb-2">

                        </div> */}
                            <div>
                                <h2 className="footer-title">TravelX</h2>
                                <p>
                                    “ We offer unique services. Our goal is to offer you what it takes to stay healthy and independent. ”
                                </p>
                            </div>
                            <div>
                                <input className="p-1 mb-2" type="text" placeholder="Enter Your Mail" />
                                <br />
                                <button className="btn px-3 py-2 mb-2 book-btn">Booking Tour</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        {/* footer contact */}
                        <div className="footer-menu">
                            <h4>Contact Us</h4>
                            <div className="contact-info">
                                <h6>Open 10 a.m to 6 p.m</h6>
                                <p><small>Be fearless in the pursuit of what sets your soul on fire.</small></p>
                                <p>Phone: +012345657</p>
                                <p>Email: <strong>travel.explore11@gmail.com</strong></p>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-12">
                        {/* footer menus */}
                        <div className="footer-menu">
                            <ul>
                                <li><a href="/home" className="menu">Home</a></li>
                                <li><a href="/home" className="menu">Tour Offers</a></li>
                                <li><a href="/home" className="menu">Manage All Orders</a></li>
                                <li><a href="/home" className="menu">Add Tour Package</a></li>
                                <li><a href="/home" className="menu">About</a></li>
                                <li><a href="/home" className="menu">Blogs</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <p className="text-center">Copyright &copy; All Right Reserved, 2021</p>
            </div>
        </div>
    );
};

export default Footer;