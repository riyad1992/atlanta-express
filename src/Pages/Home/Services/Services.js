import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://stark-oasis-22274.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='my-5' id='services'>
            <h1 className='mb-0'>Our Services</h1>
            <hr className='w-25 mx-auto bg-danger mb-4 mt-0'/>
            <div className='container'>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;