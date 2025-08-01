import React, { useEffect, useState, useRef } from "react";
import styles from "./about.module.css";
import img from "../image/veer.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        if (entry.isIntersecting) {
          // Add staggered animations
          contentRef.current.style.animation = `${styles.contentEnter} 0.8s ease-out forwards`;
          imageRef.current.style.animation = `${styles.imageEnter} 0.8s 0.2s ease-out forwards`;
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      className={`${styles.aboutSection} ${isVisible ? styles.visible : ""}`}
      aria-label="About Section"
    >
      <h2 className={styles.heading} data-aos="fade-up">
        About Me
      </h2>

      <div className={styles.container}>
        {/* Text Content */}
        <article
          ref={contentRef}
          className={styles.contentSection}
          aria-labelledby="about-content"
        >
          <div className={styles.textWrapper}>
            <p className={styles.text}>
              Hi, I'm Aditya — a frontend developer with a flair for crafting clean, intuitive, and responsive web interfaces. Currently pursuing a B.E. in Information Technology at Government Engineering College, Modasa, I enjoy combining technical skills with a design-first mindset to deliver meaningful digital experiences.
            </p>
            <p className={styles.text}>
                 Beyond the screen, I find inspiration in traveling to new places, trekking through nature’s calm, and sketching ideas that often turn into code. These passions help me stay creative and curious in everything I create.

            </p>
          </div>
        </article>

        {/* Profile Image */}
        <figure
          ref={imageRef}
          className={styles.profileSection}
          aria-label="Aditya's profile picture"
        >
          <div className={styles.imageContainer}>
            <img
              src={img}
              alt="Aditya Patel"
              className={styles.profileImage}
              loading="lazy"
            />
            <div className={styles.imageOverlay} aria-hidden="true" />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default About;
