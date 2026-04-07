import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const About = () => {

  const sectionRef = useRef(null);

  const [projects, setProjects] = useState(0);
  const [leetcode, setLeetcode] = useState(0);

  const [started, setStarted] = useState(false);


  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {

        if (entries[0].isIntersecting && !started) {

          setStarted(true);

          let p = 0;
          let l = 0;

          const interval = setInterval(() => {

            // PROJECT COUNTER (0 → 4)
            if (p < 4) {
              p += 0.05;
              if (p > 4) p = 4;
              setProjects(Number(p.toFixed(0)));
            }

            // LEETCODE COUNTER (0 → 150)
            if (l < 150) {
              l += 3;
              if (l > 150) l = 150;
              setLeetcode(l);
            }

            if (p === 4 && l === 150) {
              clearInterval(interval);
            }

          }, 40);

        }

      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };

  }, [started]);


  return (

    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 px-6 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-100 overflow-hidden"
    >

      {/* background glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="absolute w-[900px] h-[900px] bg-blue-300 opacity-30 blur-[140px] rounded-full"></div>
      </div>


      <div className="max-w-6xl mx-auto">

        <div className="w-16 h-[3px] bg-purple-600 mb-10"></div>


        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl text-purple-600 text-center mb-16 font-semibold"
        >
          About Me
        </motion.h2>



        <div className="grid md:grid-cols-3 gap-12 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >


            {/* Projects */}
            <div className="flex items-center gap-6 group">

              <img
                src="https://portfolio-eight-beige-76.vercel.app/img/icon/projects-icon.svg"
                alt="projects"
                className="w-30 h-16 object-contain
                transition duration-300
                group-hover:scale-110 group-hover:-translate-y-1
                brightness-0 saturate-100 
                invert-[30%] sepia-[90%] saturate-[3000%] hue-rotate-[250deg]"
              />

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">

                <span className="text-purple-600">
                  {projects}+
                </span>

                {" "}Projects <br />
                Completed

              </h2>

            </div>



            {/* LeetCode */}
            <div className="flex items-center gap-6 group">

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original-wordmark.svg"
                alt="leetcode"
                className="w-36 h-36 object-contain
                transition duration-300
                group-hover:scale-110 group-hover:-translate-y-1"
              />

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">

                <span className="text-purple-600">
                  {leetcode}+
                </span>

                {" "}LeetCode <br />
                Problems Solved

              </h2>

            </div>



            {/* Google */}
            <div className="flex items-center gap-6 group">

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original-wordmark.svg"
                alt="google"
                className="w-36 h-36 object-contain
                transition duration-300
                group-hover:scale-110 group-hover:-translate-y-1"
              />

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Google Cloud Arcade <br />
                Program Completed
              </h2>

            </div>



          </motion.div>



          {/* center line */}
          <div className="hidden md:flex justify-center">
            <div className="w-[2px] h-56 bg-purple-600"></div>
          </div>



          {/* RIGHT SIDE */}
          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
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
              </span>.
              I have worked on projects such as stock market analysis tools
              and railway booking systems.
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