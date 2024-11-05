import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const handleClick = (page) => {
    console.log(`Navigating to ${page}`); // Example action on click
  };

  return (
    <nav className="bg-gray-800  p-4">
      <div className="container  flex justify-between items-center">
        <div className="text-white ml-10 text-2xl font-bold">Fungo</div>
        
        <div className="mr-10">
          <button className="bg-blue-500 px-10 py-auto text-white p-2 rounded hover:bg-blue-600">Login</button>
        </div>  
      </div>
    </nav>
  );
};

export default Navbar;
