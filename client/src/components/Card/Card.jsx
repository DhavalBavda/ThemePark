import React, { useState } from 'react';
import './Card.css'
import fairSwing_card from '/image/fairSwing_card.jpg'
import Rollercoster_card from '/image/Rollercoster_card.webp'
import bumpercar_card from '/image/bumpercar_card.jpg'
import droptower_card from '/image/droptower_card.jpg'
import ferriswheel_card from '/image/ferriswheel_card.jpg'
import waterpark_card from '/image/waterpark_card.jpg'
import './Carousel.css'

const Card = () => {
  return (
    
    <div class="container">
      <div className='card-heading'> <h1>Rides Attraction</h1> </div>
      <div className="row g-3">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <img src={fairSwing_card} alt="" class="card-img-top" id="fair-swing"/>
            <div className="card-body">
              <h5 className="card-title">Fair Swing </h5>
                <p class="card-text">A classic fairground ride where you can swing high in the air.</p>
              
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <img src={Rollercoster_card} alt="" class="card-img-top" id="roller-coaster"/>
            <div className="card-body">
              <h5 className="card-title">Roller Coaster</h5>
                <p class="card-text">A thrilling ride that takes you up and down steep hills and sharp turns.</p>
              
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <img src={droptower_card} alt="" class="card-img-top" id="drop-tower"/>
            <div className="card-body">
              <h5 className="card-title">Drop Tower</h5>
                <p class="card-text">A thrill ride that lifts riders to great heights before releasing them into a controlled free fall.</p>
              
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <img src={ferriswheel_card} alt="" class="card-img-top" id="ferris-wheel"/>
            <div className="card-body">
              <h5 className="card-title">Ferris Wheel</h5>
                <p class="card-text">A classic amusement park ride that rotates passengers in gondolas around a central axis, offering panoramic views.</p>
              
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <img src={bumpercar_card} alt="" class="card-img-top" id="bumper-car"/>
            <div className="card-body">
              <h5 className="card-title">Bumpper Car</h5>
                <p class="card-text">An interactive ride where drivers control electric vehicles that bump into each other in a designated area.</p>
              
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="card">
            <img src={waterpark_card} alt="" class="card-img-top" id="water-park"/>
            <div className="card-body">
              <h5 className="card-title">Water Ride</h5>
                <p class="card-text"> A type of amusement park attraction that involves water features, such as splashing, spraying, or even a full-on water slide experience.</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
   
   
  )
}

const testimonials = [
  {
      name: 'Cus-1',
      profession: 'what is more attractive',
      text: 'cus1 reviews ',
      image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp',
      rating: 4.5,
  },
  {
      name: 'Cus-2',
      profession: 'what liked about park',
      text:'cus 2 review',
      image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp',
      rating: 4.0,
  },
  {
      name: 'cus 3',
      profession: 'liked about park ',
      text: 'cus-3 review',
      image: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp',
      rating: 4.5,
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
      <div className="carousel-wrapper">
        <div className='carousel-text-heading'>Customers Feedbacks </div>
          <div className="carousel">
              {testimonials.map((testimonial, index) => (
                  <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                      <img className="avatar" src={testimonial.image} alt="avatar" />
                      <div className="carousel-content">
                          <h5 className="name">{testimonial.name}</h5>
                          <p className="profession">{testimonial.profession}</p>
                          <p className="text">
                              <span className="quote">“</span>
                              {testimonial.text}
                              <span className="quote">”</span>
                          </p>
                          <div className="stars">
                              {[...Array(5)].map((_, i) => (
                                  <span key={i} className={i < testimonial.rating ? 'star filled' : 'star'}>&#9733;</span>
                              ))}
                          </div>
                      </div>
                  </div>
              ))}
          </div>
          <button className="control-prev" onClick={handlePrev}>
              &#9664;
          </button>
          <button className="control-next" onClick={handleNext}>
              &#9654;
          </button>
      </div>
  );
};

const FooterApp = () => {
  return (
      <div>
          <Card />
          <Carousel />
          
      </div>
  );
};

export default FooterApp;
