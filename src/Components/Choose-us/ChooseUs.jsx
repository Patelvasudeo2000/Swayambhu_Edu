import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import chooseImg from "../../assets/images/why-choose-us.jpg";
import "./choose-us.css";
import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section>
      <Container className="Container">
        <Row>
          <Col lg="6">
            <div className="choose_content">
              <h2>Why Choose Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                maxime facilis magni. Porro mollitia obcaecati soluta accusamus
                possimus dolorem ea omnis nesciunt incidunt voluptatum at nihil
                blanditiis dolores odio vitae pariatur quod unde magni
                recusandae, totam autem in corrupti? Blanditiis, magni?
                Distinctio at ratione incidunt eligendi eum commodi minima
                maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt dolorem labore iusto! Dolore beatae voluptate sunt
                sequi accusantium deserunt iste corporis eveniet suscipit odit
                accusamus eligendi, quia voluptas harum quaerat at atque
                nesciunt, quasi fugit aliquam fuga ut temporibus, ipsum unde.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="choose_img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=kTGygDNT_GQ"
                  controls
                  width="100%"
                  height="300px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play_icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
