import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Jobs from './pages/Jobs';
import Exams from './pages/Exams';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1e1e1e] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/exams" element={<Exams />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
