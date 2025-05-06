import { useState, useEffect } from "react";

export const Loadingscreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Welcome!";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        if (typeof onComplete === "function") {
          setTimeout(onComplete, 1000); // Small delay before hiding loading screen
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#0A1E3C] text-white flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold" style={{ fontFamily: 'Mandali, sans-serif' }}>
        {text}
        <span className="animate-blink ml-1">|</span> {/* Blinking cursor */}
      </div>
      {/* Loading Bar */}
      <div className="w-[200px] h-[2px] bg-gray-100 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-white shadow-[0_0_15px_#ffffff] animate-loading-bar"></div>
      </div>
    </div>
  );
};
