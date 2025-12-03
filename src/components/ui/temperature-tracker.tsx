import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Thermometer } from 'lucide-react';

export const TemperatureTracker: React.FC = () => {
  const [temperature, setTemperature] = useState(-28);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      
      // Show tracker after hero section (around 10% scroll)
      if (scrollPercent > 0.1 && scrollPercent < 0.9) {
        setIsVisible(true);
        // Temperature drops as you scroll through the story
        const newTemp = Math.round(-28 + (scrollPercent * 10));
        setTemperature(Math.min(-18, newTemp));
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getColor = () => {
    if (temperature <= -28) return 'from-blue-600 to-purple-600';
    if (temperature <= -25) return 'from-blue-500 to-cyan-500';
    return 'from-cyan-400 to-blue-400';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-50 pointer-events-none"
        >
          <div className="bg-night-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <Thermometer className="text-cyan-400 w-6 h-6" />
              <div>
                <motion.div
                  key={temperature}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={`text-3xl font-bold bg-gradient-to-br ${getColor()} bg-clip-text text-transparent`}
                >
                  {temperature}°C
                </motion.div>
                <div className="text-xs text-gray-400 font-mono">Saskatoon</div>
              </div>
            </div>
            <div className="mt-3 h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${getColor()}`}
                initial={{ width: '100%' }}
                animate={{ width: `${((temperature + 28) / 10) * 100}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
