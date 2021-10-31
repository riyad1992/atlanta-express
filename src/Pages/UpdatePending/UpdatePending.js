import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdatePending = () => {

const [service, setService] = useState({});
const { id } = useParams();

useEffect(() => {
    const url = `https://stark-oasis-22274.herokuapp.com/allBooking/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => setService(data));
}, [id]);

// Update service
const handleNameChange = e => {
    const updatedName = e.target.value;
    const updatedService = { name: updatedName, status: service.status };
    setService(updatedService);
}

const handleStatusChange = e => {
    const updatedStatus = e.target.value;
    const updatedUser = { name: service.name, status: updatedStatus }
    setService(updatedUser);
}
const handleUpdateService = e => {
    const url = `https://stark-oasis-22274.herokuapp.com/update/${id}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(service)
    })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                alert('Update Successful');
                setService({});
                e.target.reset();
            }
        })
    e.preventDefault();
}

    return (
        <div className='myBooking py-5'>
            <h2 className='my-5 py-5'>Update Status: {service.status}</h2>
            <form onSubmit={handleUpdateService}>
                <input type="text" onChange={handleNameChange} value={service.name || ''} />
                <input type="text" onChange={handleStatusChange} value={service.status || ''} />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdatePending;