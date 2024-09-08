import React from "react";
import Card from "react-bootstrap/Card";
import { ImAirplane, ImBubbles, ImPen, ImPointRight, ImPriceTag, ImSpades, ImStarFull, ImWondering } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Bonjour, <span className="purple"> Aditya Shukla </span>is my full name
            and I'm from <span className="purple"> Varanasi, India.</span>
            <br />
            <span className="text-left">Currently, I'm pursuing a <span className="purple">bachelor's degree in Computer Science Engineering</span> and I'm in second year.</span>
            <br />
            I'm currently learning to train AI and integrating it into web development.
            <br />
            <br />
            I have a variety of interests!
          </p>
          <ul>
            <li className="about-activity">
              <ImPriceTag /> I enjoy playing <span className="purple">sports</span>
            </li>
            <li className="about-activity">
              <ImPen /> I relish creating <span className="purple">poetries</span>
            </li>
            <li className="about-activity">
              <ImAirplane /> I love <span className="purple">traveling</span>
            </li>
          </ul>

          <p style={{ color: "yellow" }}>
            <span>"वीर भोग्य वसुंधरा |"
            </span></p>
          <p style={{ color: "#9ae2f3" }}>
            <span><ImBubbles/> Being a hero is about realizing that you accomplished something amazing, not about other people realizing that you did something nice.
            </span></p>

          <footer className="blockquote-footer"><ImPen/> Aditya </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;