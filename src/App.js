import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<><Header /><Checkout /><Footer /></>} />
          <Route path="/" element={<><Header /><Home /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
