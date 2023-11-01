import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navigation } from "../shared/Navigation";

import { Level } from "../shared/Level";

export const Level5 = () => {
  const validLetters = ["y", "u", "i", "o", "p"];
  return (
    <Container>
      <Navigation />
      <Row style={{marginTop: "20px"}}>
        <Col xs={6}>
          <Level validLetters={validLetters} />
        </Col>
        <Col xs={6}>
          <Row style={{background: "#666769"}}>
          <img src="../images/5.png" alt="" />
          </Row>
          <Row style={{background: "#666769"}}>
            <Col xs={8}>
              <img src="../images/YUIOP.png" alt="" />
            </Col>
            <Col xs={4} style={{marginLeft: "-20px"}}>
              <ul style={{ fontWeight: "bold" }}>
                <li style={{ color: "#38B6FF" }}><span style={{ marginRight: "40px" }}>Index Finger</span>Y-U</li> <br />
                <li style={{ color: "#5e17eb" }}><span style={{ marginRight: "30px" }}>Middle Finger</span>I</li> <br />
                <li style={{ color: "#FF66C4" }}><span style={{ marginRight: "48px" }}>Ring Finger</span>O</li> <br />
                <li style={{ color: "#FF3131" }}><span style={{ marginRight: "50px" }}>Pink Finger</span>P</li> <br />
                <li style={{ color: "" }}><span style={{ marginRight: "75px" }}>Thumb</span>SPACE</li> <br />
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
