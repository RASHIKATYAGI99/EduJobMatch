// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Eligibility from './pages/Eligibility';
import Contact from './pages/Contact';
import NotFound from "./pages/NotFound";
import Jobs from './pages/Jobs';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/eligibility" element={<Eligibility />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/jobs" element={<Jobs />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
