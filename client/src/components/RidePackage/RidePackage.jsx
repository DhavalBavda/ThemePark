import '../../App';
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
import Sidebar from '../Sidebar/Sidebar';
import Navbar1 from '../Navbar/Navbar';

const RidePackage = () => {
    const [PackageName, setPackageName] = useState('');
    const [Price, setPrice] = useState('');
    const [Packages, setPackages] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState(null);

    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        const RidePackageData = { PackageName, Price };

        axios.post('http://localhost:4500/AddPackage', RidePackageData)
            .then(result => {
                console.log(result);
                navigate('/Ticket', { state: RidePackageData });
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        axios.get('http://localhost:4500/ShowPackage')
            .then(result => {
                setPackages(result.data);
            })
            .catch(err => console.log(err));
    }, []);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (pkg) => {
        setSelectedPackage(pkg);
        setPackageName(pkg.PackageName);
        setPrice(pkg.Price);
        setShow(true);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const updatedPackage = { PackageName, Price };
        axios.put(`http://localhost:4500/EditPackage/${selectedPackage._id}`, updatedPackage)
            .then(result => {
                console.log(result);
                handleClose();
                setPackages(packages => packages.map(pkg => pkg._id === selectedPackage._id ? updatedPackage : pkg));
            })
            .catch(err => console.log(err));
    };

    return (
        <div >
        
            <div className="row">
            <Navbar1/>
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
                                                <th>Package Name</th>
                                                <th>Price</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Packages.map((pkg, index) => (
                                                <tr key={pkg._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{pkg.PackageName}</td>
                                                    <td>{pkg.Price}</td>
                                                    <td>
                                                        <Button variant="success" onClick={() => handleShow(pkg)}>
                                                            Edit
                                                        </Button>
                                                    </td>
                                                    <td>
                                                        <Link to={`/PackageDelete/${pkg._id}`} className='btn btn-danger'>
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
                                    <form onSubmit={Submit}>
                                        <div className="row g-4 form">
                                            <div className="col-lg-6 col-md-6">
                                                <label>Package Name</label>
                                                <input type="text" className="form-control border-primary p-2" placeholder="Gold" onChange={(e) => setPackageName(e.target.value)} />
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <label>Price</label>
                                                <input type="text" className="form-control border-primary p-2" placeholder="3000/-" onChange={(e) => setPrice(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="justify-content-center m-4">
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
                            <Modal.Title>Edit Package</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={handleEditSubmit}>
                                <div className="row g-4 form">
                                    <div className="col-lg-6 col-md-6">
                                        <label>Package Name</label>
                                        <input type="text" className="form-control border-primary p-2" value={PackageName} onChange={(e) => setPackageName(e.target.value)} />
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <label>Price</label>
                                        <input type="text" className="form-control border-primary p-2" value={Price} onChange={(e) => setPrice(e.target.value)} />
                                    </div>
                                </div>
                                <div className="m-4 col-lg-6 col-md-6">
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
        </div>
    );
};

export default RidePackage;
