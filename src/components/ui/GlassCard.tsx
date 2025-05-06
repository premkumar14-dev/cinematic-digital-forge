
import React from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
};

export function GlassCard({ 
  children, 
  className, 
  hoverEffect = false,
  onClick 
}: GlassCardProps) {
  return (
    <div 
      className={cn(
        "glass-effect rounded-lg p-6", 
        hoverEffect && "hover-lift cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default GlassCard;
