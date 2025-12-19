import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavbarAlignment } from "./useNavbarAlignment";

const testimonials = [
  {
    text: "Stefan has a rare ability to balance technical precision with creative vision. He approaches every project with clarity, purpose, and innovation, building solutions that are as elegant as they are effective.",
    name: "Dosu Emmanuel",
    role: "Full-Stack Developer, TechCorp",
  },
  {
    text: "Collaborating with Stefan was a defining experience. His clarity in problem-solving and his ability to merge creativity with technology brought real structure and innovation to projects like HAVE.",
    name: "Adebayo Blessing",
    role: "Co-founder, Have Inc",
  },
  {
    text: "Working with Stefan was a game changer. His ability to turn complex technical challenges into seamless, intuitive digital experiences is unmatched — with just two years of experience, he's amazing.",
    name: "Mozart Adegunle",
    role: "UX/UI Designer, TechCorp",
  },
];

export default function Testimony() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, []);

  useNavbarAlignment();

  return (
    <section className="relative w-full bg-white dark:bg-[#0d0e0f] text-black dark:text-white py-20 sm:py-28 lg:py-36 border-t border-black dark:border-white overflow-hidden">
      {/* Floating Title */}
      <h2 className="absolute top-6 left-4 sm:left-6 md:left- lg:left-5 text-2xl sm:text-4xl md:text-5xl font-serif font-semibold tracking-tight">
        TESTIMONIALS
      </h2>

      {/* Floating Arrows */}
      <div className="absolute top-6 right-4 sm:right-8 md:right-1 lg:right-1 flex gap-3 sm:gap-4">
        <button onClick={prev} className="p-2 hover:text-gray-400 transition">
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
        </button>
        <button onClick={next} className="p-2 hover:text-gray-400 transition">
          <ChevronRight size={20} className="sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Animated Testimonial */}
      <div
        className="
          mt-16 sm:mt-24 md:mt-28 
          max-w-[90%] sm:max-w-[85%] md:max-w-[70%] lg:max-w-[50%]
          mx-auto text-center 
          px-4 sm:px-6 md:px-8 lg:px-0 
          relative min-h-[260px] sm:min-h-[320px] md:min-h-[380px]
        "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col justify-center"
          >
            <p className="text-base sm:text-xl md:text-[30px] lg:text-[42px] leading-tight sm:leading-snug md:leading-snug font-medium font-serif">
              “ {testimonials[index].text} ”
            </p>
            <p className="mt-6 font-semibold text-lg sm:text-xl md:text-2xl lg:text-[26px]">
              {testimonials[index].name}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-black dark:text-gray-300">
              {testimonials[index].role}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className="mt-20 sm:mt-24 lg:mt-16 flex justify-center gap-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`text-sm sm:text-base transition-all duration-300 ${
              i === index
                ? "underline font-semibold text-black dark:text-white"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}

