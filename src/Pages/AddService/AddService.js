import React, { useRef } from 'react';
import './AddService.css'

const AddService = () => {
    const imgRef = useRef()
    const nameRef = useRef();
    const discriptionRef = useRef();

    const handleAddUser = e => {
        const img = imgRef.current.value;
        const name = nameRef.current.value;
        const discription = discriptionRef.current.value;

        const newService = { name, discription, img };

        fetch('https://stark-oasis-22274.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the Service.')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div className='addService'>
            <h2>Please Add an User</h2>
            <form className='form-area' onSubmit={handleAddUser}>
                <input type="text" ref={imgRef} placeholder='Image URL'/>
                <br/>
                <input type="text" placeholder='Service Name' ref={nameRef} />
                <br/>
                <input type="text" placeholder='Service Details' name="" id="" ref={discriptionRef} />
                <br/>
                <input className='btn btn-warning' type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;