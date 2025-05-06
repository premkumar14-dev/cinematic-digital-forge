
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
  isVisible?: boolean;
  type?: "word" | "letter" | "line";
  animation?: "fade" | "slide" | "scale";
};

export function AnimatedText({
  text,
  className,
  delay = 0,
  isVisible = true,
  type = "word",
  animation = "fade",
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !isVisible) return;
    
    const container = containerRef.current;
    const elements = container.querySelectorAll('.animate-element');
    
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('opacity-100');
        
        if (animation === 'fade') {
          el.classList.add('animate-fade-in');
        } else if (animation === 'slide') {
          el.classList.add('animate-slide-in-right');
        } else if (animation === 'scale') {
          el.classList.add('animate-scale-in');
        }
      }, delay + (index * 100));
    });
    
  }, [isVisible, delay, animation]);

  const renderContent = () => {
    if (type === "word") {
      return text.split(" ").map((word, index) => (
        <span
          key={index}
          className="animate-element inline-block opacity-0 mr-1.5"
        >
          {word}
        </span>
      ));
    } else if (type === "letter") {
      return text.split("").map((letter, index) => (
        <span
          key={index}
          className="animate-element inline-block opacity-0"
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ));
    } else {
      // Default to line
      return (
        <span className="animate-element block opacity-0">{text}</span>
      );
    }
  };

  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)}>
      {renderContent()}
    </div>
  );
}

export default AnimatedText;
