import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <span>Wiktoria Skórek - 3D Artist</span>
      <div className="footer__social">
        <div className="social">
          <a
            href="https://www.linkedin.com/in/wiktoria-sk%C3%B3rek/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/kosiawr/"
            rel="noreferrer"
            target="_blank"
          >
            Instagram
          </a>
          <a
            href="https://www.artstation.com/wiktoria_skorek"
            rel="noreferrer"
            target="_blank"
          >
            Art Station
          </a>
        </div>
        <div className="social2">
          <a href="/portfolio">Portfolio</a>
          <a href="/portfolio">Blog</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
