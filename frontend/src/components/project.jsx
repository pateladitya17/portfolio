import React, { useEffect } from "react";
import styles from "./project.module.css"; // Import CSS module

const projectData = [
  {
    title: "Mega Blog App",
    description:
      "Built a responsive blog app using React ⚛️, Tailwind CSS 🎨, and Appwrite 🗂️. Implemented user authentication 🔐, post creation with image uploads 🖼️, and dynamic routing 🔁. 🚀 Deployed on Vercel with an optimized UI 📱 and seamless backend integration 🔧. ",
    image:
      "https://i.pinimg.com/736x/b3/34/b8/b334b8d4dbbcf8a8dc7b2a413db97fb9.jpg",
    link: "https://react-blogapp-topaz.vercel.app/",
  },
  {
    title: "Task Management App ",
    description:
      "Built a TODO list task management application that enables secure task creation ✍️, real-time updates 🔄, and seamless management of personal tasks 📋. Developed with React (Vite) ⚛️⚡ for fast performance and a smooth user experience. ",
    image:
      "https://i.pinimg.com/736x/93/72/b6/9372b6dba7b5da19c473545e1a6105d3.jpg",
    link: "https://react-todolist-nine-gold.vercel.app/",
  },
  {
    title: "Currency_Converter",
    description:
      "This project is built using HTML, CSS, and JavaScript 🌐. It features an API integration for real-time currency conversion 💱, use React js ⚛️. allowing users to easily convert between different currencies. The design is simple yet effective, providing a user-friendly experience for seamless conversions.",
    image:
      "https://i.pinimg.com/1200x/fa/55/3a/fa553ac9c5a7a559d902ff3319a4e313.jpg",
    link: "https://react-currencyconvertor-mu.vercel.app/",
  },
  {
    title: "password Generator",
    description:
      "Built a modern Password Generator using React ⚛️ and Vite ⚡ featuring support for uppercase, lowercase, numbers 🔢, and symbols 🔣. It includes a dynamic length slider 📏, a real-time strength indicator, and a one-click copy-to-clipboard 📋 function for enhanced user experience.",
    image:
      "https://i.pinimg.com/736x/e6/57/ed/e657edbaf5f2c6608b861f3963e502d8.jpg",
    link: "https://react-password-generator-pink-eta.vercel.app/",
  },
  {
    title: "Rock-Paper-Scissors-Game",
    description:
      "🎮 Developed a Rock-Paper-Scissors Game using HTML 🧱, CSS 🎨, and JavaScript ⚙️. Features interactive gameplay 🤖, dynamic score tracking 📊, and a responsive UI 📱 for an engaging user experience.",
    image:
      "https://i.pinimg.com/736x/0b/b2/2a/0bb22aab01c93257ec0d29369665a828.jpg",
    link: "https://rock-paper-scissors-game-tau-eight.vercel.app/",
  },
  {
    title: "Tic-Tac-Toe-game",
    description:
      "🎮 Created a Tic-Tac-Toe Game using HTML 🧱, CSS 🎨, and JavaScript ⚙️. Includes two-player mode 👥, win/draw detection ✅❌, and a responsive interface 📱 for smooth gameplay across devices.",
    image:
      "https://i.pinimg.com/736x/20/eb/26/20eb26ee2d53d4452ddbebda805d7fe7.jpg",
    link: "https://tic-tac-toe-game-gold-two.vercel.app/",
  },
  {
    title: "Music App  ",
    description:
      "Developed a responsive Spotify-inspired UI using HTML, CSS, and JavaScript. Replicated core layouts including playlists, sidebar navigation, and music controls for a seamless user experience. ",
    image:
      "https://i.pinimg.com/736x/05/e0/10/05e0108e2a8ca4babcc465cca7a191c1.jpg",
    link: "https://spotifypro-lac.vercel.app/",
  },
];

const Projects = () => {
  useEffect(() => {
    const projectCards = document.querySelectorAll(`.${styles.projectCard}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animationClass = entry.target.dataset.animation;
            entry.target.classList.remove(styles.reverseAnimation);
            entry.target.classList.add(styles[animationClass]);
          } else {
            entry.target.classList.add(styles.reverseAnimation);
            entry.target.classList.remove(
              styles[entry.target.dataset.animation]
            );
          }
        });
      },
      {
        threshold: 0.1, // Adjusted for better small screen detection
      }
    );

    projectCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      projectCards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>My Projects</h2>
        <div className={styles.projectsList}>
          {projectData.map((project, index) => (
            <div
              key={index}
              className={styles.projectCard}
              data-animation={
                index % 2 === 0 ? "slideFromLeft" : "slideFromRight"
              }
            >
              <img src={project.image} alt={project.title} />
              <div className={styles.projectTitle}>{project.title}</div>
              <div className={styles.projectDescription}>
                {project.description}
              </div>
              <a href={project.link} className={styles.projectLink}>
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
