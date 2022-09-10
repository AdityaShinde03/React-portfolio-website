import React from "react";
import "./about.css";
import ME from "../../assets/me3.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
        <div className="about_cards">
          <article className="about_card">
          <FaAward className="about_icon" />
            <h5>Experience</h5>
            <small>2+ years</small>
          </article>
          <article className="about_card">
          <FiUsers className="about_icon" />
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
          </article>
          <article className="about_card">
          <VscFolderLibrary className="about_icon" />
            <h5>Projects</h5>
            <small>80+ completed</small>
          </article>
          </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          distinctio ex minima atque odio nobis, magni cupiditate corrupti
          maiores! Mollitia iusto obcaecati corporis soluta aut totam inventore
          dolorem dicta illo, ipsam accusamus officiis molestiae dignissimos
          modi. Itaque illo facere dolor? Libero voluptas blanditiis nam
          pariatur excepturi aut obcaecati corrupti? Nam?
        </p>

        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
        </div>
      </div>
    </section>
  );
};

export default About;
