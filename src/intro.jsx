import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const text = "Welcome to my portfolio";

const Intro = ({ onFinish }) => {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;

    const typing = setInterval(() => {
      setDisplay(text.slice(0, i + 1));
      i++;

      if (i === text.length) {
        clearInterval(typing);

        // wait → zoom → exit
        setTimeout(() => {
          onFinish();
        }, 1200);
      }
    }, 80);

    return () => clearInterval(typing);
  }, []);

  return (
    <motion.div
      className="intro"
      initial={{ scale: 1 }}
      animate={{ scale: 0.6, opacity: 0 }}
      transition={{ delay: 2.2, duration: 1 }}
    >
      <div className="intro-box">
        <p className="intro-text">
          {display}
          <span className="cursor">|</span>
        </p>
      </div>
    </motion.div>
  );
};

export default Intro;