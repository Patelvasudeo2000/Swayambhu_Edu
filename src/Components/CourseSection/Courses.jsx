import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assets/images/web-design.png";
import courseImg2 from "../../assets/images/graphics-design.png";
import courseImg3 from "../../assets/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const courseData = [
  {
    id: "01",
    title: "Web Design BootCamp for Beginners in 2023",
    lesson: "12",
    rating: "5.9",
    imgUrl: courseImg1,
  },
  {
    id: "02",
    title: "Graphics Design BootCamp for Beginners in 2023",
    lesson: "12",
    rating: "5.9",
    imgUrl: courseImg2,
  },
  {
    id: "03",
    title: "UI/UX BootCamp For Beginners in 2023",
    lesson: "12",
    rating: "5.9",
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course_top d-flex justify-content-between align-item-center">
              <div className="course_top_left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  doloribus natus delectus amet accusantium tempora impedit.
                  Error natus fuga ut!
                </p>
              </div>

              <div className="see_all_Btn w-30 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>

          {courseData.map((item) => (
            <Col lg="4" md="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Courses;
