import {
  FaLinkedinIn,
  FaGithub,
  FaGitlab,
  FaBitbucket,
} from "react-icons/fa";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";

const Footer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: { color: "#0f2c2f" },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: false },
        onHover: { enable: false },
      },
    },
    particles: {
      color: { value: "#fdf0d5" },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        speed: 0.6,
      },
      number: { value: 40 },
      opacity: { value: 0.2 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
  };

  return (
    <footer className="relative bg-[#0f2c2f] text-[#fdf0d5] py-12 text-center overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="footer-particles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

           <div className="relative z-10 max-w-5xl mx-auto">
       {/* Footer Content 
  <p className="text-lg font-semibold mb-6">Let’s get social!</p> */}

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 bg-[#0077b5] text-white rounded-full flex items-center justify-center text-2xl shadow hover:scale-110 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 bg-[#333] text-white rounded-full flex items-center justify-center text-2xl shadow hover:scale-110 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://gitlab.com"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 bg-[#fc6d26] text-white rounded-full flex items-center justify-center text-2xl shadow hover:scale-110 transition"
          >
            <FaGitlab />
          </a>
          <a
            href="https://bitbucket.org"
            target="_blank"
            rel="noreferrer"
            className="w-12 h-12 bg-[#205081] text-white rounded-full flex items-center justify-center text-2xl shadow hover:scale-110 transition"
          >
            <FaBitbucket />
          </a>
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Amanuel Tsegay. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
