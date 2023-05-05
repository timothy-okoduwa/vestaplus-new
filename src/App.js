
import React from 'react'
import NavBar1 from './components/Navbars/NavBar1'
import HomePage from './pages/HomePage/HomePage'
import Footer from './pages/Footer/Footer'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import WhatWeDo from './pages/WhatWeDo/WhatWeDo'
const App = () => {
  return (
    <BrowserRouter>
      <NavBar1 />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
      </Routes>

      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App