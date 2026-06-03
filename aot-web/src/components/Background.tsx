import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ParticleType {
  x: number;
  y: number;
  radius: number;
  color: string;
  isOrbiter: boolean;
  orbitRadius: number;
  angle: number;
  speed: number;
}

const Background: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // ----------------------------------------------------
    // Layer 1: Three.js Shader Background
    // ----------------------------------------------------
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float iTime;
        uniform vec2 iResolution;

        #define NUM_OCTAVES 3

        float rand(vec2 n) {
          return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
        }

        float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 u = fract(p);
          u = u*u*(3.0-2.0*u);

          float res = mix(
            mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
            mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x), u.y);
          return res * res;
        }

        float fbm(vec2 x) {
          float v = 0.0;
          float a = 0.3;
          vec2 shift = vec2(100.0);
          mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
          for (int i = 0; i < NUM_OCTAVES; ++i) {
            v += a * noise(x);
            x = rot * x * 2.0 + shift;
            a *= 0.4;
          }
          return v;
        }

        void main() {
          vec2 shake = vec2(sin(iTime * 1.2) * 0.005, cos(iTime * 2.1) * 0.005);
          vec2 p = ((gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5) / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0);
          vec2 v;
          vec4 o = vec4(0.0);

          float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5;

          for (float i = 0.0; i < 35.0; i++) {
            v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5 + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);
            float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - (i / 35.0));
            vec4 auroraColors = vec4(
              0.1 + 0.3 * sin(i * 0.2 + iTime * 0.4),
              0.3 + 0.5 * cos(i * 0.3 + iTime * 0.5),
              0.7 + 0.3 * sin(i * 0.4 + iTime * 0.3),
              1.0
            );
            vec4 currentContribution = auroraColors * exp(sin(i * i + iTime * 0.8)) / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
            float thinnessFactor = smoothstep(0.0, 1.0, i / 35.0) * 0.6;
            o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
          }

          o = tanh(pow(o / 100.0, vec4(1.6)));
          gl_FragColor = o * 1.5;
        }
      `
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // ----------------------------------------------------
    // Layer 2: 2D Celestial Orb Canvas
    // ----------------------------------------------------
    const canvas = canvasRef.current;
    if (!canvas) {
      // Clean up Three.js if canvas isn't available
      container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: ParticleType[] = [];
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const resizeHandler = () => {
      // Resize Three.js
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);

      // Resize 2D Canvas
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeHandler();
    window.addEventListener('resize', resizeHandler);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const centerPoint = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
    };

    class Particle implements ParticleType {
      x: number;
      y: number;
      radius: number;
      color: string;
      isOrbiter: boolean;
      orbitRadius: number;
      angle: number;
      speed: number;

      constructor(x: number, y: number, radius: number, color: string, isOrbiter = false) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.isOrbiter = isOrbiter;
        // Tighter orbit for non-obtrusive UI (40px to 100px)
        this.orbitRadius = Math.random() * 60 + 40;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.015 + 0.008;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        // Subtle glow effect
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      update(center: { x: number; y: number }) {
        if (this.isOrbiter) {
          this.angle += this.speed;
          this.x = center.x + Math.cos(this.angle) * this.orbitRadius;
          this.y = center.y + Math.sin(this.angle) * this.orbitRadius;
        }
        this.draw();
      }
    }

    const initParticles = () => {
      particles = [];
      // Subtle core (radius 5 instead of 20)
      particles.push(
        new Particle(centerPoint.x, centerPoint.y, 5, 'rgba(255, 255, 255, 0.95)')
      );
      // Fewer orbiters (25 instead of 50) for a cleaner backdrop
      for (let i = 0; i < 25; i++) {
        particles.push(
          new Particle(
            0,
            0,
            Math.random() * 1.2 + 0.6, // Smaller nodes
            `hsl(${Math.random() * 50 + 195}, 80%, 70%)`,
            true
          )
        );
      }
    };
    initParticles();

    // ----------------------------------------------------
    // Shared Animation Loop
    // ----------------------------------------------------
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Render Three.js WebGL Shader Background
      material.uniforms.iTime.value += 0.008; // Slightly slower shader animation for relaxed feel
      renderer.render(scene, camera);

      // Clear 2D Canvas completely (transparent) to avoid overlay darkening
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        centerPoint.targetX = mouse.x;
        centerPoint.targetY = mouse.y;
        centerPoint.x += (centerPoint.targetX - centerPoint.x) * 0.05;
        centerPoint.y += (centerPoint.targetY - centerPoint.y) * 0.05;

        // Draw central core
        particles[0].x = centerPoint.x;
        particles[0].y = centerPoint.y;
        particles[0].draw();

        // Update & draw orbiters
        for (let i = 1; i < particles.length; i++) {
          particles[i].update(centerPoint);
        }
      }
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('mousemove', handleMouseMove);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
      {/* Layer 1: Three.js Shader */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />
      {/* Layer 2: Subtle Celestial Orb */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default Background;