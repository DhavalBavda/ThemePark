import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './Sidebar.css'
import Rides from '../Rides/Rides';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Sidebar = () => {

    const navigate = useNavigate();

    const logout = () => {
        Cookies.remove('token');
        navigate('/AdminLogin')
    };

    return (
        <Nav id="sidebarMenu" className="d-lg-block sidebar bg-white">
            <div className="position-sticky">
                <div className="list-group list-group-flush mx-3 mt-4">
                    <Link to="/Dashboard" className="list-group-item list-group-item-action py-2 ripple">
                        Dashboard                    </Link>
                    <Link to="/RidePackage" className="list-group-item list-group-item-action py-2 ripple">
                        Manage Packages
                    </Link>
                    <Link to="/Rides" className="list-group-item list-group-item-action py-2 ripple active">
                        Manage Rides
                    </Link>

                    <Link to="/ClimedTicket" className="list-group-item list-group-item-action py-2 ripple">
                        Tickets
                    </Link>
                    <button onClick={logout}>Logout</button>
                </div>
            </div>
        </Nav>
    );
};

export default Sidebar;
