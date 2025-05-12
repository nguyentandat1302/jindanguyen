import React, { useState, useRef } from "react";
import "./Experiences.css";
import { FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";

const experienceData = [
  {
    id: 1,
    title: "Full-Stack Developer (Full-time)",
    company: "Freelance",
    duration: "January 2025 - Now ",
    details: [
      "Led front-end and  development using React, Next.js, and Redux...",
      "Collaborated with cross-functional teams...",
      "Involved in 153 ongoing projects...",
    ],
    tech: [
      "REST APIs", "TypeScript", "React", "Tailwind CSS", "RTK Query",
      "Redux toolkit", "JWT", "NestJs", "MongoDB", "Docker", "I18n",
    ],
    align: "left",
  },
  {
    id: 2,
    title: "Full-stack Developer (Full-time)",
    company: "Tech Stack",
    duration: "July 2024 - Dec 2024",
    details: [
      "Led full-stack development using MERN stack...",
      "Implemented CI/CD pipelines...",
      "Managed cloud infrastructure...",
    ],
    tech: [
      "Node.js", "Express", "React", "MongoDB", "AWS", "Docker",
      "Kubernetes", "GraphQL", "Jenkins", "Git",
    ],
    align: "right",
  },
  {
    id: 3,
    title: "IOT CanSat (Full-time)",
    company: "Hanam university",
    duration: "Jan 2024 - June 2024",
    details: [
      "Collaborated with Korean students in cross-cultural teamwork ",
      "Designed and developed a CanSat...",
      "Implemented a web-based dashboard for data visualization...",
      "Gained hands-on experience with serial communication, sensor dataparsing, and basic telemetry visualization",
    ],
    tech: [
      "HTML", "JavaScript", "Serial Communication API",
      "Arduino IDE", "OAuth", "Microservices", "CI/CD",
    ],
    align: "left",
  },
];

export default function Experiences() {
  const [selectedId, setSelectedId] = useState(null);
  const timelineRef = useRef(null);

  const handleClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
    const element = document.getElementById(`exp-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="experience-wrapper">
      <h2 className="title">Where I've Worked</h2>
      <div className="timeline" ref={timelineRef}>
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            id={`exp-${exp.id}`}
            className={`timeline-item ${exp.align}`}
            onClick={() => handleClick(exp.id)}
          >
            <div
              className={`content-box ${
                selectedId === exp.id ? "expanded" : ""
              }`}
            >
              <h3>{exp.title}</h3>
              <p className="company">
                <FaMapMarkerAlt className="icon" /> {exp.company} • {exp.duration}
              </p>

              {selectedId === exp.id && (
                <div className="details">
                  <ul>
                    {exp.details.map((item, idx) => (
                      <li key={idx}>→ {item}</li>
                    ))}
                  </ul>
                  <div className="tech-stack">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="tech-chip">{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className={`timeline-dot ${
                selectedId === exp.id ? "active" : ""
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
