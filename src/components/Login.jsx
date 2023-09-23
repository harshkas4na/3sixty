import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components_css/Login.css';
import trBee from '../assets/transparentBee.png';
// import trVeg from '../assets/transparentvegeis.png';
import Home from "./Home";


function Login({ toggleForm }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    
  });
  const [users,setUsers]=useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const { username, password } = formData;

    
    const isUserValid = users.some((user) => user.username === username && user.password === password);

    if (isUserValid) {
      // Redirect to the Home component upon successful login
      console.log(users);
      console.log(formData);
      navigate('/Home');
      setIsLoggedIn(true);
    } else {
      console.log(users);
      console.log(formData);
      // Handle invalid login (e.g., display an error message)
      alert('Invalid username or password. Please try again.');
    }
  };

  const getUsers= async ()=>{
    const response = await fetch('http://localhost:8080',{
      method:"GET",
    })
    const data=await response.json();
    setUsers(data);
  }

  useEffect(()=>{
    getUsers();
  },[])
  

  return (
    <div className='login-container'>
      <img src={trBee} className='imgofBee'/>
      {/* <img src={trVeg} className='imgofVegeis'/> */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className='login-form'>
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
          <button type="submit">Login</button>
        </div>
      </form>
      <div className='switchingmsg'>
        Don't have an account?{' '}
        <Link className='Linkbtn' to={'/Signup'}>Sign up</Link>
      </div>
    </div>
  );
}

export default Login;
