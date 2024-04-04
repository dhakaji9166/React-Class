import React, { useState } from 'react';

function ControlledComponents() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", number: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div className='p-5'>
            <form onSubmit={handleSubmit}>

                <input onChange={(event) => setFormData({ ...formData, name: event.target.value })} type="text" name="name" placeholder='Name' /><br />

                {/* <input onChange={handleChange} type="text" name="name" placeholder='Name' /><br /> */}
                <input onChange={handleChange} type="email" name="email" placeholder='Email' /><br />
                <input onChange={handleChange} type="password" name="password" placeholder='Password' /><br />
                <input onChange={handleChange} type="number" name="number" placeholder='Contact Number' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ControlledComponents;
