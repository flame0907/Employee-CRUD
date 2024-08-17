import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-gray-800 h-16 px-16 flex items-center shadow-lg">
      <h1 className="text-3xl font-bold text-pink-500">Employee Management</h1>
      <div className="ml-auto space-x-8">
        <a
          className="text-white hover:text-blue-400 transition duration-300 ease-in-out"
          href="/"
        >
          Home
        </a>
        <a
          className="text-white hover:text-blue-400 transition duration-300 ease-in-out"
          href="/AddEmployee.js"
        >
          Profile
        </a>
        <a
          className="text-white hover:text-blue-400 transition duration-300 ease-in-out"
          href="/logout"
        >
          Logout
        </a>
      </div>
    </div>
  );
};

export default Navbar;