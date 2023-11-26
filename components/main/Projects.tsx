import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-900">
          My Projects
        </span>
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js APP"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/portfolio.png"
          title="Portfolio"
          description="React JS web application in which email JS is implemented and many more"
        />
        <ProjectCard
          src="/afoImg.png"
          title="AFO MEDIA APP"
          description="Social Media Full Stack Web Application"
        />
      </div>
    </div>
  );
};

export default Projects;
