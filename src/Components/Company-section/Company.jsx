import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./company-section.css"

const Company = () => {
  return (
    <section>
      <Container className="Container">
        <Row>
          <Col lg="2" md="3">
            <h3 className="d-flex align-items-center gap-1">
              <i class="ri-microsoft-fill"></i>Microsoft
            </h3>
          </Col>

          <Col lg="2" md="3">
            <h3 className="d-flex align-items-center gap-1">
              <i class="ri-pinterest-fill"></i>Pinterest
            </h3>
          </Col>

          <Col lg="2" md="3">
            <h3 className="d-flex align-items-center gap-1">
              <i class="ri-spotify-fill"></i>Spotify
            </h3>
          </Col>

          <Col lg="2" md="3">
            <h3 className="d-flex align-items-center gap-1">
            <i class="ri-apple-fill"></i>Apple
            </h3>
          </Col>

          <Col lg="2" md="3">
            <h3 className="d-flex align-items-center gap-1">
            <i class="ri-twitter-fill"></i>Twitter
            </h3>
          </Col>

          <Col lg="2" md="3">
            <h3 className="d-flex align-items-center gap-1">
              <i class="ri-google-fill"></i>Google
            </h3>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Company;
