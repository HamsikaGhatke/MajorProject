import React from "react";
import Home from "./Home";
import Test from "./Test";
import Navbar from "./Navbar";
//import {Routes,Route, Navigate} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
//import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <>
 
    <Navbar />
    <Home />
    
    </>
  );
}

export default App;
