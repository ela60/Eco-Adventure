import React from 'react';

const Section1 = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-green-500 text-white text-center py-20">
        <h1 className="text-5xl lg:-mt-8 font-bold">Welcome to Eco-Adventure Experiences</h1>
        <p className="mt-12 text-lg">
          Explore the beauty of nature while preserving it for future generations.
        </p>
      </section>

      {/* Featured Adventures Section */}
      <section className="featured-adventures bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Featured Adventures</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Mountain Trekking',
                description: 'Experience breathtaking mountain views.',
                image: 'https://i.ibb.co/HPTPpFL/pexels-andreimike-1271619.jpg',
              },
              {
                title: 'Ocean Diving',
                description: 'Discover underwater wonders.',
                image: 'https://i.ibb.co/r5XsSMb/pexels-pixabay-68767.jpg',
              },
              {
                title: 'Forest Expedition',
                description: 'Uncover the secrets of dense forests.',
                image: 'https://i.ibb.co/JtcJ1vc/group-people-walking-trek-bali.jpg',
              },
            ].map((adventure, index) => (
              <div key={index} className="card bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={adventure.image}
                  alt={adventure.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{adventure.title}</h3>
                  <p className="text-gray-600 mt-2">{adventure.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials bg-green-50 py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">What Our Adventurers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'John Doe',
                feedback:
                  'The mountain trekking experience was life-changing! I have never felt so close to nature.',
                image: 'https://i.ibb.co.com/f0VDBcW/speaker3-min.jpg',
              },
              {
                name: 'Jane Smith',
                feedback:
                  'Ocean diving was magical. The team ensured everything was eco-friendly and safe.',
                image: 'https://i.ibb.co.com/CzZPYYT/images.jpg',
              },
              {
                name: 'Amir Faysal',
                feedback:
                  'Camping under the stars in the desert was unforgettable. Highly recommend this!',
                image: 'https://i.ibb.co.com/HnZdB7t/Whats-App-Image-2024-11-10-at-6-21-28-PM.jpg',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="testimonial bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-gray-600 mt-2">{testimonial.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
