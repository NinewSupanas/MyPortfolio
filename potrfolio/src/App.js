import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Project from './component/Project';
import Activity from './component/Activity';
import Contact from './component/Contact';
import NavbarComponent from './component/NavbarComponent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
         <Route path="/" element={<Header />} />  
         <Route path="/Project" element={<Project />} />  
         <Route path="/Activity" element={<Activity />} /> 
         <Route path="/Contact" element={<Contact />} /> 
      </Routes> 
    </Router>
  );
};

export default App;
