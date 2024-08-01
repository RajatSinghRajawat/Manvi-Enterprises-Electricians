import React from 'react';
import logos from '../Components/logos.png';
import './All.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <div className="logo">
                            <img src={logos} alt="Logo" />
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <NavLink to="/">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                            </NavLink>
                            <NavLink to="/about">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                            </NavLink>
                            <NavLink to="/services">
                                <li className="nav-item">
                                    <a className="nav-link" href="#" role="button" aria-expanded="false">Services</a>
                                </li>
                            </NavLink>
                            <NavLink to="/contact">
                                <li className="nav-item">
                                    <a className="nav-link" aria-disabled="true">Contact us</a>
                                </li>
                            </NavLink>
                        </ul>
                        <div className='d-flex navmain'>
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
            </nav>
        </div>
    )
}

export default Nav;
