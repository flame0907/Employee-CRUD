import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const UpdateEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        id: id,
        name: "",
        description: "",
        email: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await EmployeeService.getEmployeeById(employee.id);
                setEmployee(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [employee.id]);

    const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(employee, id)
            .then((response) => {
                console.log(response);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="max-w-xl mx-auto bg-gray-900 my-20 rounded-lg shadow-lg py-8 px-10">
            <div className="text-4xl font-bold text-center text-white mb-8">
                <p>Update Employee</p>
            </div>
            <form className="space-y-6">
                <input
                    onChange={handleChange}
                    type="text"
                    name="name"
                    value={employee.name}
                    className="w-full py-3 px-4 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Name"
                />
                <input
                    onChange={handleChange}
                    type="text"
                    name="description"
                    value={employee.description}
                    className="w-full py-3 px-4 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Description"
                />
                <input
                    onChange={handleChange}
                    type="email"
                    name="email"
                    value={employee.email}
                    className="w-full py-3 px-4 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Email"
                />
                <div className="flex justify-center space-x-4 mt-6">
                    <button
                        onClick={updateEmployee}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-8 rounded transition duration-300"
                    >
                        Update
                    </button>
                    <button
                        onClick={() => navigate("/")}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-8 rounded transition duration-300"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateEmployee;
