// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';


const Navbar = ({ isLoggedIn, onLogout, userId }) => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                <Link to="/" className="text-white text-lg font-bold">
                    Epic Libra
                </Link>
                </div>

                {/* Search Bar */}
                <div className="flex items-center justify-center w-1/2 md:w-1/3 ml-4 max-w-xs">
                <div className="relative w-full">
                    <input
                    type="text"
                    placeholder="Search..."
                    className="py-1 px-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                    <div className="absolute top-0 right-0 h-full flex items-center pr-2 text-gray-500">
                    <FaSearch />
                    </div>
                </div>
                </div>

                <div className="hidden md:flex space-x-4">
                <Link to="/" className="text-white">
                    Home
                </Link>
                <Link to="/account" className="text-white">
                    Account
                </Link>
                <Link to="/cart" className="text-white text-lg font-bold">
                    <FaShoppingCart style={{ fontSize: '24px' }} />
                </Link>
                <Link to="/auth/login" className="text-white">
                    Login
                </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
