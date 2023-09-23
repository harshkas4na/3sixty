import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import trBee from './assets/transparentBee.png';
import trVeg from './assets/transparentvegeis.png';
// import Error from './components/Error';
import Signup from './components/Signup';
import './App.css';
import { BrowserRouter as Main, Routes, Route } from 'react-router-dom';
import OTP from './components/OTP';

function App() {
  

  return (
    <div className="App">
      <Main>
        <Routes>
          <Route exat path="/" element={<Login  />} />
          <Route exat path="/Signup" element={<Signup />} />
          <Route exat path="/OTP" element={<OTP />} />
          <Route exact path="/Home" element={<Home />} />
        </Routes>
      </Main>
      
    </div>
  );
}

export default App;
