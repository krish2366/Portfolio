import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiStar,
  FiFilter,
} from "react-icons/fi";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiSocketdotio,
  SiOpencv,
  SiSpringboot,
  SiSolidity,
  SiWeb3Dotjs,
  SiTailwindcss,
  SiRazorpay,
  SiExpress,
  SiFlask,
  SiScikitlearn,
  SiGoogle,
  SiPandas,
  SiGraphql
} from "react-icons/si";
import { useState } from "react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const projects = [
    {
      id: 1,
      title: "Scholar Shop",
      description:
        "A peer-to-peer item buy-and-sell platform for my college students. Includes real-time chat, secure authentication, and admin moderation features.",
      category: "fullstack",
      image: "/images/projects/scholarshop.png",
      technologies: [SiReact, SiNodedotjs, SiPostgresql, SiSocketdotio],
      techNames: ["React", "Node.js", "PostgreSQL", "Socket.IO"],
      github: "https://github.com/krish2366/ScholarShop",
      live: "",
      featured: true,
      stats: { users: "2K+", chats: "5K+", duration: "4 months" },
    },
    {
      id: 2,
      title: "Virtual Try-On for Clothing",
      description:
        "A gesture-controlled virtual try-on system that lets users try clothes digitally. Uses pose estimation and ML-based segmentation for realistic fitting.",
      category: "fullstack",
      image: "/images/projects/tryon.png",
      technologies: [SiReact, SiPython, SiOpencv, SiMongodb],
      techNames: ["React", "Python", "MediaPipe", "MongoDB"],
      github: "https://github.com/krish2366",
      live: "",
      featured: true,
      stats: { project: "On-going" },
    },
    {
      id: 3,
      title: "Block Estate",
      description:
        "A blockchain-based land registry and ownership transfer platform that replaces traditional paperwork with secure digital records using NFTs. It ensures transparency, eliminates fraud, and simplifies property transfers.",
      category: "fullstack",
      image: "/images/projects/blockestate.png",
      technologies: [SiReact, SiSpringboot, SiSolidity, SiWeb3Dotjs],
      techNames: ["React", "Spring Boot", "Solidity", "Web3.js"],
      github: "https://github.com/krish2366/BlockEstate_Vihaan",
      live: "",
      featured: true,
    },
    {
      id: 4,
      title: "Maal Masala",
      description:
        "A sleek news dashboard that fetches and displays real-time news using NewsAPI. It categorizes news articles into topics like technology, business, entertainment, and sports for quick and relevant access.",
      category: "frontend",
      image: "/images/projects/maalmasala.png",
      technologies: [SiReact, SiTailwindcss, SiJavascript],
      techNames: ["React", "Tailwind CSS", "NewsAPI"],
      github: "https://github.com/krish2366/Maal-Masala-using-newsapi",
      live: "",
      featured: false,
      stats: { categories: "6+", refresh: "real-time", duration: "3 weeks" },
    },
    {
      id: 5,
      title: "Tripzy",
      description:
        "A dynamic tour and travel platform offering curated holiday packages, flight and hotel listings, and secure payment integration. Includes an admin dashboard for managing listings, bookings, and user inquiries.",
      category: "fullstack",
      image: "/images/projects/tripzy.png",
      technologies: [SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiRazorpay],
      techNames: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Razorpay API"],
      github: "https://github.com/krish2366/travel",
      live: "",
      featured: true,
      stats: { packages: "100+", payment: "RazorPay", duration: "1 month" },
    },
    {
      id: 6,
      title: "BlogApp",
      description:
        "A full-featured blogging platform with user authentication, rich text editing, comment system, and CRUD functionalities. Built for performance and simplicity with clean UI and secure backend integration.",
      category: "fullstack",
      image: "/images/projects/blogapp.png",
      technologies: [SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss],
      techNames: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/krish2366/NoteHive",
      live: "",
      featured: false,
    },
    {
      id: 7,
      title: "DisasterLens",
      description:
        "A real-time disaster information aggregator that collects and categorizes data from social media, news portals, and public sources. Provides an interactive dashboard for quick disaster insights and response.",
      category: "fullstack",
      image: "/images/projects/disasterlens.png",
      technologies: [SiReact, SiNodedotjs, SiExpress, SiMongodb],
      techNames: ["React.js", "Node.js", "Express", "MongoDB", "REST APIs"],
      github: "https://github.com/krish2366/HackCrux_DisasterLens2.0",
      live: "",
      featured: true,
      stats: { sources: "5+", updates: "Real-time", duration: "3 weeks" }
    },
    {
      id: 9,
      title: "Caption Generator",
      description:
        "An intelligent caption generation tool that takes an image as input and returns a relevant caption using pre-trained Hugging Face transformers. Built with a lightweight Flask API and React frontend.",
      category: "ml",
      image: "/images/projects/caption-generator.png",
      technologies: [SiReact, SiPython, SiFlask, SiJavascript],
      techNames: ["React", "Flask", "Hugging Face Transformers", "Python"],
      github: "https://github.com/krish2366/Caption_Generator",
      live: "",
      featured: false,
      stats: { model: "Vision-to-Text", latency: "<5s", duration: "2 weeks" }
    },
    {
      id: 10,
      title: "SMS Spam Classifier",
      description:
        "A machine learning web app that classifies SMS messages as spam or not spam using natural language processing techniques. Trained on labeled datasets with preprocessing and model optimization.",
      category: "ml",
      image: "/images/projects/sms-spam-classifier.png",
      technologies: [SiPython, SiScikitlearn, ],
      techNames: ["Python", "Scikit-Learn"],
      github: "https://github.com/krish2366/sms_spam_classifiers",
      live: "",
      featured: false,
      stats: { accuracy: "92%", model: "Multinomial NB", precision: "99.9%" }
    },
    {
      id: 11,
      title: "Game Automation using Hand Gestures",
      description:
        "Automated basic browser and arcade games using real-time hand gesture recognition. Leveraged MediaPipe and OpenCV to track hand landmarks and map gestures to game controls like jump, move, and stop.",
      category: "ml",
      image: "/images/projects/game-automation.png",
      technologies: [SiPython, SiOpencv, SiGoogle],
      techNames: ["Python", "MediaPipe", "OpenCV"],
      github: "https://github.com/krish2366/GameAutomation",
      live: "",
      featured: false,
      stats: { gestures: "3+", latency: "<100ms", duration: "2 week" }
    },
    {
      id: 12,
      title: "Movie Recommender System",
      description:
        "Built a content-based movie recommendation engine using the TMDB dataset. It analyzes movie metadata and uses text vectorization and cosine similarity to suggest similar movies based on user input.",
      category: "ml",
      image: "/images/projects/movie-recommender.png",
      technologies: [SiPython, SiPandas, SiScikitlearn],
      techNames: ["Python", "Pandas", "scikit-learn", "CountVectorizer"],
      github: "https://github.com/krish2366/Movie-Recommender",
      live: "",
      featured: false,
      stats: { dataset: "TMDB 5K+", similarityMetric: "Cosine", duration: "1 week" }
    },
    {
      id: 13,
      title: "Livesync",
      description:
        "A collaborative document editing backend system inspired by Google Docs. Implemented real-time text synchronization and presence indication using GraphQL subscriptions and websockets.",
      category: "backend",
      image: "/images/projects/livesync.png",
      technologies: [SiGraphql, SiNodedotjs, SiMongodb],
      techNames: ["GraphQL", "Node.js", "WebSockets", "MongoDB"],
      github: "https://github.com/krish2366/Livesync",
      featured: false,
      live: "",
      stats: { realtime: "true", presence: "true", duration: "1 month" }
    }









  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "featured", label: "Featured" },
    { key: "fullstack", label: "Full Stack" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "ml", label: "Machine Learning" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return project.featured;
    return project.category === activeFilter;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pt-32 pb-16 px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            variants={itemVariants}
            className="text-5xl lg:text-6xl font-bold mb-6"
          >
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            A showcase of my best work, from full-stack applications to
            innovative solutions that solve real-world problems using Machine
            Learning. Each project represents a journey of learning, creativity,
            and technical excellence.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-8 text-slate-400"
          >
            <div className="flex items-center gap-2">
              <FiStar className="text-yellow-400" />
              <span>10+ Projects Completed</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Filter Section */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-12 overflow-x-auto"
          >
            <FiFilter className="text-slate-400 text-xl" />
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeFilter === filter.key
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400/50 group transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Placeholder for project image */}
                  <div className="w-full h-full flex items-center justify-center text-6xl text-slate-600">
                    💻
                  </div>

                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      className="w-8 h-8 bg-slate-900/80 rounded-full flex items-center justify-center text-white hover:bg-slate-700 transition-colors"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href={project.live}
                      
                      className={project.live ? `w-8 h-8 bg-slate-900/80 rounded-full flex items-center justify-center text-white hover:bg-slate-700 transition-colors` : "hidden"}
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((Tech, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 text-slate-400 hover:text-cyan-400 transition-colors"
                      >
                        <Tech />
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techNames.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-slate-700 rounded text-xs text-cyan-400 border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700">
                    {project.stats && Object.entries(project.stats).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <div className="text-sm font-bold text-cyan-400">
                          {value}
                        </div>
                        <div className="text-xs text-slate-400 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-slate-800/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-xl text-slate-300 mb-8">
            I'm always excited to work on new challenges and bring innovative
            ideas to life. Let's discuss how we can create something amazing
            together.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/contact">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                Start a Project
              </button>
            </a>
            <a href="https://github.com/username">
              <button className="border border-slate-600 px-8 py-4 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2">
                <FiGithub /> View GitHub
              </button>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
