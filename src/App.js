import React from 'react'
import './App.css';
import Todos from './components/Todos';


function App() {
  return (
    <div className="">
      <div className="p-6 bg-fuchsia-600">
      <h1 className="text-3xl font-bold text-center">Welcome to Todos 🚀 </h1>
      </div>
      <Todos/>
    </div>
  );
}

export default App;
