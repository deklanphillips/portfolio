// File: App.jsx

import { useState } from "react";
import "./App.css";
import "./index.css";
import { Navbar } from "./Components/Navbar";
import { MobileMenu } from "./Components/MobileMenu";
import { Home } from "./Components/sections/home";
import { About } from "./Components/sections/about";
import { Experience } from "./Components/sections/experience";
import Projects from "./Components/sections/projects";  // Corrected the import
import { Loadingscreen } from "./Components/Loadingscreen";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {/* Display the loading screen until the app is loaded */}
      {!isLoaded && <Loadingscreen onComplete={() => setIsLoaded(true)} />}

      {/* Main content */}
      {isLoaded && (
        <div className="min-h-screen bg-[#0A1E3C] text-white">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Experience />
          <Projects /> {/* Now correctly imported */}
        </div>
      )}
    </>
  );
}

export default App;
