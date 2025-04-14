import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
import profileImg from './assets/profile.jpg';

const Hero = () => {
  // Initialize particles
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
      number: { value: 50 },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
  };

  return (
    <section
  id="home"
  className="relative min-h-[90vh] bg-[#0f2c2f] text-[#fdf0d5] px-6 sm:px-8 overflow-hidden"
>
  <Particles
    id="tsparticles"
    init={particlesInit}
    options={particlesOptions}
    className="absolute inset-0 z-0"
  />

  <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-start md:justify-center gap-64 pt-12  md:pt-20 relative z-10">
    {/* Left - Text */}
    <div className="text-center md:text-left animate-fade-in">
      <h1 className="text-5xl font-extrabold leading-tight mb-4">
        Hi, I'm <br /> Amanuel Tsegay!
      </h1>
      <p className="text-xl font-light">I'm a Front-end Developer.</p>
    </div>

    {/* Right - Profile */}
    <div className="animate-fade-in delay-200">
      <div className="w-72 h-72 rounded-full border-[6px] border-[#fdf0d5] overflow-hidden">
        <img
          src={profileImg}
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>

  );
};

export default Hero;
