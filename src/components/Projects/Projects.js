import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fittrack from "../../Assets/Projects/fittrack.png";
import emotion from "../../Assets/Projects/blog.png";
import rfm from "../../Assets/Projects/rfm.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import creditcard from "../../Assets/Projects/creditcard.png";
import emailapp from "../../Assets/Projects/email.png";

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
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="My personal portfolio website is a fully responsive web application built with React. It serves as a digital showcase of my skills, experience, and projects, providing visitors with an engaging and intuitive browsing experience."
              ghLink="https://github.com/ShubhamChandratre/Shubham-Portfolio.git"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emailapp}
              isBlog={false}
              title="Email Schedular"
              description="The Email Scheduler App enables users to send emails to multiple recipients with a specified delay between each email. It is built with React.js (frontend) and Node.js with Express.js (backend), using Brevo SMTP for email delivery. The app processes user input, schedules emails, and ensures secure communication with error handling and logging. "
              ghLink="https://github.com/ShubhamChandratre/Mailer-React.git"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rfm}
              isBlog={false}
              title="RFM Analysis"
              description="Developed an RFM model to analyze customer behavior and segment them based on recency, frequency, and monetary metrics. Processed and analyzed customer data using Pandas, implementing RFM scoring to create customer segments."
              ghLink="https://github.com/ShubhamChandratre/RFMAnalysis.git"
              // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fittrack}
              isBlog={false}
              title="Fittrack"
              description=" Developed a comprehensive web application for tracking daily workouts and calorie intake, allowing users to log workouts for past and future dates.  Employed data visualization techniques to provide insights into users’ workout trends and progress over time."
              ghLink="https://github.com/ShubhamChandratre/Fittrack.git"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={creditcard}
              isBlog={false}
              title="Credit Card Fraud Detection"
              description="This project aims to build a machine learning model to detect fraudulent credit card transactions. The dataset used for training and testing contains anonymized transaction features and labels indicating whether a transaction is fraudulent or not."
              ghLink="https://github.com/ShubhamChandratre/Credit-Card-Fraud-Detection.git"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Blog Website"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/ShubhamChandratre/Blog-Website.git"
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
