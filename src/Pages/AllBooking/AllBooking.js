import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllBooking = () => {
    
    const [allBookings, setAllBookings] = useState([])

    useEffect(() => {
        fetch('https://stark-oasis-22274.herokuapp.com/allBooking')
        .then(res => res.json())
        .then(data => setAllBookings(data))
    },[])

    // DELETE AN USER
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://stark-oasis-22274.herokuapp.com/allBooking/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = allBookings.filter(user => user._id !== id);
                        setAllBookings(remainingUsers);
                    }
                });
        }
    }



    return (
        <div className='myBooking py-5'>
            <h2 className='my-5 py-5'>Here is All Bookings</h2>
            <ul>
                {
                    allBookings.map(booking => <li className='mb-2' key={booking._id}>Travel Route: {booking.name} <Link to={`/update/${booking._id}`}><button className='me-2'>update</button></Link> <button onClick={() => handleDeleteUser(booking._id)}>Delete</button></li>)
                }
            </ul>
        </div>
    );
};

export default AllBooking;