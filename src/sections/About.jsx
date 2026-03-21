import { motion } from "framer-motion";
import { FaProjectDiagram } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-32 px-6 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-100 overflow-hidden"
    >

      {/* Background Glow (same) */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="absolute w-[900px] h-[900px] bg-blue-300 opacity-30 blur-[140px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto">

        {/* TOP SMALL LINE */}
        <div className="w-16 h-[3px] bg-purple-600 mb-10"></div>

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl text-purple-600 text-center mb-16 font-semibold"
        >
          About Me
        </motion.h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  className="flex items-center gap-6"
>

  {/* ICON */}
  <img
    src="https://portfolio-eight-beige-76.vercel.app/img/icon/projects-icon.svg"
    alt="projects-icon"
    className="w-16 h-16 object-contain 
               transition-all duration-300 
               hover:scale-110 hover:-translate-y-1
               brightness-0 saturate-100 invert-[30%] sepia-[90%] saturate-[3000%] hue-rotate-[250deg]"
  />

  {/* TEXT */}
  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
    <span className="text-purple-600">4+</span> Projects <br />
    Completed
  </h2>

</motion.div>

          {/* CENTER LINE */}
          <div className="hidden md:flex justify-center">
            <div className="w-[2px] h-40 bg-purple-600"></div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What are my strongest sides{" "}
              <span className="text-purple-600">and skills?</span>
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              I am a passionate and driven full stack developer with a strong
              foundation in both frontend and backend technologies. I enjoy
              solving real-world problems by building clean, efficient, and
              scalable applications.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              I have hands-on experience with technologies like{" "}
              <span className="text-blue-600 font-semibold">
                HTML, CSS, JavaScript, React, and Node.js
              </span>. I have worked on projects such as stock market analysis
              tools and railway booking systems.
            </p>

            <p className="text-gray-700 leading-relaxed">
              I continuously learn new technologies and enjoy working on
              meaningful projects that help me grow as a developer.
            </p>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;