import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Tour from '../Tour/Tour';

const Tours = () => {
    const [tours, setTours] = useState([])

    useEffect(() => {
        fetch('https://stark-oasis-22274.herokuapp.com/tours')
        .then(res => res.json())
        .then(data => setTours(data))
    } ,[])
    return (
        <div className='my-5' id='tour'>
            <h1 className='mb-0'>Our Tours</h1>
            <hr className='w-25 mx-auto bg-danger mb-4 mt-0'/>
            <div>
                <div className='container'>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            tours.map(tour => <Tour key ={tour.name} tour={tour}></Tour>)
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Tours;