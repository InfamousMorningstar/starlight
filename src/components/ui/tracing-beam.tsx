import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const contentRef = useRef<HTMLDivElement>(null);

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className={`relative w-full max-w-5xl mx-auto ${className || ""}`}>
      <div className="absolute left-0 md:left-8 top-0 bottom-0">
        <svg
          viewBox="0 0 20 1000"
          width="20"
          height="100%"
          className="absolute top-0 left-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background path with slight curve */}
          <motion.path
            d="M 10 0 Q 15 250, 10 500 Q 5 750, 10 1000"
            stroke="url(#bgGradient)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Animated progress path */}
          <motion.path
            d="M 10 0 Q 15 250, 10 500 Q 5 750, 10 1000"
            stroke="url(#activeGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            style={{
              pathLength: pathLength,
            }}
            filter="url(#glow)"
          />
          <defs>
            <linearGradient id="bgGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.2" />
              <stop offset="50%" stopColor="rgb(168, 85, 247)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="activeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(168, 85, 247)" />
              <stop offset="50%" stopColor="rgb(147, 51, 234)" />
              <stop offset="100%" stopColor="rgb(168, 85, 247)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
        </svg>
        {/* Animated dot */}
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], ["0%", "calc(100% - 15px)"]),
            x: useTransform(scrollYProgress, 
              [0, 0.25, 0.5, 0.75, 1], 
              ["10px", "15px", "10px", "5px", "10px"]
            ),
          }}
          className="absolute top-0"
        >
          <div className="w-[15px] h-[15px] rounded-full bg-gradient-to-br from-starlight-400 to-purple-600 shadow-[0_0_30px_rgba(168,85,247,0.9)] border-2 border-white/30" />
        </motion.div>
      </div>
      <div ref={contentRef} className="pl-8 md:pl-24">
        {children}
      </div>
    </div>
  );
};
