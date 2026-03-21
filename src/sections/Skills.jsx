import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },

  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  {name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"}
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    y: 40,
    transition: { duration: 0.25 }
  }
};

const Skills = () => {

  const [showAll, setShowAll] = useState(false);

  const visibleSkills = showAll ? skills : skills.slice(0, 6);

  return (
    <section
      id="skills"
      className="relative pt-32 pb-44 px-6 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-100 "
    >

      {/* grid background */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-6"
        >
          Skills & Expertise
        </motion.h2>

        {/* subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-center max-w-2xl mx-auto mb-16 text-lg"
        >
          Full-stack development with a passion for building scalable and efficient applications.
        </motion.p>

        {/* skills grid */}
        <motion.div
          layout
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >

          <AnimatePresence>
            {visibleSkills.map((skill) => (

              <motion.div
                key={skill.name}
                variants={item}
                layout

                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.15 }
                }}

                className="skill-card group bg-white/60 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/40 flex flex-col items-center justify-center hover:shadow-purple-400/40 hover:ring-2 hover:ring-purple-300"
              >

                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 mb-3 object-contain transition-transform duration-200 group-hover:scale-110"
                />

                <p className="text-sm font-medium text-gray-800">
                  {skill.name}
                </p>

              </motion.div>

            ))}
          </AnimatePresence>

        </motion.div>

        {/* button */}
        <div className="flex justify-center mt-16">

          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-xl bg-white/70 backdrop-blur border border-white/40 shadow-md hover:scale-105 transition-all duration-300 hover:shadow-purple-300/40"
          >
            {showAll ? "Show Less Skills" : "Show All Skills"}
          </button>

        </div>

      </div>
    </section>
  );
};

export default Skills;