import React from "react";
import "./styles.css";
import AnimatedModel from "../../../components/AnimationModal";
const index: React.FC = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col">
          <div className="hero-section d-flex align-items-center flex-column  flex-md-row justify-content-md-center ">
            <div className="left-section order-2 order-md-1 col-12 col-md-6">
              <h1 className="title">
                <span>Namaste! </span>
                <span>🙏</span>
              </h1>
              <div className="intro">
                I'm <span className="intro-name">Anup Maharjan</span> , a web
                developer based in Kathmandu, Nepal. I’m passionate about
                everything that goes into making web application work well and
                visually appealing.{" "}
              </div>
              <div className="link">
                Get in Touch
                <span>
                  <button
                    className="contact-btn"
                    onClick={() => {
                      window.location.href = "mailto:anupmaharjan411@gmail.com";
                    }}
                  >
                    {/* <i className="bi bi-arrow-right-short btn-icon"></i> */}{" "}
                    <span>👉</span>{" "}
                    <span className="btn-text ms-2">
                      Anupmaharjan411@gmail.com
                    </span>
                  </button>
                </span>
              </div>
            </div>
            <div className="right-section order-1 order-md-2 col-12 col-md-6">
              <AnimatedModel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
