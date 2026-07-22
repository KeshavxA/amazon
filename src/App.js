import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import Login from './components/Login';
import Payment from './components/Payment';
import Orders from './components/Orders';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<><Header /><Orders /><Footer /></>} />
          <Route path="/payment" element={<><Header /><Payment /><Footer /></>} />
          <Route path="/checkout" element={<><Header /><Checkout /><Footer /></>} />
          <Route path="/" element={<><Header /><Home /><Footer /></>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
