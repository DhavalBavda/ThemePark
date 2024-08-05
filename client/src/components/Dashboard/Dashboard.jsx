import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Navbar1 from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';

const Dashboard = () => {
    const [totalPackages,settotalPackages] = useState()
    const [totalRides,settotalRides] = useState()
    const [totalFoodItems,settotalFoodItems] = useState()
    const [totalEvents,settotalEvents] = useState()
    const [totalRideFeedback,settotalRideFeedback] = useState()
    const [totalParkFeedback,settotalParkFeedback] = useState()
    

    useEffect(()=>{
        axios.get('https://waterpark.onrender.com/ShowRide')
        .then(result=>settotalRides(result.data.length))
        .catch(err=>console.log(err))

        axios.get('https://waterpark.onrender.com/ShowPackage')
        .then(result=>settotalPackages(result.data.length))
        .catch(err=>console.log(err))

        axios.get('https://waterpark.onrender.com/ShowFoodMenu')
        .then(result=>settotalFoodItems(result.data.length))
        .catch(err=>console.log(err))

        axios.get('https://waterpark.onrender.com/ShowEvents')
        .then(result=>settotalEvents(result.data.length))
        .catch(err=>console.log(err))

        axios.get('https://waterpark.onrender.com/ShowFeedBack')
        .then(result=>settotalParkFeedback(result.data.length))
        .catch(err=>console.log(err))

        axios.get('https://waterpark.onrender.com/ShowRideFeedBack')
        .then(result=>settotalRideFeedback(result.data.length))
        .catch(err=>console.log(err))
    },[]);


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
                                        <h1>{totalPackages}</h1>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='text-bg-info text-white m-3' style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Total Rides</Card.Title>
                                    <Card.Text>
                                        <h1>{totalRides}</h1>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='text-bg-info text-white m-3' style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Total Events</Card.Title>
                                    <Card.Text>
                                        <h1>{totalEvents}</h1>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='text-bg-info text-white m-3' style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Total Food Item</Card.Title>
                                    <Card.Text>
                                        <h1>{totalFoodItems}</h1>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='text-bg-info text-white m-3' style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Total Ride Feedback</Card.Title>
                                    <Card.Text>
                                        <h1>{totalRideFeedback}</h1>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='text-bg-info text-white m-3' style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Total Park Feedback</Card.Title>
                                    <Card.Text>
                                        <h1>{totalParkFeedback}</h1>
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