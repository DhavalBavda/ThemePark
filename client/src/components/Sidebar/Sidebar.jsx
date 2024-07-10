import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './Sidebar.css';

const Sidebar = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/AdminLogin');
    };

    const location = useLocation();
    const isActive = (path) => location.pathname === path ? 'list-group-item list-group-item-action py-2 ripple active' : 'list-group-item list-group-item-action py-2 ripple';

    return (
        <Nav id="sidebarMenu" className="d-lg-block sidebar">
            <div className="position-sticky">
                {/* <h2 className="ms-4 mt-4">Admin Controls</h2> */}
                <div className="list-group list-group-flush mx-3 mt-4">
                <div className='mb-3'></div>
                    <Link to="/Dashboard" className={isActive('/Dashboard')}>
                        Dashboard
                    </Link>
                    <Link to="/RidePackage" className={isActive('/RidePackage')}>
                        Manage Packages
                    </Link>
                    <Link to="/Rides" className={isActive('/Rides')}>
                        Manage Rides
                    </Link>
                    <Link to="/ClimedTicket" className={isActive('/ClimedTicket')}>
                        Tickets
                    </Link>
                    <div className='mt-4'>

                    <button className="btn btn-danger mt-auto mt-5" onClick={logout}>Logout</button>
                    </div>
                </div>
            </div>
        </Nav>
    );
};

export default Sidebar;
