import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    // const token = Cookies.get('token');
    const token = localStorage.getItem('token');

    console.log(token)

    if (!token) {
        console.log("not authorised")
        return <Navigate to="/AdminLogin" />;
    }
    const decodedToken = jwtDecode(token);
    
    return <Component {...rest} />;
};

export default ProtectedRoute;
