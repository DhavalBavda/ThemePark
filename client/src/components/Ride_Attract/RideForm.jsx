import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RideForm = () => {
    const [RideData, setRidesData] = useState([]);
    const [UserName, setUserName] = useState('');
    const [Email, setEmail] = useState('');
    const [RideName, setRideName] = useState('');
    const [Rating, setRating] = useState('');
    const [Comment, setComment] = useState('');
    const [Image, setImage] = useState(null);

    const navigate = useNavigate();

useEffect(() => {
    axios.get('https://waterpark.onrender.com/ShowRide')
        .then(result => setRidesData(result.data))
        .catch(error => console.error('Error Fetching Details', error));
}, []);

const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('UserName', UserName);
    formData.append('Email', Email);
    formData.append('RideName', RideName);
    formData.append('Rating', Rating);
    formData.append('Comment', Comment);
    if (Image) {
        formData.append('Image', Image);
    }

    try {
        const response = await axios.post('https://waterpark.onrender.com/AddRideFeedBack', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(response.data);
        alert('Feedback submitted!');
        navigate('/ride');
    } catch (error) {
        console.error('There was an error submitting the feedback!', error);
        alert('Error submitting feedback. Please try again.');
    }
};

return (
    <div className="container my-5">
        <h2>Write a Review</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    value={UserName}
                    className="form-control"
                    id="name"
                    // name="name"
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    type="email"
                    value={Email}
                    className="form-control"
                    id="email"
                    // name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="rideTitle" className="form-label">
                    Ride Name
                </label>
                <select
                    className="form-control"
                    id="rideTitle"
                    value={RideName}
                    // name="rideTitle"
                    onChange={(e) => setRideName(e.target.value)}
                    required
                >
                    <option value="">Select a ride</option>
                    {RideData.map((ride, index) => (
                        <option key={index} value={ride.RideName}>
                            {ride.RideName}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="rating" className="form-label">
                    Rating
                </label>
                <input
                    type="number"
                    value={Rating}
                    className="form-control"
                    id="rating"
                    // name="rating"
                    min="1"
                    max="5"
                    onChange={(e) => setRating(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="comment" className="form-label">
                    Comment
                </label>
                <textarea
                    className="form-control"
                    value={Comment}
                    id="comment"
                    // name="comment"
                    rows="3"
                    onChange={(e) => setComment(e.target.value)}
                    required
                ></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image</label>
                <input
                    type="file"
                    className="form-control"
                    id="image"
                    onChange={(e) => setImage(e.target.files[0])}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>
    </div>
);
};

export default RideForm;

