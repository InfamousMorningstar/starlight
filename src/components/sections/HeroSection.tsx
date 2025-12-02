import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { LaserFlow } from '../ui/laser-flow';

export const HeroSection: React.FC = () => {
  const headlinesRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#060010] via-night-900 to-night-900 overflow-hidden"
      onMouseMove={(e) => {
        const headlinesEl = headlinesRef.current;
        if (headlinesEl) {
          const rect = headlinesEl.getBoundingClientRect();
          const x = Math.max(0, e.clientX - rect.left);
          const y = Math.max(0, e.clientY - rect.top);
          headlinesEl.style.setProperty('--mx', `${x}px`);
          headlinesEl.style.setProperty('--my', `${y}px`);
        }
      }}
      onMouseLeave={() => {
        const headlinesEl = headlinesRef.current;
        if (headlinesEl) {
          headlinesEl.style.setProperty('--mx', '-9999px');
          headlinesEl.style.setProperty('--my', '-9999px');
        }
      }}
    >
      <div className="absolute inset-0 bottom-[15vh] z-0 pointer-events-none">
        <LaserFlow
          horizontalBeamOffset={0.0}
          verticalBeamOffset={0.0}
          color="#a855f7"
          wispDensity={1.0}
          fogIntensity={0.6}
          verticalSizing={2.0}
          dpr={1.5}
        />
      </div>
      
      {/* Content Box */}
      <div className="absolute bottom-[10vh] md:bottom-[15vh] left-1/2 -translate-x-1/2 w-[90%] md:w-[86%] max-w-6xl h-auto bg-white/[0.02] backdrop-blur-2xl rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-12 pb-8 md:pb-16 z-[6]" style={{
        boxShadow: '0 0 120px rgba(168, 85, 247, 0.3), 0 -30px 80px rgba(168, 85, 247, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.1)'
      }}>
        <motion.h1
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="bg-gradient-to-br from-white via-starlight-100 to-starlight-500 py-4 bg-clip-text text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold tracking-tighter text-transparent leading-none"
        >
          Starlight Tours
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-center mt-6 space-y-3"
        >
          <p className="text-2xl md:text-4xl text-neutral-300 font-normal tracking-tight">
            A Journey into Injustice
          </p>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{
              delay: 1.2,
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-lg md:text-xl text-neutral-400 font-light tracking-wide"
          >
            Uncovering the Truth Behind Saskatchewan's Darkest Chapter
          </motion.p>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{
              delay: 1.6,
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-base md:text-lg text-neutral-500 font-light italic"
          >
            Stories that must never be forgotten
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-neutral-400 text-xs tracking-widest uppercase flex flex-col items-center gap-3 mt-12"
        >
          <span className="font-medium">Scroll to Discover</span>
          <motion.svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.div>
      </div>

      {/* Hidden headlines revealed by spotlight effect */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[86%] max-w-6xl z-[5] pointer-events-none overflow-hidden"
        style={{
          top: '0',
          bottom: '15vh',
        }}
      >
        <div 
          ref={headlinesRef}
          className="absolute inset-0 text-neutral-200 blur-[0.3px]"
          style={{
            // @ts-ignore
            '--mx': '-9999px',
            '--my': '-9999px',
            opacity: 1,
            WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.9) 50px, rgba(255,255,255,0.6) 100px, rgba(255,255,255,0.3) 150px, rgba(255,255,255,0.1) 200px, rgba(255,255,255,0) 250px)',
            maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.9) 50px, rgba(255,255,255,0.6) 100px, rgba(255,255,255,0.3) 150px, rgba(255,255,255,0.1) 200px, rgba(255,255,255,0) 250px)',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            filter: 'blur(0.3px)',
          }}
        >
          <div className="absolute top-[8%] left-[5%] text-sm font-medium rotate-[-2deg]">
            SASKATOON POLICE UNDER INVESTIGATION
          </div>
          <div className="absolute top-[15%] right-[8%] text-xs opacity-80 rotate-[1deg]">
            Indigenous man found frozen on outskirts
          </div>
          <div className="absolute top-[25%] left-[12%] text-base font-semibold rotate-[-1deg]">
            "Starlight Tours" allegations surface
          </div>
          <div className="absolute top-[35%] right-[15%] text-sm rotate-[2deg]">
            Pattern of suspicious deaths documented
          </div>
          <div className="absolute top-[45%] left-[8%] text-xs opacity-70 rotate-[-3deg]">
            CBC News: Community demands answers
          </div>
          <div className="absolute top-[52%] right-[10%] text-base font-medium rotate-[1deg]">
            Officers accused of abandoning men in freezing cold
          </div>
          <div className="absolute top-[62%] left-[18%] text-sm opacity-80 rotate-[-1deg]">
            Globe and Mail investigation reveals systemic issues
          </div>
          <div className="absolute top-[72%] right-[12%] text-xs rotate-[2deg]">
            Neil Stonechild inquiry launched
          </div>
          <div className="absolute top-[18%] left-[45%] text-sm font-semibold opacity-75 rotate-[1deg]">
            Frozen bodies discovered near city limits
          </div>
          <div className="absolute top-[42%] left-[40%] text-xs opacity-60 rotate-[-2deg]">
            Families seek justice for loved ones
          </div>
          <div className="absolute top-[68%] left-[35%] text-sm rotate-[3deg]">
            National Post: A dark chapter in Canadian policing
          </div>
        </div>
      </div>
    </section>
  );
};
