// Profile.js
import React from 'react';

const Profile = ({ user }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            {/* Add other profile information here */}
        </div>
    );
};

export default Profile;
