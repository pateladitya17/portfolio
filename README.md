# Portfolio Website

A fully responsive and interactive portfolio website showcasing my skills, projects, and professional journey. This project demonstrates expertise in modern web development technologies with clean design and animations.

## Features

- **Responsive Design:** Works seamlessly on all devices, including desktops, tablets, and mobile phones.
- **3D Model Integration:** Includes a 3D laptop model rendered using `@react-three/fiber` and `@react-three/drei`.
- **Smooth Animations:** Utilizes AOS (Animate On Scroll) for entry animations.
- **Contact Form Integration:** Users can send messages directly to my email using Axios and SendGrid.
- **Social Links:** Interactive icons with hover effects linking to GitHub, LinkedIn, and Instagram.
- **Dynamic Navbar:** A responsive navigation menu with toggling functionality.

## Technologies Used

- **Frontend Framework:** React.js with Vite
- **Backend:** Node.js, Express.js, and SendGrid API
- **3D Rendering:** @react-three/fiber and @react-three/drei
- **Styling:** CSS Modules for scoped and maintainable styling
- **Animations:** AOS (Animate On Scroll)
- **Icons:** FontAwesome
- **HTTP Requests:** Axios for sending form data

## Project Structure

**Frontend**

```
src/
├── components/
│   ├── Main.jsx          // Main hero section with 3D model
│   ├── Home.jsx          // Welcome section with text and links
│   └── SocialLinks.jsx   // Social media icons and links
├── assets/
│   └── models/           // 3D model files
├── styles/
│   ├── main.module.css   // Styles for Main component
│   ├── Home.module.css   // Styles for Home component
│   └── global.css        // Global styles
└── App.js                // Main application file
```

**Backend**

```
├── backend/
│ ├── routes/
│ │ └── contact.js
│ ├── app.js
│ ├── package.json
│ └── .env

```

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/viren-kevat/portfolio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Live Demo

You can view the live version of this project [here](#).

## Customization

- **3D Model:** Replace `/assets/models/scene.gltf` with your own GLTF model.
- **Social Links:** Update the URLs in `SocialLinks.jsx` with your GitHub, LinkedIn, and Instagram links.
- **Content:** Edit the `Main.jsx` and `Home.jsx` components to personalize text and headings.
