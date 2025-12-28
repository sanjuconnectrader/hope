import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Homepage from "./pages/Homepage";


// ScrollToTop
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <div className="app-bg">
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Homepage />} />
   
      </Routes>
    </div>
  );
};

export default App;
