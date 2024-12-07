// src/components/UpdateProfile.jsx
import React, { useState, useContext } from "react";


import { useNavigate } from "react-router-dom";

import { updateProfile } from "firebase/auth";
import { AuthContext } from "./Provider/Authprovider";


const UpdateProfile = () => {
    const { user } = useContext(AuthContext); 
    const navigate = useNavigate();
  
    const [name, setName] = useState(user?.displayName || ""); 
    const [photoURL, setPhotoURL] = useState(user?.photoURL || ""); 
  
    const handleUpdate = async (e) => {
      e.preventDefault();
  
      if (!name || !photoURL) {
        alert("Both fields are required!");
        return;
      }
  
      try {
        // Update the user's profile
        await updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        });
  
        alert("Profile updated successfully!");
        navigate("/my-profile"); // Navigate back to the profile page
      } catch (error) {
        console.error("Error updating profile:", error);
        alert("Failed to update profile. Please try again.");
      }
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded px-3 py-2"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="photo" className="block font-medium mb-1">
                Photo URL
              </label>
              <input
                type="text"
                id="photo"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="w-full border rounded px-3 py-2"
                placeholder="Enter photo URL"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Update Information
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default UpdateProfile;