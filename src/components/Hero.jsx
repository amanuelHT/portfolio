import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 
import profileImg from './assets/profile.png';

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

<div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-start md:justify-center gap-10 md:gap-24 pt-12 md:pt-20 relative z-10">

    {/* Left - Text */}
    <div className="text-center md:text-left animate-fade-in md:-mt-32">

   
    <h1 className="text-4xl md:text-7xl text-white font leading-tight text-accent md:ml-10">

  Hi, I’m <br />
  <span className="text-5xl md:text-6xl text-white font-bold block">Amanuel</span>
  <span className="text-5xl md:text-6xl font-bold  text-white block">Tsegay!</span>
</h1>

{/* Spacing before subtitle */}
<div className="mt-10">
<p className="typing-text text-3xl md:text-5xl font-bold text-white bg-primary px-6 py-3 rounded-full border-r-4 border-white whitespace-nowrap overflow-hidden w-fit mx-auto">
  A Full Stack Software Developer
</p>

  
</div>


    </div>

    {/* Right - Profile */}
    <div className="animate-fade-in delay-200">
    <div className="rounded-full   p-1 bg-[#f6e8d7]">
  <img
    src={profileImg}
    alt="Profile"
    className="w-[300px] h-[380px] object-top object-cover rounded-full"
  />
</div>

    </div>
  </div>
</section>

  );
};

export default Hero;
