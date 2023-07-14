import React from "react";
import "./styles.css";
const index = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <div className="info-container">
            <div className="info-title">Background</div>
            <div className="info-desc">
              <p className="info-desc-text">
                I graduated from Nepal College of Information Technology with a
                Bachelor Degree in Software Engineering.
              </p>
              <p className="info-desc-text">
                I aspire to work as a web developer in a company where I can put
                my abilities and experience in web development to use, while
                also constantly upgrading it to keep up with new technologies
                and developing solid applications.
              </p>
              <p className="info-desc-text">
                <span className="info-desc-text1">
                  When I'm not working on screen 💻
                </span>
                , I thoroughly enjoy playing video games 🎮.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
