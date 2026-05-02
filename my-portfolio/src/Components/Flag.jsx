import React, { useMemo, useState, useEffect, useRef } from "react";
import countryList from "react-select-country-list";
import Select from "react-select";

const Flag = () => {
  // 🌍 Generate country options (memoized)
  const options = useMemo(() => {
    const getFlagEmoji = (code) =>
      code
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(127397 + char.charCodeAt())
        );

    return countryList().getData().map((country) => ({
      ...country,
      label: `${getFlagEmoji(country.value)} ${country.label}`,
    }));
  }, []);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const hasFetched = useRef(false);

  // 🎯 Listen for theme changes (fix your white mode issue properly)
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // 🌍 Smart geo detection (cached + safe)
  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const cached = localStorage.getItem("user_country");

    if (cached) {
      const found = options.find((c) => c.value === cached);
      setSelectedCountry(found || null);
      return;
    }

    const fetchCountry = async () => {
      try {
        const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
        if (!res.ok) throw new Error("Geo fetch failed");

        const data = await res.json();

        const found = options.find(
          (c) => c.value === data.country_code
        );

        setSelectedCountry(found || null);
        localStorage.setItem("user_country", data.country_code);
      } catch (err) {
        console.warn("Geo detection failed:", err.message);
      }
    };

    fetchCountry();
  }, [options]);

  // 🎨 Memoized styles (BIG performance win)
  const customStyles = useMemo(() => ({
    control: (base, state) => ({
      ...base,
      backgroundColor: "transparent",
      border: "none",
      borderBottom: state.isFocused
        ? "1px solid #ec48" // pink-500
        : "1px solid #6b7280", // gray-500
      borderRadius: 0,
      boxShadow: "none",
      transition: "all 0.2s ease",
      "&:hover": {
        borderBottom: "1px solid #ec48",
      },
    }),

    menu: (base) => ({
      ...base,
      backgroundColor: isDark ? "#111" : "#fff",
      color: isDark ? "#fff" : "#000",
      zIndex: 9999,
    }),

    singleValue: (base) => ({
      ...base,
      color: isDark ? "#fff" : "#000",
    }),

    input: (base) => ({
      ...base,
      color: isDark ? "#fff" : "#000",
    }),

    placeholder: (base) => ({
      ...base,
      color: isDark ? "#9ca3af" : "#6b7280",
    }),

    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused
        ? "#ec48"
        : isDark
        ? "#111"
        : "#fff",
      color: state.isFocused ? "#fff" : isDark ? "#fff" : "#000",
      cursor: "pointer",
      transition: "all 0.15s ease",
    }),
  }), [isDark]);

  return (
    <div>
      <Select
        inputId="country"
        options={options}
        value={selectedCountry}
        onChange={setSelectedCountry}
        placeholder="Select your country"
        styles={customStyles}
        isSearchable
      />

      {/* Hidden input for form submission */}
      <input
        type="hidden"
        name="country"
        value={selectedCountry?.label || ""}
      />
    </div>
  );
};

export default React.memo(Flag);




























// import React from 'react'
// import countryList from "react-select-country-list";
// import { useMemo, useState } from "react";
// import Select from "react-select";

// const Flag = () => {
//      const option = useMemo(() => {
//       return countryList().getData().map((country) => ({
//             ...country,
//             label: `${getFlagEmoji(country.value)} ${country.label}`,
//       }));
//      }, []);

//      function getFlagEmoji(countryCode) {
//       return countryCode
//             .toUpperCase()
//             .replace(/./g, char => 
//                   String.fromCodePoint(127397 + char.charCodeAt())
//             );
//      }

//      const [selectedCountry, setSelectedCountry] = useState(null);
//      const isDark = document.documentElement.classList.contains("dark");

//      const hasFetched = React.useRef(false)

//    React.useEffect(() => {
//     if (hasFetched.current) return;
//     hasFetched.current = true;

//     const cached = localStorage.getItem("user_country");

//     if (cached) {
//       const found = option.find(c => c.value === cached);
//       setSelectedCountry(found);
//       return;
//     }

//     const fetchCountry = async () => {
//       try {
//         const res = await fetch("https://get.geojs.io/v1/ip/geo.json");

//         if (!res.ok) throw new Error("Geo fetch failed");

//         const data = await res.json();

//         const found = option.find(
//           (c) => c.value === data.country_code
//         );

//         setSelectedCountry(found || null);

//         localStorage.setItem("user_country", data.country_code);


//       } catch (err) {
//         console.warn("Geo detection failed", err.message)
//       }
//     }

//     fetchCountry();
//    }, [option])

//   return (
//       <div>
//      <Select
//       inputId="country"
//      options={option}
//      value={selectedCountry}
//      onChange={setSelectedCountry}
//      placeholder="Select your country"
//      className="dark:text-white  text-black"
//     styles={{
//     control: (base, state) => ({
//       ...base,
//       backgroundColor: "transparent",
//       border: "none",
//       borderBottom: state.isFocused
//       ? "1px solid #ec48" 
//       : "1px solid #ff4bf4",
//       borderRadius: 0,
//       boxShadow: "none",
//       "&:hover": {
//       borderBottom: "1px solid #ec48",
//     },
//     }),
//     menu: (base) => ({
//       ...base,
//        backgroundColor: isDark ? "#111" : "#fff",
//        color: isDark ? "white" : "black",
//     }),
//      singleValue: (base) => ({
//     ...base,
//     color: isDark ? "white" : "black",
//     }),
//     input: (base) => ({
//     ...base,
//     color: isDark ? "white" : "black",
//     }),

//     placeholder: (base) => ({
//     ...base,
//     color: isDark ? "#9ca3af" : "#6b7280",
//   }),

//   option: (base, state) => ({
//     ...base,
//     backgroundColor: state.isFocused
//       ? "#ec48"
//       : isDark
//       ? "#111"
//       : "#fff",
//     color: state.isFocused ? "white" : isDark ? "white" : "black",
//     cursor: "pointer",
//   }),

//   }}
// />

//     <input 
//     type='hidden'
//     name="country"
//     value={selectedCountry?.label || ""}
//     />
//     </div>
//   )
// }

// export default Flag
