import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({ name: '', position: '', department: '', salary: '' });

    useEffect(() => {
        axios.get(`http://localhost:5000/employees/${id}`)
            .then(response => setEmployee(response.data))
            .catch(error => console.error(error));
    }, [id]);

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/employees/${id}`, employee)
            .then(() => navigate('/'))
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={employee.name} onChange={handleChange} required />
            <input type="text" name="position" value={employee.position} onChange={handleChange} required />
            <input type="text" name="department" value={employee.department} onChange={handleChange} required />
            <input type="number" name="salary" value={employee.salary} onChange={handleChange} required />
            <button type="submit">Update Employee</button>
        </form>
    );
};

export default EditEmployee;
