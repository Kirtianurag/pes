import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
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
          Get In Touch
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-center max-w-2xl mx-auto mb-16 text-lg"
        >
          Have a project in mind? Let's work together to create something amazing.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* CONTACT INFO CARD */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-white/40 p-8"
          >

            <h3 className="text-2xl font-semibold mb-8">
              Contact Information
            </h3>

            {/* EMAIL */}
            <div className="flex items-center gap-4 mb-6 group">

              <div className="p-4 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition">
                <FaEnvelope className="text-purple-600 text-lg" />
              </div>

              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600 text-sm">
                  kirtianurag2003@gmail.com
                </p>
              </div>

            </div>

            {/* PHONE */}
            <div className="flex items-center gap-4 mb-6 group">

              <div className="p-4 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition">
                <FaPhone className="text-purple-600 text-lg" />
              </div>

              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-600 text-sm">
                  +91 7007297976
                </p>
              </div>

            </div>

            {/* LOCATION */}
            <div className="flex items-center gap-4 group">

              <div className="p-4 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition">
                <FaMapMarkerAlt className="text-purple-600 text-lg" />
              </div>

              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-600 text-sm">
                  Varanasi, Uttar Pradesh, India
                </p>
              </div>

            </div>

          </motion.div>


          {/* CONTACT FORM */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-white/40 p-8 flex flex-col gap-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            {/* SEND BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className="mt-2 px-6 py-3 rounded-xl text-white font-medium
              bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
              shadow-lg shadow-purple-400/40
              hover:shadow-purple-500/60
              transition"
            >
              Send Message
            </motion.button>

          </motion.form>

        </div>

      </div>

    </section>
  );
};

export default Contact;