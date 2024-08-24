import React from 'react';
import './All.css';

const Footer = () => {
    return (
        <footer className="footer text-white" style={{ backgroundColor: '#002b5c', fontFamily: 'Roboto, sans-serif' }}>
            <div className="container py-4">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <h5 style={{ fontWeight: 'bold', color: '#f7f7f7' }}>Our Services</h5>
                        <p>Maintain data center</p>
                        <p>Electrical equipment maintenance</p>
                        <p>Electrical installation</p>
                        <p>UPS (Uninterruptible Power Supply)</p>
                        <p>Smart racks</p>
                        <p>Security system like fire panel</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <h5 style={{ fontWeight: 'bold', color: '#f7f7f7' }}>Site Links</h5>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Services</p>
                        <p>Contact Us</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <h5 style={{ fontWeight: 'bold', color: '#f7f7f7' }}>Contact Info</h5>
                        <address>
                            <p>
                                <strong>Office</strong><br />
                                36A, Vishnu Vihar Colony,<br />
                                Behind HIA School, Dhawas road,<br />
                                Heerapura, Jaipur (Raj.) 302021<br />
                                <i className="fas fa-phone"></i> +91 141 492 0232<br />
                                <i className="fas fa-phone"></i> +91 8005736471<br />
                                <i className="fas fa-envelope"></i> <a href="mailto:Manvienterprises155@gmail.com" style={{ color: '#f7f7f7', textDecoration: 'none' }}>Manvienterprises155@gmail.com</a>
                            </p>
                        </address>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                        <h5 className="text-light" style={{ fontWeight: 'bold' }}>Follow Us:</h5>
                        <div className="social-icons d-flex justify-content-start">
                            <a href="#" className="text-light me-3" style={{ fontSize: '1.5em' }}>
                                <i className="fa-brands fa-square-instagram" style={{ color: '#E1306C' }}></i>
                            </a>
                            <a href="#" className="text-light me-3" style={{ fontSize: '1.5em' }}>
                                <i className="fa-brands fa-square-facebook" style={{ color: '#3b5998' }}></i>
                            </a>
                            <a href="#" className="text-light me-3" style={{ fontSize: '1.5em' }}>
                                <i className="fa-brands fa-linkedin" style={{ color: '#0e76a8' }}></i>
                            </a>
                            <a href="#" className="text-light me-3" style={{ fontSize: '1.5em' }}>
                                <i className="fa-brands fa-square-youtube" style={{ color: '#FF0000' }}></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
