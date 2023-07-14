import React from "react";
import "./styles.css";
import Github from "../../../../assets/images/git.svg";
import Mail from "../../../../assets/images/mail.svg";
import LinkedIn from "../../../../assets/images/linkedin.svg";

const getYear = new Date().getFullYear();
const index: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <footer className="footer-container">
            <div className="left">
              <p className="left-text">Created By</p>
              <p className="left-text">Anup Maharjan ✍️ {getYear} </p>
            </div>
            <div className="right">
              <button
                className="footer-btn"
                onClick={() => {
                  window.location.href = "mailto:anupmaharjan411@gmail.com";
                }}
              >
                <span>
                  <img className="footer-icon" src={Mail} alt="Mail" />
                  EMAIL
                </span>
              </button>
              <a
                href="https://www.linkedin.com/in/anupmaharjan7203/"
                target="_blank"
                rel="noreferrer"
                className="footer-btn"
              >
                <img className="footer-icon" src={LinkedIn} alt="LinkedIn" />{" "}
                LINKEDIN
              </a>
              <a
                href="https://github.com/anupmaharzn"
                target="_blank"
                rel="noreferrer"
                className="footer-btn"
              >
                <img className="footer-icon" src={Github} alt="GitHub" />
                GITHUB
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default index;
