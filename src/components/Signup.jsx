import React, { useEffect, useState } from 'react';
import '../components_css/Signup.css';
import trBee from '../assets/transparentBee.png';
import { Link, useNavigate } from 'react-router-dom';


function Signup({ toggleForm }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    age: '',
    
    aadhaarCard: '',
  });

  const navigate=useNavigate();
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     // Validate password length and special character
  const passwordPattern = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;
  if (!passwordPattern.test(formData.password)) {
    alert('Password should be 6-10 characters long and contain at least one special character.');
    return;
  }

  // Validate age between 8 and 16
  const age = parseInt(formData.age);
  if (isNaN(age) || age < 8 || age > 16) {
    alert('Age should be between 8 and 16.');
    return;
  }

  // Validate Aadhaar card length
  if (formData.aadhaarCard.length !== 12) {
    alert('Aadhaar Card should be exactly 12 characters long.');
    return;
  }

  // If all validations pass, proceed to OTP verification
  navigate('/OTP');

  // Reset the form data
  setFormData({
    username: '',
    email: '',
    password: '',
    age: '',
    aadhaarCard: '',
  })
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
      <img src={trBee} className='imgofBee'/>
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
        {/* <div>
          <label htmlFor="phone_num">Ph. Number:</label>
          <input
            type="text"
            id="phone_num"
            name="phone_num"
            value={formData.phone_num}
            onChange={handleChange}
            required
          />
        </div> */}
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
      <div className='switchingmsg'>
        Already have an account?{' '}
        <Link to="/" className='Linkbtn'>Login</Link>
      </div>
    </div>
  );
}

export default Signup;
