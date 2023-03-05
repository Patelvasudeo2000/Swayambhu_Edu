import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import img from "../../assets/images/testimonial01.png";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    infinite: true,
    dots:true,
    speed: 500,
    slideToShow: 1,
    autoPlay: true,
    slidesToScroll: 1,
    autplaySpeed:3000,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" className="m-auto">
            <div className="tetimonial_wrapper d-flex justify-content-between align-items-center">
              <div className="testimonial_img w-50">
                <img src={img} alt="" className="w-50" />
              </div>

              <div className="testimonial_content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                {/* by using of Carousel for sliding  */}
                <Slider {...settings}>
                  <div>
                    <div className="single_testimonial">
                      <h6 className="mb-3">
                        Excellent Course of this Material
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Porro pariatur asperiores et, excepturi aliquam rerum
                        quam voluptatum? Velit, perferendis. Nemo?
                      </p>
                      <div className="student_info mt-4">
                        <h6 className="mb-3 fw-bold">Dr.Angela Yu</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>
                  <div className="single_testimonial">
                    <h6>Excellent Course of this Material</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Porro pariatur asperiores et, excepturi aliquam rerum quam
                      voluptatum? Velit, perferendis. Nemo?
                    </p>
                    <div className="student_info">
                      <h6 className="mb-3 fw-bold">Dr.Angela Yu</h6>
                      <p>California, United State</p>
                    </div>
                  </div>

                  

                  {/* sliders Duplicated Code inside of Div */}
                  <div>
                    <div className="single_testimonial">
                      <h6 className="mb-3">
                        Excellent Course of this Material
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Porro pariatur asperiores et, excepturi aliquam rerum
                        quam voluptatum? Velit, perferendis. Nemo?
                      </p>
                      <div className="student_info mt-4">
                        <h6 className="mb-3 fw-bold">Dr.Angela Yu</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>
                  <div className="single_testimonial">
                    <h6>Excellent Course of this Material</h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Porro pariatur asperiores et, excepturi aliquam rerum quam
                      voluptatum? Velit, perferendis. Nemo?
                    </p>
                    <div className="student_info">
                      <h6 className="mb-3 fw-bold">Dr.Angela Yu</h6>
                      <p>California, United State</p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
