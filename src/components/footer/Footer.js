import React, { useContext, useState } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext.js";
import Modal from "../privacy/Modal.js";
import imprint from "../privacy/imprint.js";
import datenschutz from "../privacy/datenschutz.js";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  const [showImprint, setShowImprint] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by Saad Pasta")}
        </p>
        <div className={isDark ? "dark-mode footer-text" : "footer-text"}>
          <a href="https://github.com/saadpasta/developerFolio">
            developerFolio
          </a>
          <br></br>

          <button className="footer-btn" id="open-button" onClick={e => setShowImprint(e)}>
            Impressum
          </button>

          {showImprint && <Modal onClose={() => setShowImprint(false)} header="Impressum" text={imprint}></Modal>}
          <button className="footer-btn" id="open-button" onClick={e => setShowPrivacy(e)}>
            Datenschutz
          </button>
          <br></br>
          {showPrivacy && <Modal onClose={() => setShowPrivacy(false)} header="Datenschutz" text={datenschutz}></Modal>}
        </div>
      </div>
    </Fade>
  );
}
