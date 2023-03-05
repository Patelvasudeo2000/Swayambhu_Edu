import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg01 from "../../assets/images/web-development.png";
import courseImg02 from "../../assets/images/students-learning.png";
import courseImg03 from "../../assets/images/seo.png";
import courseImg04 from "../../assets/images/ui-ux(2).png";

import "./free-course.css";
import FreeCourseCard from "./FreeCourseCard";

const freeCourseData = [
  {
    id: "01",
    title: "Basic Web Development Course",
    imgUrl: courseImg01,
    student: "4.9",
    rating: "1.8",
  },
  {
    id: "02",
    title: "Basic Coading Course",
    imgUrl: courseImg02,
    students: "4.9",
    rating: "1.8",
  },
  {
    id: "03",
    title: "Search Engine Optimize Basic Course",
    imgUrl: courseImg03,
    students: "4.9",
    rating: "1.8",
  },
  {
    id: "04",
    title: "Basic UI/UX Design Course",
    imgUrl: courseImg04,
    students: "4.9",
    rating: "1.8",
  },
];

const FreeCourse = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Our Free Courses</h2>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
