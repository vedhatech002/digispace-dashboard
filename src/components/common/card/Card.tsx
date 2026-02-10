import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`
        h-full
        rounded-2xl
        p-5
        border border-white/5
        backdrop-blur-sm
        bg-[rgba(24,64,61,0.45)]
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
