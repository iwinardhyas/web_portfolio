import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai"


function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return(
        <Container fluid classname="footer">
            <Row>
                <Col md='4' classname="footer-copywright">
                    <h3>Design and developed by Er</h3>
                </Col>
                <Col md='4' className="footer-copywright">
                    <h3>Copyright © {year}</h3>
                </Col>
                <Col md='4' className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://github.com/iwinardhyas"
                                // style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://twitter.com/iwinardhyas"
                                // style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillTwitterCircle/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/er.ardias"
                                // style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillInstagram/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/erwinardias"
                                // style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillLinkedin/>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;