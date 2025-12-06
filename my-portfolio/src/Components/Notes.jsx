import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const notes = [
  {
    title: "New portfolio, next chapter",
    category: "Updates",
    date: "October 11, 2025",
    img: "/multi.jpg",
  },
  {
    title: "Solo developer",
    category: "Updates",
    date: "October 11, 2025",
    img: "/solo.png",
  },
  {
    title: "New client: Moses Adegunle",
    category: "New Client",
    date: "October 11, 2025",
    img: "/Mozart[1].jpg",
  },
];

// Helper: generate URL-friendly slug
const toSlug = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const Notes = () => {
  const scrollRef = useRef(null);
  const autoScrollRef = useRef(null);
  const interactionTimeoutRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const isMobile = () => window.innerWidth < 768;
    let speed = 0.6;
    const tickMs = 16;

    const startAutoScroll = () => {
      if (!isMobile()) return;
      stopAutoScroll();
      autoScrollRef.current = setInterval(() => {
        container.scrollLeft += speed;
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
          container.scrollLeft = 0;
        }
      }, tickMs);
    };

    const stopAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
    };

    const pauseThenResume = () => {
      stopAutoScroll();
      if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
      interactionTimeoutRef.current = setTimeout(() => {
        startAutoScroll();
      }, 1500);
    };

    if (isMobile()) startAutoScroll();

    const onResize = () => {
      if (isMobile()) startAutoScroll();
      else stopAutoScroll();
    };
    window.addEventListener("resize", onResize);

    const onPointerDown = () => pauseThenResume();
    const onTouchStart = () => pauseThenResume();
    container.addEventListener("pointerdown", onPointerDown, { passive: true });
    container.addEventListener("touchstart", onTouchStart, { passive: true });

    return () => {
      stopAutoScroll();
      window.removeEventListener("resize", onResize);
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("touchstart", onTouchStart);
      if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    };
  }, []);

  return (
    <div className="bg-[#0d0e0f] text-white px-[19px] sm:px-5 py-4 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl sm:text-5xl font-serif font-bold">NOTES</h2>
        <Link
          to="/notes"
          className="text-lg underline underline-offset-4 decoration-[1px] decoration-white hover:decoration-gray-400 transition"
        >
          Read all notes
        </Link>
      </div>

      {/* Notes Grid (responsive behavior) */}
      <div
        ref={scrollRef}
        className="
          flex gap-4 mb-32 overflow-x-auto scrollbar-hide
          md:grid md:grid-cols-3 md:overflow-visible md:gap-4
        "
      >
        {notes.map((note, idx) => (
          <div
            key={idx}
            className="
              flex-shrink-0 w-[85%] sm:w-[70%] md:w-auto
            "
          >
            <Link
              to={`/notes/${toSlug(note.title)}`}
              className="group block"
              state={{ note }}
            >
              <img
                src={note.img}
                alt={note.title}
                className="w-full h-[350px] sm:h-[600px] object-cover"
              />
              <p className="mt-4 font-semibold text-1xl sm:text-[33px] group-hover:underline decoration-[1px]">
                {note.title}
              </p>
              <p className="text-base sm:text-[22px] text-gray-400 mt-1">
                {note.category} - {note.date}
              </p>
            </Link>
          </div>
        ))}
      </div>

      <div className="border-t border-white -mx-6 mt-60"></div>
    </div>
  );
};

export default Notes;