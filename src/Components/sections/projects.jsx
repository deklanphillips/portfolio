import { FiFolder } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Cybertruck Battery",
    description: "Battery validation and launch project supporting the build, test, and approval of early Cybertruck cells and packs.",
    stack: "Battery Engineering Testing: PPR, ISC, PTCE",
    github: "https://github.com/your-username/cybertruck-battery", // Replace with actual GitHub URL
  },
  {
    title: "Model 3 Performance",
    description: "Leading Model 3 engineering testing and product launch, focusing on performance optimization and validation of the Model 3 Performance variant.",
    stack: "Vehicle Engineering Testing: Crash Testing, Side Impact & Airbag",
    github: "https://www.tesla.com/blog/introducing-new-model-3-performance", // Replace with actual GitHub URL
  },
  {
    title: "Model Y Refresh",
    description: "Managing and executing the RC builds of vehicles and overseeing transportation security for the refreshed Model Y variant.",
    stack: "Vehicle Engineering, Logistics, and Security Management",
    github: "https://www.tesla.com/learn/introducing-new-model-y", // Replace with actual GitHub URL
  },
];

export default function Projects() {
  return (
    <section className="bg-[#0A1E3C] min-h-screen py-20 px-6 text-gray-300 font-[Mandali]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-10">
          <h2 className="text-5xl font-bold text-white mr-6">/ Projects</h2>
          <hr className="border-t-2 border-[#A8B2D1] opacity-20 flex-grow" />
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#101A3F] p-6 rounded-lg shadow-md relative hover:shadow-xl hover:bg-[#1A2A5A] hover:transform hover:translate-y-[-10px] transition-all duration-300 ease-in-out"
            >
              <div className="flex justify-between items-start mb-4">
                <FiFolder className="text-[#64FFDA] text-2xl" />
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  {idx === 0 || idx === 1 || idx === 2 ? (
                    <img
                      src="/Tesla-logo.jpg" // Standard image tag
                      alt="Tesla Logo"
                      width={24}
                      height={24}
                      className="rounded-sm"
                    />
                  ) : (
                    <FaGithub className="text-white text-xl hover:text-[#64FFDA]" />
                  )}
                </a>
              </div>
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <p className="text-xs text-[#A8B2D1]">{project.stack}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
