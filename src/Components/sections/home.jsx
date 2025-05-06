import { useEffect, useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const kukaGif = "/kuka.gif"; // Path from public/

export const Home = () => {
  const [text, setText] = useState("");
  const fullText = "Hi, Deklan here";

  useEffect(() => {
    const delay = 1200; // Delay before text starts typing
    const timeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        setText(fullText.substring(0, index));
        index++;

        if (index > fullText.length) {
          clearInterval(interval);
        }
      }, 150); // Slow down typing speed further

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-[#0A1E3C] text-white font-[Mandali]"
    >
      <div className="text-center z-10 px-4 relative">
        
        {/* KUKA Robot GIF centered with slow animation */}
        <div className="absolute top-[-250px] left-1/2 transform -translate-x-1/2 w-50 kuka-gif">
          <img src={kukaGif} alt="KUKA Robot" className="w-full h-auto mx-auto" />
        </div>

        {/* Main Heading with typing effect */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          hi, <span className="text-[#64FFDA]">Deklan</span> here.
          <span className="animate-blink ml-1">|</span>
        </h1>

        {/* Shortened Introduction Text */} 
        <p className="text-gray-200 text-lg mb-8 max-w-lg mx-auto"> 
          I am a Program Manager in manufacturing, specializing in new product development and optimizing processes. 
          I lead teams to drive innovation and ensure successful product launches.
        </p>

        {/* Call to Action Button with Mailto */}
        <div className="flex justify-center space-x-4">
          <a 
            href="mailto:wzvyinquiries@gmail.com"  // Added mailto functionality
            className="border-2 border-[#64FFDA] text-[#64FFDA] py-3 px-6 rounded font-medium flex items-center space-x-2 transition duration-300 ease-in-out 
                      hover:bg-[#64FFDA] hover:text-[#0A1E3C]"
          >
            <FaEnvelope className="text-lg" />
            <span>Say Hi</span>
          </a>
        </div>
      </div>
    </section>
  );
};
