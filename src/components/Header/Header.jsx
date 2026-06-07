import about from "..//../img/imglogo/Alik.png";
import linkdin0 from "..//../img/imglogo/linkedin.png";
import git0 from "..//../img/imglogo/github.png";
import mail from "..//../img/imglogo/email.png";
import "./Header.css";
function Header() {
  return (
    <div className="background">
      <div className="infoall">
        <div className="info1">
          <h2 className="Hello">Hello, I'm</h2>
          <h1 className="Alik">Alik Hakobyan </h1>
          <h2 className="front">Front -End Developer</h2>
          <p className="aboutme">
            Junior Frontend Developer with hands-on experience in building
            modern and responsive web applications using React, TypeScript,
            JavaScript, HTML, CSS, and Redux. Experienced in developing
            userfriendly interfaces and implementing clean, maintainable code
            following modern web development practices. Worked on several
            practical projects, including a Facebook-like social media
            interface, a design studio website, a Tic Tac Toe game, a to-do list
            application, and a movie website. These projects demonstrate skills
            component-based architecture, state management, responsive design,
            and interactive UI development. Developed a design studio website
            that showcases services such as in naming, branding, and design
            solutions. The website focuses on clear structure, responsive
            layout, and intuitive navigation to provide users with a smooth and
            engaging browsing experience. Passionate about creating clean,
            responsive, and visually appealing interfaces, with a strong
            commitment to continuous learning and improving development skills.
          </p>
          <div className="button">
            <button className="View" id="projects">
              View My Work
            </button>
            <button className="Contact" id="#contact">
              Contact Me
            </button>
          </div>
          <div className="findme">
            <p>Find me on</p>
            <div className="info2">
              <a href="https://github.com/Alik977" target="blank">
                <img src={git0} alt="" className="git1" />
              </a>
              <a
                href="https://www.linkedin.com/in/alik-hakobyan-7949533a1/"
                target="blank"
              >
                <img src={linkdin0} alt="" className="link1" />
                <a href="mailto:alik.hakobyan.dev@gmail.com" target="blank">
                  <img src={mail} alt="email" className="mail" />
                </a>
              </a>
            </div>
          </div>
        </div>
        <img src={about} alt="" className="imagealik" />
      </div>
    </div>
  );
}

export default Header;
