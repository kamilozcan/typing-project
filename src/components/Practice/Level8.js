import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navigation } from "../shared/Navigation";

import { Level } from "../shared/Level";

export const Level8 = () => {
  const validLetters = ["n", "m", ",", ".", "/"];
  return (
    <Container>
      <Navigation />
      <Row style={{marginTop: "20px"}}>
        <Col xs={6}>
          <Level validLetters={validLetters} />
        </Col>
        <Col xs={6}>
          <Row style={{background: "#666769"}}>
          <img src="../images/8.png" alt="" />
          </Row>
          <Row style={{background: "#666769"}}>
            <Col xs={8}>
              <img src="../images/NM,.png" alt="" />
            </Col>
            <Col xs={4} style={{marginLeft: "-20px"}}>
              <ul style={{ fontWeight: "bold" }}>
                <li style={{ color: "#38B6FF" }}><span style={{ marginRight: "36px" }}>Index Finger</span>N-M</li> <br />
                <li style={{ color: "#5e17eb" }}><span style={{ marginRight: "30px" }}>Middle Finger</span>,</li> <br />
                <li style={{ color: "#FF66C4" }}><span style={{ marginRight: "48px" }}>Ring Finger</span>.</li> <br />
                <li style={{ color: "#FF3131" }}><span style={{ marginRight: "50px" }}>Pink Finger</span>/</li> <br />
                <li style={{ color: "" }}><span style={{ marginRight: "75px" }}>Thumb</span>SPACE</li> <br />
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
