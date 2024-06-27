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

const Rides = () => {
    const [RideName, setRideName] = useState('');
    const [Packageid, setPackageid] = useState('');
    const [RideImage, setRideImage] = useState('');
    const [RideDescription, setRideDescription] = useState('');
    const [Price, setPrice] = useState('');
    const [Packages, setPackages] = useState([]);
    const [Ride, setRide] = useState([]);
    const [Para, setPara] = useState([]);
    const [Rating, setRating] = useState([]);

    const [selectedRide, setSelectedRide] = useState(null); // For storing selected ride data
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('RideName', RideName);
        formData.append('Packageid', Packageid);
        formData.append('RideImage', RideImage);
        formData.append('RideDescription', RideDescription);

        axios.post('http://localhost:4500/AddRide', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(result => {
                console.log(result);
                // Reload the rides after submission
                axios.get('http://localhost:4500/ShowRide')
                    .then(result => setRide(result.data))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        axios.get('http://localhost:4500/ShowRide')
            .then(result => setRide(result.data))
            .catch(err => console.log(err));

        axios.get('http://localhost:4500/ShowPackage')
            .then(result => setPackages(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = (ride) => {
        setSelectedRide(ride);
        setRideName(ride.RideName);
        setPackageid(ride.Packageid);
        setRideDescription(ride.RideDescription);
        setRideImage(ride.RideImage);
        setShow(true);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('RideName', RideName);
        formData.append('Packageid', Packageid);
        formData.append('RideDescription', RideDescription);
        formData.append('Price', Price);

        axios.put(`http://localhost:4500/EditRide/${selectedRide._id}`, formData)
            .then(result => {
                console.log(result);
                handleClose();
                // Reload the rides after editing
                axios.get('http://localhost:4500/ShowRide')
                    .then(result => setRide(result.data))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    };

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
                                    <h3 className="mb-4">Available Packages</h3>
                                    <Table striped bordered hover variant="dark">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Ride Image</th>
                                                <th>Ride Name</th>
                                                <th>Package Name</th>
                                                <th>Rating</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Ride.map((ride, index) => (
                                                <tr key={ride._id}>
                                                    <td>{index + 1}</td>
                                                    <td><img src={`http://localhost:4500/upload/${ride.RideImage}`} alt={ride.RideName} style={{ width: '100px', height: '100px' }} /></td>
                                                    <td>{ride.RideName}</td>
                                                    <td>{ride.Packageid.PackageName}</td>
                                                    <td>{ride.rating}</td>
                                                    <td>
                                                        <Button variant="success" onClick={() => handleShow(ride)}>
                                                            Edit
                                                        </Button>
                                                    </td>
                                                    <td>
                                                        <Link to={`/PackageDelete/${ride._id}`} className='btn btn-danger'>
                                                            Delete
                                                        </Link>
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
                                        <h1 className="display-5 mb-5">Add New Package</h1>
                                    </div>
                                    <form onSubmit={Submit} encType="multipart/form-data">
                                        <div className="row g-4 form">
                                            <div className="col-lg-4 col-md-6">
                                                <label>Package Name</label>
                                                <select className="form-select border-primary p-2" aria-label="Default select example" onChange={(e) => setPackageid(e.target.value)}>
                                                    <option value="">Select Package</option>
                                                    {Packages.map((pkg, index) => (
                                                        <option key={pkg._id} value={pkg._id}>{pkg.PackageName}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <label>Ride Image</label>
                                                <input type="file" className="form-control border-primary p-2" accept='image/*' name="RideImage" onChange={(e) => setRideImage(e.target.files[0])} />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <label>Ride Name</label>
                                                <input type="text" className="form-control border-primary p-2" placeholder="Roller" onChange={(e) => setRideName(e.target.value)} />
                                            </div>
                                            
                                            <div className="col-lg-6 col-md-6">
                                                <label>Ride Description</label>
                                                <input type="text" className="form-control border-primary p-2" placeholder="Lovely Ride" onChange={(e) => setRideDescription(e.target.value)} />
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
                            <Modal.Title>Edit Ride</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={handleEditSubmit} encType="multipart/form-data">
                                <div className="row g-4 form">
                                    <div className="col-lg-6 col-md-6">
                                        <label>Ride Image:</label>
                                        <img src="../../../public/image/hero.webp" className="img-fluid h-100 w-100 rounded-end" style={{ objectFit: 'cover', opacity: 0.7 }} alt="" />
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <label>Package Name</label>
                                        <select className="form-select border-primary p-2" aria-label="Default select example" value={Packageid} onChange={(e) => setPackageid(e.target.value)}>
                                            <option value=''>Select Package</option>
                                            {Packages.map((pkg, index) => (
                                                <option key={pkg._id} value={pkg._id}>{pkg.PackageName}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <label>Ride Name</label>
                                        <input type="text" className="form-control border-primary p-2" value={RideName} onChange={(e) => setRideName(e.target.value)} />
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <label>Ride Description</label>
                                        <input type="text" className="form-control border-primary p-2" value={RideDescription} onChange={(e) => setRideDescription(e.target.value)} />
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
    );
};

export default Rides;
