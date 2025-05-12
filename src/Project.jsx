import React from "react";
import "./Project.css";

const projects = [
  {
    id: 1,
    title: "Freelance Project",
    subtitle: "Associated with TDMU  College Project",
    image:
      "data:image/png;base64,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",
    description:
      "A web application to manage students and activities in a workshop setting. Successfully managed ~10,000 registered students and more than 477 projects.",
    tech: [
      "TypeScript", "ReactJS", "REST APIs", "Redux Toolkit",
      "Tailwind CSS", "RTK Query", "Formik", "Figma", "Trello"
    ],
    liveUrl: "https://www.vn.freelancer.com",
  },
  {
    id: 2,
    title: "BookingCare",
    subtitle: "Associated with TDMU  College Project",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2SqgJQ_cUvb6_nxyPkwJ8c8FPX3cH0s1KGA&s",
    description:
      "A digital menu system that helps manage menus easily. Led the frontend using React & TailwindCSS. Collaborated with backend team using NestJS, implemented real-time features and optimized performance.",
    tech: [
      "TypeScript", "ReactJS", "NestJS", "Vercel", "REST APIs",
      "Socket.io", "MongoDB", "I18n", "Axios", "DaisyUI", "Cloudinary", "Stripe"
    ],
    liveUrl: "https://bookingcare.vn/",
  },
];

export default function Project() {
  const handleMouseMove = (e) => {
    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.transform = `perspective(1000px) rotateY(${(x - rect.width / 2) / 20}deg) rotateX(${-(y - rect.height / 2) / 20}deg)`;
    });
  };

  const handleMouseLeave = () => {
    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => {
      card.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`;
    });
  };

  return (
    <div id="projects" className="project-container">
      <div className="project-header">
        <h2 className="title">Projects</h2>
      </div>
      <section className="projects-wrapper">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              {project.subtitle && (
                <p className="subtitle">{project.subtitle}</p>
              )}
              <p className="description">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-chip">
                    {t}
                  </span>
                ))}
              </div>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="live-url">
                Live URL ↗
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
