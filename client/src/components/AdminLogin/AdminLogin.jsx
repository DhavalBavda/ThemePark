import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdmimLogin = () => {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            console.log("asckn")
            const response = await axios.post('http://localhost:4500/login', { Username, Password });
            console.log("Login response:", response.data)
            localStorage.setItem('token', response.data.token);

            navigate('/admin');
        } catch (err) {
            setError('Invalid username or password');
        }
    };

    return (
        <div className='container'>
            <div className="row g-0 mt-5 align-content-center">
                <div className="col-6">
                    <div className="border-bottom border-top border-primary bg-light py-5 px-4">
                        <div className="text-center">
                            <h1 className="display-5 mb-5">Admin Login</h1>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div>
                                <label>Username:</label>
                                <input className='form-control border-primary p-2'
                                    type="text"
                                    value={Username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label>Password:</label>
                                <input className='form-control border-primary p-2'
                                    type="password"
                                    value={Password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <br/>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdmimLogin;
