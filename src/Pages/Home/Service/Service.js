import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name, img, discription, _id} = service
    return (
        <Col>
            <Card className='service border border-0 text-center box shadow bg-white rounded'>
                <Card.Img variant="top" src={img} style={{height:'200px'}} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{discription.slice(0,160)}</Card.Text>
                <Link to= {`/placeorder/${_id}`}><button>Book Now</button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;