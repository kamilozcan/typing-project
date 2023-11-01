import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navigation } from "../shared/Navigation";

import { Level } from "../shared/Level";

export const Level3 = () => {
  const validLetters = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];
  return (
    <Container>
      <Navigation />
      <Row style={{marginTop: "20px"}}>
        <Col xs={6}>
          <Level validLetters={validLetters} />
        </Col>
        <Col xs={6}>
          <Row style={{ background: "#666769" }}>
            <img src="../images/3.png" alt="" />
          </Row>
          <Row style={{ background: "#666769" }}>
            <img src="../images/AS-L;.png" alt="" />

            <Col xs={4} style={{ marginLeft: "-20px" }}></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
