import React from 'react';
import { Link } from 'react-router-dom';

const EcoTipsSection = () => {
  return (
    <section className="eco-tips bg-blue-50 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          Eco-Friendly Travel Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tip Cards */}
          {[
            {
              title: 'Pack Light',
              description:
                'Carrying less luggage reduces your carbon footprint during travel. Opt for reusable and eco-friendly products.',
              icon: '🌍',
              route: '/details/pack-light',
            },
            {
              title: 'Respect Wildlife',
              description:
                'Keep a safe distance from animals and avoid feeding them. Let them thrive in their natural habitat.',
              icon: '🐾',
              route: '/details/respect-wildlife',
            },
            {
              title: 'Choose Sustainable Transport',
              description:
                'Whenever possible, use bicycles, public transport, to reduce emissions.',
              icon: '🚴‍♂️',
              route: '/details/sustainable-transport',
            },
            {
              title: 'Stay at Eco-Friendly Lodges',
              description:
                'Look for accommodations that follow sustainable practices, like solar energy and waste recycling.',
              icon: '🏕️',
              route: '/details/eco-lodges',
            },
            {
              title: 'Leave No Trace',
              description:
                'Carry your waste with you and dispose of it responsibly. Protect nature by leaving it as you found it.',
              icon: '🗑️',
              route: '/details/leave-no-trace',
            },
            {
              title: 'Support Local Communities',
              description:
                'Buy from local markets and engage with the community to support sustainable tourism.',
              icon: '🌾',
              route: '/details/support-local',
            },
          ].map((tip, index) => (
            <div
              key={index}
              className="eco-tip-card bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="text-5xl mb-4">{tip.icon}</div>
              <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
              <p className="text-gray-600">{tip.description}</p>
              <Link
                to={tip.route}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition"
              >
                More Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoTipsSection;
