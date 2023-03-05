import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About Us",
    url: "#",
  },
  {
    display: "Courses",
    url: "#",
  },
  {
    display: "Pages",
    url: "#",
  },
  {
    display: "Blog",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Membership",
    url: "#",
  },
  {
    display: "Purchases Guide",
    url: "#",
  },
  {
    display: "Terms Guide",
    url: "#",
  },
  {
    display: "Terms of Service",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <h2 className="d-flex align-items-center gap-2">
              <i class="ri-stack-fill"></i>Swayambhu
            </h2>

            <div className="follows ">
              <p className="mb-0 ">Follow Us On</p>
              <div className="d-flex gap-3">
                <span className="d-flex align-items-center">
                  <i class="ri-facebook-box-fill"></i>
                </span>

                <span className="d-flex align-items-center">
                  <a href="https://www.instagram.com/swayambhu_edu/">
                    <i class="ri-instagram-fill"></i>{" "}
                  </a>
                </span>

                <span className="d-flex align-items-center">
                  <i class="ri-linkedin-box-fill"></i>
                </span>

                <span className="d-flex align-items-center">
                  <a href="https://www.youtube.com/@swayambhu_edu">
                    <i class="ri-youtube-fill"></i>{" "}
                  </a>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="3">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link_list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link_item">
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link_list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link_item">
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <h6 className="fw-bold">Get In Touch</h6>
            <p>Address: Kharde Bk, Shirpur, Jay Maharastra</p>
            <p>Phone: +91 0123456789</p>
            <p>Email: example1144@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
