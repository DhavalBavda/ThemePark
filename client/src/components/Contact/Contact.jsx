import React from 'react'
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from '../Navbar/Navbar';

function Contact() {


  return (
    <div>
      <Navbar />
      {/* <section className="contact-page-area">
        <div className="container">
          <div className="row">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  className="gmap_iframe"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Limbdi Homeopathic Medical College&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  title="Google Map"
                ></iframe>
                <a href="https://strandsgame.net/">Strands NYT</a>
              </div>
            </div>
            <div className="address-wrap">
              <div className="single-contact-address">
                <div className="icon">
                  <span className="lnr lnr-home"></span>
                </div>
                <div className="contact-details">
                  <h5>Amusment Park</h5>
                  <p>Vadodara</p>
                </div>
              </div>
              <div className="single-contact-address">
                <div className="icon">
                  <span className="lnr lnr-phone-handset"></span>
                </div>
                <div className="contact-details">
                  <h5>123456789</h5>
                  <p>Mon to Sat 9am to 5pm</p>
                </div>
              </div>
              <div className="single-contact-address">
                <div className="icon">
                  <span className="lnr lnr-envelope"></span>
                </div>
                <div className="contact-details">
                  <h5>limbdihmc@gmail.com</h5>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
            <div className="form-area">
              <form className="contact-form" id="myForm" action="mail.php" method="post">
                <div className="form-group">
                  <input
                    name="name"
                    placeholder="Enter your name"
                    onFocus={(e) => (e.target.placeholder = '')}
                    onBlur={(e) => (e.target.placeholder = 'Enter your name')}
                    className="common-input form-control"
                    required
                    type="text"
                  />
                  <input
                    name="email"
                    placeholder="Enter email address"
                    pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                    onFocus={(e) => (e.target.placeholder = '')}
                    onBlur={(e) => (e.target.placeholder = 'Enter email address')}
                    className="common-input form-control"
                    required
                    type="email"
                  />
                  <input
                    name="subject"
                    placeholder="Enter subject"
                    onFocus={(e) => (e.target.placeholder = '')}
                    onBlur={(e) => (e.target.placeholder = 'Enter subject')}
                    className="common-input form-control"
                    required
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="common-textarea form-control"
                    name="message"
                    placeholder="Enter Message"
                    onFocus={(e) => (e.target.placeholder = '')}
                    onBlur={(e) => (e.target.placeholder = 'Enter Message')}
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <div className="alert-msg"></div>
                  <button className="genric-btn primary">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> */}
      <section className="contact-page-area">
        <div className="container">
          <div className="row">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  className="gmap_iframe"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?q=Ajwa%20Water%20Park&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  title="Ajwa Water Park Location"
                ></iframe>
              </div>
            </div>
            <div className="address-wrap">
              <div className="single-contact-address">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="svg-icon"
                  >
                    <path d="M3 9.5L12 3l9 6.5V19a2 2 0 01-2 2H5a2 2 0 01-2-2V9.5z"></path>
                    <path d="M9 22V12h6v10"></path>
                  </svg>
                </div>
                <div className="contact-details">
                  <h5>Ajwa Water Park</h5>
                  <p>Ajwa Road, Vadodara, Gujarat</p>
                </div>
              </div>
              <div className="single-contact-address">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="svg-icon"
                  >
                    <path d="M3 8h6v13H3zM15 8h6v13h-6zM9 5v3H6V5H3V3h6V0"></path>
                  </svg>
                </div>
                <div className="contact-details">
                  <h5>00 (958) 9865 562</h5>
                  <p>Mon to Sat 9am to 5pm</p>
                </div>
              </div>
              <div className="single-contact-address">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="svg-icon"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="contact-details">
                  <h5>info@ajwawaterpark.com</h5>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
            <div className="form-area">
              <form className="contact-form" id="myForm" action="mail.php" method="post">
                <div className="form-group">
                  <input
                    name="name"
                    placeholder="Enter your name"
                    onFocus={(e) => (e.target.placeholder = '')}
                    onBlur={(e) => (e.target.placeholder = 'Enter your name')}
                    className="common-input form-control"
                    required
                    type="text"
                  />
                  <input
                    name="email"
                    placeholder="Enter email address"
                    pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                    onFocus={(e) => (e.target.placeholder = '')}
                    onBlur={(e) => (e.target.placeholder = 'Enter email address')}
                    className="common-input form-control"
                    required
                    type="email"
                  />
                  <input
                    name="subject"
                    placeholder="Enter subject"
                    onFocus={(e) => (e.target.placeholder = '')}
                    onBlur={(e) => (e.target.placeholder = 'Enter subject')}
                    className="common-input form-control"
                    required
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="common-textarea form-control"
                    name="message"
                    placeholder="Enter Message"
                    onFocus={(e) => (e.target.placeholder = '')}
                    onBlur={(e) => (e.target.placeholder = 'Enter Message')}
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <div className="alert-msg"></div>
                  <button className="genric-btn primary">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Contact
