import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Eligibility from "./pages/Eligibility";
import Contact from "./pages/Contact";

import './index.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <div><Link to="/">EduJobMatch</Link></div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/eligibility">Eligibility</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/eligibility" element={<Eligibility />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
