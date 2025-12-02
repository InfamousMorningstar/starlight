import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Users, HeartHandshake } from 'lucide-react';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';

const testimonials = [
  {
    quote: "The inquiry revealed a distinct lack of trust in the police service, respondents fearing that more community members would one day too be victims of a Starlight Tour.",
    name: "Legal Aid Saskatchewan",
    title: "Gladue Rights Research Database",
    source: "https://gladue.usask.ca/node/2860"
  },
  {
    quote: "The commission concluded that there were suspicious circumstances surrounding his death and a 'totally inadequate investigation' conducted by local policing bodies.",
    name: "Justice David H. Wright",
    title: "Commission of Inquiry Report (2004)",
    source: "https://gladue.usask.ca/node/6353"
  },
  {
    quote: "Starlight Tours reveal disturbing colonial ideology which places value on the lives of white settlers over the lives of Indigenous peoples, reflected by the failure to address the suspicious deaths.",
    name: "Prof. Sherene Razack",
    title: "Canadian Journal of Women and the Law",
    source: "https://gladue.usask.ca/node/6241"
  },
];

export const TodaySection: React.FC = () => {
  return (
    <section id="today" className="relative min-h-screen bg-gradient-to-b from-night-900 to-black py-20 px-4 overflow-hidden">
      {/* Background Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 0.18, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="hidden lg:block absolute top-20 right-20 text-6xl md:text-7xl font-bold text-starlight-400/18 rotate-6"
        >
          CHANGE
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-1/3 left-10 text-4xl md:text-5xl italic text-white/18 max-w-lg leading-tight"
        >
          "Their names must never be forgotten"
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="hidden lg:block absolute top-1/2 right-40 text-5xl md:text-6xl text-starlight-500/15"
        >
          RECONCILIATION
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 0.18, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="absolute top-1/4 left-20 text-3xl text-white/15 max-w-md italic leading-snug"
        >
          Maclean's: "Why Starlight Tours still matter today"
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.16 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-20 right-10 text-4xl font-bold text-starlight-400/18"
        >
          "We demand justice"
        </motion.div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">Why It Matters Today</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            The legacy of Starlight Tours is not just history; it shapes current conversations about justice and reconciliation.
          </p>
        </motion.div>

        <BentoGrid className="max-w-7xl mx-auto mb-20">
          <BentoGridItem
            icon={<Scale size={32} className="text-starlight-500" />}
            title="Police Accountability"
            description="The inquiries led to changes in police policy, including GPS tracking in cruisers and better oversight. However, calls for deeper structural reform continue."
            className="md:col-span-1"
          />
          <BentoGridItem
            icon={<Users size={32} className="text-starlight-500" />}
            title="Indigenous Rights"
            description="These events highlight the need for Indigenous-led justice systems and community policing models that prioritize safety and cultural respect."
            className="md:col-span-1"
          />
          <BentoGridItem
            icon={<HeartHandshake size={32} className="text-starlight-500" />}
            title="Reconciliation"
            description="True reconciliation requires acknowledging these hard truths. Education about Starlight Tours is essential for understanding the present-day relationship between police and Indigenous peoples."
            className="md:col-span-1"
          />
        </BentoGrid>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white mb-8 text-center">Voices for Change</h3>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-starlight-500/10 to-purple-900/10 border border-starlight-500/30 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Key Takeaways</h3>
          <ul className="text-left max-w-2xl mx-auto space-y-4 text-gray-300 list-disc pl-6 mb-8">
            <li>Starlight Tours were a practice of abandoning Indigenous people in freezing temperatures.</li>
            <li>It was not an isolated incident but a repeated pattern over decades.</li>
            <li>The survival of Darrell Night and the death of Neil Stonechild brought the issue to light.</li>
            <li>Systemic racism played a central role in why this practice was allowed to continue.</li>
          </ul>
          <p className="text-xl italic text-starlight-200">
            "Remember that behind every headline is a human story."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
