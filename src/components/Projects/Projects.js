import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fr from "../../Assets/Projects/fr.png";
import lpr from "../../Assets/Projects/lpr.png";
import lpr_web from "../../Assets/Projects/lpr_web.png";
import motion from "../../Assets/Projects/motion.png";
import traffic from "../../Assets/Projects/traffic.png";
import vehicle from "../../Assets/Projects/vehicle.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fr}
              isBlog={false}
              title="Face Recognition"
              description="Face recognition is a technology that involves the identification and verification of individuals based on their facial features. It is a biometric technology that analyzes and compares the unique characteristics of a person's face to a database of known faces, enabling the system to determine the identity of the individual. Face recognition systems can be used for various purposes, including security, access control, authentication, and surveillance."
            //   ghLink="https://github.com/soumyajit4419/Chatify"
            //   demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lpr}
              isBlog={false}
              title="License Plate Recognition Architecture"
              description="License Plate Recognition (LPR) systems typically involve a combination of hardware and software components working together to capture, process, and analyze license plate information. The architecture of an LPR system can vary based on the specific application and requirements."
            //   ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            //   demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lpr_web}
              isBlog={false}
              title="License Plate Recognition"
              description="License Plate Recognition (LPR), also known as Automatic License Plate Recognition (ALPR), is a technology that uses optical character recognition (OCR) and image processing techniques to automatically read and capture the characters on license plates of vehicles. The primary goal of license plate recognition is to identify and record license plate information for various purposes, such as law enforcement, parking management, toll collection, and traffic monitoring."
            //   ghLink="https://github.com/soumyajit4419/Editor.io"
            //   demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={motion}
              isBlog={false}
              title="Object Detection CCTV"
              description="Object detection is a computer vision technology that involves the identification and localization of objects within images or videos. It goes beyond simple image classification by not only recognizing what objects are present in an image but also precisely locating their positions. Object detection is a fundamental task in computer vision and has various applications, ranging from self-driving cars and robotics to surveillance, healthcare, and more."
            //   ghLink="https://github.com/soumyajit4419/Plant_AI"
            //   demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traffic}
              isBlog={false}
              title="Traffic Analytics"
              description="Traffic analytics refers to the process of collecting, analyzing, and interpreting data related to the movement of vehicles and pedestrians within a specific area, such as roads, highways, intersections, parking lots, and public spaces. The primary goal of traffic analytics is to gain insights into traffic patterns, behavior, and trends, which can be used for various purposes, including traffic management, urban planning, infrastructure optimization, and safety improvement."
            //   ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vehicle}
              isBlog={false}
              title="Vehicle Counting"
              description="Vehicle counting is a fundamental aspect of traffic analysis that involves the automated counting of vehicles as they pass through a specific location, such as a road, intersection, or entrance/exit point. The primary goal of vehicle counting is to gather data about the volume of traffic over a certain period, which can provide insights into traffic patterns, congestion levels, and overall road usage."
            //   ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
