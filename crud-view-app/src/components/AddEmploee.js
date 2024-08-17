import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const AddEmployee = () => {
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        id: "",
        name: "",
        description: "",
        email: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value });
    };

    const handleClear = (e) => {
        e.preventDefault();
        setEmployee({
            id: "",
            name: "",
            description: "",
            email: "",
        });
    };

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
            .then((response) => {
                console.log(response);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='max-w-xl mx-auto bg-gray-800 my-20 rounded-lg shadow-lg py-8 px-10'>
            <div className='text-4xl font-bold text-center text-white mb-8'>
                <p>Add Employee</p>
            </div>
            <form className='space-y-6'>
                <input
                    onChange={handleChange}
                    type='text'
                    name='name'
                    value={employee.name}
                    className='w-full py-2 px-4 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500'
                    placeholder='Name'
                />
                <input
                    onChange={handleChange}
                    type='text'
                    name='description'
                    value={employee.description}
                    className='w-full py-2 px-4 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500'
                    placeholder='Description'
                />
                <input
                    onChange={handleChange}
                    type='email'
                    name='email'
                    value={employee.email}
                    className='w-full py-2 px-4 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500'
                    placeholder='Email'
                />
                <div className='flex justify-between space-x-4'>
                    <button
                        onClick={saveEmployee}
                        className='w-full bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded transition duration-300'
                    >
                        Save
                    </button>
                    <button
                        onClick={handleClear}
                        className='w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded transition duration-300'
                    >
                        Clear
                    </button>
                    <button
                        onClick={() => navigate("/")}
                        className='w-full bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded transition duration-300'
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddEmployee;
