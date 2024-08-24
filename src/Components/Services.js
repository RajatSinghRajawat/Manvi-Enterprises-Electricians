import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './All.css';
import Nav from './Nav';
import Footer from './Footer';
import data from '../Components/data.png';
import electric from '../Components/electric.jpg';
import install from '../Components/installe.jpg';
import ups from '../Components/ups.jpg';
import security from '../Components/security.png';
import infra from '../Components/infra.png';
import light from '../Components/LIGHT.jpg';


const card = [
    {
        img: data,
        title: " Maintain data center",
        content: "Maintenance can be either planned in performed as emergency repairs, which may require temporarily taking systems offline. The scope of maintenance covers electrical and cooling systems, telecommunications cables, network infrastructure, IT equipment"
    },
    {
        img: electric,
        title: " Electrical equipment maintenance",
        content: "Electrical maintenance is a method of ensuring that electrical equipment remains in perfect working condition. It involves checking, testing, & repairing electrical equipment as needed to avoid faults that could result in a loss of power (or) an electrical fire. "
    },
    {
        img: install,
        title: " Electrical installation",
        content: "Proper electrical wire size is critical to any electrical wire installation. The American Wire Gauge (AWG) system relates to the wire's current-carrying capacity, or how much amperage it can safely handle. When choosing the right wire, you must consider the gauge, the wire capacity, and its intended use."
    },
    {
        img: ups,
        title: " UPS (Uninterruptible Power Supply)",
        content: "An uninterruptible power supply ( UPS) or uninterruptible power source is a type of continual power system that provides automated backup electric power to a load when the input power source or mains power fails"
    },
    {
        img: security,
        title: " Security system",
        content: "Fire alarm and detection systems. Smart fire safety for buildings and challenging applications. Look for the fire detection solution that fits all your needs"
    },
    {
        img: infra,
        title: " Infrastructure maintenance",
        content: "The World Bank Group’s report Well Maintained: Economic Benefits from more Reliable and Resilient Infrastructure effectively documents how good and timely infrastructure maintenance boosts prosperity, enabling growth and well-being of people, firms, and economic systems."
    },
    {
        img: light,
        title: "Lighting installation",
        content: "electrical aspect of installing a light fixture, the task is pretty straightforward. The most important step is to make sure that power to the junction box has been cut at the breaker, and be sure to confirm that it’s off using a voltage tester."
    },
]
const Services = () => {
    return (
        <>
            <Nav />
            <div className="container top">
                <div className="row">
                    {card.map((item, index) => (
                        <div className="col-sm-12 col-lg-4 col-md-6 mb-4 shadow-lg mb-5 bg-body-tertiary rounded Services_card" key={index}>
                            <Card className="shadow-sm" style={{ minHeight: "400px", border: "none", borderRadius: "10px", backgroundColor: "#f7f7f7" }}>
                                <Card.Img style={{ minHeight: "220px", maxHeight: "220px", objectFit: "cover", borderRadius: "10px 10px 0 0" }} src={item.img} />
                                <Card.Body style={{ fontFamily: 'Roboto, sans-serif' }}>
                                    <Card.Title style={{ color: "#002b5c", fontWeight: "bold" }}>{item.title}</Card.Title>
                                    <Card.Text style={{ color: "#333" }}>{item.content}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Services;
