import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, User, AlertTriangle } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  location?: string;
  victim?: string;
  icon: 'calendar' | 'map' | 'user' | 'alert';
  color: string;
}

const events: TimelineEvent[] = [
  {
    year: '1976',
    title: 'First Known Case',
    description: 'Reports of police abandoning Indigenous people in freezing conditions begin to surface, but investigations are minimal.',
    icon: 'alert',
    color: 'from-red-500 to-orange-500',
  },
  {
    year: '1990',
    title: 'Neil Stonechild Dies',
    description: 'Found frozen in a field on the outskirts of Saskatoon. His death sparked decades of inquiry.',
    location: 'Saskatoon, SK',
    victim: 'Neil Stonechild (17)',
    icon: 'user',
    color: 'from-purple-500 to-pink-500',
  },
  {
    year: '2000',
    title: 'Rodney Naistus & Lawrence Wegner',
    description: 'Both found frozen near the Queen Elizabeth Power Station within days of each other.',
    location: 'Power Station',
    icon: 'map',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    year: '2000',
    title: 'Darrell Night Survives',
    description: 'Abandoned by police but survived, his testimony became crucial evidence.',
    victim: 'Darrell Night',
    icon: 'user',
    color: 'from-green-500 to-emerald-500',
  },
  {
    year: '2004',
    title: 'Wright Commission Report',
    description: 'Justice David Wright concludes suspicious circumstances and inadequate investigation in Stonechild case.',
    icon: 'calendar',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    year: 'Today',
    title: 'Ongoing Impact',
    description: 'The legacy continues to shape Indigenous-police relations and calls for systemic reform.',
    icon: 'alert',
    color: 'from-starlight-500 to-purple-500',
  },
];

const iconMap = {
  calendar: Calendar,
  map: MapPin,
  user: User,
  alert: AlertTriangle,
};

export const InteractiveTimeline: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <div className="relative py-12">
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-starlight-500/20 via-starlight-500/50 to-starlight-500/20" />
      
      <div className="space-y-12">
        {events.map((event, index) => {
          const Icon = iconMap[event.icon];
          const isLeft = index % 2 === 0;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                {/* Content Card */}
                <motion.div
                  className="w-5/12 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
                >
                  <div className="bg-night-800/50 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-starlight-500/50 transition-all duration-300">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${event.color}`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className={`text-sm font-mono font-bold bg-gradient-to-r ${event.color} bg-clip-text text-transparent`}>
                          {event.year}
                        </div>
                        <h3 className="text-lg font-bold text-white mt-1">{event.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{event.description}</p>
                    
                    <AnimatePresence>
                      {selectedEvent === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pt-4 border-t border-white/10"
                        >
                          {event.location && (
                            <div className="flex items-center gap-2 text-xs text-starlight-300">
                              <MapPin className="w-4 h-4" />
                              {event.location}
                            </div>
                          )}
                          {event.victim && (
                            <div className="flex items-center gap-2 text-xs text-starlight-300 mt-2">
                              <User className="w-4 h-4" />
                              {event.victim}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Center Dot */}
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-br from-starlight-400 to-purple-500 border-4 border-night-900 shadow-lg shadow-starlight-500/50" />

                {/* Empty space for alternating layout */}
                <div className="w-5/12" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
