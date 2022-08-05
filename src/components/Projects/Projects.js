import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import movie from "../../Assets/Projects/movie.webp";
import shopping from "../../Assets/Projects/shopping.webp";
import memory from "../../Assets/Projects/memory.jpg";
import mykids from "../../Assets/Projects/mykids.jfif";
import suicide from "../../Assets/Projects/suicide.png";
import mytodo from "../../Assets/Projects/mytodo.jpg";

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
              imgPath={mykids}
              isBlog={false}
              title="My Kids App"
              description="My Kids App is my personal project, it is an e-learning platform for children to learn and have fun by reading stories, letters, shapes and intelligence games
              This project is a Full stack MERN JavaScript application:
              Frontend: React,Redux,Bootstrap,CSS and HTML.
              Backend: MongoDB,NodeJS,Axios,API and Express."
              link="https://github.com/Souhail20/MERN-APP-Mykids"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mytodo}
              isBlog={false}
              title="To do List"
              description="Discovering Redux features and combined with React.Adding and removing tasks with Redux using actions,store and
              reducers."
              link="https://github.com/Souhail20/Todo-list-with-React"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopping}
              isBlog={false}
              title="Shopping Card-Js"
              description="Designed with vanilla JavaScript and DOM, a shopping cart simulation
              "
              link="https://github.com/Souhail20/Shopping-cards-Js"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie app with Redux"
              description="Use React as a Framework to create a Frontend Movie app.Searching and Rating movies with states and props.
              Adding movies to the list."
              link="https://movie-app-with-hooks.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memory}
              isBlog={false}
              title="Memory Game"
              description="The card memory game is a simple game to test the player’s memory. In a deck of paired cards, the player needs to select a matching pair in consecutive turns. The player wins the game when all matching pairs are selected."
              link="https://mermory-game.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
