import React, { useState, useEffect } from "react";
import AdventureCard from "./AdventureCard";

const AdventureSection = () => {
    const [adventures, setAdventures] = useState([]);
    console.log(adventures);

  // Load JSON data
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setAdventures(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Adventure Experiences
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {adventures.map((adventure) => (
            <AdventureCard
              key={adventure.id }
             id={adventure.id }
              title={adventure.title}
              image={adventure.image}
              ecoFriendlyFeatures={adventure.ecoFriendlyFeatures}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdventureSection;
