import React, { useEffect } from "react";
import phone from "../assets/phoneS.jpg";
import { useNavbar } from "../Context/NavbarContext";
import ColumnThree from "./ColumnThree";
import Design from "./Design";
import Collaboration from "./Collaboration";
import Clients from "./Clients";
import Testimony from "./Testimony";
import ContactCta from "./ContactCta";
import Footer from "./Footer";
import { useNavbarAlignment } from "./useNavbarAlignment";

const ServicePage = () => {
  const { setNavbarStyles } = useNavbar();

  useEffect(() => {
    const handleScroll = () => {
      const secondSection = document.getElementById("service-second-section");
      if (!secondSection) return;

      const sectionTop = secondSection.getBoundingClientRect().top;

      if (sectionTop <= 0) {
        setNavbarStyles({
          background: "bg-[#0d0e0f]",
          blur: false,
        });
      } else {
        setNavbarStyles({
          background: "transparent",
          blur: false,
        });
      }
    };


    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setNavbarStyles]);

  useNavbarAlignment();

  return (
    <div className="w-full overflow-hidden">
      {/* === Top Section === */}
      <section className="relative bg-[#0c0f14] text-white flex items-center justify-center min-h-[90vh] sm:min-h-screen overflow-hidden px-4 sm:px-6">
        {/* Huge SERVICE text */}
        <h1 className="absolute bottom-2 sm:-bottom-6 z-20 text-[64px] xs:text-[90px] sm:text-[150px] md:text-[200px] lg:text-[300px] font-serif uppercase tracking-wide leading-none text-center">
          SERVICES
        </h1>

        {/* Image behind text */}
        <img
          src={phone}
          alt="Service"
          className="absolute bottom-12 sm:bottom-20 z-10 w-[250px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[400px] sm:h-[600px] md:h-[700px] object-cover pt-6 sm:pt-10"
        />
      </section>

      {/* === Second Section === */}
      <section
        id="service-second-section"
        className="bg-[#0d0e0f] text-white flex justify-center md:justify-end items-center py-16 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-20 pb-32 sm:pb-44"
      >
        <p className="max-w-3xl text-base sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-left font-semibold text-gray-50 mt-6 sm:mt-10">
          I build digital interfaces with obsessive attention <br className="hidden sm:block" /> 
          to detail — transforming designs into <br className="hidden sm:block" />
          seamless, responsive experiences that feel <br className="hidden sm:block" />
          effortless, refined, and alive in every interaction.
        </p>
      </section>

      {/* === Design === */}
      <Design />

      {/* === Collaboration === */}
      <Collaboration />

      {/* === Clients === */}
     
      <Clients />

      {/* === Testimonial === */}
      <div className="mt-40">
      <Testimony />

      </div>

      {/* === Lab Section === */}
      <ColumnThree />

      {/* === Contact CTA === */}
      <ContactCta />

      {/* === Footer === */}
      <Footer />
    </div>
  );
};

export default ServicePage;

