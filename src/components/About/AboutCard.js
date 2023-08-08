import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Er Ardias </span>
            from <span className="purple"> Indonesia  </span>
            <span className="wave" role="img" aria-labelledby="wave">
                🇮🇩
            </span>
            <br /> I am a data scientist who continuously develops my skills as a lecturer.
            <br />
            Currently, I also work as a freelance software engineer.
            <br />
            <br />
            Not far from my coding activities, I also enjoy other pursuits:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Automotive
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
