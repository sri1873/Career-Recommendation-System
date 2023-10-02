import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import './App.css';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="navbar border-2 border-red-500 h-[10vh] p-4">Navbar</div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
