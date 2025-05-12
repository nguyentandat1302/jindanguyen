import React from "react";
import "./Skills.css";

// import js from "../src/assets/js.png"; // Sửa đường dẫn
// import ts from "../assets/ts.png"; // Sửa đường dẫn
// import css from "../assets/css.png"; // Sửa đường dẫn
// import html from "../assets/html.png"; // Sửa đường dẫn
// import go from "../assets/go.png"; // Sửa đường dẫn
// import python from "../assets/python.png"; // Sửa đường dẫn
// import react from "../assets/react.svg"; // Sửa đường dẫn
// import nextjs from "../assets/nextjs.png"; // Sửa đường dẫn
// import vue from "../assets/vue.png"; // Sửa đường dẫn
// import php from "../assets/php.png"; // Sửa đường dẫn
// import laravel from "../assets/laravel.png"; // Sửa đường dẫn
// import lumen from "../assets/lumen.png"; // Sửa đường dẫn
// import nest from "../assets/nest.png"; // Sửa đường dẫn
// import node from "../assets/node.png"; // Sửa đường dẫn
// import aws from "../assets/aws.png"; // Sửa đường dẫn
// import postgres from "../assets/postgres.png"; // Sửa đường dẫn
// import mysql from "../assets/mysql.png"; // Sửa đường dẫn
// import mongo from "../assets/mongo.png"; // Sửa đường dẫn
// import git from "../assets/git.png"; // Sửa đường dẫn
// import figma from "../assets/figma.png"; // Sửa đường dẫn
// import openai from "../assets/openai.png"; // Sửa đường dẫn
// import copilot from "../assets/copilot.png"; // Sửa đường dẫn

const categories = [
  {
    title: "Languages",
    items: [
      { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JavaScript" },
      { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", label: "TypeScript" },
      { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", label: "Go" },
      { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", label: "Python" },
      { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", label: "PHP" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", label: "CSS" },
      { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", label: "HTML" },
      { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React" },
      { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", label: "NextJS" },
      { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", label: "Vuejs" },
    ],
  },
  {
    title: "Backend",
    items: [
      { img: "https://avatars.githubusercontent.com/u/958072?s=280&v=4", label: "Laravel" },
      { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", label: "Lumen" },
      { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKdd-lg9z9HqQ0XkfA3FN2lY7Vx2DpGAXbSg&s", label: "NestJS" },
      { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", label: "Node" },
    ],
  },
  {
    title: "Database & Cloud",
    items: [
      { img: "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png", label: "AWS" },
      { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", label: "PostgreSQL" },
      { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", label: "MySQL" },
      { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", label: "MongoDB" },
    ],
  },
  {
    title: "Tools",
    items: [
      { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", label: "Git" },
      { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", label: "Figma" },
      { img: "https://github.com/openai.png", label: "OpenAI" },
      { img: "https://play-lh.googleusercontent.com/p8R1lAZI5_WCOzmvBYnOQasCWcjc9d2vM7z4PaVku8b9AfxGhqQqM0ldJ8KULHblVj-g", label: "Copilot" },
    ],
  },
];


export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills & Tools</h2>
      <p className="skills-subtitle">
        My primary focus lies in frontend development and backend development.
        Full-stack is the way to go xD.
      </p>

      <div className="skills-grid">
        {categories.map((category, idx) => (
          <div key={idx} className="skills-category" data-aos="fade-up">
            <h3>{category.title}</h3>
            <div className="skills-items">
              {category.items.map((item, index) => (
                <div key={index} className="skill-item" data-aos="zoom-in">
                  <img src={item.img} alt={item.label} />
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
