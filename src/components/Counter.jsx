import React from "react";

const Counter = ({ handleDecrement, handleIncrement }) => {
  return (
    <div className="flex items-center justify-center gap-5 p-5">
      <button
        className="w-8 h-8 bg-black border-2  border-white hover:text-white duration-300 p-1 shadow-black shadow-sm rounded-lg font-bold text-orange-500"
        onClick={handleIncrement}
      >
        +
      </button>
      <button
        className="w-8 h-8 bg-black border-2  border-white hover:text-white duration-300 p-1 shadow-black shadow-sm rounded-lg font-bold text-orange-500"
        onClick={handleDecrement}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
