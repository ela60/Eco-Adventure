import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/Provider/Authprovider';

const Profile = () => {
    const { user } = useContext(AuthContext); 
    const navigate = useNavigate();

    const handleUpdateProfile = () => {
        navigate('/update-profile'); 
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h1 className="text-2xl font-bold text-center mb-4">
                Welcome, {user?.name || 'User'}!
            </h1>
            <div className="flex flex-col items-center">
                <img
                    src={user?.profilePhoto || '/default-avatar.png'} // Fallback to a default image
                    alt="User Profile"
                    className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
                />
                <div className="text-lg mb-4">
                    <p><strong>Name:</strong> {user?.name || 'Not Available'}</p>
                    <p><strong>Email:</strong> {user?.email || 'Not Available'}</p>
                </div>
                <button
                    onClick={handleUpdateProfile}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                    Update Profile
                </button>
            </div>
        </div>
    );
};

export default Profile;
