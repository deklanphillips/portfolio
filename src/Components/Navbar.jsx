import { useEffect } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillEdit,
} from "react-icons/ai";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[#0A1E3C] text-white">
      <div className="px-8 w-full">
        <div className="flex items-center h-16 w-full justify-between">
          {/* Left Side: Name + Navigation */}
          <div className="flex items-center space-x-7">
            <a
              href="#home"
              className="text-2xl font-bold text-white font-[Mandali]"
            >
              Deklan Phillips
            </a>

            <div className="hidden md:flex items-center space-x-7">
              <a
                href="#home"
                className="text-white hover:text-[#00FFFF] transition-colors font-[Mandali]"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-[#00FFFF] transition-colors font-[Mandali]"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-white hover:text-[#00FFFF] transition-colors font-[Mandali]"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-white hover:text-[#00FFFF] transition-colors font-[Mandali]"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Right Side: Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="mailto:wzvyinquiries@gmail.com"
              className="hover:text-[#00FFFF]"
            >
              <AiFillMail size={18} />
            </a>
            <a
              href="https://github.com/deklanphillips"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00FFFF]"
            >
              <AiFillGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/deklanphillips"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00FFFF]"
            >
              <AiFillLinkedin size={18} />
            </a>
            <a href="#contact" className="hover:text-[#00FFFF]">
              <AiFillEdit size={18} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden ml-4"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
        </div>
      </div>
    </nav>
  );
};
