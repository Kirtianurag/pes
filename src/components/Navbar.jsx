import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {

  const [active, setActive] = useState("home");

 useEffect(() => {
  const sections = document.querySelectorAll("section");

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 200;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollPosition >= top && scrollPosition < top + height) {
        setActive(section.id);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  const links = ["home", "about", "projects", "certificates", "skills", "education"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-end px-8 py-6">

        <ul className="hidden md:flex items-center gap-12 text-sm font-semibold uppercase tracking-widest text-gray-800">

          {links.map((item) => (

            <motion.li
              key={item}

              whileHover={{ y: -4 }}

              transition={{
                type: "spring",
                stiffness: 800,
                damping: 7
              }}

              className={`relative cursor-pointer group transition duration-200
              
              ${
                active === item
                ? "text-purple-600"
                : "hover:bg-gradient-to-r hover:from-blue-500 hover:via-pink-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
              }
              
              `}
            >

              <a href={`#${item}`}>
                {item}
              </a>

              {/* underline animation */}

              <span
                className={`absolute left-0 -bottom-2 h-[2px] bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 transition-all duration-300

                ${
                  active === item
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }
                
                `}
              ></span>

            </motion.li>

          ))}

        </ul>

      </div>
    </nav>
  );
}