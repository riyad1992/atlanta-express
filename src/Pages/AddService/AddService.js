import React, { useRef } from 'react';

const AddService = () => {
    const nameRef = useRef();
    const discriptionRef = useRef();

    const handleAddUser = e => {
        const name = nameRef.current.value;
        const discription = discriptionRef.current.value;

        const newService = { name, discription };

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
        <div>
            <h2>Please Add an User</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" ref={nameRef} />
                <input type="text" name="" id="" ref={discriptionRef} />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddService;