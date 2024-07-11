import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../style.css'
import '../../../public/css/bootstrap.min.css'
import '../../../public/lib/animate/animate.css'
import '../../../public/lib/animate/animate.min.css'
import '../../../public/lib/lightbox/css/lightbox.min.css'
import '../../../public/lib/owlcarousel/owl.carousel.min.css'
import '/public/image/Menu_image/Burger.jpeg'
import '/public/image/Menu_image/Taco.jpeg'
import '/public/image/Menu_image/Tikki.jpeg'
import '/public/image/Menu_image/Pizza.jpeg'
import '/public/image/Menu_image/Paneer.jpeg'
import '/public/image/Menu_image/Biryani.jpeg'
import '/public/image/Menu_image/Gujarati.jpeg'
import '/public/image/Menu_image/Chole.jpeg'
import '/public/image/Menu_image/Chai.jpeg'
import '/public/image/Menu_image/Lassi.jpeg'
import '/public/image/Menu_image/Cold_drink.jpeg'
import '/public/image/Menu_image/Limbupani.jpeg'
import '/public/image/Menu_image/Combo.jpeg'
import '/public/image/Menu_image/Platter.jpeg'
import '/public/image/Menu_image/Punjabi.jpeg'
import '/public/image/Menu_image/Weekend.jpeg'
import '/public/image/Menu_image/Dosa.jpeg'
import '/public/image/Menu_image/Idli.jpeg'
import '/public/image/Menu_image/Vadapav.jpeg'
import '/public/image/Menu_image/Panipuri.jpeg'




const Menu = () => {

    const [FoodData, setFoodData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4500/ShowFoodMenu')
            .then(result => setFoodData(result.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // const [selectedRide, setSelectedRide] = useState(null);

    return (
        <div className="container-fluid menu py-6">
            <div className="container">
                <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
                    <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">Our Menu</small>
                    <h1 className="display-5 mb-5">Most Popular Food in the Park</h1>
                </div>
                <div className="tab-class text-center">
                    <div className="tab-content">
                        <div id="tab-6" className="tab-pane fade show p-0 active">
                            <div className="row g-4">

                                {FoodData.map((foodmenu, index) => (
                                    <div className="col-lg-6 wow bounceInUp" data-wow-delay="0.1s" key={index}>
                                        <div className="menu-item d-flex align-items-center">
                                            {foodmenu.FoodImage && <img className="flex-shrink-0 img-fluid rounded-circle" src={`http://localhost:4500/${foodmenu.FoodImage}`} alt={foodmenu.FoodName} />}
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <div className="d-flex justify-content-between border-bottom border-primary pb-2 mb-2">
                                                    <h4>{foodmenu.FoodName}</h4>
                                                    <h4 className="text-primary">{foodmenu.Price}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {renderMenuItem('/public/image/Menu_image/Burger.jpeg', 'Burger', '₹90')}
                                {renderMenuItem('/public/image/Menu_image/Taco.jpeg', 'Taco', '₹90')}
                                {renderMenuItem('/public/image/Menu_image/Tikki.jpeg', 'Sabudana Tikki', '₹90')}
                                {renderMenuItem('/public/image/Menu_image/Pizza.jpeg', 'Pizza', '₹90')}
                                {renderMenuItem('/public/image/Menu_image/Paneer.jpeg', 'Paneer Masala', '₹150')}
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
            </div>
        </div>
    </div>
);



export default Menu;