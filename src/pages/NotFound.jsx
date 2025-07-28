import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeftCircle } from "react-icons/fi";

const NotFound = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-6 text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-xl text-center"
      >
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-8">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-semibold mb-4">
          Oops! Page Not Found.
        </p>
        <p className="text-slate-400 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-cyan-500/50 transition"
          >
            <FiArrowLeftCircle size={20} />
            Go Back Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
