import React from "react";

const Button = ({ icon, bgColor, color, text, borderRadius, size }) => {
  return (
    <div>
      <button
        type="button"
        style={{ color, backgroundColor: bgColor, borderRadius }}
        className={`
      text-${size} hover:drop-shadow-2xl p-3 `}
      >
        {icon} {text}
      </button>
    </div>
  );
};

export default Button;
