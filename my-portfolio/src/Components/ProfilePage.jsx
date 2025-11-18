import React, { useEffect } from "react";
import glass from "../assets/GlaS.jpg";
import Bio from "./Bio";
import Milestone from "./Milestone";
import Studio from "./Studio";
import { useNavbar } from "../Context/NavbarContext";
import Cthree from "./Cthree";
import Footer from "./Footer";
import ContactCta from "./ContactCta";
import Fav from "./Fav";
import { useNavbarAlignment } from "./useNavbarAlignment";
import { motion } from "framer-motion";


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ProfilePage = () => {
  const { setNavbarStyles } = useNavbar();

  useEffect(() => {
    const handleScroll = () => {
      const secondSection = document.getElementById("profile-second-section");
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
      <section className="relative bg-[#0c0f14] text-white flex items-center justify-center min-h-[100vh] overflow-hidden">
        {/* Huge PROFILE text */}
        <h1
          className="
            absolute 
            bottom-0 
            z-20 
            font-serif 
            uppercase 
            tracking-wide 
            leading-none 
            text-[80px] 
            sm:text-[150px] 
            md:text-[220px] 
            lg:text-[300px]
          "
        >
          PROFILE
        </h1>

        {/* Image behind text */}
        <img
          src={glass}
          alt="Profile"
          className="
            absolute 
            bottom-10 
            z-10 
            object-cover 
            w-[250px] 
            h-[350px] 
            sm:w-[350px] 
            sm:h-[500px] 
            md:w-[450px] 
            md:h-[650px] 
            lg:w-[550px] 
            lg:h-[750px]
          "
        />
      </section>

      {/* === Second Section === */}
      <section
        id="profile-second-section"
        className="
          bg-[#0d0e0f] 
          text-white 
          flex 
          justify-end 
          py-16 
          md:py-24 
          px-4 
          md:px-10 
          lg:px-20
        "
      >
        <p
          className="
            max-w-3xl 
            text-base 
            sm:text-lg 
            md:text-2xl 
            lg:text-3xl 
            leading-relaxed 
            text-left 
            font-semibold 
            mt-8 
            md:mt-16 
            text-gray-50
          
          "
        >
          I build digital experiences with an obsessive attention <br className="hidden sm:block" /> 
          to detail—always going beyond the brief to deliver clean, efficient, and intuitive
          software that feels effortless to use.
        </p>
      </section>

      {/* === Other Components === */}
       <motion.div
       variants={fadeInUp}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true }}
       className="mr-[-10px] ml-[-5px]"
       >
      <Bio />
      <Milestone />
      <Studio />
      <Fav />
      <Cthree />
      <ContactCta />
      <Footer />
       </motion.div>
    </div>
  );
};

export default ProfilePage;
