import React from "react";

const Button = ({ 
  text, 
  onClick, 
  color = "burnt-sienna",
  hoverEffect = true,
  variant = "primary" // Added variant prop
}) => {
  const colorClasses = {
    "burnt-sienna": "bg-burnt-sienna hover:bg-burnt-sienna/90",
    "peru": "bg-peru hover:bg-peru/90",
  };

  // Style classes based on variant
  const variantClasses = {
    primary: "text-lotion py-4 px-8 rounded-full",
    secondary: "text-lotion text-[16px] py-1 px-4 rounded-full" // New secondary style
  };

  return (
    <button
      className={`transition-all ${
        colorClasses[color] || colorClasses["burnt-sienna"]
      } ${variantClasses[variant] || variantClasses["primary"]} ${
        hoverEffect ? "hover:brightness-110 cursor-pointer" : ""
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;