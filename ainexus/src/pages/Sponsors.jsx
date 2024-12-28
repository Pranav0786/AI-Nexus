import React from 'react';
import img1 from '../assests/sponser1.jpeg';
import img2 from '../assests/sponser1.jpeg';
import img3 from '../assests/sponser1.jpeg';

const sponsors = [
  {
    id: 1,
    logo: img1,
  },
  {
    id: 2,
    logo: img2,
  },
  {
    id: 3,
    logo: img3,
  },
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="min-h-screen py-12 ">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8">
          Sponsors
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="relative bg-white shadow-lg rounded-xl p-4 hover:scale-105 transition-transform duration-300"
              style={{ maxWidth: '300px' }}
            >
              <img
                src={sponsor.logo}
                alt={`Sponsor ${sponsor.id} Logo`}
                className="w-full h-auto object-cover rounded-md"
                style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
