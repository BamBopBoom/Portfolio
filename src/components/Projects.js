import { Col ,Container, Tab, Row, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorsharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.jpg";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
        {
          title: "A* Search",
          description: "Visualizer",
          imgUrl: projImg4,
          link: "https://github.com/brandongillett/DotLink",
        },
        {
          title: "Image to Text",
          description: "Application",
          imgUrl: projImg3,
          link: "#",
        },
        {
          title: "Liscense Plate",
          description: "Detection",
          imgUrl: projImg2,
          link: "#",
        },
        {
          title: "Facial recognition",
          description: "Application",
          imgUrl: projImg1,
          link: "#",
        },
        {
          title: "Music Genre",
          description: "Classifier",
          imgUrl: projImg5,
          link: "#",
        },
        {
          title: "Voice Recognition",
          description: "Application",
          imgUrl: projImg6,
          link: "#",
        },
      ];
    

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                {({isVisible}) => 
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Projects</h2>
                    <p> Where ideas come to life in pixels and bytes. Let these projects speak for themselves as testaments to my passion for coding and my dedication to delivering impactful solutions.</p>
                    </div>}
                    </TrackVisibility>
                    <Tab.Container id = "projects-tabs" defaultActiveKey ="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Machine learning/AI</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Web Development</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">DataBases</Nav.Link>
                        </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey = "first">
                        <Row>
                            {
                                projects.map((project, index) =>{
                                    return(
                                        <ProjectCard
                                        key ={index}
                                        {...project}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey = "second"> New Projects Coming Soon!</Tab.Pane>
                    <Tab.Pane eventKey = "third"> New Projects Coming Soon!</Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorsharp2}></img>
        </section>
    )

}