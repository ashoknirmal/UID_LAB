import React, { useState } from 'react';
import axios from 'axios';

const AddEmployee = () => {
    const [employee, setEmployee] = useState({ name: '', position: '', department: '', salary: '' });

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/employees', employee)
            .then(() => window.location.reload())
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="text" name="position" placeholder="Position" onChange={handleChange} required />
            <input type="text" name="department" placeholder="Department" onChange={handleChange} required />
            <input type="number" name="salary" placeholder="Salary" onChange={handleChange} required />
            <button type="submit">Add Employee</button>
        </form>
    );
};

export default AddEmployee;
