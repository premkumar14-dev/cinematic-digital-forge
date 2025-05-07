
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
  
  // Enhanced 3D grid background animation setup
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
    
    // Create a more professional 3D grid effect
    const gridPoints: { x: number; y: number; z: number; size: number; speed: number; color: string }[] = [];
    const gridSize = Math.max(20, Math.floor(window.innerWidth / 100));
    const colors = [
      'rgba(0, 159, 170, 0.6)',
      'rgba(63, 100, 215, 0.5)',
      'rgba(97, 67, 133, 0.4)'
    ];
    
    // Generate 3D grid
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const x = (canvas.width / gridSize) * i;
        const y = (canvas.height / gridSize) * j;
        const z = Math.random() * 0.5 + 0.5; // Depth factor
        const size = Math.random() * 2 + 1;
        const speed = Math.random() * 0.001 + 0.0005;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        gridPoints.push({ x, y, z, size, speed, color });
      }
    }
    
    // Animation variables
    let time = 0;
    
    // Animation loop with 3D grid effect
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas with a semi-transparent fill for trail effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      time += 0.005;
      
      // Update and draw grid points
      gridPoints.forEach((point, index) => {
        // Calculate 3D wave effect
        const waveX = Math.sin(time + index * 0.1) * 15;
        const waveY = Math.cos(time + index * 0.1) * 15;
        
        // Calculate perspective scaling
        const scale = point.z;
        const size = point.size * scale;
        
        // Draw point
        ctx.beginPath();
        ctx.arc(
          point.x + waveX * scale,
          point.y + waveY * scale,
          size,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = point.color;
        ctx.fill();
        
        // Update z (depth) for animation
        point.z += point.speed;
        
        // Reset if too close or too far
        if (point.z > 1.5 || point.z < 0.2) {
          point.speed = -point.speed;
        }
        
        // Draw connecting lines to nearby points
        gridPoints.forEach((otherPoint) => {
          const dx = (point.x + waveX * scale) - (otherPoint.x + Math.sin(time + index * 0.1) * 15 * otherPoint.z);
          const dy = (point.y + waveY * scale) - (otherPoint.y + Math.cos(time + index * 0.1) * 15 * otherPoint.z);
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < canvas.width / gridSize * 1.5) {
            ctx.beginPath();
            ctx.moveTo(point.x + waveX * scale, point.y + waveY * scale);
            ctx.lineTo(
              otherPoint.x + Math.sin(time + index * 0.1) * 15 * otherPoint.z,
              otherPoint.y + Math.cos(time + index * 0.1) * 15 * otherPoint.z
            );
            
            // Line opacity based on distance and z-depth
            const opacity = (1 - distance / (canvas.width / gridSize * 1.5)) * 0.15 * point.z * otherPoint.z;
            ctx.strokeStyle = `rgba(100, 140, 200, ${opacity})`;
            ctx.lineWidth = 0.5 * Math.min(point.z, otherPoint.z);
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
      {/* Enhanced 3D grid background animation */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0"
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[20%] w-64 h-64 rounded-full bg-gradient-to-r from-enterprise-teal/20 to-enterprise-blue/10 backdrop-blur-3xl animate-float-slow" />
        <div className="absolute top-[30%] left-[10%] w-80 h-80 rounded-full bg-gradient-to-tr from-enterprise-purple/15 to-transparent backdrop-blur-xl animate-float-medium" />
        <div className="absolute bottom-[20%] right-[30%] w-40 h-40 rounded-full bg-gradient-to-bl from-enterprise-light-blue/20 to-transparent backdrop-blur-2xl animate-float-fast" />
      </div>

      <div className="enterprise-container relative z-10 py-20 mt-16">
        {/* Tech wireframe overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-5"></div>
        
        <div className="max-w-3xl mx-auto text-center backdrop-blur-sm p-8 rounded-xl bg-white/5">
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

          {/* Enhanced CTAs */}
          <div className={cn(
            "flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 transform transition-all duration-500",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <Link to="/services" className="group">
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-enterprise-blue hover:bg-enterprise-blue/90 text-white px-8 py-6"
              >
                <span className="relative z-10">Explore Services</span>
                <span className="absolute inset-0 bg-gradient-to-r from-enterprise-teal to-enterprise-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline"
                className="group relative hover:text-enterprise-teal border-enterprise-teal/30 hover:border-enterprise-teal px-8 py-6 overflow-hidden"
              >
                <span className="relative z-10">Let's Talk</span>
                <span className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
            </Link>
          </div>

          {/* Enhanced scroll cue */}
          <div className={cn(
            "mt-20 flex flex-col items-center justify-center transition-all duration-500 delay-300",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            <div className="w-8 h-14 rounded-full border-2 border-gray-400 flex items-start justify-center p-1">
              <div className="w-2 h-3 bg-gray-400 rounded-full animate-[bounce_2s_infinite]" />
            </div>
            <p className="text-sm text-gray-400 mt-2 font-light tracking-wider">Scroll to explore</p>
          </div>
        </div>
      </div>
    </GradientBackground>
  );
}

export default Hero;
