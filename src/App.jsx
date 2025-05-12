// App.jsx
import React from "react";
import AboutMe from "./AboutMe";
import Experiences from "./Experiences";
import Project from "./Project";
import Testimonials from "./Testimonials";
import Skills from "./Skills";
import JinDaNguyen from "./JinDaNguyen";
import Contact from "./Contact";
import MatrixEffect from "./MatrixEffect";
import Footer from "./Footer";

import "./App.css";
import { FaLinkedin, FaGithub, FaAt, FaRegFileAlt } from "react-icons/fa";

export default function App() {
  return (
    <div className="app">
      {/* Navbar */}
      
      <div className="navbar">
        <img
          src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/482007459_1712508726364891_2398452589159385950_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGx8_npaF0zQLcA0dfHZFMSLIyo9uEEHnwsjKj24QQefB5Gl6ARgK8MAkU_JMOW7kKQnStG8mK8MwePF_H0SnNL&_nc_ohc=DhhY59aTNRUQ7kNvwGpf-Oj&_nc_oc=AdkTpcj-fZhIm54MXymxpGXvOcjNzV5eowJsZvROwYz7Sl9DYQ81bjYbN2gDMEFlFWQ&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=Due0yUDfb5mCg_5Tj9Tr1Q&oh=00_AfJeIIuBoCWYsiAhFcLo7yzPoHoLH5JIikDBwlQnGXaCCA&oe=682685CF"
          alt="avatar"
          className="avatar-nav"
        />
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
           <li className="nav-item">
            <a href="#experiences">Experiences</a>
          </li>
           <li className="nav-item">
            <a href="#projects">Project</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="#skills">Skill</a>
          </li>
           <li className="nav-item">
            <a href="#contact">Contact</a>
           </li>
        </ul>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-left">
         <h1 class="jin-title">
            <span>J</span><span>i</span><span>n</span><span>D</span><span>a</span>
            &nbsp;
            <span>N</span><span>g</span><span>u</span><span>y</span><span>e</span><span>n</span>
          </h1>

          <h2>Fresher Full-stack Developer</h2>
          <p>
            I Love'd to <span>explore</span>, <span>build</span>, <span>test</span> and
            <span> deploy</span> software.
          </p>
          <div className="icons">
            <FaLinkedin />
            <FaGithub />
            <FaAt />
            <FaRegFileAlt />
          </div>
        </div>
        <div className="hero-right">
          <img
            src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/482007459_1712508726364891_2398452589159385950_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGx8_npaF0zQLcA0dfHZFMSLIyo9uEEHnwsjKj24QQefB5Gl6ARgK8MAkU_JMOW7kKQnStG8mK8MwePF_H0SnNL&_nc_ohc=DhhY59aTNRUQ7kNvwGpf-Oj&_nc_oc=AdkTpcj-fZhIm54MXymxpGXvOcjNzV5eowJsZvROwYz7Sl9DYQ81bjYbN2gDMEFlFWQ&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=Due0yUDfb5mCg_5Tj9Tr1Q&oh=00_AfJeIIuBoCWYsiAhFcLo7yzPoHoLH5JIikDBwlQnGXaCCA&oe=682685CF"
            alt="main"
          />
        </div>
      </div>

      {/* About Section */}
      <section className="section" id="about">
        <AboutMe />
      </section>
       <section className="section" id="experiences">
         <Experiences />
       </section>
       <section className="section" id="projects">
         <Project />
       </section>
       <section className="section" id="testimonials">
         <Testimonials />
       </section>
       <section className="section" id="skills">
         <Skills />
       </section>
        <section className="section" id="jindanguyen">
         <JinDaNguyen />
       </section>
        <section className="section" id="contact">
          <Contact />
           </section>
           <section className="section" id="matrix-effect">
          <MatrixEffect />
           </section>
                 <Footer />
    </div>
    
  );
}