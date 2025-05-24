import { useState } from "react";
import { FaGithub, FaGitlab } from "react-icons/fa";
import diaryImg from './assets/da1.png';
import reportImg from './assets/rgg.png';
import studyGroupImg from './assets/study-group.png'; 
import roomlinkImg  from './assets/RL.png';
import tetrisImg from './assets/tetris.png'
import portfolioImg from './assets/portfolio.png'
import skjerImg from './assets/skjera.png'; 
import k8sImg from './assets/k8s-cluster.png'; 
import devImg from "../assets/report-devops.png";

const projects = [
  {
    title: "Diary App",
    category: "Mobile App",
    image: diaryImg,
    code: "https://github.com/Teklit17/Diary-app",
    tags: [ "React Native", "OpenAI API", "Firebase", "Firestroge", "Mobile Apps",],
    desc: `A digital diary app built with React Native, Expo, and Firebase, developed as a group project during the Application Development (Applikasjonsutvikling) course at the University of Agder (UiA).
    
The app enables users to securely log in, document their daily reflections, and track their personal growth. It integrates the OpenAI API to automatically generate meaningful weekly and yearly AI-powered summaries from the user's entries.
These insights provide users a deeper understanding of their emotional journey and life experience over time.`,
  },
  {
    title: "Report Generator Desktop App",
    category: "Desktop App",
    image: reportImg,
    code: "https://github.com/Teklit17/Final--project",
    tags: ["C#", ".NET 8.0", "WPF", "MVVM", "SQLite", "Firebase", "Bold Reports", "Desktop Apps", ],
    desc: `A C# WPF-based desktop application built for automating report creation with predefined templates. Developed as a Bachelor's thesis at the University of Agder (UiA).

The app integrates Firebase for user authentication, cloud storage, and secure messaging. It uses Bold Reports to deliver structured reports from stored user data.`
  },

  
  {
    title: "DevOps Project",
    category: ["Automation", "Deployment"],
    image: devImg,
    code: "https://gitlab.internal.uia.no/ikt206-g-25v-devops/Group23/exam-ikt206",
    tags: ["GitLab CI/CD", "Kubernetes", "Docker",  "ArgoCD", "PostgreSQL", "Grafana", ],
    desc: `This university project was developed as part of the IKT206 - DevOps course. In a simulated consulting role for Auby & Brinch Finance, I engineered a full DevOps pipeline using GitLab CI, Docker, and Kubernetes. The system supports automated testing, container image building with Kaniko, GitOps-based deployment using ArgoCD, PostgreSQL integration, and cluster monitoring via Grafana and Prometheus.`
  },

  
  {
    title: "Study Group Finder",
    category: "Web App",
    image: studyGroupImg,
    code: "https://github.com/Teklit17/Study-Group-Finder", // replace if different
    tags: ["ASP.NET Core MVC", "Azure SQL", "SignalR", "FullCalendar", "Feide", "Web Apps", ],
    desc: `A full-stack platform for students to find and join study groups. 
  Supports real-time chat using SignalR, calendar events via FullCalendar, and secure Feide login for authentication. 
  
  Developed as part of a university project, it allows students to collaborate efficiently with features like group creation, joining, and member management.`,
  },



{
  title: "Roomlink",
  category: "Mobile App",
  image: roomlinkImg,
  code: "https://github.com/Hebelub/roomlink",
  tags: [ "React Native", "Expo", "Firebase", "QR Code", "Mobile Apps",],
  desc: `Roomlink is a mobile app developed during the IKT205 Applikasjonsutvikling course at UiA.

  It enables students to create and join chat rooms via QR-code or room code, chat in real-time, and manage profiles. Features include room visit tracking, modular room components (chat, visitors, items), and Firestore integration for storing messages and user data.`,
},
{
  title: "Tetris Game (C++)",
  category: "Desktop App",
  desc: `A custom-built Tetris game developed with C++ and SFML as part of the "Videregående Softwareutvikling" course at the University of Agder (UiA).
Features include animated tetrominoes, intuitive game controls, and a scoring system.`,
  image: tetrisImg,
  code: "https://github.com/Teklit17/tetris",
  tags: [ "C++", "SFML", "OOP", "Game Architecture", "Desktop Apps",],
},
{
  title: "Kubernetes Cluster Setup",
  category: "Infrastructure",
  image: k8sImg,
  code: "https://gitlab.internal.uia.no/ikt210-g-24h-skyinfrastruktur/LabGroup11/01-setup-k8s-cluster",
  tags: ["Kubernetes", "Terraform", "OpenStack", "Containerd", "Calico", "Infrastructure",],
  desc: `A university project developed during the IKT210 course at UiA. This project involved setting up a Kubernetes cluster using Terraform and OpenStack.

The cluster includes a master and two worker nodes, configured with containerd as the runtime, Calico for networking, local-path provisioner for storage, and an Nginx deployment for validation. 
Includes infrastructure automation with Terraform and full documentation (report available on request).`,
},
{
  title: "Skjera",
  category: "Web App",
  image: skjerImg,
  code: "https://github.com/Hebelub/skjera",
  tags: ["ASP.NET Core", "JavaScript", "Entity Framework", "Web Apps", ],
  desc: `Skjera is a university project developed during the IKT201 - Internettjenester course at UiA.

It is a full-stack event management platform where student organizations can publish events, and students can browse, attend, and interact with them. The application includes shared calendars, organization profiles, and attendance tracking, built using ASP.NET Core and JavaScript.`,
},

{
  title: "Personal Portfolio",
  category: "Portfolio Website",
  desc: "A responsive and animated portfolio website built with React and Tailwind CSS to showcase my skills and projects. It features dynamic sections, dark/light mode, and smooth scroll animations.",
  image: portfolioImg, // import this from './assets/portfolio.png'
  code: "https://github.com/amanuelHT/portfolio",
  tags: [ "React", "Tailwind CSS", "Web Apps",]
},



  // ... other projects
];

const categories = [
  "Show all",
  "Web Apps",
  "Mobile Apps",
  "Desktop Apps",
  "Automation",
  "Deployment",
  "Infrastructure",
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Show all");

  const filteredProjects =
    activeCategory === "Show all"
      ? projects
      : projects.filter((project) => project.tags.includes(activeCategory));

  return (
    <section
      id="projects"
      className="relative z-10 bg-[#0f2c2f] text-white py-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <p className="mb-10 text-gray-200">
        Showcasing full-stack apps, tools, and infrastructure with a focus on DevOps, orchestration, and real-world problem solving. 
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveCategory(tag)}
              className={`px-4 py-1 rounded text-sm font-medium transition ${
                activeCategory === tag
                  ? "bg-[#fdf0d5] text-[#0f2c2f]"
                  : "bg-white text-[#0f2c2f] hover:bg-[#fdf0d5]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="w-full bg-white text-[#0f2c2f] rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-all"
            >
              {/* Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full md:w-72 h-64 object-cover rounded-lg shadow-sm"
                />
              )}

              {/* Info */}
              <div className="flex-1">
                <h4 className="text-sm text-[#9e6c3f] font-semibold mb-1">
                  {project.category}
                </h4>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-base text-[#333] whitespace-pre-line mb-4">
                  {project.desc}
                </p>

                <div className="flex gap-2 flex-wrap mb-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#e2e8f0] text-[#0f2c2f] px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 flex-wrap">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      <button className="bg-[#0f2c2f] hover:bg-[#183c42] text-white px-4 py-1 rounded text-sm font-medium transition">
                        Live Website
                      </button>
                    </a>
                  )}
                  {project.code && (
  <a href={project.code} target="_blank" rel="noreferrer">
    {project.code.includes("gitlab") ? (
      <FaGitlab className="text-[#e24329] text-xl" />
    ) : (
      <FaGithub className="text-[#0f2c2f] text-xl" />
    )}
  </a>
)}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
