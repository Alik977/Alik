import html from "..//../img/imglogo/html-5.png";
import css from "..//../img/imglogo/css-3.png";
import java from "..//../img/imglogo/js.png";
import react from "..//../img/imglogo/physics.png";
import typescript from "..//../img/imglogo/typescript.png";
import css1 from "..//../img/imglogo/960px-Tailwind_CSS_Logo.svg.png";
import git from "..//../img/imglogo/social.png";
import git1 from "..//../img/imglogo/github.png";
import "./Skills.css";
function Skills() {
  return (
    <div className="skils">
      <div className="allskils">
        <div className="skillup">
          <h1>SKILLS</h1>
        </div>
        <div className="skilldown">
          <div className="skill">
            <img src={html} alt="" />
          </div>
          <div className="skill">
            <img src={css} alt="" />
          </div>
          <div className="skill">
            <img src={java} alt="" />
          </div>
          <div className="skill">
            <img src={react} alt="" />
          </div>
          <div className="skill">
            <img src={typescript} alt="" />
          </div>
          <div className="skill">
            <img src={git} alt="" />
          </div>
          <div className="skill">
            <img src={git1} alt="" />
          </div>
          <div className="skill">
            <img src={css1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
