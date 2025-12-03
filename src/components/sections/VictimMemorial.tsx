import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame } from 'lucide-react';

interface Victim {
  name: string;
  age: number;
  year: string;
  story: string;
}

const victims: Victim[] = [
  {
    name: 'Neil Stonechild',
    age: 17,
    year: '1990',
    story: 'Found frozen in a field. His death sparked decades of inquiry into police conduct.',
  },
  {
    name: 'Rodney Naistus',
    age: 25,
    year: '2000',
    story: 'Discovered near the power station, his death highlighted the pattern of abandonment.',
  },
  {
    name: 'Lawrence Wegner',
    age: 30,
    year: '2000',
    story: 'Found frozen days after Naistus, bringing national attention to Starlight Tours.',
  },
  {
    name: 'Darrell Night',
    age: 34,
    year: '2000',
    story: 'Survivor whose testimony became crucial evidence. His courage brought truth to light.',
  },
];

export const VictimMemorial: React.FC = () => {
  const [selectedVictim, setSelectedVictim] = useState<number | null>(null);

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-night-900 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Flame className="w-8 h-8 text-orange-400" />
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Remember Their Names
            </h2>
            <Flame className="w-8 h-8 text-orange-400" />
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Click each card to read their story and honor their memory.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {victims.map((victim, index) => (
            <motion.div
              key={victim.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div
                className={`bg-gradient-to-br from-night-800/80 to-night-900/80 backdrop-blur-xl border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                  selectedVictim === index
                    ? 'border-starlight-500 shadow-2xl shadow-starlight-500/30'
                    : 'border-white/10 hover:border-white/30'
                }`}
                onClick={() => setSelectedVictim(selectedVictim === index ? null : index)}
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{victim.name}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span>Age {victim.age}</span>
                    <span>•</span>
                    <span>{victim.year}</span>
                  </div>
                </div>

                <AnimatePresence>
                  {selectedVictim === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-gray-300 leading-relaxed"
                    >
                      {victim.story}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-starlight-200 italic text-lg">
            "Their names are not just history. They are a call to action."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
