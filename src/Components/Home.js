import React, { useRef } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Carousel from 'react-bootstrap/Carousel';
import home1 from '../Components/home1.jpg';
import home2 from '../Components/home2.jpg';
import home3 from '../Components/home3.jpg';
import home4 from '../Components/home4.png';
import data from '../Components/data.png'
import electric from '../Components/electric.jpg'
import install from '../Components/installe.jpg'
import ups from '../Components/ups.jpg'
import security from '../Components/security.png'
import infra from '../Components/infra.png'
import light from '../Components/LIGHT.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './All.css';

const slides = [
  { img: data, alt: "Maintain Data Center", title: "Maintain Data Center", description: "About maintaining data centers and ensuring their continuous operation..." },
  { img: electric, alt: "Electrical Equipment Maintenance", title: "Electrical Equipment Maintenance", description: "About maintaining and servicing electrical equipment for optimal performance..." },
  { img: install, alt: "Electrical Installation", title: "Electrical Installation", description: "About installing electrical systems and components to meet industry standards.Proper electrical wire size is critical to any electrical wire installation.Gauge (AWG) system relates to the wire's" },
  { img: security, alt: "Security System", title: "Security System", description: "About security systems like fire panels for safety. Smart fire safety for buildings and challenging applications. Look for the fire detection solution that fits all your needs" },
  { img: infra, alt: "Infrastructure Maintenance", title: "Infrastructure Maintenance", description: "About maintaining infrastructure for reliability..." },
  { img: light, alt: "Lighting Installation", title: "Lighting Installation", description: "About installing lighting systems..." },
  { img: ups, alt: "Hardware Installation", title: "Hardware Installation", description: "About installing hardware components..." },

];

const Home = () => {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    const slider = sliderRef.current;
    const slideWidth = slider.querySelector('.slide').clientWidth + 20; // include the gap
    slider.scrollBy({ left: direction * slideWidth, behavior: 'smooth' });
  };

  return (
    <div className='top'>
      <Nav />
      <div className="container mt-5 newone">
        <div className="row">
          <div className="col-12">
            <Carousel>
              <Carousel.Item >
                <img style={{ width: "100%" }} className="d-block " src={home1} alt="Slide 1" />
              </Carousel.Item>
              <Carousel.Item>
                <img style={{ width: "100%" }} className="d-block " src={home2} alt="Slide 2" />
              </Carousel.Item>
              <Carousel.Item>
                <img style={{ width: "100%" }} className="d-block " src={home3} alt="Slide 3" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <p className="text-justify">
              <strong>
                <b className="font-weight-bold "> Who We Are? <br /> <b style={{color:"blue"}}>Manvi Enterprisees</b> </b>
              </strong> is a leading provider of comprehensive electrical maintenance and facility management services. We specialize in maintaining data centers, electrical equipment, and infrastructure for large and medium enterprises. Our expertise extends to various areas, including:
              <ul>
                <li>Electrical Maintenance and Facility Management: Ensuring optimal performance and longevity of electrical systems.</li>
                <li>Data Center Maintenance: Providing end-to-end maintenance for data centers.</li>
                <li>Electrical Installations and Wiring: Implementing high-quality electrical installations and wiring solutions.</li>
                <li>UPS and Smart Racks: Installing and maintaining uninterruptible power supplies (UPS) and smart rack solutions.</li>
                <li>HVAC Systems: Installing and maintaining heating, ventilation, and air conditioning (HVAC) systems.</li>
                <li>Security Systems: Implementing and maintaining security solutions, including fire panels, fire suppression systems, access control systems, and VESDA (Very Early Smoke Detection Apparatus).</li>
                <li>Rodent Control Systems: Ensuring a pest-free environment for sensitive areas.</li>
                <li>Infrastructure Maintenance: Maintaining and upgrading infrastructure to meet the highest standards.</li>
               
              </ul>
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img className="img-fluid h-100 object-fit-cover
            " src={home4} alt="About Us" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="slider-container" ref={sliderRef}>


              {
                slides.map((slide, index) => {
                  return (
                    <Card className="slide" key={index} style={{ width: '18rem'}}>
                      <Card.Img variant="top" src={slide.img} />
                      <Card.Body>
                        <Card.Title>{slide.title}</Card.Title>
                        <Card.Text>
                        {slide.description}
                         
                        </Card.Text>
                        <Button style={{position:"absolute",bottom:"5px" , right:"6rem"}} variant="primary">See All</Button>
                      </Card.Body>
                    </Card>
                  )
                })
              }



              {/* {slides.map((slide, index) => (
                <div className="slide" key={index}>
                  <img src={slide.img} alt={slide.alt} />
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                  <button>View More</button>
                </div>
              ))} */}
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
