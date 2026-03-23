import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative py-16 px-6 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-100 overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="grid md:grid-cols-3 gap-10">

          {/* LEFT SIDE */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              KIRTI ANURAG
            </h3>

            <p className="text-gray-600 max-w-sm">
              Building modern web applications and intelligent systems with clean design and powerful functionality.
            </p>
          </div>


          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2 text-gray-600">

              <li>
                <a href="#home" className="hover:text-purple-600 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-purple-600 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-purple-600 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#education" className="hover:text-purple-600 transition">
                  Education
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-purple-600 transition">
                  Contact
                </a>
              </li>

            </ul>
          </div>


          {/* SOCIAL MEDIA */}
          <div>
            <h4 className="font-semibold mb-4">
              Connect With Me
            </h4>

            <div className="flex gap-4">

              {/* Github */}
              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/Kirtianurag"
                target="_blank"
                className="p-3 bg-white/80 backdrop-blur rounded-lg shadow hover:shadow-purple-300 transition"
              >
                <FaGithub />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/kirti-anurag/"
                target="_blank"
                className="p-3 bg-white/80 backdrop-blur rounded-lg shadow hover:shadow-purple-300 transition"
              >
                <FaLinkedin />
              </motion.a>

              {/* Email */}
              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:your.email@gmail.com"
                className="p-3 bg-white/80 backdrop-blur rounded-lg shadow hover:shadow-purple-300 transition"
              >
                <FaEnvelope />
              </motion.a>

              {/* Instagram */}
              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/_rissshiiii"
                target="_blank"
                className="p-3 bg-white/80 backdrop-blur rounded-lg shadow hover:shadow-purple-300 transition"
              >
                <FaInstagram />
              </motion.a>

            </div>
          </div>

        </div>


        {/* DIVIDER */}
        <div className="border-t border-gray-300 my-10"></div>


        {/* COPYRIGHT */}
        <p className="text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} KIRTI ANURAG. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;