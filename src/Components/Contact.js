import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import logo from '../Components/logos.png';
import post from '../Components/post.png';

const Contact = () => {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif', color: '#002b5c' }}>
      <Nav />
      <div className='container my-4'>
        <div className='row d-flex justify-content-between'>
          <div className='col-lg-4 col-md-6 col-sm-12 mb-4 mt-5'>
            <div>
              <h2 style={{ color: "#002b5c", fontWeight: "bold" }}>Contact Us</h2>
              <p>
                <span style={{ fontWeight: 'bold' }}>Phone</span>: +91 8005736471 <br />
                <span style={{ fontWeight: 'bold' }}>Phone</span>: +91 141 492 0232
              </p>
              <p>
                <span style={{ fontWeight: 'bold' }}>Email</span>: <a style={{textDecoration:"none", color:"#002b5c"}} href="mailto:Manvienterprises155@gmail.com">Manvienterprises155@gmail.com</a> 
              </p>
              <p>
                <span style={{ fontWeight: 'bold' }}>GST IN NUMBER</span>: <a style={{textDecoration:"none", color:"#002b5c"}} href="mailto:Manvienterprises155@gmail.com">08CYAPR6631NIZV</a> 
              </p>
              <p>
                <span style={{ fontWeight: 'bold' }}>Address</span>: 36A, Vishnu Vihar Colony, Behind HIA School, Dhawas road, Heerapura, Jaipur (Raj.) 302021
              </p>
            </div>
            <div>
              <h3>Social Media</h3>
              <ul className='list-unstyled'>
                <li>
                  <a className='text-decoration-none' style={{ color: "#002b5c" }} href='#'>
                    <i className='fa-brands fa-square-facebook' style={{ marginRight: '8px' }}></i> Facebook
                  </a>
                </li>
                <li>
                  <a className='text-decoration-none' style={{ color: "#002b5c" }} href='#'>
                    <i className='fa-brands fa-square-instagram' style={{ marginRight: '8px' }}></i> Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 mb-4 mt-4'>
            <img className='img-fluid shadow-sm rounded' src={post} alt='Post' />
          </div>
        </div>
      </div>
      <div className='container-fluid mb-4'>
        <div className='row'>
          <div className='col-12'               style={{ border: '0', width: '100%', height: '70vh', borderRadius: '10px' }}
          >
          <iframe 
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3558.3060341472774!2d75.72555917543883!3d26.893780976658473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUzJzM3LjYiTiA3NcKwNDMnNDEuMyJF!5e0!3m2!1sen!2sin!4v1724475330657!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: '10px' , color:"rgb(132, 199, 227)" }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
