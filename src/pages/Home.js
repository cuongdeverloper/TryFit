import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialsSection from "../components/TestimonialsSection";
import GetStartedSection from "../components/GetStartedSection";
import "./Home.scss";
import MainLayout from "./MainLayout";
import HomeIntro from "./Home Introduce/Home";
import Particle12 from "../components/Particles12";
import AboutUs from "./AboutUs.js";
import AboutUsSection from "../components/AboutUsSection.js";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 120,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <MainLayout>
      <Particle12 />
      <section data-aos="fade-left" data-aos-delay="300"><HomeIntro /></section>
      {/* <section data-aos="fade-up"><HeroSection /></section> */}
      <section data-aos="zoom-in" data-aos-delay="200"><FeaturesSection /></section>
      <section data-aos="fade-right" data-aos-delay="300"><HowItWorksSection /></section>
      <section data-aos="fade-right" data-aos-delay="300"><AboutUsSection /></section>
      <section data-aos="zoom-in" data-aos-delay="200"><AboutUs /></section>
      <section data-aos="fade-up" data-aos-delay="400"><TestimonialsSection /></section>
    </MainLayout>
  );
}
