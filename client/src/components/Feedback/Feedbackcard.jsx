import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Feedbackcard.css';
import 'animate.css/animate.min.css';

const Feedbackcard = () => {
  const [feedback, setFeedback] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:4500/ShowRideFeedBack')
      .then(result => setFeedback(result.data))
      .catch(error => console.error('Error fetching feedback:', error));
  }, []);

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % feedback.length);
  };

  const handlePrev = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + feedback.length) % feedback.length);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Feedback</h2>
      <div id="feedbackCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {feedback.map((item, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="card feedback-card animate__animated animate__fadeInUp mb-4">
                    <div className="card-body">
                      <h5 className="card-title">{item.UserName}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{item.RideName}</h6>
                      <p className="card-text">Rating: {item.Rating}</p>
                      <p className="card-text">{item.Comment}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedbackcard;
