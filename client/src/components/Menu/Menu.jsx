import React from 'react';
import '../style.css'
import '../../../public/css/bootstrap.min.css'
import '../../../public/lib/animate/animate.css'
import '../../../public/lib/animate/animate.min.css'
import '../../../public/lib/lightbox/css/lightbox.min.css'
import '../../../public/lib/owlcarousel/owl.carousel.min.css'

const Menu = () => {
    return (
        <div className="container-fluid menu py-6">
            <div className="container">
                <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                    <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Our Menu</small>
                    <h1 className="display-5 mb-5">Most Popular Food in the World</h1>
                </div>
                <div className="tab-class text-center">
                    <ul className="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp" data-wow-delay="0.1s">
                        <li className="nav-item p-2">
                            <a className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill active" data-bs-toggle="pill" href="#tab-6">
                                <span className="text-dark" style={{ width: '150px' }}>Starter</span>
                            </a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" data-bs-toggle="pill" href="#tab-7">
                                <span className="text-dark" style={{ width: '150px' }}>Main Course</span>
                            </a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" data-bs-toggle="pill" href="#tab-8">
                                <span className="text-dark" style={{ width: '150px' }}>Drinks</span>
                            </a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" data-bs-toggle="pill" href="#tab-9">
                                <span className="text-dark" style={{ width: '150px' }}>Offers</span>
                            </a>
                        </li>
                        <li className="nav-item p-2">
                            <a className="d-flex py-2 mx-2 border border-primary bg-white rounded-pill" data-bs-toggle="pill" href="#tab-10">
                                <span className="text-dark" style={{ width: '150px' }}>Our Special</span>
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="tab-6" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                {renderMenuItem('img/menu-01.jpg', 'Paneer', '₹90')}
                                {renderMenuItem('img/menu-02.jpg', 'Sweet Potato', '₹90')}
                                {renderMenuItem('img/menu-03.jpg', 'Sabudana Tikki', '₹90')}
                                {renderMenuItem('img/menu-04.jpg', 'Pizza', '₹90')}
                            </div>
                        </div>
                        <div id="tab-7" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                {renderMenuItem('img/menu-05.jpg', 'Butter Chicken', '₹150')}
                                {renderMenuItem('img/menu-06.jpg', 'Biryani', '₹180')}
                                {renderMenuItem('img/menu-07.jpg', 'Tandoori Chicken', '₹120')}
                                {renderMenuItem('img/menu-08.jpg', 'Chole Bhature', '₹100')}
                            </div>
                        </div>
                        <div id="tab-8" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                {renderMenuItem('img/menu-09.jpg', 'Masala Chai', '₹50')}
                                {renderMenuItem('img/menu-10.jpg', 'Lassi', '₹60')}
                                {renderMenuItem('img/menu-11.jpg', 'Mango Shake', '₹70')}
                                {renderMenuItem('img/menu-12.jpg', 'Nimbu Pani', '₹40')}
                            </div>
                        </div>
                        <div id="tab-9" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                {renderMenuItem('img/menu-13.jpg', 'Combo Meal', '₹200')}
                                {renderMenuItem('img/menu-14.jpg', 'Family Platter', '₹500')}
                                {renderMenuItem('img/menu-15.jpg', 'Lunch Box', '₹120')}
                                {renderMenuItem('img/menu-16.jpg', 'Weekend Special', '₹300')}
                            </div>
                        </div>
                        <div id="tab-10" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                {renderMenuItem('img/menu-17.jpg', 'Dosa', '₹80')}
                                {renderMenuItem('img/menu-18.jpg', 'Idli Sambar', '₹70')}
                                {renderMenuItem('img/menu-19.jpg', 'Vada Pav', '₹50')}
                                {renderMenuItem('img/menu-20.jpg', 'Pani Puri', '₹40')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const renderMenuItem = (imgSrc, itemName, itemPrice) => (
    <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.1s">
        <div className="menu-item d-flex align-items-center">
            <img className="flex-shrink-0 img-fluid rounded-circle" src={imgSrc} alt={itemName} />
            <div className="w-100 d-flex flex-column text-start ps-4">
                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                    <h4>{itemName}</h4>
                    <h4 className="text-primary">{itemPrice}</h4>
                </div>
                <p className="mb-0">Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.</p>
            </div>
        </div>
    </div>
);

export default Menu;