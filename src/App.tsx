import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import './Components/styles/app.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import RequireAuth from './helpers/RequireAuth';
import { AuthState } from "./types";
import CareerFitting from './Components/CareerFitting/CareerFitting';
import Profile from './Components/Profile';

function App() {
  const user: boolean = useSelector((state: AuthState) => state.isValid);
  return (
    <BrowserRouter>
      <div className="main-container">

        {user ? <Navbar /> : ""}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<RequireAuth />}>
            <Route path='/' element={<Home />} />
            <Route path='/careerfitting' element={<CareerFitting />} />
            <Route path='/profile' element={<Profile />} />
          </Route>


        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
