import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from './Components/Navigation'; 
import './index.css';
import Details from "./Components/Details";
import SideNav from "./Components/sideNav";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";

ReactDOM.createRoot( document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="details/:id" element={<Details />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
 
);
