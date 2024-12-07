import React from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase.init";

const AdventureCard = ({ id, title, image, ecoFriendlyFeatures }) => {
  const navigate = useNavigate();

  const handleExploreNow = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Navigate to the Adventure Detail page
        navigate(`/adventure/${id}`);
      } else {
        // Redirect to Login page if not logged in
        navigate("/login");
      }
    });
  };

  return (
    <div className="card bg-base-100 shadow-lg">
      <figure>
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-600">
          Eco-Friendly Features:{" "}
          {Array.isArray(ecoFriendlyFeatures)
            ? ecoFriendlyFeatures.join(", ")
            : "Not Available"}
        </p>
        <div className="card-actions justify-end mt-4">
          <button
            onClick={handleExploreNow}
            className="btn btn-primary hover:bg-green-600"
          >
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdventureCard;
