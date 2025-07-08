import React from "react";
import Nav from "../../components/Nav";
import Home from "./Home";
import HowItWorks from "./HowItWorks";
import Why from "./Why";
import Services from "./Services";
import Who from "./Who";
import Testimonial from "./Testimonial";
import Partners from "./Partners";
import CallToAction from "./CallToAction";
import Footer from "../../components/Footer";

const Landing = () => {
  return (
    <>
      <Nav />
      <Home />
      <HowItWorks />
      <Why />
      <Services />
      <Who />
      <Testimonial />
      <Partners />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Landing;
