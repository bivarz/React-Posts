"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTotal =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = (window.scrollY / scrollTotal) * 100;
    setScrollProgress(scroll);
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isVisible && (
        <button
          id="scroll-button"
          type="button"
          onClick={scrollToTop}
          className={`scroll-to-top-button relative flex items-center justify-center w-12 h-12 rounded-full bg-darker-700 text-white shadow-lg transition-transform transform  ${
            isVisible ? "hover:scale-110" : ""
          }`}
          style={{
            background: `conic-gradient(rgba(12, 205, 61, ${
              scrollProgress / 100
            }) ${scrollProgress}%, transparent 0)`,
            borderColor: `rgba(75, 85, 99, ${scrollProgress / 100})`,
            borderStyle: "solid",
          }}
        >
          <div className="absolute flex items-center justify-center w-10 h-10 bg-darker-900 rounded-full dark:bg-darker-900">
            <FaArrowUp />
          </div>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
