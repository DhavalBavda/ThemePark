// import React from 'react'
// import './Contact.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Navbar from '../Navbar/Navbar';
// function Contact () {
//   return (
//     <div>
//       <Navbar1/>
//       <div className="contact-page-area section-gap">
//         <div className="contact-container">
//           <div className="row">
//             <div className='col-lg-4 d-flex flex-column address-wrap'>
//               <div className='single-contact-address d-flex flex-row'>
//                 <div className="contact-details">
//                   <h5>Amusment Park</h5>
//                 </div>
//                 <div className="single-contact-address d-flex flex-row">
//                 <div className="contact-details">
// 							    <h5>1234567890</h5>
// 							    <p>Mon to Sat 9am to 5pm</p>
// 						      </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   )
// }

// export default Contact

import React from 'react'
import Navbar1 from '../Navbar/Navbar'


const Contact = ({showNavbar = true}) => {

  

  return (
    <div>
      {showNavbar && <Navbar1 />}
      <div className="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="p-5 bg-light rounded contact-form">
            <div className="row g-4">
              <div className="col-12">
                <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Get in touch</small>
                <h1 className="display-5 mb-0">Contact Us For Any Queries!</h1>
              </div>
              <div className="col-md-6 col-lg-7">
                <p className="mb-4">
                  Feel free to contact us for any type of queries regarding the park
                </p>
                <form>
                  <input type="text" className="w-100 form-control p-3 mb-4 border-primary bg-light" placeholder="Your Name" />
                  <input type="email" className="w-100 form-control p-3 mb-4 border-primary bg-light" placeholder="Enter Your Email" />
                  <textarea className="w-100 form-control mb-4 p-3 border-primary bg-light" rows="4" placeholder="Your Message"></textarea>
                  <button className="w-100 btn btn-primary form-control p-3 border-primary bg-primary rounded-pill" type="submit">Submit Now</button>
                </form>
              </div>
              <div className="col-md-6 col-lg-5">
                <div>
                  <div className="d-inline-flex w-100 border border-primary p-4 rounded mb-4">
                    <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                    <div>
                      <h4>Address</h4>
                      <p>Ajwa - Nimeta Road, Ajwa Compound, Rayan Talavadi, Vadodara, Gujarat 390019</p>
                    </div>
                  </div>
                  <div className="d-inline-flex w-100 border border-primary p-4 rounded mb-4">
                    <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                    <div>
                      <h4>Mail Us</h4>
                      <p className="mb-2">info@amusmentpark.com</p>
                      <p className="mb-0">support@amusmentpark.com</p>
                    </div>
                  </div>
                  <div className="d-inline-flex w-100 border border-primary p-4 rounded">
                    <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                    <div>
                      <h4>Telephone</h4>
                      <p className="mb-2">(+91) 76244 82345</p>
                      <p className="mb-0">(+91) 65342 88347</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
