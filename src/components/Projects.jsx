import { useState } from "react";

const projects = [
  {
    title: "BudgetBuddy",
    category: "Budgeting App",
    desc: "Create an account and add categories to track expenses over time.",
    image: "/project1.png",
    live: "#",
    code: "#",
    tags: ["Web Apps", "Deployment"],
  },
  {
    title: "ShopSphere",
    category: "Ecommerce Website",
    desc: "Search for products, toggle dark/light mode, and manage your cart.",
    image: "/project2.png",
    live: "#",
    code: "#",
    tags: ["Web Apps"],
  },
  {
    title: "WebPix",
    category: "Web Agency Website",
    desc: "Explore different sections and simulate a 'request completed' interaction.",
    image: "/project3.png",
    live: "#",
    code: "#",
    tags: ["Web Apps", "Infrastructure"],
  },
  {
    title: "CrawlWix",
    category: "Website Crawler",
    desc: "Pick a site and crawl all its links with automatic counting.",
    image: "/project4.png",
    comingSoon: true,
    tags: ["Automation"],
  },
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
        <h2 className="text-3xl font-bold mb-6">Personal Projects</h2>
        <p className="mb-10 text-gray-200">
          Here's a collection of my latest software development projects. Each
          one focuses on solving real-world problems with clean design and
          functionality.
        </p>

        {/* Filter Buttons */}
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

        {/* Project Cards */}
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
                  className="w-full md:w-72 h-48 object-cover rounded-lg shadow-sm"
                />
              )}

              {/* Info */}
              <div className="flex-1">
                <h4 className="text-sm text-[#9e6c3f] font-semibold mb-1">
                  {project.category}
                </h4>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4 text-[#333]">{project.desc}</p>

                <div className="flex gap-2 flex-wrap">
                  {project.comingSoon ? (
                    <span className="bg-[#0f2c2f] text-white px-4 py-1 rounded text-sm font-medium">
                      Coming Soon
                    </span>
                  ) : (
                    <>
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <button className="bg-[#0f2c2f] hover:bg-[#183c42] text-white px-4 py-1 rounded text-sm font-medium transition">
                          Live Website
                        </button>
                      </a>
                      <a href={project.code} target="_blank" rel="noreferrer">
                        <button className="bg-[#0f2c2f] hover:bg-[#183c42] text-white px-4 py-1 rounded text-sm font-medium transition">
                          Code
                        </button>
                      </a>
                    </>
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
