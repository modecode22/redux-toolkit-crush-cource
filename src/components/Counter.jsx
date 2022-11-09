import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDecrement, handleIncrement } from "../redux/featchers/counterSlice";
const Counter = () => {
  const dispatch = useDispatch()
  const value =  useSelector(state=>state.counter.value)
  console.log('====================================');
  console.log(value);
  console.log('====================================');
  return (
    <div className="flex items-center justify-center gap-5 p-5">
      <button
        className="w-8 h-8 bg-black hover:bg-orange-500  shadow-sm shadow-black hover:shadow-none hover:text-black duration-100 p-1 rounded-lg font-bold text-orange-500"
        onClick={() => {
          dispatch(handleIncrement(1));
        }}
      >
        +
      </button>
      <div className="bg-slate-300 rounded-lg flex items-center justify-center h-10 w-10 font-bold text-black">
        {value}
      </div>

      <button
        className="w-8 h-8 bg-black shadow-sm shadow-black hover:shadow-none hover:bg-orange-500   hover:text-black duration-100 p-1 rounded-lg font-bold text-orange-500"
        onClick={() => {
          dispatch(handleDecrement(1));
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
