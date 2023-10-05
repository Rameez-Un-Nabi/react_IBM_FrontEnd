import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar'; // Adjust the import to your file structure
import LandingPage from './Components/LandingPage/LandingPage'; 
// import Appointments from './Components/Appointments/Appointments'; // Sample Appointments component
import SignUp from './Components/SignUp/SignUp'; // Sample Sign Up component
import Login from './Components/Login/Login'; // Sample Login component

function App() {
  return (
    <Router>
      <Navbar />
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
