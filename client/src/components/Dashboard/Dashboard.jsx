import React from 'react'
import Card from 'react-bootstrap/Card';
import Navbar1 from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
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
                            <div className="col-12"></div>
                            <Card className='text-bg-info text-white m-3' style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Total Package</Card.Title>
                                    <Card.Text>
                                        <h1>3</h1>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='text-bg-info text-white m-3' style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Total Rides</Card.Title>
                                    <Card.Text>
                                        <h1>3</h1>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='text-bg-info text-white m-3' style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Total Food Item</Card.Title>
                                    <Card.Text>
                                        <h1>3</h1>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Dashboard