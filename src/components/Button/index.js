import React from "react";

const Button = ({ title, type = "button", ...props }) => {
  return (
    <button type={type} {...props}>
      {title}
    </button>
  );
};

export default Button;
