import React from "react";
import "./About.css";
import ME from "../../Assets/assettwo/Ak.png"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id="about">
      <h5>Get to know </h5>
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
                <FaAward className="about_icon"/>
                <h5>Experience</h5>
                <small> 7+ Years Working Experience In Business Travel Consultant</small>
              </article>

               <article className="about_card">
                <FiUsers className="about_icon"/>
                <h5>Clients</h5>
                <small>50+ clients of Corporate Traveller</small>
              </article>

              <article className="about_card">
                <VscFolderLibrary className="about_icon"/>
                <h5>Event</h5>
                <small> Handled Event like IPL (RCB Cricket Team) </small>
              </article>
            </div>
            <p className="work_exprience">Total 7+ hands on experience of Business travel consultant managing travel arrangement CIP/VIP corporate client.</p>
            <p className="work_webexprience">Knowledge of Full Stack Web Development.</p>
          
            
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>        
      </div>
    </section>
  );
};

export default About;
