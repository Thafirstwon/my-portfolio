import React, { useEffect } from "react";

import m1 from "../assets/oltim.png";
import m2 from "../assets/mock1.jpg";
import m3 from "../assets/m1.png";
import m4 from "../assets/multi.jpg";
import m5 from "../assets/mukup2.jpg";
import { useNavbar } from "../Context/NavbarContext";
import MoreNote3 from "./MoreNote3";
import ContactCta from "./ContactCta";
import Footer from "./Footer";

const NewUpdatePage = () => {
  const { setDarkNavbar } = useNavbar();

  useEffect(() => {
    setDarkNavbar(); // ✅ Dark background for this page
  }, []);

  return (
    <div className="overflow-hidden bg-[#0d0e0f] text-white">
      <div className="min-h-screen px-3 sm:px-5 lg:px-5 py-20 overflow-hidden">
        {/* SECTION 1 — Image on Right, Title Bottom-Left */}
        <div className="mb-24">
          <div className="flex justify-end">
            <div className="relative flex flex-col items-center mt-10 sm:mt-10">
            <img
              src={m4}
              alt="New portfolio next chapter"
              className="max-w-[510px] sm:max-w-[460px] md:max-w-[510px] h-[350px] object-cover mb-1  w-[300px] 
       
            sm:w-[350px] 
            sm:h-[500px] 
            md:w-[450px] 
            md:h-[550px] 
            lg:w-[550px] 
            lg:h-[650px]"
            />
            <div className="w-[88%] mx-auto h-[26px] relative">
              <div className="absolute bottom-0 left-0 right-0 border-b border-gray-400"></div>
              <div className="absolute bottom-0 left-0 h-full border-l border-gray-400"></div>
              <div className="absolute bottom-0 right-0 h-full border-r border-gray-400"></div>
            </div>
          </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-[55px] leading-tight text-left mt-16 sm:mt-10 pb-14">
            New portfolio, next chapter
          </h1>
        </div>

        {/* BORDER LINE */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-white mb-6 sm:mb-8"></div>

        {/* SECTION 2 — Update Info + Description */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 md:mb-32">
          <p className="text-xl sm:text-[25px] md:text-[27.5px] mb-6 md:mb-0">
            Updates — October 11, 2025
          </p>
          <p className="md:max-w-3xl leading-relaxed md:ml-10 text-base sm:text-lg font-semibold">
            This update marks a new chapter in redefining the portfolio’s
            direction — merging clean design, functional precision, and
            purposeful storytelling to showcase creativity through code.
          </p>
        </div>

        {/* BORDER LINE */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-white mb-6 sm:mb-8"></div>

        {/* SECTION 3 — OLD TIMES */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6 md:gap-10">
          <h2 className="text-4xl sm:text-5xl md:text-[66px] font-semibold">
            OLD TIMES
          </h2>
          <p className="md:max-w-3xl text-lg sm:text-[22px] md:text-[27.5px] font-semibold leading-relaxed md:ml-10">
           A look back at the early stages of experimentation — bold ideas, raw concepts, and the evolution of craftsmanship that shaped what you see today.

When I created my first portfolio, I was genuinely proud of it. It was one of those experiences that developed my sense of creativity and expanded my imagination. It might not have looked perfect, but at that time, it meant everything to me.

As I’ve evolved, I’ve come to realize how mysterious the human mind truly is — how it gathers every experience, every person, every fragment of the world around it, and transforms them into visions made real.

I once planted in my mind the desire to understand the wisdom of my time — technology — and to thrive within it. That desire has now become a reality.
          </p>
        </div>

        {/* IMAGE (1581x867) */}
         <div className="mb-20 sm:mb-24">
          <img
            src={m1}
            alt="Old Times showcase"
            className="w-full h-auto object-cover mx-auto"
          />
        </div>

        {/* BORDER LINE */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-white mb-6 sm:mb-8"></div>

        {/* SECTION 4 — NEW BEGINNINGS */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6 md:gap-10">
          <h2 className="text-4xl sm:text-5xl md:text-[66px] font-semibold">
            NEW <br /> BEGINNINGS
          </h2>
          <p className="md:max-w-3xl text-lg sm:text-[22px] md:text-[27.5px] font-semibold leading-relaxed md:ml-10">
            And now here we are — finally, with a fresh, fully responsive rebuild.

I’ve poured countless hours into this at least a dozen major iterations. As always, it’s been a deep exercise in reflection: how do I present myself to the world, to fellow developers, to collaborators, to clients?

The first realization was that I wanted to define my voice more clearly, to be explicit about what I do and what I stand for. Hence, the “Multidisciplinary Developer.” I wanted this portfolio to do more than just display code or projects — I wanted it to tell a story. To reflect my process, my growth, and the craft behind every line of code. I wanted it to have a soul not just be another polished interface.
          </p>
        </div>

        {/* SECTION 5 — Grid of Images + Description */}
<div className="mb-20 sm:mb-24">
  <div className="">
    <img
      src={m4}
      alt="Main visual"
      className="w-full h-auto object-cover mb-8 sm:mb-10"
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
      <img
        src={m3}
        alt="Side visual 1"
        className="w-full h-[760px] object-cover"
      />
      <img
        src={m2}
        alt="Side visual 2"
        className="w-full h-auto object-cover"
      />
    </div>
  </div>

  <p className="md:max-w-3xl font-semibold text-lg sm:text-[22px] md:text-[27.5px] leading-relaxed md:ml-auto">
    Every layer of this project reflects collaboration, creative tension, and refinement —
    a process that values detail and emotion equally.
  </p>
</div>


        {/* SECTION 6 — Image + Description */}
        <div className="mb-20 sm:mb-24">
          <img
            src={m2}
            alt="Creative expansion"
            className="w-full h-auto object-cover mx-auto mb-8 sm:mb-10"
          />
          <p className="md:max-w-3xl font-semibold text-lg sm:text-[22px] md:text-[27.5px] leading-relaxed md:ml-auto">
            Designed to adapt — the new layout embraces fluid interaction while
            maintaining visual precision. A portfolio meant to be explored, not
            just viewed.
          </p>
        </div>

        {/* SECTION 7 — 2-Grid Images + Description */}
        <div className="mb-20 sm:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
            <img
              src={m5}
              alt="Left image"
              className="w-full h-auto object-cover"
            />
            <img
              src={m4}
              alt="Right image"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="md:max-w-3xl text-lg sm:text-[22px] md:text-[27.5px] font-semibold leading-relaxed md:ml-auto">
            The journey continues — evolving aesthetics, refining typography,
            and balancing motion with stillness. This chapter is only the
            beginning.
          </p>
        </div>
      </div>

      {/* Newportfolio */}
      <MoreNote3 />

      {/* ContactCta */}
      <ContactCta />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NewUpdatePage;

























// import React, { useEffect } from "react";

// import m1 from "../assets/oltim.png";
// import m2 from "../assets/mock1.jpg";
// import m3 from "../assets/m1.png";
// import m4 from "../assets/multi.jpg";
// import m5 from "../assets/mukup2.jpg";
// import { useNavbar } from "../Context/NavbarContext";
// import MoreNote3 from "./MoreNote3";
// import ContactCta from "./ContactCta";
// import Footer from "./Footer";

// const NewUpdatePage = () => {
//   const { setDarkNavbar } = useNavbar();

//   useEffect(() => {
//     setDarkNavbar(); // ✅ Dark background for this page
//   }, []);

//   return (
//     <div className="overflow-hidden bg-[#0d0e0f] text-white">
//       <div className="min-h-screen px-3 sm:px-5 lg:px-5 py-20 overflow-hidden">
//         {/* SECTION 1 — Image on Right, Title Bottom-Left */}
//         <div className="mb-24">
//           <div className="flex justify-end">
//             <div className="relative flex flex-col items-center mt-10 sm:mt-10">
//             <img
//               src={m4}
//               alt="New portfolio next chapter"
//               className="w-full max-w-[510px] sm:max-w-[460px] md:max-w-[510px] h-[350px] sm:h-[600px] object-cover mb-1"
//             />
//             <div className="w-[88%] mx-auto h-[26px] relative">
//               <div className="absolute bottom-0 left-0 right-0 border-b border-gray-400"></div>
//               <div className="absolute bottom-0 left-0 h-full border-l border-gray-400"></div>
//               <div className="absolute bottom-0 right-0 h-full border-r border-gray-400"></div>
//             </div>
//           </div>
//           </div>
//           <h1 className="text-3xl sm:text-4xl md:text-[55px] leading-tight text-left mt-16 sm:mt-10 pb-14">
//             New portfolio, next chapter
//           </h1>
//         </div>

//         {/* BORDER LINE */}
//         <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-white mb-6 sm:mb-8"></div>

//         {/* SECTION 2 — Update Info + Description */}
//         <div className="flex flex-col md:flex-row justify-between items-start mb-24 md:mb-32">
//           <p className="text-xl sm:text-[25px] md:text-[27.5px] mb-6 md:mb-0">
//             Updates — October 11, 2025
//           </p>
//           <p className="md:max-w-3xl leading-relaxed md:ml-10 text-base sm:text-lg font-semibold">
//             This update marks a new chapter in redefining the portfolio’s
//             direction — merging clean design, functional precision, and
//             purposeful storytelling to showcase creativity through code.
//           </p>
//         </div>

//         {/* BORDER LINE */}
//         <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-white mb-6 sm:mb-8"></div>

//         {/* SECTION 3 — OLD TIMES */}
//         <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6 md:gap-10">
//           <h2 className="text-4xl sm:text-5xl md:text-[66px] font-semibold">
//             OLD TIMES
//           </h2>
//           <p className="md:max-w-3xl text-lg sm:text-[22px] md:text-[27.5px] font-semibold leading-relaxed md:ml-10">
//            A look back at the early stages of experimentation — bold ideas, raw concepts, and the evolution of craftsmanship that shaped what you see today.

// When I created my first portfolio, I was genuinely proud of it. It was one of those experiences that developed my sense of creativity and expanded my imagination. It might not have looked perfect, but at that time, it meant everything to me.

// As I’ve evolved, I’ve come to realize how mysterious the human mind truly is — how it gathers every experience, every person, every fragment of the world around it, and transforms them into visions made real.

// I once planted in my mind the desire to understand the wisdom of my time — technology — and to thrive within it. That desire has now become a reality.
//           </p>
//         </div>

//         {/* IMAGE (1581x867) */}
//          <div className="mb-20 sm:mb-24">
//           <img
//             src={m1}
//             alt="Old Times showcase"
//             className="w-full h-auto object-cover mx-auto"
//           />
//         </div>

//         {/* BORDER LINE */}
//         <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-t border-white mb-6 sm:mb-8"></div>

//         {/* SECTION 4 — NEW BEGINNINGS */}
//         <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6 md:gap-10">
//           <h2 className="text-4xl sm:text-5xl md:text-[66px] font-semibold">
//             NEW <br /> BEGINNINGS
//           </h2>
//           <p className="md:max-w-3xl text-lg sm:text-[22px] md:text-[27.5px] font-semibold leading-relaxed md:ml-10">
//             And now here we are — finally, with a fresh, fully responsive rebuild.

// I’ve poured countless hours into this at least a dozen major iterations. As always, it’s been a deep exercise in reflection: how do I present myself to the world, to fellow developers, to collaborators, to clients?

// The first realization was that I wanted to define my voice more clearly, to be explicit about what I do and what I stand for. Hence, the “Multidisciplinary Developer.” I wanted this portfolio to do more than just display code or projects — I wanted it to tell a story. To reflect my process, my growth, and the craft behind every line of code. I wanted it to have a soul not just be another polished interface.
//           </p>
//         </div>

//         {/* SECTION 5 — Grid of Images + Description */}
// <div className="mb-20 sm:mb-24">
//   <div className="">
//     <img
//       src={m4}
//       alt="Main visual"
//       className="w-full h-auto object-cover mb-8 sm:mb-10"
//     />
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
//       <img
//         src={m3}
//         alt="Side visual 1"
//         className="w-full h-[760px] object-cover"
//       />
//       <img
//         src={m2}
//         alt="Side visual 2"
//         className="w-full h-auto object-cover"
//       />
//     </div>
//   </div>

//   <p className="md:max-w-3xl font-semibold text-[27.5px] leading-relaxed md:ml-auto">
//     Every layer of this project reflects collaboration, creative tension, and refinement —
//     a process that values detail and emotion equally.
//   </p>
// </div>


//         {/* SECTION 6 — Image + Description */}
//         <div className="mb-20 sm:mb-24">
//           <img
//             src={m2}
//             alt="Creative expansion"
//             className="w-full h-auto object-cover mx-auto mb-8 sm:mb-10"
//           />
//           <p className="md:max-w-3xl font-semibold text-lg sm:text-[22px] md:text-[27.5px] leading-relaxed md:ml-auto">
//             Designed to adapt — the new layout embraces fluid interaction while
//             maintaining visual precision. A portfolio meant to be explored, not
//             just viewed.
//           </p>
//         </div>

//         {/* SECTION 7 — 2-Grid Images + Description */}
//         <div className="mb-20 sm:mb-24">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
//             <img
//               src={m5}
//               alt="Left image"
//               className="w-full h-auto object-cover"
//             />
//             <img
//               src={m4}
//               alt="Right image"
//               className="w-full h-auto object-cover"
//             />
//           </div>
//           <p className="md:max-w-3xl text-lg sm:text-[22px] md:text-[27.5px] font-semibold leading-relaxed md:ml-auto">
//             The journey continues — evolving aesthetics, refining typography,
//             and balancing motion with stillness. This chapter is only the
//             beginning.
//           </p>
//         </div>
//       </div>

//       {/* Newportfolio */}
//       <MoreNote3 />

//       {/* ContactCta */}
//       <ContactCta />

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default NewUpdatePage;


