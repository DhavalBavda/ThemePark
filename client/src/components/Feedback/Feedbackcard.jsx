import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Feedbackcard.css';

const Feedbackcard = () => {
  const [feedback, setFeedback] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:4500/ShowRideFeedBack')
      .then(result => setFeedback(result.data))
      .catch(error => console.error('Error fetching feedback:', error));
  }, []);

  useEffect(() => {
    if (feedback.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex(prevIndex => (prevIndex + 1) % feedback.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [feedback.length]);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Feedback</h2>
      <div id="feedbackCarousel" className="carousel slide">
        <div className="carousel-inner">
          {feedback.map((item, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="card feedback-card mb-4">
                    <div className="card-body d-flex align-items-center">
                      <div className="card-details">
                        <h5 className="card-title">{item.UserName}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{item.RideName}</h6>
                        <p className="card-text">Rating: {item.Rating}</p>
                        <p className="card-text">{item.Comment}</p>
                      </div>
                      <div className="card-image">
                        {item.Image && (
                          <img src={`http://localhost:4500/${item.Image}`} alt="Feedback" />
                        )}
                      </div>
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