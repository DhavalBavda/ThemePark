// import React from 'react'
// import './Footer.css'
// import { Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

// const Footer = () => {
//     return (
//         <>
//             <div className='footer-container'>
//                 <section className='footer-send'>
//                     <p className='footer-send-heading'>
//                         Join the Adventure to the Park full of Rides
//                     </p>
//                     <p className='footer-send-text'>
//                         Visit Us Now!!
//                         Give Your Feedback
//                     </p>

//                     <div className="input-area">
//                         <form>
//                             <input type="text" name='Feedback' placeholder='Your Feedback' className='footer-input' />
//                             <button type="submit" className="btn btn-primary">Send Feedback</button>
//                         </form>
//                     </div>
//                 </section>
//                 <div className="footer-link">
//                     <div className="footer-link-wrapper">
//                         <div className="footer-link-items">
//                             <h2>SocialMedia</h2>
//                             <Link to='/'>Instagram</Link>
//                             <Link to='/'>Facebook</Link>
//                             <Link to='/'>YouTube</Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>

//     )
// }

// export default Footer

import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '../style.css';


const FooterItem = ({ title, children }) => (
  <div className="footer-item">
    <h4 className="mb-4">{title}</h4>
    {children}
  </div>
);

const SocialIcon = ({ href, className }) => (
  <a className="btn btn-primary btn-sm-square me-2 rounded-circle" href={href}>
    <i className={className}></i>
  </a>
);

const SocialGalleryImage = ({ src, alt }) => (
  <div className="col-4">
    <img src={src} className="img-fluid rounded-circle border border-primary p-2" alt={alt} />
  </div>
);

const Footer = () => (
  <div className="container-fluid footer py-6 my-6 mb-0 bg-light wow bounceInUp" data-wow-delay="0.1s">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <FooterItem title={<h1 className="text-primary">Cater<span className="text-dark">Serv</span></h1>}>
            <p className="lh-lg mb-4">There cursus massa at urnaaculis estieSed aliquamellus vitae ultrs condmentum leo massamollis its estiegittis miristum.</p>
            <div className="footer-icon d-flex">
              <SocialIcon href="#" className="fab fa-facebook-f" />
              <SocialIcon href="#" className="fab fa-twitter" />
              <SocialIcon href="#" className="fab fa-instagram" />
              <SocialIcon href="#" className="fab fa-linkedin-in" />
            </div>
          </FooterItem>
        </div>
        <div className="col-lg-3 col-md-6">
          <FooterItem title="Special Facilities">
            <div className="d-flex flex-column align-items-start">
              <a className="text-body mb-3" href="#"><i className="fa fa-check text-primary me-2"></i>Cheese Burger</a>
              <a className="text-body mb-3" href="#"><i className="fa fa-check text-primary me-2"></i>Sandwich</a>
              <a className="text-body mb-3" href="#"><i className="fa fa-check text-primary me-2"></i>Paneer Burger</a>
              <a className="text-body mb-3" href="#"><i className="fa fa-check text-primary me-2"></i>Special Sweets</a>
            </div>
          </FooterItem>
        </div>
        <div className="col-lg-3 col-md-6">
          <FooterItem title="Contact Us">
            <div className="d-flex flex-column align-items-start">
              <p><i className="fa fa-map-marker-alt text-primary me-2"></i> 123 Street, New York, USA</p>
              <p><i className="fa fa-phone-alt text-primary me-2"></i> (+012) 3456 7890 123</p>
              <p><i className="fas fa-envelope text-primary me-2"></i> info@example.com</p>
              <p><i className="fa fa-clock text-primary me-2"></i> 26/7 Hours Service</p>
            </div>
          </FooterItem>
        </div>
        <div className="col-lg-3 col-md-6">
          <FooterItem title="Social Gallery">
            <div className="row g-2">
              <SocialGalleryImage src="img/menu-01.jpg" alt="" />
              <SocialGalleryImage src="img/menu-02.jpg" alt="" />
              <SocialGalleryImage src="img/menu-03.jpg" alt="" />
              <SocialGalleryImage src="img/menu-04.jpg" alt="" />
              <SocialGalleryImage src="img/menu-05.jpg" alt="" />
              <SocialGalleryImage src="img/menu-06.jpg" alt="" />
            </div>
          </FooterItem>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;





// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Footer
