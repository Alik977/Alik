import aboutmini from "..//../img/imglogo/Alikmini.png";
import gmail from "..//../img/imglogo/mail.png";
import gps from "..//../img/imglogo/gps.png";
import calendar from "..//../img/imglogo/calendar.png";
import download from "..//../img/imglogo/file-download.png";
import "./About.css";
function About() {
  return (
    
    <div className="allaboutme">
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
          modern web technologies. My goal is to build digital experiences that
          are fast, accessible, and visually engaging while continuously
          improving my skills and exploring new technologies.
        </p>
        <div className="miniabout2">
          <div className="calendar1">
            <img src={calendar} alt="" className="calendar" />
            <p>06.12.1997</p>
            <button className="downloadCV">
              {" "}
              <a href="/Alik Hakobyan (4).pdf" download>
                {" "}
                Download CV <img src={download} alt="" className="down" />{" "}
              </a>
            </button>
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

export default About;
