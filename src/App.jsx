import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Error from './components/Error';
import Signup from './components/Signup';
import './App.css';
import { BrowserRouter as Main, Routes, Route } from 'react-router-dom';

function App() {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);

  const toggleForm = () => {
    setLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <div className="App">
      <Main>
        <Routes>
          <Route exat path="/" element={<Login toggleForm={toggleForm} />} />
          <Route exat path="/Signup" element={<Signup toggleForm={toggleForm} />} />
          {false ? <Route exact path="/Home" element={<Home toggleForm={toggleForm} />} />:<Route path='/Home' element={<Error/>}/>}
        </Routes>
      </Main>
    </div>
  );
}

export default App;
