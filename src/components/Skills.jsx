import {
  FaJs,
  FaReact,
  FaCode,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

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

const Skills = () => {
  return (
    <section id="skills" className="bg-white text-[#0f2c2f] py-20 px-8 relative z-10">
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 justify-center items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white hover:bg-[#f0e2c1] transition shadow rounded-lg py-4 flex flex-col items-center justify-center gap-2"
            >
              {skill.icon}
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
