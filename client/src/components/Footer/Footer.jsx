import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Footer = () => {
  return (
    <div className='footer-container'>
        <section className='footer-send'>
            <p className='footer-send-heading'>
                Join the Adventure to the Park full of Rides
            </p>
            <p className='footer-send-text'>
                Visit Us Now!!
                Give Your Feedback 
            </p>

            <div className="input-area">
                <form>
                    <input type="text" name='Feedback' placeholder='Your Feedback' className='footer-input'  />
                    <button type="submit" className="btn btn-primary">Send Feedback</button>
                </form>
            </div>
        </section>
        <div className="footer-link">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>SocialMedia</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>YouTube</Link>
                </div>
            </div>
        </div>
        {/* <section className='social-media'>
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link className='social-logo'></Link>
                </div>
            </div>
        </section> */}
    </div>
  )
}

export default Footer