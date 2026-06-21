import gmail1 from "..//../img/imglogo/mail.png";
import git1 from "..//../img/imglogo/github.png";
import linkdin1 from "..//../img/imglogo/social1.png";
import call from "..//../img/imglogo/phone.png";
import "./Contact.css";
function Contact() {
  return (
    <div>
      <div className="contact">
        <div className="allcontact">
          <h1>GET IN TOUCH</h1>
          <div className="contactpparagraph">
            <div className="Cpart1">
              <h3>
                I am ready to do any kind of work, including freelance and
                office-based jobs. I am motivated, responsible, and eager to
                learn new skills."
              </h3>
              <div className="alldown">
                <div className="downpart1">
                  <img src={gmail1} alt="" />
                  <p>alik.hakobyan.dev@gmail.com</p>
                </div>
                <div className="downpart2">
                  <img src={call} alt="" />
                  <p>041459804</p>
                </div>
              </div>
              <div className="Cpart2">
                <div className="cpart3">
                  <img src={linkdin1} alt="" />
            <a href="https://www.linkedin.com/in/alik-hakobyan-7949533a1/" target="blank">www.linkedin.com/in/alik-hakobyan-7949533a1</a>
                  <p></p>
                </div>
                <div className="cpart3">
                  <img src={git1} alt="" />
                  <a href="https://github.com/Alik977" target="blank"> 
                    {" "}
                    https://github.com/Alik977
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
