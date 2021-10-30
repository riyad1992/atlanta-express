import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAute from '../../hooks/useAute';


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
        <div>
            <h1>This is Place order</h1>
            <p>Travel Route:{service.name}</p>
            <p>{service.discription}</p>
            <button
                  onClick={() => handleAddToBooking(service)}
                  className="btn btn-warning m-2"
                >
                  Confrime Booking
                </button>
        </div>
    );
};

export default PlaceOrder;