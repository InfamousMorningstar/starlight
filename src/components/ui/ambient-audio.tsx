import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Wind } from 'lucide-react';

export const AmbientAudio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Create audio context for ambient sound
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      if (isPlaying) {
        audio.play().catch(() => {
          // Autoplay might be blocked, that's okay
          setIsPlaying(false);
        });
      } else {
        audio.pause();
      }
    }
  }, [isPlaying, volume]);

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=" type="audio/wav" />
      </audio>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="fixed bottom-8 left-8 z-50"
      >
        <div className="bg-night-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-4 hover:bg-white/5 transition-colors flex items-center gap-3 group"
          >
            <div className="relative">
              {isPlaying ? (
                <Volume2 className="w-5 h-5 text-starlight-400" />
              ) : (
                <VolumeX className="w-5 h-5 text-gray-400" />
              )}
              <AnimatePresence>
                {isPlaying && (
                  <motion.div
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    exit={{ scale: 1, opacity: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute inset-0 rounded-full border-2 border-starlight-400"
                  />
                )}
              </AnimatePresence>
            </div>
            <div className="text-left">
              <div className="text-sm font-medium text-white flex items-center gap-2">
                <Wind className="w-4 h-4 text-cyan-400" />
                Ambient Wind
              </div>
              <div className="text-xs text-gray-400">
                {isPlaying ? 'Click to mute' : 'Click to immerse'}
              </div>
            </div>
          </button>
          
          <AnimatePresence>
            {isPlaying && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-t border-white/10 px-4 pb-4"
              >
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-full mt-3 accent-starlight-500"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};
