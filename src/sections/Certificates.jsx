import { motion } from "framer-motion";

const certificates = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    image: "/certificates/cert1.png",
    link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S143730120604239096.pdf" 
  },
  {
    title: "Developer and Technology Job Simulation",
    issuer: "accenture - Forage",
    image: "/certificates/cert2.png",
    link: "https://www.theforage.com/completion-certificates/ovyvuqqNRQKBjNxbj/3xnZEj9kfpoQKW885_ovyvuqqNRQKBjNxbj_2FFkvAjGzoBP9nA3n_1757169934432_completion_certificate.pdf"
  },
  {
    title: "Bits and Bytes of Computer Networking",
    issuer: "Google - Coursera",
    image: "/certificates/cert3.png",
    link: "https://www.coursera.org/account/accomplishments/verify/87S3774GSQYT"
  },
  {
    title: "React (Basic)",
    issuer: "HackerRank",
    image: "/certificates/cert4.png",
    link: "https://www.hackerrank.com/certificates/61bacbf93d44"
  }
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="relative py-32 px-6 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-100 overflow-hidden"
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
          Certificates
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-center max-w-2xl mx-auto mb-16 text-lg"
        >
          Certifications that demonstrate my continuous learning and technical growth.
        </motion.p>

        {/* CERTIFICATE GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {certificates.map((cert, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}

              whileHover={{
                y: -10,
                scale: 1.03
              }}

              className="group bg-white/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg border border-white/40 hover:shadow-purple-300/40 transition"
            >

              {/* IMAGE WITH HOVER OVERLAY */}
              <div className="relative bg-gray-50 flex items-center justify-center p-4 overflow-hidden">

                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                  <motion.a
  href={cert.link}
  target="_blank"
  rel="noopener noreferrer"

  whileTap={{ scale: 0.95 }}
  whileHover={{ scale: 1.05 }}

  className="
  px-6 py-2
  bg-white
  text-gray-900
  font-medium
  text-sm
  tracking-wide
  rounded-lg
  shadow-md
  border border-gray-200
  hover:bg-gray-100
  transition
  "
>
  VIEW CERTIFICATE
</motion.a>

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col">

                <h3 className="text-lg font-semibold mb-2">
                  {cert.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {cert.issuer}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Certificates;