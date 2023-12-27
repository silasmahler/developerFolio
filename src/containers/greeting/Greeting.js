import React, { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia.js";

import { greeting } from "../../portfolio.js";
import StyleContext from "../../contexts/StyleContext.js";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
            </div>
          </div>
          <div className="greeting-image-div">

            <img
              alt="man sitting on table"
              src={require("../../assets/images/silas.jpg")}
            ></img>

          </div>
        </div>
      </div>
    </Fade >
  );
}
