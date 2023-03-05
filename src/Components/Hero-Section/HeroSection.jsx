import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/heroImg.png";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero_content">
              <h2 className="mb-4">
                Anytime Anywhere <br />
                Learn on your
                <br /> Suitable Schedule
              </h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit. Quibusdam provident labore quidem.
                <br /> Ab dolor harum fugiat? Aspernatur facilis consequatur
                temporibus!
              </p>

              <div className="search">
                <input type="text" placeholder="Search" />
                <button className="btn">Search</button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            {/* <img src={heroImg} alt="" className="w-90" /> */}
            <img src={heroImg} alt="" className="heroImg" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
