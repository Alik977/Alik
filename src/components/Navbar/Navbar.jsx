import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "..//../img/imglogo/gemini-2.5-flash-image_Will_you_give_me_this_logo_Will_you_make_it_prettier_Keep_the_colors_the_same_ju-0 (1).jpg";
import linkdin from "..//../img/imglogo/linkedin.png";
import git from "..//../img/imglogo/github.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" className="logoedit" />
      </div>

      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>About</a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>Skills</a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>Projects</a>
          </li>
          <li>
            <a href="#experience" onClick={closeMenu}>Experience</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
        <div className="linkbio">
          <a href="https://github.com/Alik977" target="blank">
            <img src={git} alt="" className="git" />
          </a>
          <a
            href="https://www.linkedin.com/in/alik-hakobyan-7949533a1/"
            target="blank"
          >
            <img src={linkdin} alt="" className="link" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
