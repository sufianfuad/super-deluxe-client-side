import React from 'react';

// import banner from '../../../images/tableFan.png';

//css
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner-container">
            <div className="container">
                <div className="row d-flex align-items-center ">
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <div className="banner-info">
                            <h1>Welcome to Our Table Fan Store</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, fugit nemo illum fugiat praesentium tenetur a unde necessitatibus vel ut?</p>
                            <div className="banner-btn">
                                <button className="btn btn-primary fw-bold text-white me-2 px-3 py-2">PURCHASE NOW</button>
                                <button className="btn btn-secondary fw-bold text-white px-3 py-2">LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12">
                        <div className="banner-img">
                            <img src="https://www.kdk.com.my/wp-content/uploads/2019/09/menu-General-Fan.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;