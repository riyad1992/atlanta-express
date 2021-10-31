import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAute from '../../hooks/useAute';
import './MyBooking.css'

const MyBooking = () => {
    const [bookings, setBookings] = useState([])
    const {user} = useAute()
    const email = user?.email

    useEffect(() => {
        fetch(`https://stark-oasis-22274.herokuapp.com/myBooking/${email}`)
        .then(res => res.json())
        .then(data => setBookings(data))
    },[email])
    return (
        <div className='myBooking py-5'>
            <h1 className='my-5 py-5'>My Bookings</h1>
            {
                bookings.map(booking => <h5>Name: {booking?.personName} and Travel Route:  {booking?.name}<Link to={`/updatePending/${booking._id}`}> <button className='px-1'>{booking?.status}</button></Link></h5>)
            }
        </div>
    );
};

export default MyBooking;