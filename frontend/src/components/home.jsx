import { useState, useEffect } from "react";
import {
  GitHub,
  LinkedIn,
  Instagram,
  KeyboardArrowDown,
  Code,
  DesignServices,
  IntegrationInstructions,
} from "@mui/icons-material";
import styles from "./home.module.css";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => setIsNavOpen((prev) => !prev);

  const handleScroll = () => {
    const section = document.getElementById("home");
    if (!section) return;

    const { top } = section.getBoundingClientRect();
    setIsVisible(top < window.innerHeight * 0.8);
  };

  const scrollToHome = () => {
    const section = document.getElementById("home");
    section?.scrollIntoView({ behavior: "smooth" });
    setTimeout(handleScroll, 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className={`${styles.homeSection} ${
        isVisible ? styles.fadeIn : styles.fadeOut
      }`}
    >
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h4 className={styles.greeting}>
              <IntegrationInstructions className={styles.greetingIcon} />
              Welcome to my coding world
            </h4>

            <h1 className={styles.heading}>
              Hi, I'm{" "}
              <span className={styles.highlightWrapper}>
                <span className={styles.highlightText}>Aditya Patel</span>
                <span className={styles.highlightUnderline}></span>
              </span>
            </h1>

            <h2 className={styles.subheading}>
              <div>
                <Code className={styles.roleIcon} />
                Frontend Developer
              </div>
              &nbsp;&nbsp;
              
            </h2>

            <p className={styles.description}>
             Building intuitive web experiences through creative problem-solving and thoughtful design. Transforming complexity into clarity, one interface at a time.
            </p>

            <div className={styles.ctaContainer}>
              <a href="#projects" className={styles.ctaButton}>
                View My Work <KeyboardArrowDown className={styles.ctaIcon} />
              </a>
            </div>
          </div>

          <div className={styles.socialsContainer}>
            <div className={styles.socialsDivider} />
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/pateladitya17"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <GitHub className={styles.socialIcon} fontSize="large" />
              </a>
              <a
                href="https://linkedin.com/in/aditya-patel-49628a330"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <LinkedIn className={styles.socialIcon} fontSize="large" />
              </a>
              <a
                href="https://www.instagram.com/aditya_patel_84kp/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <Instagram className={styles.socialIcon} fontSize="large" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
