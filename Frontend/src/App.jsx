import React from "react";
import Home from "./home/Home";
import Courses  from "./Courses/Courses"
import Signup from "./components/Signup";
import {Route, Routes } from "react-router-dom"
import Contect from "./components/Contect";
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";
import { Navigate } from "react-router-dom";
  function App() {
  const [authUser, setAuthUser] = useAuth();
  
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white"> 
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={authUser ? <Courses/>:<Navigate to="/signup"/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contect" element={<Contect/>}/>
      </Routes>
      <Toaster/>
    </div>
    </>
  );
}

export default App;