
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/ui/AnimatedText";
import { GradientBackground } from "@/components/ui/GradientBackground";
import { Link } from "react-router-dom";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  
  // Background animation setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particles setup
    const particles: { x: number; y: number; radius: number; color: string; vx: number; vy: number; originalX: number; originalY: number }[] = [];
    const particleCount = 50;
    const colors = ['rgba(0, 159, 170, 0.3)', 'rgba(63, 100, 215, 0.2)', 'rgba(97, 67, 133, 0.2)'];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 2 + 1;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const vx = (Math.random() - 0.5) * 0.5;
      const vy = (Math.random() - 0.5) * 0.5;
      
      particles.push({
        x,
        y,
        radius,
        color,
        vx,
        vy,
        originalX: x,
        originalY: y
      });
    }
    
    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx = -particle.vx;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy = -particle.vy;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      // Draw connections
      particles.forEach(particleA => {
        particles.forEach(particleB => {
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.strokeStyle = `rgba(100, 100, 150, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      
      // Request next frame
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <GradientBackground className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background animation canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0"
        style={{ opacity: 0.7 }}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-enterprise-teal/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-enterprise-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-enterprise-light-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="enterprise-container relative z-10 py-20 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main headline */}
          <div className="mb-8">
            <AnimatedText
              text="Engineering the Future."
              type="line"
              animation="fade"
              isVisible={isVisible}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-enterprise-blue mb-4"
            />
            <AnimatedText
              text="Delivering Global-Scale Innovation."
              type="line"
              animation="fade"
              delay={800}
              isVisible={isVisible}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-enterprise"
            />
          </div>

          {/* Subheadline */}
          <AnimatedText 
            text="At GORANTLA INFOTECH SOLUTIONS, we architect next-gen software ecosystems, accelerate cloud transformation, and build scalable digital infrastructures for global enterprises."
            delay={1600}
            isVisible={isVisible}
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          />

          {/* CTAs */}
          <div className={cn(
            "flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 transform transition-all duration-500",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <Link to="/services">
              <Button 
                size="lg" 
                className="group bg-enterprise-blue hover:bg-enterprise-blue/90 text-white"
              >
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline"
                className="group hover:text-enterprise-teal border-enterprise-teal/30 hover:border-enterprise-teal"
              >
                Let's Talk
              </Button>
            </Link>
          </div>

          {/* Scroll cue */}
          <div className={cn(
            "mt-20 flex flex-col items-center justify-center transition-all duration-500 delay-300",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex items-start justify-center p-1">
              <div className="w-1.5 h-2 bg-gray-400 rounded-full animate-[bounce_2s_infinite]" />
            </div>
            <p className="text-sm text-gray-400 mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>
    </GradientBackground>
  );
}

export default Hero;
