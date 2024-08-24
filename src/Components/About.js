import React from 'react';
import './All.css';
import Nav from './Nav';
import Footer from './Footer';
import about from '../Components/about.jpg';
import logos from '../Components/logos.png';

function About() {
    return (
        <>
            <Nav />
            <div className="container top">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                        <h4 style={{ borderBottom: "2px solid #002b5c", color: "#002b5c", fontWeight: "bold" }}>About us</h4>
                        <div className="about-us mt-1.5">
                            <ul style={{ fontFamily: 'Roboto, sans-serif', color: "#333" }}>
                                <li><i className="fas fa-info-circle" style={{ paddingRight: "10px", color: "#002b5c" }}></i> Brief Profile</li>
                                <li><i className="fas fa-eye" style={{ paddingRight: "10px", color: "#002b5c" }}></i> Vision</li>
                                <li><i className="fas fa-bullseye" style={{ paddingRight: "10px", color: "#002b5c" }}></i> Mission</li>
                                <li><i className="fas fa-user-tie" style={{ paddingRight: "10px", color: "#002b5c" }}></i> Leadership</li>
                                <li><i className="fas fa-users" style={{ paddingRight: "10px", color: "#002b5c" }}></i> Advisory Team</li>
                                <li><i className="fas fa-hand-holding-heart" style={{ paddingRight: "10px", color: "#002b5c" }}></i> Social Responsibility</li>
                                <li><i className="fas fa-balance-scale" style={{ paddingRight: "10px", color: "#002b5c" }}></i> Corporate Governance</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="brief-profile">
                            <h4 style={{ borderBottom: "2px solid #002b5c", color: "#002b5c", fontWeight: "bold" }}>Brief Profile</h4>
                            <img src={about} alt="Profile" className="img-fluid rounded shadow-sm" />
                            <p style={{ textAlign: "justify" }}>
                                <b style={{ fontWeight: "900" }}> Manvi Enterprises</b> is a leading provider of comprehensive electrical maintenance and facility management services. We specialize in maintaining data centers, electrical equipment, and infrastructure for large and medium enterprises. Our expertise extends to various areas, including:

                                Electrical Maintenance and Facility Management: Ensuring optimal performance and longevity of electrical systems.
                                Data Center Maintenance: Providing end-to-end maintenance for data centers.
                                Electrical Installations and Wiring: Implementing high-quality electrical installations and wiring solutions.
                                UPS and Smart Racks: Installing and maintaining uninterruptible power supplies (UPS) and smart rack solutions.
                                HVAC Systems: Installing and maintaining heating, ventilation, and air conditioning (HVAC) systems.
                                Security Systems: Implementing and maintaining security solutions, including fire panels, fire suppression systems, access control systems, and VESDA (Very Early Smoke Detection Apparatus).
                                Rodent Control Systems: Ensuring a pest-free environment for sensitive areas.
                                Infrastructure Maintenance: Maintaining and upgrading infrastructure to meet the highest standards.
                                Lighting Installation: Installing efficient and effective lighting solutions.
                                Hardware Installation and IT Networks: Setting up and maintaining IT networks and switches.
                                DG and LT/HT Panels: Installing and maintaining diesel generators (DG) and low tension/high tension (LT/HT) panels.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="services">
                            <h3 style={{ backgroundColor: "#02be89", padding: "5px", borderRadius: "5px", fontWeight: "700", color: "#fff" }}>Our Services</h3>
                            <p style={{ color: "#fff",padding:"8px" }}>▶ Maintain data center</p>
                            <p style={{ color: "#fff",padding:"8px" }}>▶ Electrical equipment maintenance</p>
                            <p style={{ color: "#fff",padding:"8px" }}>▶ Electrical installation</p>
                            <p style={{ color: "#fff",padding:"8px" }}>▶UPS(Uninterruptible Power Supply)</p>
                            <p style={{ color: "#fff",padding:"8px" }}>▶ Smart racks</p>
                            <p style={{ color: "#fff",padding:"8px" }}>▶ Security system like fire panel</p>
                            <p style={{ color: "#fff",padding:"8px" }}>▶ Infrastructure maintenance</p>
                            <p style={{ color: "#fff",padding:"8px" }}>▶ Lighting installation</p>
                            <p style={{ color: "#fff",padding:"8px" }}>▶ Hardware installation</p>
                            <p style={{ color: "#fff",padding:"8px" }}>▶ Diesel Generators (DG)</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
