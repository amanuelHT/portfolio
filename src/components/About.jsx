import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaJs,
  FaReact,
  FaCode,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-2xl text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-2xl text-blue-500" /> },
  { name: "Sass", icon: <FaSass className="text-2xl text-pink-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-2xl text-purple-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-2xl text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-2xl text-blue-400" /> },
  { name: "Next JS", icon: <SiNextdotjs className="text-2xl text-black dark:text-white" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-2xl text-blue-600" /> },
  { name: "VS Code", icon: <FaCode className="text-2xl text-blue-500" /> },
];

const About = () => {
  return (
    <section id="about" className="relative z-10 bg-white text-[#0f2c2f] py-20 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 animate-fade-in">
        
        {/* About Me */}
        <div>
          <h2 className="text-3xl font-bold mb-6">About me</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            As a Front-End Developer, I am passionate about creating visually stunning and user-friendly web applications that solve problems.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            My background includes selling books online, building no-code websites, and creating ads. I even tried to start a tech start-up.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            I love learning new technologies and using them to build practical solutions. I’m eager to grow and contribute!
          </p>
        </div>

        {/* Skills */}
        <div className="max-w-md flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-6">Skill</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#fdf0d5] hover:bg-[#f0e2c1] transition flex flex-col items-center justify-center gap-2 py-4 rounded-lg shadow font-medium text-sm"
              >
                {skill.icon}
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
