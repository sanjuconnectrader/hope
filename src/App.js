import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';


import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Servicepage from './pages/Servicepage';
import Contactpage from './pages/Contactpage';


// ScrollToTop
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// GAHandler


const App = () => {


  return (
    <>
      <ScrollToTop />




      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/services" element={<Servicepage />} />
        <Route path="/contact" element={<Contactpage />} />

      </Routes>
    </>
  );
};

export default App;