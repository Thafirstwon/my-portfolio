import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Make sure these files exist in /public and are renamed safely (no brackets/spaces)
const images = ["/solo.png", "/multi.jpg", "/mozart1.jpg"];

const ServicesSection = () => {
  const [current, setCurrent] = useState(0);

  // ✅ Auto-play (clean interval handling)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + images.length) % images.length);
  const next = () => setCurrent((p) => (p + 1) % images.length);

  return (
    <section className="bg-[#0d0e0f] text-white border-b border-white px-4 sm:px-5 py-2 sm:py-16 md:py-5 md:pb-44 overflow-hidden side-nudge">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-5 font-serif font-bold flex sm:block justify-between items-center md:-ml-0 ml-1">
            SERVICES
            <a
              href="/services"
              className="text-sm sm:hidden underline decoration-[1px] font-semibold decoration-white hover:decoration-gray-400 transition whitespace-nowrap"
            >
              Discover
            </a>
          </h2>
          <p className="text-gray-200 font-semibold leading-relaxed max-w-4xl text-base sm:text-lg md:text-[22px]">
            From strategy & design systems to Development & creative direction,
            whether <br className="hidden sm:block" /> solo or with trusted
            teammates, I help brands turn complexity into clarity.
          </p>
        </div>

        {/* Right: Image + controls */}
        <div className="flex flex-col items-center mt-10 md:mt-0 sm:-mr-14">
          {/* Discover link */}
          <div className="w-full max-w-md flex justify-end md:mr-[-160px] mb-8 sm:mb-10 sm:flex">
            <a
              href="/services"
              className="hidden sm:flex text-base sm:text-lg underline decoration-[1px] font-semibold decoration-white hover:decoration-gray-400 transition"
            >
              Discover my services
            </a>
          </div>

          {/* ✅ Image slider */}
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg h-[350px] sm:h-[450px] md:h-[650px] overflow-hidden shadow-lg md:ml-14 rounded-sm">
            {images.length > 0 &&
              images.map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt={`Service ${i + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: i === current ? 1 : 0 }}
                  transition={{ duration: 1.0, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ zIndex: i === current ? 1 : 0 }}
                  // ✅ Hide broken image instead of crashing
                  onError={(e) => (e.target.style.display = "none")}
                />
              ))}
          </div>

          {/* Counter + Arrows */}
          <div className="w-full max-w-sm sm:max-w-xl mt-4 flex items-center justify-between px-2 sm:px-0">
            <span className="text-xs sm:text-xl text-gray-50 tracking-wide ml-2 sm:ml-8 md:ml-20">
              {current + 1}/{images.length}
            </span>
            <div className="flex gap-3 sm:gap-4">
              <button
                onClick={prev}
                className="p-1 sm:p-2 hover:text-gray-300 transition"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="p-1 sm:p-2 hover:text-gray-300 transition"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;





















// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const images = ["/solo.png", "/multi.jpg", "/Mozart[1].jpg"];

// const ServicesSection = () => {
//   const [current, setCurrent] = useState(0);

//   // Auto-play
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const prev = () => setCurrent((p) => (p - 1 + images.length) % images.length);
//   const next = () => setCurrent((p) => (p + 1) % images.length);

//   return (
//     <section className="bg-[#0d0e0f] text-white border-b border-white px-4 sm:px-5 py-2 sm:py-16 md:py-5 md:pb-44 overflow-hidden side-nudge ">
//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Left: Text */}
//         <div>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl mb-5 font-serif font-bold flex sm:block justify-between items-center md:-ml-0 ml-1">
//             SERVICES
//             <a
//               href="/services"
//               className="text-sm sm:hidden underline decoration-[1px] font-semibold decoration-white hover:decoration-gray-400 transition whitespace-nowrap"
//             >
//               Discover
//             </a>
//           </h2>
//           <p className="text-gray-200 font-semibold leading-relaxed max-w-4xl text-base sm:text-lg md:text-[22px]">
//             From strategy & design systems to Development & creative direction,
//             whether <br className="hidden sm:block" /> solo or with trusted
//             teammates, I help brands turn complexity into clarity.
//           </p>
//         </div>

//         {/* Right: Image + controls */}
//         <div className="flex flex-col items-center mt-10 md:mt-0 sm:-mr-52">
//           {/* Discover */}
//           <div className="w-full max-w-md flex justify-end md:mr-[-197px] mb-8 sm:mb-10 sm:flex">
//             <a
//               href="/services"
//               className="hidden sm:flex text-base sm:text-lg underline decoration-[1px] font-semibold decoration-white hover:decoration-gray-400 transition"
//             >
//               Discover my services
//             </a>
//           </div>

//           {/* Image */}
//           <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg h-[350px] sm:h-[450px] md:h-[650px] overflow-hidden shadow-lg md:ml-32 rounded-sm">
//             {images.map((src, i) => (
//               <motion.img
//                 key={i}
//                 src={src}
//                 alt={`Service ${i + 1}`}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: i === current ? 1 : 0 }}
//                 transition={{ duration: 1.0, ease: "easeInOut" }}
//                 className="absolute inset-0 w-full h-full object-cover"
//                 style={{ zIndex: i === current ? 1 : 0 }}
//               />
//             ))}
//           </div>

//           {/* Counter + Arrows */}
//           <div className="w-full max-w-sm sm:max-w-xl mt-4 flex items-center justify-between px-2 sm:px-0">
//             <span className="text-xs sm:text-xl text-gray-50 tracking-wide ml-2 sm:ml-8 md:ml-32">
//               {current + 1}/{images.length}
//             </span>
//             <div className="flex gap-3 sm:gap-4 -mr-7">
//               <button
//                 onClick={prev}
//                 className="p-1 sm:p-2 hover:text-gray-300 transition"
//                 aria-label="Previous"
//               >
//                 <ChevronLeft size={20} />
//               </button>
//               <button
//                 onClick={next}
//                 className="p-1 sm:p-2 hover:text-gray-300 transition "
//                 aria-label="Next"
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;