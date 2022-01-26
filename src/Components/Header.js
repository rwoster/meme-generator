import React from "react";

// logo
import logo from "../Images/trollFace.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header--container">
        <img
          className="header--logo"
          src={logo}
          alt="troll face logo"
        />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--subtitle">
          React Course - Project 3
        </h4>
      </div>
    </header>
  );
}
