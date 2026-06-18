import { useState } from "react";
import img1 from "../../img/imgprojects/1.png";
import img2 from "../../img/imgprojects/2.png";
import img3 from "../../img/imgprojects/3.png";
import img4 from "../../img/imgprojects/4.png";
import img5 from "../../img/imgprojects/5.png";
import img6 from "../../img/imgprojects/6.png";
import img7 from "../../img/imgprojects/7.png";

import vid1 from "..//../img/video/1.mp4";
import vid2 from "..//../img/video/3.mp4";
import vid3 from "..//../img/video/5.mp4";
import vid4 from "..//../img/video/7.mp4";
import vid5 from "..//../img/video/2.mp4";
import vid6 from "..//../img/video/6.mp4";
import vid7 from "..//../img/video/4.mp4";

import "./Projects.css";

const projects = [
  { img: img1, video: vid1 },
  { img: img2, video: vid2 },
  { img: img3, video: vid3 },
  { img: img4, video: vid4 },
  { img: img5, video: vid5 },
  { img: img6, video: vid6 },
  { img: img7, video: vid7 },
];

function Projects() {
  const [current, setCurrent] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);

  const prev = () =>
    setCurrent((c) => (c - 2 + projects.length) % projects.length);
  const next = () =>
    setCurrent((c) => (c + 2) % projects.length);

const visible = projects.slice(current, current + 2);

  return (
    <div className="projects">
      <div className="allprojects">
        <div className="projectname">
          <h1>PROJECTS</h1>

          <div className="slider">
            <button className="slider-btn prev" onClick={prev}>&#8249;</button>

          <div className="slider-track">
  {visible.map((p, i) => (
    <div key={current + i} className="slide active">
      <img
        src={p.img}
        alt={`Project ${current + i + 1}`}
        onClick={() => {
          console.log("Video:", p.video); 
          setActiveVideo(p.video);
        }}
      />
    </div>
  ))}
</div>

            <button className="slider-btn next" onClick={next}>&#8250;</button>
          </div>

          <div className="dots">
            {projects.map((_, i) => (
              i % 2 === 0 && (
                <span
                  key={i}
                  className={`dot ${i === current ? "active" : ""}`}
                  onClick={() => setCurrent(i)}
                />
              )
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
    {activeVideo && (
  <div className="modal-overlay" onClick={() => setActiveVideo(null)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={() => setActiveVideo(null)}>✕</button>
      <video key={activeVideo} src={activeVideo}  autoPlay muted />
    </div>
  </div>
)}
    </div>
  );
}

export default Projects;