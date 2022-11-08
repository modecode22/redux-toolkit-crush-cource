import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handelLogout, handelLogin } from "../redux/featchers/auth/authSlice";


const Header = ({ counter}) => {
  const dispatch = useDispatch()
  const isLogged = useSelector(state=> state.auth.isLogged) 
  console.log('====================================');
  console.log(isLogged);
  console.log('====================================');
  return (
    <div className="shadow-sm shadow-black bg-orange-500 flex items-center justify-between  p-5 h-16">
      <div>{counter}</div>
      {isLogged ? (
        <div className="flex gap-5  justify-center items-center">
          <h1 className=" font-black text-4xl">hello</h1>
          <button
            className="bg-black border-2  border-white hover:text-white duration-300 p-1 rounded-lg font-bold text-orange-500"
            onClick={() => {
              dispatch(handelLogout());
            }}
          >
            logout
          </button>
        </div>
      ) : (
        <button
          className="bg-black p-1 rounded-lg font-bold text-orange-500 duration-300 hover:border-2  hover:border-white hover:text-white"
          onClick={() => {
            dispatch(handelLogin());
          }}
        >
          login
        </button>
      )}
    </div>
  );
};

export default Header;
