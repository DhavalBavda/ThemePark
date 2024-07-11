import React from 'react';

const RideForm = () => {
    const rideOptions = [
        { id: 1, title: 'Roller Coaster' },
        { id: 2, title: 'Ferris Wheel' },
        { id: 3, title: 'Merry-Go-Round' },
        { id: 4, title: 'Bumper Cars' },
        { id: 5, title: 'All Rides' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            rideTitle: e.target.rideTitle.value,
            rating: e.target.rating.value,
            comment: e.target.comment.value,
        };
        console.log(formData);
        alert('Feedback submitted!');
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
                        className="form-control"
                        id="name"
                        name="name"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="rideTitle" className="form-label">
                        Ride Title
                    </label>
                    <select
                        className="form-control"
                        id="rideTitle"
                        name="rideTitle"
                        required
                    >
                        <option value="">Select a ride</option>
                        {rideOptions.map((ride) => (
                            <option key={ride.id} value={ride.title}>
                                {ride.title}
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
                        className="form-control"
                        id="rating"
                        name="rating"
                        min="1"
                        max="5"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="comment" className="form-label">
                        Comment
                    </label>
                    <textarea
                        className="form-control"
                        id="comment"
                        name="comment"
                        rows="3"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default RideForm;


