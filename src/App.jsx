import React, { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Loader from "./components/Loader";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";


const App = () => {

  const [loading, setLoading] = useState(true);

  const cursorRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 3000);

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);

  }, []);

  if (loading) return <Loader />;

  return (
    <>
      {/* Glow Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-20 h-20 rounded-full pointer-events-none z-50 blur-md opacity-90"
        style={{
          background: "linear-gradient(135deg,#60a5fa,#a78bfa,#f9a8d4)"
        }}
      />

      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Certificates/>
      <Skills />
      <Education />
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;