import React,{useRef}from "react";
import { Container } from "reactstrap";
import "./Header.css";

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "#about",
  },
  {
    display: "Courses",
    url: "#courses",
  },
  {
    display: "Pages",
    url: "#pages",
  },
  {
    display: "Blog",
    url: "#blog",
  },
];

const Header = () => {


    const menuRef = useRef()
    const menuToggle = () =>menuRef.current.classList.toggle ("active__menu")

  return (
    <header className="header">
      <Container>
      <div className="navigation d-flex align-items-center justify-content-between">
        
          <div className="logo">
            <h2 className="d-flex align-items-center">
            <i class="ri-stack-fill"></i> Swayambhu
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5 ">

            <div className="nav__menu" ref={menuRef} onClick= {menuToggle} >
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i class="ri-phone-line"></i> +91 0123456789
              </p>
            </div>
            
            <div className="mobile_menu">
                <span>
                    <i class="ri-menu-line" onClick={menuToggle}></i>
                </span>
            </div>

          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
