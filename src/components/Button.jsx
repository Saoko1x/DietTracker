import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type='button'
      className={`py-4 px-6 bg-blue-gradient rounded-full font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
    >
      Comienza Ahora
    </button>
  );
};

export default Button;
