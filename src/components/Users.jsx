import React , {useState} from 'react'

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([])

  const getUsers =async () =>{
    setLoading(true)
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    setUsers(data)
    setLoading(false)
  }
  return (
    <div className=" flex flex-col items-center justify-center gap-5">
      <button
        className="bg-black border-2  border-white hover:text-white duration-300 p-1 shadow-black shadow-sm rounded-lg font-bold text-orange-500"
        onClick={getUsers}
        disabled={loading}
      >
        {!loading ? "get users" : "loading ..."}
      </button>

      <ul className="flex flex-col items-center justify-center bg-slate-300 p-5 rounded-lg shadow-black shadow-sm">
        {users.map((user) => (
          <li key={user.id}> {user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users