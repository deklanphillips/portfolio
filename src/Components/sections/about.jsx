// src/Components/sections/about.jsx
import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

export const About = () => {
  return (
    <section 
      id="about"
      className="min-h-screen py-20 px-6 bg-[#0A1E3C] text-gray-300 font-[Mandali]"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-10">
            <h2 className="text-5xl font-bold text-white mr-6">/ About</h2>
            <hr className="border-t-2 border-[#A8B2D1] opacity-20 flex-grow" />
          </div>
          <div className="flex flex-col md:flex-row">
          
            {/* Left Content */}
            <div className="flex-1 max-w-2xl">
              <p className="mb-6 text-lg leading-relaxed">
                I am currently a <span className="font-bold">Project Manager</span> at{" "}
                <a
                  href="https://centr.com/about-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#64FFDA] font-semibold hover:underline"
                >
                  Centr
                </a>{" "}
                on the <span className="text-gray-300 font-semibold">New Product Development</span> team, leading product launches, supplier onboarding, and manufacturing execution. 
                Currently pursuing an <span className="text-gray-300 font-semibold">Associate of Science</span> in <span className="text-gray-300 font-semibold">Mechanical Engineering</span> at{" "}
                <a
                  href="https://www.norcocollege.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#64FFDA] font-semibold hover:underline"
                >
                  Norco College
                </a>.
              </p>

              <div className="mb-6">
                <p className="mb-2 font-medium text-white">
                  Here are some technologies I’ve been working with:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-base text-[#A8B2D1]">
                  <div>
                    <p><span className="text-[#64FFDA]">▸</span> Jira</p>
                    <p><span className="text-[#64FFDA]">▸</span> Asana</p>
                    <p><span className="text-[#64FFDA]">▸</span> CATIA V5</p>
                  </div>
                  <div>
                    <p><span className="text-[#64FFDA]">▸</span> SolidWorks</p>
                    <p><span className="text-[#64FFDA]">▸</span> Confluence</p>
                    <p><span className="text-[#64FFDA]">▸</span> 3DExperience</p>
                  </div>
                </div>
              </div>

              <p className="text-lg leading-relaxed">
                Outside of work, I'm interested in following the developments of science & collegiate sports.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
              <img
                src="/profile.jpg"
                alt="profile"
                className="rounded-xl w-72 h-auto object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
