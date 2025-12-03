import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const StoryProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] pointer-events-none">
      {/* Minimalist progress bar */}
      <div className="h-[3px] bg-transparent">
        <motion.div
          className="h-full bg-gradient-to-r from-starlight-500 via-purple-500 to-pink-500 shadow-lg shadow-starlight-500/50"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
        />
      </div>
    </div>
  );
};
