import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => (
  <Container className="py-5">
    <Row className="justify-content-center">
      <Col md={8} lg={6}>
        <Card className="shadow-lg border-0 rounded-4 p-4">
          <Card.Body>
            <h1 className="fw-bold mb-3 text-primary">About SPORTS HUB</h1>
            <p className="lead mb-4">
              Welcome to <strong>SPORTS HUB</strong>! We focus on premium badminton equipment, apparel, and accessories with a strong commitment to player-first service.
            </p>
            <p>
              Our mission is to deliver durable, performance-driven badminton products for players at every stage, from school teams to competitive clubs.
            </p>
            <p>
              <strong>Contact us:</strong> info@sportshub.com
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default About; 
