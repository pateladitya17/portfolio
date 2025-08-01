import React, { useState, useEffect, Suspense, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Center } from "@react-three/drei";
import AOS from "aos";
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material"; // Material UI icons
import styles from "./hero.module.css";

const Loader = () => (
  <div className={styles.loader}>
    <div className={styles.loaderSpinner} />
  </div>
);

const LaptopModel = () => {
  const { scene } = useGLTF("/models/3d_clipart_-_webdev/scene.gltf");
  return <primitive object={scene} scale={0.7} />;
};

const Main = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(false);

  // Move handleScroll inside the component and use useCallback
  const handleScroll = useCallback(() => {
    const section = document.getElementById("Main");
    if (!section) return;

    const { top } = section.getBoundingClientRect();
    setIsVisible(top < window.innerHeight * 0.8);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    AOS.init({ duration: 1000, once: true, easing: "ease-in-out-quad" });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // Add handleScroll to dependencies

  return (
    <section id="hero" className={styles.Main}>
      <div className={styles.card} style={{ marginTop: "3rem" }}>
        {/* Text Content Section */}
        <article className={styles.textSection} data-aos="fade-right">
          <header>
            <h1 className={styles.title}>
              <span className={styles.gradientText}>I am</span>
              <br />
              <span className={styles.name}>Aditya Patel</span>
            </h1>
          </header>

          <p className={styles.description}>
            Skilled in developing responsive and interactive web applications using the latest JavaScript frameworks, with a strong eye for detail and usability.
          </p>

          {/* Updated Social Links with Material UI */}
          <nav className={styles.socialLinks} aria-label="Social media links">
            <a
              href="https://github.com/pateladitya17"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub profile"
            >
              <GitHub
                className={styles.socialIcon}
                sx={{
                  fontSize: "3rem",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-5px) scale(1.1)",
                  },
                }}
              />
            </a>
            <a
              href="https://linkedin.com/in/aditya-patel-49628a330"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn profile"
            >
              <LinkedIn
                className={styles.socialIcon}
                sx={{
                  fontSize: "3rem",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-5px) scale(1.1)",
                  },
                }}
              />
            </a>
            <a
              href="https://www.instagram.com/aditya_patel_84kp/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Instagram profile"
            >
              <Instagram
                className={styles.socialIcon}
                sx={{
                  fontSize: "3rem",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-5px) scale(1.1)",
                  },
                }}
              />
            </a>
          </nav>
        </article>

        {/* 3D Model Section */}
        <div className={styles.modelContainer}>
          <Suspense fallback={<Loader />}>
            <Canvas
              shadows
              dpr={[1, 1.5]}
              frameloop="demand"
              style={{
                touchAction: "none", // ✅ Fix for some mobile browsers
                width: windowWidth <= 768 ? "150%" : "100%",
                height: "70vh",
                position: "absolute",
                top: windowWidth <= 768 ? "12rem" : "-3rem",
                left: windowWidth <= 768 ? "-6rem" : "15rem",
                zIndex: 10000,marginBottom: "2rem",
              }}
              camera={{ position: [6, 2, 6], fov: 60 }}
            >
              <ambientLight intensity={0.7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <Center>
                <LaptopModel />
              </Center>
              <OrbitControls
                enableZoom={false}
                enableRotate={true}
                autoRotate={true}
                autoRotateSpeed={4} // Adjust speed as needed
                enableDamping={true} // Smooth interaction
                // dampingFactor={0.05} // Reduce sensitivity
              />
            </Canvas>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Main;
