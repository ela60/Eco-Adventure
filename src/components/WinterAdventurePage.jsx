import React from 'react';

const WinterAdventurePage = () => {
  return (
    <div className="winter-theme">
      {/* Hero Section */}
      

      {/* Featured Local Adventures */}
      <section className="featured-adventures py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Featured Winter Adventures</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Snowshoeing Through Winter Forests', description: 'Guided eco-tour to explore winter landscapes.', image: 'https://i.ibb.co.com/spTzYSx/Snowshoeing.jpg' },
              { title: 'Local Ski Resort referred to as a mountain resort.', description: 'Enjoy skiing while supporting eco-friendly resorts.', image: 'https://i.ibb.co.com/7tM601s/Snowmass-Colorado-Getty-Images-1135607220.webp' },
              { title: 'Ice Fishing in Tranquil Lakes', description: 'A serene winter adventure led by local guides.', image: 'https://i.ibb.co.com/S63kPjJ/images-1.jpg' }
            ].map((adventure, index) => (
              <div key={index} className="card bg-gray-100 p-4 rounded-lg">
                <img src={adventure.image} alt={adventure.title} className="w-full h-48 object-cover rounded-md" />
                <h3 className="text-2xl font-semibold mt-4">{adventure.title}</h3>
                <p className="text-gray-600 mt-2">{adventure.description}</p>
                <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Local Businesses Section */}
      <section className="support-local py-16 bg-green-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Support Local Businesses this Winter</h2>
          <p className="text-xl mb-4">Explore sustainable, eco-friendly products and support your local artisans and markets this season.</p>
          <button className="px-6 py-3 bg-green-600 text-white rounded-full">Shop Local</button>
        </div>
      </section>

      {/* Winter Eco-Friendly Tips Section */}
      <section className="eco-tips py-16 bg-blue-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Winter Eco-Friendly Travel Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { tip: 'Pack warm, sustainable clothing for winter trips', image: 'https://i.ibb.co.com/n707V8K/images-2.jpg' },
              { tip: 'Choose eco-friendly winter tours and accommodations', image: 'https://i.ibb.co.com/GFZhBs2/images-3.jpg' },
              { tip: 'Support local artisans at winter markets', image: 'https://i.ibb.co.com/C2CW26J/images-4.jpg' }
            ].map((tip, index) => (
              <div key={index} className="card bg-white p-6 rounded-lg">
                <img src={tip.image} alt={tip.tip} className="w-full h-48 object-cover rounded-md" />
                <p className="text-xl font-semibold mt-4">{tip.tip}</p>
                <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full">More Details</button>
              </div>
            ))}
          </div>
        </div>
      </section>

   
    </div>
  );
};

export default WinterAdventurePage;
