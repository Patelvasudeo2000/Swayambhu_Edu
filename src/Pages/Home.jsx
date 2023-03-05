import React from "react";
import Header from "../Components/Header/Header";
import HeroSection from "../Components/Hero-Section/HeroSection";
import CompanySection from "../Components/Company-section/Company";
import AboutUS from "../Components/About-us/about-us";
import Courses from "../Components/CourseSection/Courses"
import ChooseUs from "../Components/Choose-us/ChooseUs";
import Features from "../Components/Feature-section/Features";
import FreeCourse from "../Components/Free-Course-Section/FreeCourse";
import Testimonial from "../Components/Testimonial/Testimonial";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <CompanySection />
      <AboutUS />
      <Courses/>
      <ChooseUs/>
      <Features/>
      <FreeCourse/>
      <Testimonial/>
      <Newsletter/>
      <Footer/>
    </>
  );
};

export default Home;
