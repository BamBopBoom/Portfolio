import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/Portfolio_logo.jpg';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/nav-icon4.png';
import navIcon3 from "../assets/img/nav-icon3.svg";


export const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
              
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/austin-kaminski-332a85309/"><img src={navIcon1} alt="Icon" /></a>
                <a href="https://github.com/BamBopBoom"><img src={navIcon2} alt="Icon" /></a>
              </div>
              <p>Copyright 2022. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }