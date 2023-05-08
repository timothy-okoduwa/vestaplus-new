
import React from 'react'
import NavBar1 from './components/Navbars/NavBar1'
import HomePage from './pages/HomePage/HomePage'
import Footer from './pages/Footer/Footer'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import WhatWeDo from './pages/WhatWeDo/WhatWeDo'
import OurProject from './pages/OurProject/OurProject'
import Contact from './pages/Contact/Contact'
import About from './pages/AboutUs/About'
const App = () => {
  return (
    <BrowserRouter>
      <NavBar1 />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
        <Route path="/project" element={<OurProject />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App