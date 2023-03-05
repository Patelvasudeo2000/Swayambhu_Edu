import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quaerat explicabo veniam quos mollitia adipisci neque consequatur perferendis porro quae.",
    icon: "ri-draft-line",
  },
  {
    title: "All Time Support",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quaerat explicabo veniam quos mollitia adipisci neque consequatur perferendis porro quae.",
    icon: "ri-discuss-line",
  },
  {
    title: "Certification",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quaerat explicabo veniam quos mollitia adipisci neque consequatur perferendis porro quae.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single_feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Features;
