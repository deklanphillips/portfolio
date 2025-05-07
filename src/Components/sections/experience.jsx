/* EXPERIENCE */

import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer"; // For fade-in effect
import { RevealOnScroll } from "../RevealOnScroll"; // Ensure RevealOnScroll is defined correctly

export const Experience = () => {
  const jobs = [
    {
      company: "Centr",
      title: "Project Manager, New Product Development",
      companyLink: "https://centr.com",
      date: "Sep 2024 – Present",
      points: [
        "Led the successful launch of performance competition equipment for Hyrox, driving alignment with suppliers and ensuring on-time delivery of high-quality products tailored to competition standards.",
        "Assisted in directing the development and release of a new consumer treadmill for mass retailers, coordinating cross-functional teams to achieve product readiness for market launch while adhering to strict timelines and quality benchmarks.",
        "Spearheaded comprehensive project management efforts, integrating Asana, Jira, and Confluence as core tools for planning, execution, and performance tracking, streamlining data automation and enhancing cross-functional collaboration.",
        "Established and managed project scope, objectives, and timelines, ensuring adherence to deadlines and milestone achievement through effective planning and resource allocation.",
        "Implemented Jira and Confluence to automate data tracking processes and improve sustainability in engineering and customer service practices, driving operational efficiency and consistency."
      ],
    },
    {
      company: "Tesla",
      title: "Program Manager, New Product Introduction",
      companyLink: "https://tesla.com",
      date: "May 2022 – Sep 2024",
      points: [
        "Led program management initiatives for high-impact projects, such as Wireless Charging, Cyber Battery, Model 3 Refresh, and Model Y. Collaborated with key stakeholders to ensure a seamless scale-up and successful market introduction of new products.",
        "Spearheaded manufacturing line trials for new products and processes, ensuring that product specifications and standards were met. Managed trial preparation by verifying part availability and confirming line readiness.",
        "Documented trial results and provided insights and recommendations to drive continuous improvement.",
        "Managed processes validating parts during Ecube & Production line trials and restored production lines to prior conditions after trials.",
        "Utilized CATIA, 3DExperience, and SolidWorks to visualize designs, enhance part fitment, and ensure high-quality output."
      ],
    },
    {
      company: "Tesla",
      title: "Business Systems Support Technician",
      companyLink: "https://tesla.com",
      date: "Nov 2020 – May 2022",
      points: [
        "Delivered T1/T2 support for Tesla's factory floor, troubleshooting IT, network, software, and hardware-related issues.",
        "Worked daily with manufacturing software applications such as Ignition, PLC, VNC Viewer, and Station Controller, providing support for critical factory operations.",
        "Utilized Splunk, MySQL, Oracle SQL, and Postman API to perform in-depth data analysis, identifying and resolving vehicle-related issues, including drive unit and part consumption issues.",
        "Configured and troubleshot Zebra Printers using ZPL language.",
        "Collaborated with multiple departments as the main point of contact in high-pressure, urgent scenarios."
      ],
    },
  ];

  const [selectedJobIndex, setSelectedJobIndex] = useState(0);
  const buttonRefs = useRef([]);
  const [arrowPosition, setArrowPosition] = useState(0);

  useEffect(() => {
    const titleElement = buttonRefs.current[selectedJobIndex]?.querySelector(".job-title");
    if (titleElement) {
      const position = titleElement.getBoundingClientRect().left;
      setArrowPosition(position);
    }
  }, [selectedJobIndex]);

  const selectedJob = jobs[selectedJobIndex] || jobs[0]; // Fallback to first job

  return (
    <section id="experience" className="min-h-screen py-20 px-6 bg-[#0A1E3C] text-gray-300 font-[Mandali]">
      <div className="max-w-6xl mx-auto">
        {/* Title with line aligned to middle, appearing only after */}
        <div className="flex items-center justify-start mb-10">
          <h2 className="text-5xl font-bold text-white whitespace-nowrap mr-6">/ Experience</h2>
          <div className="flex-grow border-t-2 border-[#A8B2D1] opacity-20"></div>
        </div>

        <div className="flex flex-col md:flex-row">
          <aside className="md:w-1/4 mb-6 md:mb-0">
            <div className="space-y-4 relative">
              {jobs.map((job, index) => (
                <button
                  key={index}
                  ref={(el) => (buttonRefs.current[index] = el)}
                  onClick={() => setSelectedJobIndex(index)}
                  className={`relative block w-full text-left px-2 py-2 transition-colors pr-4 ${
                    selectedJobIndex === index
                      ? "text-[#64FFDA] font-semibold"
                      : "text-gray-400 hover:text-[#64FFDA] cursor-pointer"
                  }`}
                >
                  {job.company}
                  {selectedJobIndex === index && (
                    <span className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-[#64FFDA] rounded" />
                  )}
                </button>
              ))}
            </div>
          </aside>

          {/* Job Details */}
          <div className="md:w-3/4 md:pl-10">
            <FadeIn fadeKey={selectedJobIndex}>
              <h3 className="text-2xl font-bold mb-2 text-white job-title flex items-center">
                {selectedJob.title} @{"\u00A0"}
                <a
                  href={selectedJob.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#64FFDA] hover:underline"
                >
                  {selectedJob.company}
                </a>
              </h3>
              <div className="mb-4 flex items-baseline">
                <div className="mr-4">
                  <p className="text-sm text-gray-400 date">{selectedJob.date}</p>
                </div>
              </div>

              <ul className="list-none space-y-3 text-base text-[#A8B2D1] pl-5">
                {selectedJob.points.map((point, idx) => (
                  <li key={idx} className="flex items-start relative">
                    <span className="text-[#64FFDA] absolute" style={{ left: arrowPosition }}>
                      ▸
                    </span>
                    <span className="pl-6">
                      <FadeIn fadeKey={idx}>{point}</FadeIn>
                    </span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

// FadeIn component with bottom-to-top animation
const FadeIn = ({ children, fadeKey }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      key={fadeKey}
      className={`transition-all duration-1000 ease-in-out transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transition: "all 1s ease-in-out" }}
    >
      {children}
    </div>
  );
};
