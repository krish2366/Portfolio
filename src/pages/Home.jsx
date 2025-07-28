import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowRight,
  FiCode,
  FiUser,
  FiBriefcase,
} from "react-icons/fi";
import me from "../images/krish.jpeg"

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pt-32 pb-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                Full Stack
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Developer & ML Enthusiast
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-slate-300 mb-8 leading-relaxed"
              >
                I build seamless digital experiences and intelligent systems using modern
                technologies. Passionate about clean code, intuitive design, and creating
                impactful solutions through full stack development and machine learning.
              </motion.p>

              <motion.div variants={itemVariants} className="flex gap-4 mb-8">
                <Link to="/projects">
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2">
                    View My Work <FiArrowRight />
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="border border-slate-600 px-8 py-3 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                    Get In Touch
                  </button>
                </Link>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4">
                <a
                  href="https://github.com/krish2366"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-xl"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/krish-907187291/"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-xl"
                >
                  <FiLinkedin />
                </a>
                <a
                  href="mailto:krish236630@gmail.com"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-xl"
                >
                  <FiMail />
                </a>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative w-full h-full bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center">
                  <img src={me} className="rounded-2xl border border-slate-700"/>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <FiUser className="text-white text-xl" />
                </div>
                <h2 className="text-2xl font-bold">About Me</h2>
              </div>

              <p className="text-slate-300 mb-6 leading-relaxed">
                Full Stack Developer with 2+ years of experience building responsive and scalable web applications using the MERN stack. I’m passionate about clean architecture, elegant design, and solving real-world problems,from building smart ML-powered apps to tackling algorithmic challenges on LeetCode, GFG, and competitive programming platforms. Also gaining strong insights into system design and scalable architecture.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["React", "Node.js", "MongoDB", "Python", "Machine Learning","Problem Solving"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-700 rounded-full text-sm text-cyan-400 border border-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <Link to="/about">
                <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 group-hover:translate-x-2 transition-transform duration-300">
                  Learn More <FiArrowRight />
                </button>
              </Link>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-purple-400/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg flex items-center justify-center">
                  <FiBriefcase className="text-white text-xl" />
                </div>
                <h2 className="text-2xl font-bold">Featured Projects</h2>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div>
                    <h3 className="font-semibold">Scholar Shop (E-Commerce Platform)</h3>
                    <p className="text-sm text-slate-400">
                      React, Node.js, PostgreSQL, Socket.io
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <div>
                    <h3 className="font-semibold">Tripzy (Tour and Travel Platform)</h3>
                    <p className="text-sm text-slate-400">
                      React, Node.js, MongoDB, OAuth, Razorpay
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <div>
                    <h3 className="font-semibold">
                      Virtual Cloth Try-On (Ongoing Project)
                    </h3>
                    <p className="text-sm text-slate-400">
                      Python, Pytorch, OpenCV, Scikit-Image, DensePose
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/projects">
                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 group-hover:translate-x-2 transition-transform duration-300">
                  View All Projects <FiArrowRight />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's build something amazing. I'm always excited to take on new
            challenges and create exceptional digital experiences.
          </p>
          <Link to="/contact">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
              Start a Project
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
