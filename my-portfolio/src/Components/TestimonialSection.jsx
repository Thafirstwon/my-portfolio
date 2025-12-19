import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    text: "Working with Stefan was a game changer. His ability to turn complex technical challenges into seamless, intuitive digital experiences is unmatched with just two years of experience, he's amazing.",
    name: "Mozart Adegunle",
    role: "UX/UI Designer, TechCorp",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-white dark:bg-[#0d0e0f] text-black dark:text-white py-16 sm:py-20 md:py-28 min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] px-4 sm:px-8 overflow-hidden border-t border-black dark:border-white">
      {/* Floating Title */}
      <h2 className="absolute top-4 sm:top-6 left-4 sm:left-6 text-2xl sm:text-4xl md:text-5xl font-serif font-bold mt-3 ">
        TESTIMONIALS
      </h2>

      {/* Floating Arrows */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex gap-2 sm:gap-4 md:-mr-6 mt-3">
        <button onClick={prev} className="p-2 sm:p-3 hover:text-gray-400 transition">
          <ChevronLeft size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
        <button onClick={next} className="p-2 sm:p-3 hover:text-gray-400 transition">
          <ChevronRight size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Testimonial Content with Animation */}
      <div className="mt-20 sm:mt-32 max-w-md sm:max-w-xl md:max-w-2xl mx-auto text-center px-2 sm:px-6 relative min-h-[200px] sm:min-h-[240px] md:min-h-[260px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col justify-center"
          >
            <p className="text-base sm:text-xl md:text-[30px] lg:text-[42px] leading-tight sm:leading-snug md:leading-snug font-medium font-serif">
              “ {testimonials[index].text} ”
            </p>
            <p className="mt-6 font-semibold text-lg sm:text-xl md:text-[26px]">
              {testimonials[index].name}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-black dark:text-gray-300">
              {testimonials[index].role}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className="mt-20 sm:mt-28 md:mt-32 flex justify-center gap-3 sm:gap-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`text-xs sm:text-sm md:text-base transition ${
              i === index ? "underline font-bold" : "text-black dark:text-gray-400"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}











