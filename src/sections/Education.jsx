import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const education = [
  {
    year: "2023 - 2027",
    title: "B.Tech Computer Science & Engineering",
    place: "Lovely Professional University",
    marks: "CGPA: 6.94 / 10",
    icon: FaGraduationCap
  },
  {
    year: "2022 - 2023",
    title: "Higher Secondary Education",
    place: "Glorious Academy",
    marks: "Percentage: 65",
    icon: FaSchool
  },
  {
    year: "2020 - 2021",
    title: "Secondary Education",
    place: "St. John's School",
    marks: "Percentage: 83.2",
    icon: FaSchool
  }
];

const Education = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      id="education"
      className="relative py-32 px-6 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-100 overflow-hidden"
    >

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-6"
        >
          Education
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-center max-w-2xl mx-auto mb-20 text-lg"
        >
          My academic journey and the foundation that shaped my technical skills.
        </motion.p>

        {/* TIMELINE CONTAINER */}
        <div className="relative">

          {/* Background timeline */}
          <div className="absolute left-1/2 top-0 w-[3px] h-full bg-gray-300"></div>

          {/* Animated progress line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-[3px] bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]"
          />

          <div className="space-y-24">

            {education.map((item, index) => (

              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
              >

                {/* TIMELINE DOT */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-purple-500 rounded-full shadow-lg"
                />

                {/* CARD */}
                <motion.div
  initial={{
    opacity: 0,
    x: index % 2 === 0 ? -80 : 80
  }}
  whileInView={{
    opacity: 1,
    x: 0
  }}
  transition={{ duration: 0.6 }}

  className="relative w-[45%] bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow-md border border-white/40 hover:-translate-y-1 hover:shadow-purple-300/40 transition"
>

  {/* Accent Bar */}
  <div className="absolute left-0 top-0 h-full w-1 bg-purple-500 rounded-l-xl"></div>

  {/* Icon */}
  <div className="flex items-center gap-3 mb-2">
    <item.icon className="text-purple-600 text-xl" />

    <p className="text-sm text-purple-600 font-semibold tracking-wide">
      {item.year}
    </p>
  </div>

  {/* Degree */}
  <h3 className="text-xl font-semibold mb-1">
    {item.title}
  </h3>

  {/* School */}
  <p className="text-gray-700 text-lg font-medium mb-1">
    {item.place}
  </p>

  {/* Marks */}
  <p className="text-gray-600 text-sm">
    {item.marks}
  </p>

</motion.div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Education;