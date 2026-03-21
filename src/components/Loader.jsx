import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython } from "react-icons/fa";
import { SiMongodb} from "react-icons/si";

const icons = [
  { Icon: FaReact, color: "text-cyan-400", x: 0, y: -120 },
  { Icon: FaNodeJs, color: "text-green-500", x: 120, y: 0 },
  { Icon: FaHtml5, color: "text-orange-500", x: -120, y: 0 },
  { Icon: FaCss3Alt, color: "text-blue-500", x: 0, y: 120 },
  { Icon: FaJs, color: "text-yellow-400", x: 90, y: 90 },
  { Icon: SiMongodb, color: "text-green-400", x: -90, y: -90 },

  // NEW ICONS
  { Icon: FaJava, color: "text-red-500", x: -90, y: 90 },
  { Icon: FaPython, color: "text-yellow-500", x: 90, y: -90 },
  
];

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">

      {/* ICONS */}
      <div className="relative w-64 h-64 flex items-center justify-center">

        {icons.map(({ Icon, color, x, y }, index) => (
          <motion.div
            key={index}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: x, y: y, opacity: 1 }}
            transition={{
              delay: index * 0.2,
              duration: 0.8,
              ease: "easeOut"
            }}
            className={`absolute text-5xl ${color}`}
          >
            <Icon />
          </motion.div>
        ))}

        {/* CENTER DOT */}
        <motion.div
          className="absolute w-6 h-6 bg-purple-500 rounded-full blur-md"
          animate={{
            scale: [1, 1.4, 1]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity
          }}
        />

      </div>

      {/* TEXT */}
      <motion.h1
  className="absolute bottom-40 text-white text-xl tracking-[8px] flex items-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
>
  LOADING
  <span className="ml-2 flex">

    {[0,1,2].map((i) => (
      <motion.span
        key={i}
        className="mx-[2px]"
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          delay: i * 0.4
        }}
      >
        .
      </motion.span>
    ))}

  </span>
</motion.h1>

    </div>
  );
};

export default Loader;