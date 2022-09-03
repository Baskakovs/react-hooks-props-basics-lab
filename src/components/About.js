import React from "react";
import Links from "./Links.js"
import user from "../data/user.js"

function About({about}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {about ? <p>{about}</p> : false}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {<Links github={user.links.github} linkedin={user.links.linkedin}/>}
    </div>
  );
}

export default About;
