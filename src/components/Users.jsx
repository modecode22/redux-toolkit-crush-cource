import React  from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { getUsers } from './../redux/featchers/usersSlice';

const Users = () => {
  const dispatch = useDispatch()
  const loading= useSelector(state=>state.users.loading)
  const users = useSelector((state) => state.users.data);


  return (
    <div className=" flex flex-col items-center justify-center gap-5">
      <button
        className="bg-black hover:bg-orange-500   hover:text-black duration-100 p-1 rounded-lg font-bold text-orange-500 shadow-sm shadow-black hover:shadow-none"
        onClick={() => {
          dispatch(getUsers());
        }}
        disabled={loading}
      >
        {!loading ? "get users" : "loading ..."}
      </button>

      <ul className="flex flex-col items-center justify-center bg-slate-300 p-5 gap-2 rounded-lg shadow-black shadow-sm">
        {users.map((user) => (
          <li
            className="bg-black font-bold text-orange-500 w-full text-center p-1 hover:bg-orange-500 hover:text-black  duration-100 cursor-pointer  rounded-lg "
            key={user.id}
          >
            {" "}
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users