import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './Sidebar.css'
import { useLocation } from 'react-router-dom';
import Rides from '../Rides/Rides';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Sidebar = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/AdminLogin')
    };

    const location = useLocation();
    const isActive = (path) => location.pathname === path ? 'list-group-item list-group-item-action py-2 ripple active' : 'list-group-item list-group-item-action py-2 ripple';

    return (
        <Nav id="sidebarMenu" className="d-lg-block sidebar bg-white">
            <div className="position-sticky">
                <div className="list-group list-group-flush mx-3 mt-4">
                    <Link to="/Dashboard" className={isActive('/Dashboard')}>
                        Dashboard                    </Link>
                    <Link to="/RidePackage" className={isActive('/RidePackage')}>
                        Manage Packages
                    </Link>
                    <Link to="/Rides" className={isActive('/Rides')}>
                        Manage Rides
                    </Link>

                    <Link to="/ClimedTicket" className={isActive('/ClimedTicket')}>
                        Tickets
                    </Link>
                    <button className='btn btn-danger' onClick={logout}>Logout</button>
                </div>
            </div>
        </Nav>
    );
};

export default Sidebar;
