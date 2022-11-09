import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handelLogout, handelLogin } from "../redux/featchers/auth/authSlice";


const Header = () => {

  const dispatch = useDispatch()
  const isLogged = useSelector(state=> state.auth.isLogged) 
  const counter = useSelector(state=>state.counter.value)
  console.log('islogged====================================');
  console.log(isLogged);
  console.log("islogged====================================");
  return (
    <div className="shadow-sm shadow-black bg-white flex items-center justify-between  p-5 h-16">
      <div>{counter}</div>
      {isLogged ? (
        <div className="flex gap-5  justify-center items-center">
          <h1 className=" font-black text-4xl">hello</h1>
          <button
            className="bg-black shadow-sm shadow-black hover:shadow-none hover:bg-orange-500   hover:text-black duration-100 p-1 rounded-lg font-bold text-orange-500"
            onClick={() => {
              dispatch(handelLogout());
            }}
          >
            logout
          </button>
        </div>
      ) : (
        <button
          className="shadow-sm shadow-black hover:shadow-none bg-black hover:bg-orange-500   hover:text-black duration-100 p-1 rounded-lg font-bold text-orange-500"
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
