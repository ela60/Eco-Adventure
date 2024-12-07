import React from "react";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="my-profile-container">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <p>Name: John Doe</p>
      <p>Email: john.doe@example.com</p>
      <button
        className="btn btn-primary mt-4"
        onClick={() => navigate("/update-profile")}
      >
        Update Profile
      </button>
    </div>
  );
};

export default MyProfile;
