import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';

export const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="relative min-h-screen bg-gradient-to-b from-night-800 via-night-900 to-night-900 py-20 px-4 flex flex-col justify-center overflow-hidden">
      {/* Background Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 0.2, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="hidden lg:block absolute top-32 left-0 text-8xl md:text-9xl font-bold text-starlight-500/18"
        >
          SYSTEMIC
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.18 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-40 right-10 text-4xl md:text-5xl italic text-white/15 max-w-md text-right leading-tight"
        >
          "A culture of impunity"
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.18, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="absolute top-1/3 left-20 text-3xl text-white/15 max-w-xl italic leading-snug"
        >
          Toronto Star: "Pattern of discrimination against Indigenous people"
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1 }}
          className="hidden md:block absolute bottom-20 left-10 text-6xl font-bold text-starlight-400/15 rotate-[-5deg]"
        >
          RACISM
        </motion.div>
      </div>
      
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Systemic Racism & Impact</h2>
          <p className="text-lg text-gray-400">
            The "Starlight Tours" were not isolated incidents of rogue officers, but symptoms of a deeper systemic issue within policing and the justice system.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Why Did Police Do This? */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-starlight-500/10 to-purple-900/10 border border-starlight-500/30 rounded-2xl p-6 sm:p-8 md:p-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Did Police Do This?</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                The government has made numerous attempts to eliminate Indigenous identity throughout history. This systematic race has permitted police officers to consider Indigenous lives less valuable, which exposes Indigenous people to significant risk. The negligent and disdainful behaviour of the government and police towards this community has created an environment of racism and hatred where it has become normal to discriminate against, kill, or abandon Indigenous people on the outskirts of the city.
              </p>
              <p>
                The Starlight Tours are another way to express the police's determination to eradicate Indigenous lives. Most of the victims were last seen in police custody, which implies the power police hold in discriminating against and eradicating minority groups in society.
              </p>
              <p className="text-starlight-200 font-medium">
                Since these lives did not have any value in the eyes of the government or society, their sudden deaths were not considered to be murder. Indigenous victims were always blamed and portrayed to be at fault, making society think that their deaths were insignificant.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-white/5 p-8 md:p-12 rounded-xl border border-white/10"
          >
            <Quote className="absolute top-8 left-8 text-starlight-500/20 w-16 h-16 -z-10" />
            <blockquote className="text-xl md:text-2xl font-serif text-starlight-100 text-center leading-relaxed">
              "The chasm that separates Aboriginal people from non-Aboriginal people in this province is deep and wide... We must bridge that gap."
            </blockquote>
            <cite className="block mt-6 text-center text-starlight-500 font-medium not-italic">
              — Justice David Wright, Report of the Commission of Inquiry Into Matters Relating to the Death of Neil Stonechild
            </cite>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
              <BentoGridItem
                title="Broken Trust"
                description="For Indigenous communities, the police are often seen not as protectors, but as a threat. This deep-seated mistrust makes it difficult to report crimes, cooperate with investigations, or feel safe in one's own city."
                className="md:col-span-1"
                icon={<div className="w-4 h-4 rounded-full bg-starlight-500"></div>}
              />
              <BentoGridItem
                title="Intergenerational Trauma"
                description="The fear of 'midnight rides' became a cautionary tale passed down through families. It is a part of the collective trauma that includes residential schools and the Sixties Scoop, reinforcing the message that Indigenous lives are undervalued."
                className="md:col-span-1"
                icon={<div className="w-4 h-4 rounded-full bg-starlight-500"></div>}
              />
              <BentoGridItem
                title="Justice Delayed"
                description="It took years of advocacy, public pressure, and the courage of survivors like Darrell Night to force an inquiry. Many officers involved faced minimal consequences, reinforcing the perception that the system protects its own."
                className="md:col-span-1"
                icon={<div className="w-4 h-4 rounded-full bg-starlight-500"></div>}
              />
            </BentoGrid>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
