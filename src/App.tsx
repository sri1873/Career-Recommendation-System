import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Home />} />

      </Routes>
  </div>

    </BrowserRouter>
  );
}

export default App;
