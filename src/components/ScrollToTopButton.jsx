import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; 

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-blue-700 to-blue-700 text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-md border border-gray-700"
      >
        <ArrowUp size={22} />
      </button>
    )
  );
};

export default ScrollToTopButton;
