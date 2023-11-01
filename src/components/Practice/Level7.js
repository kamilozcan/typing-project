import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navigation } from "../shared/Navigation";

import { Level } from "../shared/Level";

export const Level7 = () => {
  const validLetters = ["z", "x", "c", "v", "b"];
  return (
    <Container>
      <Navigation />
      <Row style={{marginTop: "20px"}}>
        <Col xs={6}>
          <Level validLetters={validLetters} />
        </Col>
        <Col xs={6}>
          <Row style={{background: "#666769"}}>
          <img src="../images/7.png" alt="" />
          </Row>
          <Row style={{background: "#666769"}}>
            <Col xs={8}>
              <img src="../images/ZXCVB.png" alt="" />
            </Col>
            <Col xs={4} style={{marginLeft: "-20px"}}>
              <ul style={{ fontWeight: "bold" }}>
                <li style={{ color: "#FF914D" }}><span style={{ marginRight: "50px" }}>Pink Finger</span>Z</li> <br />
                <li style={{ color: "#FFDE59" }}><span style={{ marginRight: "48px" }}>Ring Finger</span>X</li> <br />
                <li style={{ color: "#00BF63" }}><span style={{ marginRight: "30px" }}>Middle Finger</span>C</li> <br />
                <li style={{ color: "#C1FF72" }}><span style={{ marginRight: "40px" }}>Index Finger</span>V-B</li> <br />
                <li style={{ color: "" }}><span style={{ marginRight: "75px" }}>Thumb</span>SPACE</li> <br />
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
