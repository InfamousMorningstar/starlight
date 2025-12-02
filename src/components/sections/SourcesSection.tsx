import React from 'react';
import { motion } from 'framer-motion';

export const SourcesSection: React.FC = () => {
  return (
    <section id="sources" className="relative bg-black py-20 px-4 border-t border-white/10 overflow-hidden">
      {/* Background Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.18 }}
          viewport={{ once: true }}
          className="absolute top-40 left-20 text-7xl md:text-8xl font-bold text-white/15 rotate-[-8deg]"
        >
          TRUTH
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-20 right-20 text-5xl md:text-6xl italic text-starlight-400/18"
        >
          "The record speaks"
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.18, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="absolute top-1/3 right-10 text-3xl text-white/15 max-w-md italic text-right leading-snug"
        >
          CBC: "Two Worlds Colliding" documentary
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.16 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="absolute bottom-1/2 left-10 text-6xl font-bold text-starlight-500/15"
        >
          EVIDENCE
        </motion.div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-white mb-8">References & Further Reading</h2>
        
        <div className="space-y-6 text-gray-400 text-sm md:text-base font-light">
          <div className="group">
            <p className="mb-1 text-white group-hover:text-starlight-500 transition-colors">
              Legal Aid Saskatchewan - Freezing Deaths: The Starlight Tours.
            </p>
            <p className="italic">Gladue Rights Research Database, University of Saskatchewan.</p>
            <a 
              href="https://gladue.usask.ca/node/2860" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-starlight-500 hover:underline text-xs"
            >
              Read Full Research
            </a>
          </div>

          <div className="group">
            <p className="mb-1 text-white group-hover:text-starlight-500 transition-colors">
              Reber, Susanne & Renaud, Robert - Starlight Tours.
            </p>
            <p className="italic">University of Toronto, Indigenous Perspectives Collection.</p>
            <a 
              href="https://jackmanlaw.utoronto.ca/indigenous-perspectives/starlight-tour" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-starlight-500 hover:underline text-xs"
            >
              View at U of T Law Library
            </a>
          </div>

          <div className="group">
            <p className="mb-1 text-white group-hover:text-starlight-500 transition-colors">
              Two Worlds Colliding.
            </p>
            <p className="italic">Documentary by Tasha Hubbard, National Film Board of Canada, 2004.</p>
            <a 
              href="https://www.nfb.ca/film/two_worlds_colliding/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-starlight-500 hover:underline text-xs"
            >
              Watch on NFB
            </a>
          </div>

          <div className="group">
            <p className="mb-1 text-white group-hover:text-starlight-500 transition-colors">
              The Honourable Mr. Justice David H. Wright - Report of the Commission of Inquiry Into Matters Relating to the Death of Neil Stonechild.
            </p>
            <p className="italic">Government of Saskatchewan, October 2004.</p>
            <a 
              href="https://gladue.usask.ca/node/6353" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-starlight-500 hover:underline text-xs"
            >
              Read Wright Inquiry Report
            </a>
          </div>

          <div className="group">
            <p className="mb-1 text-white group-hover:text-starlight-500 transition-colors">
              Razack, Sherene - "It Happened More than Once": Freezing Deaths in Saskatchewan.
            </p>
            <p className="italic">Canadian Journal of Women and the Law 26, no. 1 (2014): 51-80.</p>
            <a 
              href="https://gladue.usask.ca/node/6241" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-starlight-500 hover:underline text-xs"
            >
              Read Academic Paper
            </a>
          </div>
        </div>

        <div className="mt-12 p-6 bg-night-800/50 rounded-xl border border-white/5">
          <p className="text-neutral-400 text-sm leading-relaxed">
            <strong className="text-white">Image Credits:</strong>
          </p>
          <ul className="mt-3 space-y-2 text-sm text-neutral-400">
            <li>Madalynn, H. (2023, June 2). <em>Canada's Best-Kept Secret: Starlight Tours</em>. Spheres of Influence. <a href="https://bit.ly/4oyURgF" target="_blank" rel="noopener noreferrer" className="text-starlight-500 hover:underline">https://bit.ly/4oyURgF</a></li>
            <li>Derek, M. (2016, April 8). <em>Saskatoon Police patrol 20th Street and Avenue D in the Riversdale neighbourhood</em>. Maclean's. <a href="https://bit.ly/48LYWta" target="_blank" rel="noopener noreferrer" className="text-starlight-500 hover:underline">https://bit.ly/48LYWta</a></li>
            <li>Richard, M. (2001, Sept. 20). <em>Lawyer Don Worme, Darrell Knight (centre) and Rosa Desjarlais react to the verdict</em>. Saskatoon StarPhoenix. <a href="https://bit.ly/4paortQ" target="_blank" rel="noopener noreferrer" className="text-starlight-500 hover:underline">https://bit.ly/4paortQ</a></li>
          </ul>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-600">
          <p>Created for educational purposes. 2025.</p>
        </div>
      </div>
    </section>
  );
};
