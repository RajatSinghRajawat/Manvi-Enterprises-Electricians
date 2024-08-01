// src/Footer.js
import React from 'react';
import './All.css';

const Footer = () => {
    return (
        <footer className="footer text-white">
            <div className="container py-4">
                <div className="row">
                    <div className=" col-lg-3 col-md-6 col-sm-12">
                        <h5>  Our Services</h5>
                        <p> Maintain data center</p>
                        <p> Electrical equipment maintenance</p>
                        <p> Electrical installation</p>
                        <p> UPS (Uninterruptible Power Supply)</p>
                        <p> Smart racks</p>
                        <p> Security system like fire panel</p>

                    </div>
                    <div className="col-md-3">
                        <h5>Site Links</h5>

                        <p>Home</p>
                        <p>About Us</p>
                        <p>Services</p>
                        <p>Contact us</p>

                    </div>

                    <div className=" col-lg-3 col-md-6 col-sm-12">
                        <h5>Contact Info</h5>
                        <address>
                            <p> <strong>Office</strong><br />
                                36A, Vishnu Vihar Colony, Behind HIA School, Dhawas road, Heerapura, Jaipur (Raj.)

                                36A, Vishnu Vihar<br />
                                Behind HIA School,<br />
                                N Dhawas road, Heerapura  302021 Jaipur (Raj.)<br />
                                <br />
                                <i className="fas fa-phone"></i>+91 141 492 0232<br /><i className="fas fa-phone"></i> +91 8005736471 <br />
                                <i className="fas fa-envelope"></i> Manvienterprises155@gmail.com</p>
                        </address>
                    </div>
                    <div className=" col-lg-3 col-md-6 col-sm-12">
                        <div className="card pre no-border">

                            <div className="follow-us-container">
                                <h5 className="follow-us-text ps-4 text-light">Follow Us :</h5>
                            </div>
                            <div className="social-icons ">
                                <a href="">
                                    <i className="fa-brands fa-square-instagram instagram-icon"></i>
                                </a>
                                <a href="">
                                    <i className="fa-brands fa-square-facebook facebook-icon"></i>
                                </a>
                                <a href="">
                                    <i className="fa-brands fa-linkedin linkedin-icon"></i>
                                </a>
                                <a href="">
                                    <i className="fa-brands fa-youtube youtube-icon"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
