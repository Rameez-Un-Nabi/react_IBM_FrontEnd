// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';

// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/NavBar/NavBar';
// eslint-disable-next-line no-unused-vars
import LandingPage from './Components/LandingPage/LandingPage';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path="/" element={<LandingPage />} />

              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;