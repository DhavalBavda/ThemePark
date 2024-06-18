import React from 'react'
import './Card.css'
import fairSwing_card from '/image/fairSwing_card.jpg'
import Rollercoster_card from '/image/Rollercoster_card.webp'
import bumpercar_card from '/image/bumpercar_card.jpg'
import droptower_card from '/image/droptower_card.jpg'
import ferriswheel_card from '/image/ferriswheel_card.jpg'
import waterpark_card from '/image/waterpark_card.jpg'

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

export default Card
