import './App.css'
import { useState } from 'react';
import Header from './components/Header'
import Counter from './components/Counter';
import Users from './components/Users';

function App() {
  const [counter, setCounter] = useState(0)
  const [isLogged, setIsLogged] = useState(false)

  const handleIncrement = (val) => {
    setCounter(counter + val);
  };

  const handleDecrement = (val) => {
    setCounter(counter - val);
  };

  const handleLogin = ()=>{
    setIsLogged(true)
  }

  
  const handleLogout = () => {
    setIsLogged(false);
  };



  return (
    <div className="bg-orange-100 min-h-screen">
      <Header
        counter={counter}
        isLogged={isLogged}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <Counter
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      />
      <Users/>
    </div>
  );
}

export default App
