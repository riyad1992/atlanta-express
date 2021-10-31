import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAute from '../../hooks/useAute';
import './PlaceOrder.css'


const PlaceOrder = () => {
    const {id} = useParams()
    const {user} = useAute();
    // const [isUpdate, setIsUpdated] = useState(null);
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`https://stark-oasis-22274.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);

  const handleAddToBooking = (service) => {
    const data = service;
    data.email = user?.email
    data.personName = user?.displayName
    fetch(`https://stark-oasis-22274.herokuapp.com/addBooking`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          alert("Added Successfully");
        } else {
          alert("Something is Wrong");
        }
      });
  };

    return (
        <div className='placeOrder'>
            <div className=''>
              <h2 className=' pt-5'>Your Travel Route : {service.name}</h2>
              <button onClick={() => handleAddToBooking(service)} className="btn btn-warning m-2 mt-5">Confirm Booking</button>
            </div>
        </div>
    );
};

export default PlaceOrder;