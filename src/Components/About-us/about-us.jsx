import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/images/about-us.png";
import CountUp from "react-countup";
import "./about.css"

const AboutUS = () => {
  return (
    <section >
      <Container className="Container">
        <Row>
          <Col lg="6" md="6">
            <div className="about_img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about_content">
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod et
                itaque dolore? Praesentium sed ipsam dolor commodi hic! Est,
                repellat.
              </p>
              <div className="about_counter">


                <div className="d-flex gap-5 align-items-center">
                  <div className="single_counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="k" />
                    </span>
                    <p className="counter_title">Completed Project </p>
                  </div>

                  <div className="single_counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>
                    <p className="counter_title">Patient Around World</p>
                  </div>
                </div>


                <div className="d-flex gap-5 align-items-center">
                  <div className="single_counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="k" />
                    </span>
                    <p className="counter_title">Completed Project </p>
                  </div>

                  <div className="single_counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>
                    <p className="counter_title">Patient Around World</p>
                  </div>
                </div>

                
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUS;
