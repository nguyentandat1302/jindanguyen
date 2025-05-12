import React, { useEffect, useRef, useState } from "react";
import "./AboutMe.css";
import { FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";

export default function AboutMe() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`about-me ${visible ? "slide-in" : ""}`}
      id="about"
    >
      <h2 className="title">About Me</h2>
      <p>
        <FaMapMarkerAlt className="icon" /> I'm <strong>Nguyen Tan Dat</strong> from HO CHI MINH, VIETNAM.
        <FaGraduationCap className="icon" /> I have graduated with a degree in Software Engineering and currently work as a <em>Full-stack Developer</em> who loves building modern web applications. I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
      </p>
      <p>
        Currently, I'm focusing on expanding my skills with <strong>MERN Stack</strong> and deploying responsive, scalable software.
      </p>
    </div>
  );
}
