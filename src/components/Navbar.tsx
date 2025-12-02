import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const Navbar: React.FC = () => {
  const navItems = [
    { title: 'Start', href: '#hero' },
    { title: 'Background', href: '#background' },
    { title: 'Story', href: '#story' },
    { title: 'Cases', href: '#cases' },
    { title: 'Impact', href: '#impact' },
    { title: 'Today', href: '#today' },
    { title: 'Sources', href: '#sources' },
  ];

  let mouseX = useMotionValue<number>(Infinity);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="inline-flex items-end gap-3 bg-black/40 backdrop-blur-2xl px-4 pb-3 pt-4 rounded-full border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)]"
      >
        {navItems.map((item) => (
          <NavItem key={item.href} mouseX={mouseX} {...item} />
        ))}
      </motion.nav>
    </div>
  );
};

interface NavItemProps {
  mouseX: ReturnType<typeof useMotionValue<number>>;
  title: string;
  href: string;
}

function NavItem({ mouseX, title, href }: NavItemProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [50, 90, 50]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [32, 50, 32]);

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-center text-xs font-medium text-neutral-300 hover:text-white rounded-full hover:bg-white/10 transition-colors duration-200"
    >
      {isHovered && (
        <motion.div
          layoutId="navbar-hover"
          className="absolute inset-0 bg-gradient-to-r from-starlight-500/20 to-purple-500/20 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        />
      )}
      <span className="relative z-10">{title}</span>
    </motion.a>
  );
}
