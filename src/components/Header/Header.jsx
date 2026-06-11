import about from "..//../img/imglogo/Alik.png";
import linkdin0 from "..//../img/imglogo/linkedin.png";
import git0 from "..//../img/imglogo/github.png";
import mail from "..//../img/imglogo/email.png";
import aboutmini from "..//../img/imglogo/Alikmini.png";
import gmail from "..//../img/imglogo/mail.png";
import gps from "..//../img/imglogo/gps.png";
import calendar from "..//../img/imglogo/calendar.png";
import download from "..//../img/imglogo/file-download.png";
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
            <a a href="tel:041459804"  >Contact Me</a>  
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
      <div className="miniabout">
        <div className="imgmini">
          <img src={aboutmini} alt="" className="aboutmini" />
        </div>
        <div className="miniabout1">
          <h2 className="aboutminih2">ABOUT ME</h2>

          <h1 className="WhoI">Who am I?</h1>
          <p className="paragrapfmini">
            I'm Alik Hakobyan, a Front-End Developer focused on creating modern,
            responsive, and user-friendly web applications. I enjoy transforming
            ideas into clean, functional interfaces using React, JavaScript, and
            modern web technologies. My goal is to build digital experiences
            that are fast, accessible, and visually engaging while continuously
            improving my skills and exploring new technologies.
          </p>
          <div className="miniabout2">
            <div className="calendar1">
              <img src={calendar} alt="" className="calendar" />
              <p>06.12.1997</p>
            <button className="downloadCV"> <a href="/Alik Hakobyan (4).pdf" download > Download CV   <img src={download} alt="" className="down" /> </a></button>
            </div>
            <div className="location1">
              <img src={gps} alt="" className="location" />
              <p>Yerevan, Armenia</p>
            </div>
            <div className="mail1">
              <img src={gmail} alt="" className="mailmini" />
              <p>alik.hakobyan.dev@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
