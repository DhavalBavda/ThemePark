import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Logo from "../../../public/image/Logo.png"
import { Navbar } from 'react-bootstrap';
import Navbar1 from '../Navbar/Navbar';


const AdmimLogin = () => {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            console.log("asckn")
            const response = await axios.post('https://waterpark.onrender.com/login', { Username, Password });

            // console.log("Login response:", response.data)

            localStorage.setItem('token', response.data.token);

            navigate('/Dashboard');
        } catch (err) {
            setError('Invalid username or password');
        }
    };

    return (
        <>
        <Navbar1/>
            <div className="container-fluid contact py-6 wow bounceInUp lol" data-wow-delay="0.1s" >
                <div className="container lol-content">
                    <div className="row g-0">
                        <div className="col-3"></div>
                        <div className="col-1">
                            <img src="../../../public/image/Hero_image/hero.webp" className="img-fluid h-100 w-100 rounded-start" style={{ objectFit: 'cover', opacity: 0.7 }} alt="" />
                        </div>
                        <div className="col-4">
                            <div className="border-bottom border-top border-primary bg-light py-5 px-4">
                                <div className="text-center">
                                    <img src={Logo} className="img-fluid rounded-end" style={{ objectFit: 'cover', height: '50px', width: '50px' }} alt="logo"></img>
                                    <Navbar.Brand>

                                        <h1 className="text-primary fw-bold mb-1">Amusment<span className="text-dark">Park</span></h1>
                                    </Navbar.Brand>
                                    <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 m-3">Login</small>
                                    <h1 className="display-5 mb-5">Admin Login</h1>
                                </div>
                                <form onSubmit={handleLogin}>
                                    <div className="mb-3">
                                        <label>Username:</label>
                                        <input className='form-control border-primary p-2'
                                            type="text"
                                            value={Username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Password:</label>
                                        <input className='form-control border-primary p-2'
                                            type="password"
                                            value={Password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                    <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-1">
                            <img src="../../../public/image/Hero_image/hero.webp" className="img-fluid h-100 w-100 rounded-end" style={{ objectFit: 'cover', opacity: 0.7 }} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdmimLogin;
