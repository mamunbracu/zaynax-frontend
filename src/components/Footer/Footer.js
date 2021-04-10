import React, { Fragment } from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <Fragment>
            <div className="container py-5">
                <div className="row mt-4 img-container">
                    <div className="col-md-1"></div>
                    <div className="col-md-2 mr-2">
                        <img src="/assets/love.png" alt=""/>
                        <h4 className="my-3">Professional Service</h4>
                        <h6>Efficient customer support</h6>
                        <h6>from passionate team</h6>
                    </div>
                    <div className="col-md-2  mr-2">
                    <img src="/assets/brandsss.png" alt=""/>
                    <h4 className="my-3">Quality and Saving</h4>
                    <h6>Comprehensive quality</h6>
                    <h6>control and affordable prices</h6>
                    </div>
                    <div className="col-md-2  mr-2">
                    <img src="/assets/delivery.jfif" alt=""/>
                    <h4 className="my-3">Global Brands</h4>
                    <h6>Buy you favorite items from</h6>
                    <h6>your favorite global brands</h6>
                    </div>
                    <div className="col-md-2  mr-2">
                    <img src="/assets/cam.png" alt=""/>
                    <h4 className="my-3">Fast Delivery</h4>
                    <h6>Fast and convenient</h6>
                    <h6>door to door delivery</h6>
                    </div>
                    <div className="col-md-2  mr-2">
                    <img src="/assets/thik.png" alt=""/>
                    <h4 className="my-3">Secure Payment</h4>
                    <h6>Different secure </h6>
                    <h6>payment methods</h6>
                    </div>
                    <div className="col-md-1"></div>
                </div>

            </div>
            <h6 style={{borderBottom: "1px solid grey", height:"2px"}}></h6>

            <div className="container py-4">
                <div className="row">
                    <div className="col-md-4">
                        <img className="img-fluid mt-4" src="/assets/last-delivery.jpg" alt=""/>
                    </div>
                    <div className="col-md-5">
                        <div className="social">
                            <img className="mr-3 ml-3" src="/assets/002-facebook-logo.png" alt=""/>
                            <img className="mr-3" src="/assets/001-twitter-logo-silhouette.png" alt=""/>
                            <img className="mr-3" src="/assets/004-linkedin-logo.png" alt=""/>
                            <img className="mr-3" src="/assets/instagram (1).png" alt=""/>
                            <img className="mr-3" src="/assets/005-youtube.png" alt=""/>
                        </div>
                        <div className="content">
                        <h4>Subscribe</h4>
                        <h6>Get the latest news from zDrop</h6>
                        <input type="text" placeholder="Enter email" />
                        <i class="fas fa-location-arrow"></i>
                        </div>
                        <div className="mt-5">
                            <nav class="nav">
                                <a class="nav-link active" aria-current="page" href="#!">About zDrop</a>
                                <a class="nav-link" href="#!">FAQ & Support</a>
                                <a class="nav-link" href="#!">Terms & Conditions</a>
                                <a class="nav-link" href="#!">Privacy Policy</a>
                            </nav>
                        </div>
                        <div className="mt-5 payment">
                            <div class="card mr-2">
                               
                                <div class="card-body mr-2">
                                <img src="/assets/BKash-bKash-Logo.wine.png" alt=""/>
                            </div>
                            </div>
                            <div class="card">
                               
                                <div class="card-body">
                                <img src="/assets/nagad-logo-7A70CCFEE0-seeklogo.com.png" alt=""/>
                            </div>
                            </div>
                            <div class="card mr-2">
                               
                                <div class="card-body">
                                <img className="img-fluid" src="/assets/rocket.png" style={{height:"40px", width:"50px"}} alt=""/>
                            </div>
                            </div>
                            <div class="card">
                               
                                <div class="card-body">
                                <img src="/assets/Mastercard-logo.png" alt=""/>
                            </div>
                            </div>
                            <div class="card">
                               
                                <div class="card-body">
                                <img src="/assets/amex-logo-png.png" alt=""/>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-5">
                        <h4 className="mb-2">CONTACT US</h4>
                        <h5>
                          <img src="/assets/customer-service-2-line.png" alt=""/> Hotline :
                        </h5>
                        <p>+8801929459195 (10am-10pm/Sat-Thur)</p>
                        <h5 className="mt-4">
                          <img src="/assets/phone-line.png" alt=""/> Whole Sales :  :
                        </h5>
                        <p>01929459195 (10am-12pm)</p>
                        <h5 className="mt-4">
                          <img src="/assets/mail-send-line.png" alt=""/> Email  :
                        </h5>
                        <p>support.example@gmail.com</p>
                    </div>
                </div>
            </div>
            
        </Fragment>
    )
}

export default Footer
