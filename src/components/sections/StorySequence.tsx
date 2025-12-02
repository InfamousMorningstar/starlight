import React from 'react';
import { motion } from 'framer-motion';

interface StoryBeat {
  title: string;
  text: string;
  temperature?: string;
  time?: string;
}

const beats: StoryBeat[] = [
  {
    title: "The Pickup",
    text: "It starts on a cold night. No arrest. No rights read. Just an order to get in the back. Indigenous men were picked up by police officers under false pretenses—sometimes for public intoxication, sometimes for no reason at all. They were told they were being taken to the station or to a shelter.",
    temperature: "0°C",
    time: "11:47 PM"
  },
  {
    title: "The Drive",
    text: "The city lights fade. The warmth of the car is a lie. They are driving into the void. Instead of protection, these men found themselves driven miles outside Saskatoon's city limits. The journey was silent, ominous, as the urban landscape gave way to frozen fields and darkness.",
    temperature: "-15°C",
    time: "12:13 AM"
  },
  {
    title: "The Drop-off",
    text: "Miles from help. -25°C. 'Get out.' The taillights disappear into the dark. The victims were abandoned in remote areas, often near the Queen Elizabeth Power Station, without proper clothing for the bitter cold. Officers drove away, leaving them stranded with no means of communication or shelter.",
    temperature: "-28°C",
    time: "12:45 AM"
  },
  {
    title: "The Walk",
    text: "Alone. Freezing. The lights of Saskatoon are a distant hope that some never reach. In temperatures that could kill within hours, these men faced an impossible choice: attempt the long walk back to the city or try to find shelter in the barren landscape. For Neil Stonechild, Rodney Naistus, and Lawrence Wegner, this journey ended in death.",
    temperature: "-28°C",
    time: "Unknown"
  }
];

export const StorySequence: React.FC = () => {
  return (
    <section id="story" className="relative bg-gradient-to-b from-night-800 via-night-900 to-night-900 py-32 overflow-hidden">
      {/* Background decorative text */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="hidden lg:block absolute top-1/4 right-20 text-[10rem] font-bold text-white select-none">
          -28°C
        </div>
        <div className="hidden md:block absolute bottom-1/3 left-10 text-5xl italic text-starlight-500 max-w-xl leading-tight select-none">
          "I thought I was going to die out there"
        </div>
      </div>
      
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-20 px-4 relative z-10"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-[2px] w-32 bg-gradient-to-r from-transparent via-starlight-400 to-transparent mx-auto mb-8"
        ></motion.div>
        
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          The Sequence
        </h2>
        <p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto">
          Four moments that tell a story of systemic injustice
        </p>
      </motion.div>

      {/* Story timeline */}
      <div className="relative z-10 px-4 max-w-6xl mx-auto">
        <div className="space-y-20">
          {beats.map((beat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Content card */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="w-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_60px_rgba(168,85,247,0.3)] transition-all duration-500 group"
                >
                  {/* Badges */}
                  <div className="flex gap-2 mb-6">
                    <span className="backdrop-blur-xl bg-starlight-500/20 px-4 py-2 rounded-full border border-starlight-400/30 text-starlight-300 text-sm font-mono font-semibold">
                      {beat.temperature}
                    </span>
                    <span className="backdrop-blur-xl bg-white/10 px-4 py-2 rounded-full border border-white/20 text-white/90 text-sm font-mono">
                      {beat.time}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 group-hover:text-starlight-300 transition-colors duration-300">
                    {beat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                    {beat.text}
                  </p>

                  {/* Accent line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="h-[2px] bg-gradient-to-r from-starlight-500/60 to-transparent mt-6 origin-left"
                  ></motion.div>
                </motion.div>

              {/* Connecting arrow */}
              {index < beats.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className={`hidden md:flex items-center justify-center my-8 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
                >
                  <div className="text-starlight-400/40 text-4xl">↓</div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

