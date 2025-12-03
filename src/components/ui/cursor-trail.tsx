import React, { useEffect, useRef } from 'react';

interface CursorTrailProps {
  color?: string;
  size?: number;
}

export const CursorTrail: React.FC<CursorTrailProps> = ({ 
  color = 'rgba(168, 85, 247, 0.4)', 
  size = 20 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    size: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouseX = 0;
    let mouseY = 0;
    let frame = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Add new particle every few frames
      if (frame % 2 === 0) {
        particles.current.push({
          x: mouseX,
          y: mouseY,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          life: 1,
          maxLife: 60,
          size: Math.random() * size + 5,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.current = particles.current.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 1 / particle.maxLife;

        if (particle.life <= 0) return false;

        // Draw particle
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, 'transparent');

        ctx.globalAlpha = particle.life;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * particle.life, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      frame++;
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [color, size]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
