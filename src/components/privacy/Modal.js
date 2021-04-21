import React from "react";
import "./modal.css";

export default function Modal(props) {
    return (
      <div>
          <div className="modal-overlay"/>

          <div className="modal-wrapper">
              <div className="modal">
                  <div className="modal-header">
                      <h2>{props.header}</h2>
                      <button className="main-button" onClick={props.onClose}>x</button>
                  </div>

                  <div className="modal-guts">
                      <div dangerouslySetInnerHTML={{__html: props.text}}/>
                  </div>
              </div>
          </div>
      </div>
    );
};