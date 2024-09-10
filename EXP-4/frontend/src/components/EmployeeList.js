import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/employees')
            .then(response => setEmployees(response.data))
            .catch(error => console.error(error));
    }, []);

    const deleteEmployee = (id) => {
        axios.delete(`http://localhost:5000/employees/${id}`)
            .then(() => setEmployees(employees.filter(emp => emp._id !== id)))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map(employee => (
                    <li key={employee._id}>
                        {employee.name} - {employee.position} - {employee.department} - ${employee.salary}
                        <Link to={`/edit/${employee._id}`}>Edit</Link>
                        <button onClick={() => deleteEmployee(employee._id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <Link to="/add">Add Employee</Link>
        </div>
    );
};

export default EmployeeList;
