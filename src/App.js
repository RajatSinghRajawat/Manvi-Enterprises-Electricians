import React from 'react'
import About from './Components/About'
import Services from './Components/Services'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 
import Contact from './Components/Contact';
import Home from './Components/Home';

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        
        </BrowserRouter>
      {/* <About/> */}
      {/* <Services/> */}
    </div>
  )
}

export default App