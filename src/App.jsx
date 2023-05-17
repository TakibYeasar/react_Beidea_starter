import React from 'react';
import './App.css';
import "./main.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Aboutpage, Contactpage, Hompage, Servicepage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hompage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/services" element={<Servicepage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
