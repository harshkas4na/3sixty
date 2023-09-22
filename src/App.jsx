import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import'./App.css'

function App() {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);

  const toggleForm = () => {
    setLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <div className="App">
      {isLoginFormVisible ? (
        <Login toggleForm={toggleForm} />
      ) : ( 
        <Signup toggleForm={toggleForm} />
      )}
    </div>
  );
}

export default App;
