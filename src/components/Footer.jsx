import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <a href="#home" className="footer__logo">
          My<span className="gradient-text">Portfolio</span>
        </a>
        <div className="footer__links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="footer__copy">© 2026 Tharun Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
