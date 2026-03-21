import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs, FaNode, FaReact } from "react-icons/fa";
import { SiCplusplus, SiMongodb, SiGmail } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-blue-200 via-purple-200 to-pink-100 overflow-hidden px-6"
    >

      {/* Soft Gradient Glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div
          className="absolute w-[1000px] h-[1000px]
          bg-gradient-to-br from-blue-300 via-purple-300 to-pink-200
          opacity-30 blur-[140px] rotate-[-20deg]"
        ></div>
      </div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* HELLO */}
          <div className="flex items-center gap-4 mb-4">

            <svg
              className="w-10 h-10 text-purple-500"
              viewBox="0 0 40 40"
              fill="currentColor"
            >
              <path d="M20 0 L22 18 L40 20 L22 22 L20 40 L18 22 L0 20 L18 18 Z" />
            </svg>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-gray-900">
              HELLO!
            </h1>

            <div className="relative flex flex-col items-start">
              <svg
                className="w-6 h-6 text-purple-500"
                viewBox="0 0 30 30"
                fill="currentColor"
              >
                <path d="M15 0 L17 13 L30 15 L17 17 L15 30 L13 17 L0 15 L13 13 Z" />
              </svg>

              <svg
                className="w-4 h-4 text-purple-400 ml-3 mt-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z" />
              </svg>
            </div>

          </div>

          {/* NAME */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
            I'm Kirti Anurag
          </h1>

          {/* TYPEWRITER */}
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4">
            <Typewriter
              words={["Full Stack Developer"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-gray-600 max-w-md mb-6">
            I build scalable full-stack web applications and secure REST APIs
            using modern technologies.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">

            {/* SEE MY WORK */}
            <a
              href="#projects"
              className="
              px-6 py-3
              rounded-xl
              bg-blue-600
              text-white
              font-semibold
              shadow-[0_6px_0_#1e40af]
              transition-all
              duration-150
              hover:translate-y-[3px]
              hover:shadow-[0_3px_0_#1e40af]
              active:translate-y-[6px]
              active:shadow-none
              "
            >
              See My Works
            </a>

            {/* CONTACT ME */}
            <a
              href="#contact"
              className="
              px-6 py-3
              rounded-xl
              bg-blue-600
              text-white
              font-semibold
              shadow-[0_6px_0_#1e40af]
              transition-all
              duration-150
              hover:translate-y-[3px]
              hover:shadow-[0_3px_0_#1e40af]
              active:translate-y-[6px]
              active:shadow-none
              "
            >
              Contact Me
            </a>

            {/* DOWNLOAD CV */}
            <a
              href="/KIRTI_ANURAG_CV.pdf"
              download
              className="
              flex items-center gap-2
              px-6 py-3
              rounded-xl
              bg-blue-600
              text-white
              font-semibold
              shadow-[0_6px_0_#1e40af]
              transition-all
              duration-150
              hover:translate-y-[3px]
              hover:shadow-[0_3px_0_#1e40af]
              active:translate-y-[6px]
              active:shadow-none
              "
            >
              <FaDownload />
              Download CV
            </a>

          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 mt-6 text-2xl">

            <a
              href="https://github.com/Kirtianurag"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black hover:scale-110 transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/kirti-anurag"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:kirtianurag2003@gmail.com"
              className="text-red-500 hover:text-red-600 hover:scale-110 transition-all duration-300"
            >
              <SiGmail />
            </a>

            <a
              href="https://instagram.com/_rissshiiii"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-pink-500 hover:scale-110 hover:text-pink-600 transition duration-300" />
            </a>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >

          <div className="relative w-[420px] h-[420px] flex items-center justify-center group">

            <div className="absolute w-80 h-80 bg-blue-200/40 blur-3xl rounded-full"></div>

            {/* AVATAR */}
            <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-xl border-4 border-white transition-all duration-300 hover:scale-110 cursor-pointer">
  <img
    src="/myphoto.png"
    alt="Kirti Anurag"
    className="w-full h-full object-cover object-[50%_20%]"
  />
</div>

            {/* ORBIT ICONS */}
            {/* <div className="absolute w-[420px] h-[420px] animate-spin-slow group-hover:animate-spin">

              <FaHtml5 className="absolute top-0 left-1/2 -translate-x-1/2 text-orange-500 text-4xl" />
              <FaCss3Alt className="absolute bottom-0 left-1/2 -translate-x-1/2 text-blue-500 text-4xl" />
              <FaJs className="absolute right-0 top-1/2 -translate-y-1/2 text-yellow-500 text-4xl" />
              <FaReact className="absolute left-0 top-1/2 -translate-y-1/2 text-cyan-500 text-4xl" />
              <FaNode className="absolute top-10 right-10 text-green-500 text-4xl" />
              <FaJava className="absolute top-10 left-10 text-red-500 text-4xl" />
              <SiMongodb className="absolute bottom-10 left-10 text-green-600 text-4xl" />
              <SiCplusplus className="absolute bottom-10 right-10 text-blue-600 text-4xl" />

            </div> */}

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;