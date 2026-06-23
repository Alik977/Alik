import "./Footer.css";

function Footer() {
  return (
    <footer className="foot">
      <div className="footer-content">
        <h3>Alik Portfolio</h3>
        <p>
          Designed and Developed by Alik using React.js
        </p>
        <p className="copyright">
          © {new Date().getFullYear()} Alik Hakobyan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;