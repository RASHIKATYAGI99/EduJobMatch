import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex gap-6 p-4 bg-[#292929] shadow-lg">
      <Link to="/" className="text-lg font-semibold text-white hover:text-blue-400">Home</Link>
      <Link to="/about" className="text-lg font-semibold text-white hover:text-blue-400">About</Link>
      <Link to="/jobs" className="text-lg font-semibold text-white hover:text-blue-400">Jobs</Link>
      <Link to="/exams" className="text-lg font-semibold text-white hover:text-blue-400">Exams</Link>
    </nav>
  );
}

export default Navbar;
