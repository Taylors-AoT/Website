import React, { useEffect, useRef } from 'react';

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
    }

    const particles: Particle[] = [];
    const particleCount = 100; // Increased count for visibility

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 1, // Larger particles
          speedY: Math.random() * 0.8 + 0.2, // Slightly faster
          speedX: Math.random() * 0.4 - 0.2, // Slight horizontal drift
          opacity: Math.random() * 0.5 + 0.3, // Brighter
        });
      }
    };

    const resizeHandler = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    // Initial setup
    resizeHandler();
    window.addEventListener('resize', resizeHandler);

    const animate = () => {
      // Clear screen with solid black
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      // Draw Cosmic Glow at bottom
      // Center X, Bottom Y
      const gradient = ctx.createRadialGradient(
        width / 2, height + 100, 0, 
        width / 2, height + 100, Math.max(width, height) * 0.8
      );
      gradient.addColorStop(0, 'rgba(6, 182, 212, 0.25)'); // Cyan center
      gradient.addColorStop(0.4, 'rgba(59, 130, 246, 0.15)'); // Blue middle
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw Particles
      ctx.fillStyle = 'white'; // Fallback
      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;

        // Reset if out of bounds
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x > width + 10) p.x = -10;
        if (p.x < -10) p.x = width + 10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        // Use a gradient or simple rgba for the particle
        ctx.fillStyle = `rgba(200, 240, 255, ${p.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeHandler);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Changed z-index from -10 to 0 to ensure visibility while staying behind content (which should be z-10+)
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default Background;