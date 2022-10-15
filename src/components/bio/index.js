import React from "react";

import "./style.scss";
import brandSymbolImage from "/src/assets/brand-symbol.svg";
import IconButtonBar from "../icon-button-bar";



const Bio = ({ bio, social }) => {
  return (
    <div className="bio-wrapper">
      <div className="bio">
        <img className="logo" alt="logo" src={brandSymbolImage} />
        <div className="introduction">
          <p className="title">
            Hello,
            <br />
            My name is
            <br />
            {bio?.name}
            .<br />
          </p>
          <p className="description">
            {bio?.description}
            <br />
          </p>
          <div className="social-links">
            <IconButtonBar
              links={social}
              style={{
                fontSize: '24px',
                color: 'rgb(0, 0, 0)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
