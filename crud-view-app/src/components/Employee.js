import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

const Employee = () => {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployeeById(id).then(() => {
      if (employees) {
        setEmployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id);
        });
      }
    });
  };

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

  return (
    <>
      <div className="container mx-auto my-12 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            Employee List
          </h1>
          <button
            onClick={() => navigate("/addEmploee")} // Corrected spelling
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow-md transition duration-300"
          >
            Add Employee
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-gray-600 font-semibold uppercase tracking-wider border-b border-gray-200">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-gray-600 font-semibold uppercase tracking-wider border-b border-gray-200">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-gray-600 font-semibold uppercase tracking-wider border-b border-gray-200">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-gray-600 font-semibold uppercase tracking-wider border-b border-gray-200">
                  Edit
                </th>
                <th className="px-6 py-3 text-left text-gray-600 font-semibold uppercase tracking-wider border-b border-gray-200">
                  Delete
                </th>
              </tr>
            </thead>
            {!loading && (
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-800 whitespace-nowrap border-b border-gray-200">
                      {employee.name}
                    </td>
                    <td className="px-6 py-4 text-gray-800 whitespace-nowrap border-b border-gray-200">
                      {employee.description}
                    </td>
                    <td className="px-6 py-4 text-gray-800 whitespace-nowrap border-b border-gray-200">
                      {employee.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                      <button
                        onClick={(e) => editEmployee(e, employee.id)}
                        className="text-blue-500 hover:text-blue-700 font-medium"
                      >
                        Edit
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                      <button
                        onClick={(e) => deleteEmployee(e, employee.id)}
                        className="text-red-500 hover:text-red-700 font-medium"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default Employee;
