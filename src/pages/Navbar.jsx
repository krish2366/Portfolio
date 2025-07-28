import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          <Link to="/">Krish</Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-6"
        >
          <Link to="/" className="hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-cyan-400 transition-colors">
            About
          </Link>
          <Link
            to="/projects"
            className="hover:text-cyan-400 transition-colors"
          >
            Projects
          </Link>
          <Link to="/contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
