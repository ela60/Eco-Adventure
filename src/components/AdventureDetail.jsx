import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AdventureDetail = () => {
  const { id } = useParams();
  const [adventure, setAdventure] = useState(null);
  const [modalOpen, setModalOpen] = useState(false); 

  useEffect(() => {
    const getAdventureData = async () => {
      const response = await fetch("/data.json");
      const data = await response.json();
      const foundAdventure = data.find((adventure) => adventure.id === id);
      setAdventure(foundAdventure);
    };

    getAdventureData();
  }, [id]);

  const handleTalkWithExpert = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 10 && currentHour < 20) {
      
      window.open("https://meet.google.com/", "_blank");
    } else {
      
      setModalOpen(true);
    }
  };

  if (!adventure) {
    return null;
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={adventure.image}
          className="max-w-sm rounded-lg shadow-2xl"
          alt={adventure.title}
        />
        <div>
          <h1 className="text-5xl font-bold">{adventure.title}</h1>
          <p className="py-6">{adventure.shortDescription}</p>
          <p>
            <strong>Location:</strong> {adventure.location}
          </p>
          <p>
            <strong>Duration:</strong> {adventure.duration}
          </p>
          <p>
            <strong>Cost:</strong> ${adventure.adventureCost}
          </p>
          <p>
            <strong>Adventure Level:</strong> {adventure.adventureLevel}
          </p>

          <h3 className="text-xl font-semibold mt-4">Eco-Friendly Features</h3>
          <ul>
            {adventure.ecoFriendlyFeatures.map((feature, index) => (
              <li key={index} className="list-disc ml-4">
                {feature}
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mt-4">Included Items</h3>
          <ul>
            {adventure.includedItems.map((item, index) => (
              <li key={index} className="list-disc ml-4">
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold mt-4">Special Instructions</h3>
          <ul>
            {adventure.specialInstructions.map((instruction, index) => (
              <li key={index} className="list-disc ml-4">
                {instruction}
              </li>
            ))}
          </ul>

          <button
            onClick={handleTalkWithExpert}
            className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Talk with Expert
          </button>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 relative">
            <h2 className="text-xl font-semibold mb-4">Consultation Time</h2>
            <p>
              Our experts are available between <strong>10:00 AM</strong> and{" "}
              <strong>8:00 PM</strong>.
            </p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdventureDetail;
