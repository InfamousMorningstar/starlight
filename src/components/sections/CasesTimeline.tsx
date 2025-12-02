import React from 'react';
import { motion } from 'framer-motion';
import { Timeline } from '../ui/timeline';

const timelineData = [
  {
    title: "1990",
    content: (
      <div>
        <h3 className="text-neutral-200 text-2xl md:text-4xl font-bold mb-4">
          Neil Stonechild
        </h3>
        <p className="text-neutral-300 text-base md:text-lg font-normal mb-4">
          A 17-year-old Cree teenager who went missing on November 29, 1990. He was last seen in police custody and found frozen to death three days later in approximately -28°C weather.
        </p>
        <div className="bg-night-800 p-4 rounded-lg border border-white/10">
          <p className="text-sm text-gray-400 mb-2">
            The initial investigation was dismissed and inadequate. The case remained cold until 2000, when a public inquiry revealed that Saskatoon Police Service officers were involved. No officers were ever criminally charged for his death.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-starlight-500 rounded-full"></div>
            <span className="text-starlight-400 text-sm font-medium">The case that changed everything</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2000",
    content: (
      <div>
        <h3 className="text-neutral-200 text-2xl md:text-4xl font-bold mb-4">
          Rodney Naistus & Lawrence Wegner
        </h3>
        <p className="text-neutral-300 text-base md:text-lg font-normal mb-4">
          Both men were found frozen to death near the Queen Elizabeth Power Station, just days apart.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-night-800 p-4 rounded-lg border border-white/10">
            <h4 className="text-white font-bold mb-2">Rodney Naistus</h4>
            <p className="text-sm text-gray-400">
              25 years old. His body was discovered on January 29, 2000. Like Neil before him, 
              he had been left in sub-zero temperatures with inadequate clothing.
            </p>
          </div>
          <div className="bg-night-800 p-4 rounded-lg border border-white/10">
            <h4 className="text-white font-bold mb-2">Lawrence Wegner</h4>
            <p className="text-sm text-gray-400">
              30 years old. Found February 3, 2000, in the same area. The proximity in time and 
              location to Naistus's death raised serious questions.
            </p>
          </div>
        </div>
        <div className="mt-4 bg-starlight-500/10 border border-starlight-500/30 p-4 rounded-lg">
          <p className="text-starlight-300 text-sm italic">
            "The fact that two men died in such similar circumstances, so close together, 
            could no longer be dismissed as coincidence."
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "2000",
    content: (
      <div>
        <h3 className="text-neutral-200 text-2xl md:text-4xl font-bold mb-4">
          Darrell Night - The Survivor
        </h3>
        <p className="text-neutral-300 text-base md:text-lg font-normal mb-4">
          The only person to survive the Starlight Tours - his testimony initiated the investigations.
        </p>
        <div className="bg-gradient-to-br from-starlight-500/20 to-purple-900/20 p-6 rounded-lg border border-starlight-500/30">
          <p className="text-neutral-200 text-base mb-4">
            In January 2000, Darrell Night was picked up by two Saskatoon Police Service officers - Constable Dan Hatchen and Ken Munson. They drove him to the outskirts of the city, leaving him in subzero temperatures.
          </p>
          <p className="text-neutral-200 text-base mb-4">
            Night was forced to walk through the snow and eventually found a power plant where he was able to call a taxi. He filed a formal complaint, revealing systemic racism and abuse of police power. His testimony exposed the truth behind the Starlight Tours.
          </p>
          <div className="mt-4 pt-4 border-t border-white/10">
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 mt-1 bg-starlight-500 rounded-full flex-shrink-0"></div>
              <div>
                <p className="text-starlight-300 font-bold mb-1">Justice Served (Partially)</p>
                <p className="text-sm text-gray-400">
                  Constables Dan Hatchen and Ken Munson were convicted of unlawful confinement. 
                  However, many felt the charges and sentences were insufficient given the severity 
                  of the crime and its historical context.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2003-2004",
    content: (
      <div>
        <h3 className="text-neutral-200 text-2xl md:text-4xl font-bold mb-4">
          The Inquiry & Aftermath
        </h3>
        <p className="text-neutral-300 text-base md:text-lg font-normal mb-4">
          Justice David Wright led a Commission of Inquiry into Neil Stonechild's death.
        </p>
        <div className="space-y-4">
          <div className="bg-night-800 p-5 rounded-lg border border-white/10">
            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
              <span className="text-2xl">📋</span>
              Key Findings
            </h4>
            <ul className="text-sm text-gray-400 space-y-2 ml-8 list-disc">
              <li>Stonechild was likely in police custody the night he died</li>
              <li>Officers provided false and misleading testimony</li>
              <li>The initial investigation was grossly inadequate</li>
              <li>Systemic issues existed within the Saskatoon Police Service</li>
            </ul>
          </div>
          <div className="bg-night-800 p-5 rounded-lg border border-white/10">
            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
              <span className="text-2xl">⚖️</span>
              Reforms Implemented
            </h4>
            <ul className="text-sm text-gray-400 space-y-2 ml-8 list-disc">
              <li>GPS tracking systems installed in all police cruisers</li>
              <li>Enhanced oversight and accountability measures</li>
              <li>Cultural sensitivity training for officers</li>
              <li>Improved policies for interaction with Indigenous people</li>
            </ul>
          </div>
          <div className="bg-starlight-500/10 border border-starlight-500/30 p-5 rounded-lg">
            <p className="text-starlight-200 italic text-lg">
              "While reforms were made, many in the Indigenous community argue that true justice 
              and reconciliation require deeper structural change in how policing and justice are 
              administered in Canada."
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

export const CasesTimeline: React.FC = () => {
  return (
    <section id="cases" className="relative w-full bg-gradient-to-b from-night-900 to-night-800 overflow-hidden">
      {/* Background Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="absolute top-40 left-20 text-7xl md:text-9xl font-bold text-white/12"
        >
          JUSTICE
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.18 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-60 right-20 text-3xl md:text-4xl italic text-starlight-400/18 max-w-lg leading-snug"
        >
          National Post: "Officers charged in freezing deaths"
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.16 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="absolute top-1/2 right-10 text-5xl md:text-6xl text-white/15 rotate-[-15deg]"
        >
          1990-2004
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 0.2, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="absolute top-1/3 left-10 text-4xl font-bold text-white/18 max-w-md leading-tight"
        >
          "He was just a boy"
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.16 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-32 left-1/4 text-3xl italic text-starlight-500/18 max-w-lg"
        >
          CTV News: "Inquiry finds officers left teen to freeze"
        </motion.div>
      </div>
      
      <Timeline data={timelineData} />
    </section>
  );
};

