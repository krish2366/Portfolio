import { motion } from "framer-motion";
import {
  FiCode,
  FiAward,
  FiDownload,
  FiMapPin,
  FiCalendar,
  FiUsers,
  FiTarget,
  FiZap,
} from "react-icons/fi";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiAmazonwebservices,
  SiExpress,
  SiTailwindcss,
  SiSocketdotio,
  SiGoogle,
  SiOpencv,
  SiGithub,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiScikitlearn,
  SiGraphql
} from "react-icons/si";
import me from "../images/krish.jpeg"
import resume from "../Krish_Resume.pdf"

const About = () => {
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const skills = [
    { name: "React", icon: SiReact, color: "text-cyan-400", level: 95 },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-400", level: 90 },
    { name: "GraphQL", icon: SiGraphql, color: "text-purple-500", level: 70 },
    { name: "Express.js", icon: SiExpress, color: "text-gray-300", level: 90 },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400", level: 80 },
    { name: "Socket.IO", icon: SiSocketdotio, color: "text-white", level: 75 },
    { name: "AWS", icon: SiAmazonwebservices, color: "text-orange-400", level: 50 },
    { name: "Zustand", icon: SiReact, color: "text-orange-300", level: 80 },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", level: 95 },
    { name: "Python", icon: SiPython, color: "text-green-300", level: 70 },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500", level: 85 },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300", level: 70 },
    { name: "MediaPipe", icon: SiGoogle, color: "text-red-400", level: 70 },
    { name: "OpenCV", icon: SiOpencv, color: "text-blue-400", level: 70 },
    { name: "NumPy", icon: SiNumpy, color: "text-purple-300", level: 60 },
    { name: "Pandas", icon: SiPandas, color: "text-white", level: 65 },
    { name: "Matplotlib", icon: SiPlotly, color: "text-red-400", level: 60 },
    { name: "scikit-learn", icon: SiScikitlearn, color: "text-blue-300", level: 85 },
    { name: "Git & GitHub", icon: SiGithub, color: "text-gray-400", level: 90 },
  ];

  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Neighborly",
      period: "July 2024 – August 2024",
      description:
        "Worked on building responsive static pages and integrated multiple authentication flows to improve user onboarding experience.",
      highlights: [
        "Implemented user authentication using OAuth, phone, and email",
        "Built clean, responsive interfaces with mobile-first design",
        "Collaborated with team to ensure accessibility and UI consistency"
      ],
    },
  ];

  const hackathons = [
    {
      name: "HackCrux",
      position: "Finalist",
      date: "March 2025",
      theme: "Disaster Management",
      description: "Developed a real-time disaster alert system and dashboard using multiple APIs to provide timely information during emergencies.",
      tech: ["React", "Node.js", "MongoDB", "GDACS", "USGS", "NewsAPI"],
      achievement: "Top 10 Finalist",
      impact: "Potential to serve 100,000+ users living in disaster prone areas",
      prize: "Recognition Certificate",
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "AlgoSphere Hackathon",
      position: "1st Runner Up",
      date: "May 2025",
      theme: "Disaster Management",
      description: "Developed a real-time disaster alert system and dashboard using multiple APIs to provide timely information during emergencies.",
      tech: ["React", "Node.js", "MongoDB", "GDACS", "USGS", "NewsAPI"],
      achievement: "1st Runner Up",
      impact: "Potential to serve as investment reasearch tool",
      prize: "₹5,000",
      color: "from-green-400 to-cyan-500"
    },
    {
      name: "Code Clash 2.0",
      position: "Participant",
      date: "July 2025",
      theme: "Web3 Innovation",
      description: "Created an platform for the government to register land records as NFTs, ensuring transparency and security in land ownership. Frees you from the paperwork hassle.",
      tech: ["React", "SpringBoot", "Web3", "Smart Contracts", "Solidity"],
      achievement: "2nd Round Qualifier",
      impact: "Potential to streamline land registration processes",
      prize: "Recognition Certificate",
      color: "from-purple-400 to-pink-500"
    },
    
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pt-32 pb-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur-3xl opacity-20"></div>
                  <div className="relative w-full h-full bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
                    {/* Replace with your actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                      <img src={me} className="rounded-2xl border border-slate-700"/>
                      
                    </div>
                  </div>
                </div>

                <motion.div
                  variants={itemVariants}
                  className="mt-6 text-center"
                >
                  <div className="flex items-center justify-center gap-2 text-slate-300 mb-2">
                    <FiMapPin className="text-cyan-400" />
                    <span>New Delhi, India</span>
                  </div>
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 ">
                    <a href={resume} download="Krish_Resume.pdf" className="flex items-center gap-2 mx-auto"  >
                      <FiDownload />
                      Download Resume
                    </a>

                  </button >
                </motion.div>
              </div>
            </motion.div>

            <div className="lg:col-span-2">
              <motion.div variants={itemVariants}>
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  About Me
                </h1>

                <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                  <p>
                    I'm a curious and driven{" "}
                    <strong className="text-cyan-400">
                      Full Stack Developer
                    </strong>{" "}
                    with 2+ years of experience crafting responsive, scalable web applications using the MERN stack. I thrive at the intersection of design and functionality — translating ideas into intuitive, real-world digital products.
                  </p>

                  <p>
                    My journey began with frontend development, but quickly expanded into backend systems, database design, and more recently, the exciting world of Machine Learning. I enjoy building not just beautiful interfaces, but also the systems and intelligence behind them.
                  </p>

                  <p>
                    Alongside development, I actively practice problem-solving on platforms like LeetCode and GFG, and have been diving deeper into system design principles to better understand how scalable architectures work.
                  </p>

                  <p>
                    When I'm not coding, you might find me writing poetry, exploring new technologies, or working on side projects that blend creativity with code. Whether it's through clean code or crafted words, I enjoy expressing ideas that connect.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-xl text-slate-300">
              Technologies and tools I work with
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={skillVariants}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <skill.icon className={`text-3xl ${skill.color}`} />
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                  <motion.div
                    className="bg-gradient-to-r from-cyan-400 to-purple-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  ></motion.div>
                </div>
                <div className="text-sm text-slate-400 text-right">
                  {skill.level}%
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-xl text-slate-300">My professional journey</p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-purple-400">{exp.company}</p>
                  </div>
                  <div className="text-slate-400 font-semibold">
                    {exp.period}
                  </div>
                </div>

                <p className="text-slate-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-700 rounded-full text-sm text-cyan-400 border border-slate-600"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathon Participation Section */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Hackathon Achievements</h2>
            <p className="text-xl text-slate-300">
              Competitive coding and innovation challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-400/30 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Achievement Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`bg-gradient-to-r ${hackathon.color} text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1`}>
                    <FiAward className="text-xs" />
                    {hackathon.achievement}
                  </div>
                </div>

                {/* Hackathon Details */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                    {hackathon.name}
                  </h3>
                  <div className="flex items-center gap-4 text-slate-400 mb-3">
                    <div className="flex items-center gap-1">
                      <FiCalendar className="text-sm" />
                      <span className="text-sm">{hackathon.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiTarget className="text-sm" />
                      <span className="text-sm">{hackathon.theme}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {hackathon.description}
                </p>

                {/* Technologies Used */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {hackathon.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-slate-700 rounded text-xs text-cyan-400 border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact & Prize */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <FiUsers className="text-purple-400" />
                      <span className="text-sm font-bold text-purple-400">Impact</span>
                    </div>
                    <div className="text-xs text-slate-300">{hackathon.impact}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <FiZap className="text-yellow-400" />
                      <span className="text-sm font-bold text-yellow-400">Prize</span>
                    </div>
                    <div className="text-xs text-slate-300">{hackathon.prize}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Beyond Code</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Mentoring",
                desc: "Helping junior developers grow and succeed in their careers",
                emoji: "👨‍🏫",
              },
              {
                title: "Learning",
                desc: "Always exploring new technologies and industry trends",
                emoji: "📚",
              },
              {
                title: "Poetry",
                desc: "Writing poetry to balance the logic of code with the rhythm of words",
                emoji: "✒️",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
