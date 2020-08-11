import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShadow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShadow(true);
      } else handleShadow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_Netflix.png/800px-Logo_Netflix.png"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
