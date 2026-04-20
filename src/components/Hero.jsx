import "./Hero.css";
import { motion } from "framer-motion";
import { ArrowDown, Mail, X } from "lucide-react";
import { useState } from "react";

function Hero() {
  const [showPopup, setShowPopup] = useState(false);

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <section id="home" className="hero">

      {/* BACKGROUND ORB */}
      <div className="hero__bg-orb"></div>

      {/* GLOW EFFECTS */}
      <div className="hero-glow hero-glow--purple"></div>
      <div className="hero-glow hero-glow--blue"></div>

      {/* SHOOTING STAR */}
      <div className="shooting-star"></div>

      {/* PARTICLES */}
      <div className="hero__particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`hero__particle hero__particle--${i + 1}`}></div>
        ))}
      </div>

      <div className="hero__container section-container">

        {/* LEFT SIDE */}
        <div className="hero__text">
          <span className="hero__badge">Welcome to my Portfolio</span>

          <h1 className="hero__title">
            Hi, Everyone <br />
            <span className="gradient-text">I am Tharun Kumar</span>
          </h1>

          <p className="hero__subtitle">
            A passionate software developer focused on building scalable and intelligent
            solutions using modern web technologies and AI concepts.
          </p>

          <div className="hero__buttons">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#resume" className="btn-outline" onClick={handleDownloadClick}>Download Resume</a>
            <a href="#contact" className="hero-btn-secondary">
              <Mail size={16} /> LET'S CONNECT
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - AUTO CODING */}
        <div className="hero__visual">
          <div className="code-window">
            <pre>
              <code className="typing">
{`const developer = {
  name: "Tharun Kumar",
  skills: ["Programming", "Web Development"],
  passion: "Building Scalable Apps",

};

function buildProject() {
  return "Creating something amazing...";
}`}
              </code>
            </pre>
          </div>
        </div>

      </div>
      <motion.div
        className="hero-scroll"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span>SCROLL</span>
        <ArrowDown size={18} />
      </motion.div>

      {/* Resume Popup */}
      {showPopup && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClosePopup}
        >
          <motion.div
            className="bg-white p-8 rounded-2xl max-w-md mx-4 shadow-2xl relative"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-all"
            >
              <X size={20} />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ArrowDown size={24} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Resume Download</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Resume Will be updated soon ...
              </p>
              <button
                onClick={handleClosePopup}
                className="btn-primary px-8 py-3 w-full"
              >
                Got it!
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default Hero;