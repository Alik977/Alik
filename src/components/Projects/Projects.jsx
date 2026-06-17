import img1 from "..//../img/imgprojects/1.png";
import img2 from "..//../img/imgprojects/2.png";
import img3 from "..//../img/imgprojects/3.png";
import img4 from "..//../img/imgprojects/4.png";
import img5 from "..//../img/imgprojects/5.png";
import img6 from "..//../img/imgprojects/6.png";
import img7 from "..//../img/imgprojects/7.png";
import "./Projects.css";
function Projects() {
  return (
    <div className="projects">
      <div className="allprojects">
        <div className="projectname">
          <h1>PROJECTS</h1>
          <div className="imagebox">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
