import React, { useEffect, useState } from 'react';
import '../components_css/Signup.css';


function Signup({ toggleForm }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    age: '',
    aadhaarCard: '',
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080",{
      method:'POST',
      body:JSON.stringify(formData),
      headers:{
        'Content-Type':'application/json'
      }

    })
    // const data=await response.json();
    // console.log(data);
    // Add your signup logic here
  };

  

  return (
    <div className='signup-container'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className='signup-form'>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="aadhaarCard">Aadhaar Card:</label>
          <input
            type="text"
            id="aadhaarCard"
            name="aadhaarCard"
            value={formData.aadhaarCard}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <div>
        Already have an account?{' '}
        <button onClick={toggleForm}>Login</button>
      </div>
    </div>
  );
}

export default Signup;
