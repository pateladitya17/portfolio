import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/project";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Navbar from "./components/navBar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {
          <>
            <Route
              path="/"
              element={
                <div>
                  <Navbar />
                  <Home />
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Contact />
                </div>
              }
            />
          </>
          /*<Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */
        }
      </Routes>
    </Router>
  );
};

export default App;
