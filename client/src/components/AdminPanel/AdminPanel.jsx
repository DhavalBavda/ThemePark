import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const AdminPanel = () => {

  const navigate = useNavigate();

  const logout = () => {
    Cookies.remove('token');
    navigate('/AdminLogin')
  };

  const rides = ()=>{
    navigate('/Rides')
  }
  
  const ridepackages = ()=>{
    navigate('/RidePackage')
  }

  return (
    <div>
      <h1>Admin Panel</h1>
      <ul>
        <button onClick={rides}>Edit rides</button>
        <button onClick={ridepackages}>Edit Packages</button>
      </ul>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default AdminPanel
