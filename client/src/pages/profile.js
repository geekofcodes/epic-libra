// Profile.js
import React from 'react';

const Profile = ({ user }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <div className="border-b border-gray-200 pb-4 mb-4">
                <p className="text-lg text-gray-800"><strong>Name:</strong> {user.name}</p>
                <p className="text-lg text-gray-800"><strong>Email:</strong> {user.email}</p>
                <p className="text-lg text-gray-800"><strong>Role:</strong> {user.role}</p>
                {/* Add other profile information here */}
            </div>
            <div className="flex justify-between">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Edit Profile</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Delete Account</button>
            </div>
            <div className="mt-8">
                <h3 className="text-lg font-bold mb-2">Order History</h3>
                <ul>
                    {/* Add order history items here */}
                    <li className="border-b border-gray-200 py-2">
                        <span className="text-gray-800">Order #1234</span>
                        <span className="text-gray-500 ml-4">Total: $50.00</span>
                    </li>
                    <li className="border-b border-gray-200 py-2">
                        <span className="text-gray-800">Order #5678</span>
                        <span className="text-gray-500 ml-4">Total: $75.00</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;
