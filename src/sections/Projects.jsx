import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Intelligent Railway Booking System",
    image: "/projects/Project1.png",
    description:
      "AI powered railway booking system with smart seat suggestions and optimized booking.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Kirtianurag/RAILWAY-AI-PROJECT"
  },
  {
    title: "Fitness & Wellness Gamification Platform",
    image: "/projects/Project2.png",
    description:
      "Gamified fitness platform with XP rewards, progress tracking and community challenges.",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "PHP"],
    github:
      "https://github.com/Kirtianurag/Fitness-and-Wellness-Gamification-Platform-"
  },
  {
    title: "Stock Market Insight Bot",
    image: "/projects/Project3.png",
    description:
      "A bot that retrieves real-time company stock prices using AI and displays them through a Python-powered interface.",
    tech: ["HTML", "CSS", "Python"],
    github: "https://github.com/Kirtianurag/Stock-Market-Insights-Bot"
  },
  {
    title: "Classic Snake Game",
    image: "/projects/Project4.png",
    description:
      "Classic Snake Game built using Java Swing with OOP and Linked List concepts.",
    tech: ["JAVA", "SWING", "OOP"],
    github: "https://github.com/Kirtianurag/SnakeGameProject"
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative pt-32 pb-44 px-6 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-100 overflow-hidden"
    >
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-6"
        >
          Featured Projects
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-center max-w-2xl mx-auto mb-12 text-lg"
        >
          Some of my recent work showcasing various technologies and design approaches.
        </motion.p>

        {/* SIMPLE HORIZONTAL SCROLL */}
        <div
          className="flex gap-6 md:gap-10 overflow-x-auto snap-x snap-mandatory pb-6 no-scrollbar"
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch"
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group flex-shrink-0 w-[260px] sm:w-[300px] md:w-[320px] snap-start flex flex-col bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="overflow-hidden bg-gray-50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-contain transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-md bg-gray-100 text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GITHUB */}
                <motion.a
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition text-sm mt-auto self-start"
                >
                  <FaGithub />
                  Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;