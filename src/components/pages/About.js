//Dependencies
import React from "react";

//Styles
import "./about.css";

function About() {
  return (
    <React.Fragment>
      <h1>About</h1>
      Author:
      <a
        href="https://github.com/EfrenSanchez/react-todolist"
        target="_blank"
        rel="noopener noreferrer"
        className="link"
      >
        https://github.com/EfrenSanchez
      </a>
    </React.Fragment>
  );
}

export default About;
