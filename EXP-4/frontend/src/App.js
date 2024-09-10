import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import './App.css';  // Import the CSS file here

const App = () => {
    return (
        <Router>
            <div className="container">
                <h2>Employee Management System</h2>
                <Routes>
                    <Route path="/" element={<EmployeeList />} />
                    <Route path="/add" element={<AddEmployee />} />
                    <Route path="/edit/:id" element={<EditEmployee />} />
                </Routes>
            </div>
            <div className="footer">
                <p>&copy; 2024 Employee Management System</p>
            </div>
        </Router>
    );
};

export default App;
