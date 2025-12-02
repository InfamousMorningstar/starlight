import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundSection: React.FC = () => {
  return (
    <section id="background" className="relative min-h-screen bg-gradient-to-b from-night-900 to-night-800 py-20 px-4 flex items-center overflow-hidden">
      {/* Background Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 0.25, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="absolute top-20 left-10 text-5xl md:text-6xl font-bold text-white/20 rotate-[-5deg] max-w-2xl leading-tight"
        >
          "They just left us there to freeze"
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 0.2, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute bottom-40 right-10 text-3xl md:text-4xl text-white/15 italic max-w-md text-right leading-snug"
        >
          CBC News: "Police drove Indigenous men to outskirts in deadly cold"
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.6 }}
          className="hidden lg:block absolute top-1/2 left-1/4 text-7xl font-bold text-starlight-500/15"
        >
          SASKATOON
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-white mb-8 border-l-4 border-starlight-500 pl-6">
            Context & History
          </h2>
          
          <div className="prose prose-invert prose-xl text-gray-300 space-y-5">
            <p className="text-lg md:text-xl leading-relaxed">
              The Starlight Tours refer to incidents in Saskatoon during the 1990s and early 2000s where police officers picked up Indigenous men, drove them to the outskirts of the city, and abandoned them in freezing temperatures.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Several men were later found frozen to death. These incidents were hidden from the public, with victims falsely portrayed as intoxicated wanderers.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              The Starlight Tours have become a symbol of systemic racism, police misconduct, and the state's failure to protect Indigenous communities. For years, this practice remained an open secret—whispered about but rarely acknowledged officially.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative bg-night-800 rounded-lg overflow-hidden border border-white/10 shadow-2xl"
        >
          <img 
            src="/saskatoon.png" 
            alt="Map of Saskatoon showing Starlight Tours drop-off locations" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-night-900/95 via-night-900/80 to-transparent p-4">
            <p className="text-sm text-neutral-400 italic">
              The "tours" often ended near the Queen Elizabeth Power Station, miles from safety.
            </p>
            <a 
              href="https://i0.wp.com/spheresofinfluence.ca/wp-content/uploads/2023/07/746079-12410688-Untitled-2023-7-27.png?resize=1024%2C560&ssl=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-starlight-400 hover:text-starlight-300 transition-colors underline"
            >
              Image source
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
