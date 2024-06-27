
import React, { useState } from 'react';

const RideForm = ({ ride, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    rating: 0,
    comment: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      rating: 0,
      comment: '',
    });
  };

  return (
    <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Review {ride.title}</h5>
            <button type="button" className="close" onClick={onSubmit}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <input
                  type="number"
                  className="form-control"
                  id="rating"
                  name="rating"
                  min="1"
                  max="5"
                  value={formData.rating}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="comment">Comment</label>
                <textarea
                  className="form-control"
                  id="comment"
                  name="comment"
                  rows="3"
                  value={formData.comment}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RideForm;