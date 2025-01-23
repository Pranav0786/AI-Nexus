import React from 'react';
import img1 from '../assests/sponser1.jpeg';
import img2 from '../assests/sponser1.jpeg';
import img3 from '../assests/sponser1.jpeg';

const sponsors = [
  {
    id: 1,
    logo: img1,
    link : "http://www.ignitiozealous.co.in/"
  }
];

const Sponsors = () => {
  return (
    <section 
    data-aos="fade-up" 
    id="sponsors" className=" py-12 overflow-hidden">
      <div className="flex flex-col container mx-auto px-4 text-center mt-10 md:mt-20 mb-20">
        <h1 className="text-3xl md:text-5xl font-extrabold font-[Roboto] drop-shadow-lg text-red-800 mb-8 uppercase">
          Sponsors
        </h1>
        <div className="flex justify-center items-center   ">
          <div className="grid grid-cols-1  gap-8 items-center justify-center ">
            {sponsors.map((sponsor) => (
              <div
                data-aos="zoom-out-up"
                data-aos-anchor-placement="bottom-bottom"
                key={sponsor.id}
                className="relative bg-[rgb(105,122,132)] shadow-lg rounded-xl p-3 hover:scale-105 transition-transform duration-300"
              >
                <a href={sponsor.link}>
                  <img
                    src={sponsor.logo}
                    alt={`Sponsor ${sponsor.id} Logo`}
                    className="w-fit h-auto md:h-80 object-cover rounded-md"
                    style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)' }}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
