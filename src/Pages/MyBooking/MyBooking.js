import React, { useEffect, useState } from 'react';
import useAute from '../../hooks/useAute';

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
        <div>
            <h1>My Bookings</h1>
            {
                bookings.map(booking => <h5>{booking?.name}</h5>)
            }
        </div>
    );
};

export default MyBooking;