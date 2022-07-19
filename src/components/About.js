import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I love web development and I'm learning react so that I can create cool apps</p>
      <img src={image} alt="I made this"/>
    </div>
  )
}

export default About;
