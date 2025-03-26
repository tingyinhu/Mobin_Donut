import React from "react";

const Button = ({ 
  text, 
  onClick, 
  color = "burnt-sienna",
  hoverEffect = true 
}) => {
  const colorClasses = {
    "burnt-sienna": "bg-burnt-sienna hover:bg-burnt-sienna/90",
    "peru": "bg-peru hover:bg-peru/90",
  };

  return (
    <button
      className={`text-lotion py-4 px-8 rounded-full transition-all ${
        colorClasses[color] || colorClasses["burnt-sienna"]
      } ${hoverEffect ? "hover:brightness-110 cursor-pointer" : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;