import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiInstagram
} from "react-icons/fi";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      alert("message sent :)");
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      value: "krish236630@gmail.com",
      link: "mailto:krish236630@gmail.com",
      description: "Send me an email anytime!",
    },
    {
      icon: FiPhone,
      title: "Phone",
      value: "+91 8595652163",
      link: "tel:+918595652163",
      description: "Call me for urgent matters",
    },
    {
      icon: FiMapPin,
      title: "Location",
      value: "New Delhi, India",
      link: "#",
      description: "Available for local meetings",
    },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      name: "GitHub",
      url: "https://github.com/krish2366",
      color: "hover:text-gray-400",
    },
    {
      icon: FiLinkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/krish-907187291/",
      color: "hover:text-blue-400",
    },
    {
      icon: FiInstagram,
      name: "Instagram",
      url: "https://www.instagram.com/_krish2366_/",
      color: "hover:text-sky-400",
    },
    {
      icon: FiMail,
      name: "Email",
      url: "mailto:hello@yourname.com",
      color: "hover:text-red-400",
    },
  ];

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
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Connect
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Have a project in mind? Want to collaborate? Or just want to say
            hello? I'd love to hear from you. Let's create something amazing
            together.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-8 text-slate-400"
          >
            <div className="flex items-center gap-2">
              <FiMail className="text-cyan-400" />
              <span>Usually replies</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMessageSquare className="text-purple-400" />
              <span>Available for freelance work</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <FiSend className="text-white text-xl" />
                </div>
                <h2 className="text-3xl font-bold">Send Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Name
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-white placeholder-slate-400"
                        placeholder="Your name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-white placeholder-slate-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-white placeholder-slate-400"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors text-white placeholder-slate-400 resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  I'm always open to discussing new opportunities, creative
                  projects, or just having a chat about technology and
                  development. Feel free to reach out through any of these
                  channels.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-cyan-400 transition-colors">
                        {info.title}
                      </h3>
                      <p className="text-slate-300">{info.value}</p>
                      <p className="text-slate-400 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Connect on Social</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className={`w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700 hover:border-slate-600 transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="text-xl" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <h3 className="text-lg font-semibold text-green-400">
                    Available for Work
                  </h3>
                </div>
                <p className="text-slate-300">
                  I'm currently accepting new freelance projects and
                  collaborations. Let's discuss how we can work together to
                  bring your ideas to life.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
