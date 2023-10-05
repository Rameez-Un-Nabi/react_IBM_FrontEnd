import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar'; // Adjust the import to your file structure
import LandingPage from './Components/LandingPage/LandingPage'; 
// import Appointments from './Components/Appointments/Appointments'; // Sample Appointments component
import SignUp from './Components/SignUp/SignUp'; // Sample Sign Up component
import Login from './Components/Login/Login'; // Sample Login component
import {useEffect, useState } from 'react';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
const [userName, setUserName] = useState('');
useEffect(() => {
  const token = sessionStorage.getItem('auth-token');
  const name = sessionStorage.getItem('name');
  if (token) {
    setIsLoggedIn(true);
    setUserName(name);
  }
}, []);


  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} userName={userName} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/appointments" element={<Appointments />} /> */}
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
