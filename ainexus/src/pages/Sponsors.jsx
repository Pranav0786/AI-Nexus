import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const sponsors = [
  {
    id: 1,
    name: 'Sponsor One',
    description: 'Leading AI Innovation',
    logo: '/placeholder.svg?height=150&width=150',
    website: 'https://sponsor1.com',
    tier: 'Platinum',
  },
  {
    id: 2,
    name: 'Sponsor Two',
    description: 'Future of Technology',
    logo: '/placeholder.svg?height=150&width=150',
    website: 'https://sponsor2.com',
    tier: 'Gold',
  },
  {
    id: 3,
    name: 'Sponsor Three',
    description: 'AI Solutions Provider',
    logo: '/placeholder.svg?height=150&width=150',
    website: 'https://sponsor3.com',
    tier: 'Diamond',
  },
];

const Sponsors = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black relative overflow-hidden py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-red-500/10 rounded-full blur-3xl"
            style={{
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent mb-6">
            Our Sponsors
          </h1>
          <p className="text-red-300/80 text-lg md:text-xl max-w-2xl mx-auto">
            Partnering with industry leaders to drive innovation in artificial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-2xl opacity-50 blur group-hover:opacity-70 transition-opacity duration-300" />

                <div className="relative h-full backdrop-blur-sm bg-gradient-to-br from-gray-900/90 to-black/90 rounded-2xl p-8 border border-red-500/20">
                  <motion.div
                    className="absolute -top-2 -left-2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  >
                    <Sparkles className="w-6 h-6 text-red-500/50" />
                  </motion.div>

                  <div className="absolute -top-3 right-4 px-4 py-1 bg-gradient-to-r from-red-700 to-red-600 rounded-full shadow-lg">
                    <span className="text-sm font-semibold text-white">{sponsor.tier}</span>
                  </div>

                  <div className="relative h-40 mb-6 group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full scale-90 group-hover:bg-red-500/30 transition-colors duration-300" />
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} Logo`}
                      className="object-contain relative z-10 w-full h-full"
                    />
                  </div>

                  <div className="text-center relative z-10">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent mb-3">
                      {sponsor.name}
                    </h2>
                    <p className="text-red-300/80 mb-6 leading-relaxed">
                      {sponsor.description}
                    </p>

                    <motion.a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center px-6 py-2 group/button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 rounded-full" />
                      <div className="absolute inset-0 bg-red-500/40 rounded-full blur-md opacity-0 group-hover/button:opacity-100 transition-opacity duration-300" />
                      <span className="relative text-white font-semibold">
                        Visit Website
                      </span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
