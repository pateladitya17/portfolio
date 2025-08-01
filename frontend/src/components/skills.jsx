import React, { useEffect, useState, useRef } from "react";
import styles from "./skills.module.css";
import {
  FaJs,
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Git", icon: <FaGitAlt /> },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true); // Fade in when the section is visible
        } else {
          setIsVisible(false); // Fade out when the section is out of view
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={skillsRef}
      id="skills"
      className={`${styles.skillsSection} ${
        isVisible ? styles.fadeIn : styles.fadeOut
      }`}
    >
      <div className={styles.container}>
        <h2 className={styles.heading}>My Skills</h2>
        <ul className={styles.skillsList}>
          {skills.map((skill, index) => (
            <li key={index} className={styles.skillItem}>
              <div className={styles.skillIcon}>{skill.icon}</div>
              <div className={styles.skillName}>{skill.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
