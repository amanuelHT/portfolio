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
  { name: "React", icon: <FaReact className="text-2xl text-blue-400" /> },
  { name: "React Native", icon: <FaReact className="text-2xl text-indigo-400" /> },
  { name: "C#", icon: <FaCode className="text-2xl text-purple-700" /> },
  { name: ".NET", icon: <FaCode className="text-2xl text-purple-600" /> },
  { name: "ASP.NET Core", icon: <FaCode className="text-2xl text-purple-500" /> },
  { name: "C++", icon: <FaCode className="text-2xl text-blue-800" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-2xl text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-2xl text-yellow-400" /> },
  { name: "Firebase", icon: <FaCode className="text-2xl text-yellow-600" /> },
  { name: "SQLite", icon: <FaCode className="text-2xl text-green-700" /> },
  { name: "SQL", icon: <FaCode className="text-2xl text-gray-600" /> },
  { name: "Kubernetes", icon: <FaCode className="text-2xl text-blue-400" /> },
  { name: "Docker", icon: <FaCode className="text-2xl text-blue-600" /> },
  { name: "Terraform", icon: <FaCode className="text-2xl text-purple-500" /> },
  { name: "CI/CD", icon: <FaCode className="text-2xl text-teal-600" /> },
  { name: "Git", icon: <FaCode className="text-2xl text-orange-500" /> },
];



const About = () => {
  return (
    <section id="about" className="relative z-10 bg-white text-[#0f2c2f] py-20 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 animate-fade-in">
        
        {/* About Me */}
        <div>
  <h2 className="text-3xl font-bold mb-6">About me</h2>
  <p className="text-lg md:text-xl leading-relaxed mb-4">
    I'm a recent Computer Engineering graduate from the University of Agder (UiA), with a specialization in Software Development.
  </p>
  <p className="text-lg md:text-xl leading-relaxed mb-4">
    I’ve developed and deployed full-stack <strong>web and mobile applications</strong>, <strong>desktop software</strong>, and handled <strong>DevOps pipelines</strong> including infrastructure setup using <strong>Kubernetes and Terraform</strong>. I enjoy working across the stack — from intuitive frontend interfaces to scalable backend systems.
  </p>
  <p className="text-lg md:text-xl leading-relaxed mb-4">
    I love learning new technologies and using them to build practical solutions. I’m eager to grow and contribute!
  </p>
</div>


        {/* Skills */}
        <div className="max-w-md flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-6">Skill</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 w-full">
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

      {/* Wave Separator */}
<div className="relative -mb-12">
  <svg
    viewBox="0 0 3000 50"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
    preserveAspectRatio="none"
  >
    <path
      fill="#0f2c2f"
      d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,58.7C672,43,768,21,864,21.3C960,21,1056,43,1152,58.7C1248,75,1344,85,1392,90.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
    ></path>
  </svg>
</div>

    </section>
  );
};

export default About;
