import React, { useEffect, useState } from 'react';
import '../../../public/lib/animate/animate.css';
import '../../../public/lib/lightbox/css/lightbox.min.css';
import '../../../public/lib/owlcarousel/owl.carousel.min.css';
import '../../../public/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Navbar1 from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const FoodMenus = () => {

    const [FoodMenus, setFoodMenus] = useState([]);

    const [FoodName, setFoodName] = useState('');
    const [FoodImage, setFoodImage] = useState('');
    const [Price, setPrice] = useState('');

    const [selectedFood, setSelectedFood] = useState(null); // For storing selected ride data\
    const [show, setShow] = useState(false);

    const Submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('FoodName', FoodName);
        formData.append('Price', Price);
        formData.append('FoodImage', FoodImage);

        axios.post('http://localhost:4500/AddFoodMenu', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(result => {
                console.log(result);
                // Reload the rides after submission
                axios.get('http://localhost:4500/ShowFoodMenu')
                    .then(result => setFoodMenus(result.data))
                    .catch(err => console.log(err));
                
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        axios.get('http://localhost:4500/ShowFoodMenu')
            .then(result => setFoodMenus(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = (foodmenu) => {
        setSelectedFood(foodmenu);
        setFoodName(foodmenu.FoodName);
        setFoodImage(foodmenu.FoodImage);
        setPrice(foodmenu.Price);
        setShow(true);
    };


    const handleEditSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('FoodName', FoodName);
        formData.append('Price', Price);
        
        axios.put(`http://localhost:4500/EditFoodMenu/${selectedFood._id}`, formData)
            .then(result => {
                console.log(result);
                handleClose();
                // Reload the rides after editing
                axios.get('http://localhost:4500/ShowFoodMenu')
                    .then(result => setFoodMenus(result.data))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    };

    const handleDelete = (foodId) => {
        try {
            axios.delete(`http://localhost:4500/FoodMenuDelete/${foodId}`);
            setFoodMenus(prevFoodMenus => prevFoodMenus.filter(foodmenu => foodmenu._id !== foodId));

        } catch (error) {
            console.error('Error deleting food:', error);
        }

    }


    return (
        <>
            <div className="row">
                <Navbar1 />
                <div className="col-2">

                    <Sidebar />
                </div>
                <div className="col-10">
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-12">
                                <div className="bg-dark text-light p-4 rounded" style={{ backdropFilter: 'blur(10px)', opacity: 0.85 }}>
                                    <h3 className="mb-4">Manage Food</h3>
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Food Image</th>
                                                <th>Food Name</th>
                                                <th>Price</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {FoodMenus.map((foodmenu, index) => (
                                                <tr key={foodmenu._id}>
                                                    <td>{index + 1}</td>
                                                    <td><img src={`http://localhost:4500/${foodmenu.FoodImage}`} alt={foodmenu.FoodName} style={{ width: '100px', height: '100px' }} /></td>
                                                    <td>{foodmenu.FoodName}</td>
                                                    <td>{foodmenu.Price}</td>
                                                    <td>
                                                        <Button variant="success" onClick={() => handleShow(foodmenu)}>
                                                            Edit
                                                        </Button>
                                                    </td>
                                                    <td>
                                                        <Button
                                                            onClick={() => handleDelete(foodmenu._id)}
                                                            className='btn btn-danger'>
                                                            Delete
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                        <div className="row g-0 mt-5">
                            <div className="col-12">
                                <div className="border-bottom border-top border-primary bg-light py-5 px-4">
                                    <div className="text-center">
                                        <h1 className="display-5 mb-5">Add New Food</h1>
                                    </div>
                                    <form onSubmit={Submit} encType="multipart/form-data">
                                        <div className="row g-4 form">
                                            <div className="col-lg-6 col-md-6">
                                                <label>Food Image</label>
                                                <input type="file" className="form-control border-primary p-2" accept='image/*' name="FoodImage" onChange={(e) => setFoodImage(e.target.files[0])} />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <label>Food Name</label>
                                                <input type="text" className="form-control border-primary p-2" placeholder="Roller" onChange={(e) => setFoodName(e.target.value)} />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <label>Food Price</label>
                                                <input type="text" className="form-control border-primary p-2" placeholder="Roller" onChange={(e) => setPrice(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="m-4 col-lg-6 col-md-6">
                                            <button className="btn btn-primary p-2 w-100">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Edit Modal */}
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Food</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={handleEditSubmit} encType="multipart/form-data">
                                <div className="row g-4 form">
                                    <div className="col-lg-6 col-md-6">
                                        <label>Food Image:</label>
                                        <img src="../../../public/image/hero.webp" className="img-fluid h-100 w-100 rounded-end" style={{ objectFit: 'cover', opacity: 0.7 }} alt="" />
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <label>Food Name</label>
                                        <input type="text" className="form-control border-primary p-2" value={FoodName} onChange={(e) => setFoodName(e.target.value)} />
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <label>Food Price</label>
                                        <input type="text" className="form-control border-primary p-2" value={Price} onChange={(e) => setPrice(e.target.value)} />
                                    </div>
                                </div>
                                <div className="justify-content-center m-4 col-lg-6 col-md-6">
                                    <button className="btn btn-primary p-2 w-100" type="submit">Save Changes</button>
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </>
    )
}

export default FoodMenus
