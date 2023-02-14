import "./footer.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        © Copyright 2022. Made by Gracjan Prusik
      </div>
      <div className="footer-right">
        <a href="https://github.com/grekuu" target="_blank">
          <AiFillGithub className="footer-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/gracjan-prusik-b12041251/"
          target="_blank"
        >
          <AiFillLinkedin className="footer-icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
