import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Dashboard() {
  const [userData, setUserData] = useState({ name: '', email: '', profilePhoto: null });
  
  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('currentUser'));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem('userData');
    window.location.href = '/login';
  };
  
  return (
    <form style={{minWidth:'50%', textAlign:'center', gap:20}} className='flexCenter flexColumn'>

      <h1>Welcome to your Dashboard, {userData.name}!</h1>
      {userData.profilePhoto && <img src={userData.profilePhoto} alt='Profile' />}
      <p>Your email: {userData.email}</p>
      
      <p>Click here to go to your profile</p>
      <Link to="/profile">
        <button>Go to profile</button>
      </Link>
      
      <div className='social'>
<div onClick={handleLogout}>Logout</div>
      </div>
      
    </form>
  );
}

export default Dashboard;
