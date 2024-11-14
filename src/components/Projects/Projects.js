import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import healthassist from "../../Assets/Projects/healthassist.png";
import gritindia from "../../Assets/Projects/gritindia.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some quick projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gritindia}
              isBlog={false}
              title="Grit-India"
              description="A Web project which has been designed to let people know about the diversified yet unified culture and rich heritage of India. It is comprised of different pages which has different sections for different dresses, foods, tales, cultures and many more coming from the different states of India. We take pride in our culture."
              ghLink="https://github.com/vastavikadi/Grit-India"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthassist}
              isBlog={false}
              title="HealthAssist"
              description="HealthAssist is a comprehensive medical website designed to provide users with reliable health information and resources. This project features an intuitive interface that allows users to easily navigate through various health topics, access medical articles, and utilize interactive tools."
              ghLink="https://github.com/vastavikadi/HealthAssist"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthassist}
              isBlog={false}
              title="LifeVault"
              description="LifeVault is a digital vault designed to securely manage and share essential documents and data using a decentralized and transparent approach. Built on Hive and IPFS, LifeVault allows users to upload, retrieve, and share files with security, privacy, and simplicity in mind."
              ghLink="https://github.com/vastavikadi/LIFEvault---Decentralized-Storage"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
