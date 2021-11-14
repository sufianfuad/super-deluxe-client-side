import React from 'react';

import appStore from '../../../images/logo/app-store.png';
import playStore from '../../../images/logo/play-store.png';
//css
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer-container text-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="footer-menu">
                            <div>
                                <h4>Our PartnerShip</h4>
                                {/* package lists */}
                                <ul>
                                    <li><a href="/home" className="menu">Airmate Group</a></li>
                                    <li><a href="/home" className="menu">Khaitan Group</a></li>
                                    <li><a href="/home" className="menu">Super Star</a></li>
                                    <li><a href="/home" className="menu">Jamuna Group</a></li>
                                    <li><a href="/home" className="menu">GFC Fan</a></li>
                                    <li><a href="/home" className="menu">Air Cool</a></li>
                                    <li><a href="/home" className="menu">Sony Group</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="footer-details mt-5">
                            <div>
                                <h2 className="footer-title">Super Deluxe</h2>
                                <p>
                                    “ We offer Qualityfull Fan.We Always try our best to delivery your product after purchase within 2 hour in our area.”
                                </p>
                            </div>
                            <div>
                                <input className="p-1 mb-2" type="text" placeholder="Enter Your Mail" />
                                <br />
                                <button className="btn px-3 py-2 mb-2 subs-btn">Subscribed</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        {/* footer contact */}
                        <div className="footer-menu">
                            <h4>Contact Us</h4>
                            <div className="contact-info">
                                <h6>Always 24hr Online service</h6>
                                <p><small>On a hot summer afternoon,dry winds keeps knocking on my room door - Mary Josephine </small></p>
                                <p>Phone: +012345657</p>
                                <p>Email: <strong>super.deluxe44@gmail.com</strong></p>
                            </div>
                            <div>

                            </div>
                        </div>

                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-12">
                        {/* footer menus */}
                        <div className="footer-menu">
                            <div className="footer-links">
                                <h3>Download Link</h3>
                                <div className="download-btn">
                                    <img src={appStore} alt="" />
                                    <img src={playStore} alt="" />
                                </div>

                            </div>
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