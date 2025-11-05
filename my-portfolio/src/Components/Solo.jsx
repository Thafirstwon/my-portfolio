import React, { useEffect } from "react";
import { useNavbar } from "../Context/NavbarContext";
import WorkMode from "./WorkMode";
import MoreNotes2 from "./MoreNote2";
import Footer from "./Footer";
import ContactCta from "./ContactCta";

const Solo = () => {
  const { setDarkNavbar } = useNavbar();

  useEffect(() => {
    setDarkNavbar();
  }, []);

  return (
    <div>
      <div className="bg-[#0d0e0f] text-white min-h-screen overflow-hidden px-3.5">
        <div className="mb-24">
          {/* Image Section */}
          <div className="flex justify-end">
            <div className="relative flex flex-col items-center mt-10 sm:mt-10">
              <img
                src="/solo.png"
                alt="solo"
                 className="max-w-[510px] sm:max-w-[460px] md:max-w-[510px] h-[350px] object-cover mb-1  w-[300px] 
       
            sm:w-[350px] 
            sm:h-[500px] 
            md:w-[450px] 
            md:h-[550px] 
            lg:w-[550px] 
            lg:h-[650px]"
              />

              {/* Border box under the image */}
              <div className="w-[88%] mx-auto h-[26px] relative">
                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 right-0 border-b border-gray-400"></div>
                {/* Left vertical line */}
                <div className="absolute bottom-0 left-0 h-full border-l border-gray-400"></div>
                {/* Right vertical line */}
                <div className="absolute bottom-0 right-0 h-full border-r border-gray-400"></div>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-[55px] leading-tight text-left mt-16 sm:mt-10 pb-14">
            More than a solo Developer
          </h1>
        </div>

        {/* Divider */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-white"></div>

        {/* Update Info */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-44 mt-5">
          <p className="text-[27.5px] mb-4 md:mb-0">
            Updates - October 11, 2025
          </p>
          <p className="md:max-w-3xl font-semibold leading-relaxed md:ml-10">
            With this new portfolio and refreshed identity, it feels like the
            perfect time to remind you that I can help in all kinds of setups.
            Whether you’re looking for a solo developer, need a small team
            assembled, or just want a trusted recommendation — I’m here to
            support.
          </p>
        </div>

        {/* Work Mode Section */}
        <WorkMode />
      </div>

      {/* More Notes */}
      <MoreNotes2 />

      {/* Contact CTA */}
      <ContactCta />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Solo;

