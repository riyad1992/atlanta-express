import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Tour = ({tour}) => {
    const {img, name, details} = tour
    return (
        <Col>
            <Card className='service border border-0 text-center box shadow  bg-white rounded'>
                <Card.Img variant="top" src={img} style={{height:'200px'}} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{details.slice(0,160)}</Card.Text>
                    <button>Book Now</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Tour;