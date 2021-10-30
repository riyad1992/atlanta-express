import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";

const UpdateBooking = () => {

    const { id } = useParams();
  const [isUpdate, setIsUpdated] = useState(null);
  const [booking, setBooking] = useState({});
  useEffect(() => {
    fetch(`https://stark-oasis-22274.herokuapp.com/allBooking/${id}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [id, isUpdate]);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:5000/update/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          setIsUpdated(true);
        } else {
          setIsUpdated(false);
        }
      });
    console.log(data);
  };

    return (
        <div>
      <h1>Updated Name: {booking.name}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="p-2 m-2"
          defaultValue={booking?.name}
          {...register("name")}
          required
        />
        <input
          className="p-2 m-2"
          type="text"
          defaultValue={booking?.discription}
          {...register("email", { required: true })}
          required
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input className="btn btn-success w-25" type="submit" value="Update" />
      </form>
    </div>
    );
};

export default UpdateBooking;