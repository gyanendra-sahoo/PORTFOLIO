import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "PrimeTrack - Task Management",
    description:
      "A full-stack task management app built with MERN stack. It helps users organize, track, and manage daily tasks with authentication, dashboards, and real-time updates.",
    image: "/projects/project-1.png",
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://prime-track.vercel.app/login",
    githubUrl: "https://github.com/gyanendra-sahoo/PROJECT-MANAGER",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-20 sm:px-12 md:px-20 lg:px-24 relative"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-sm md:text-base">
          Here are some of my recent projects. Each one demonstrates my skills
          in full-stack development, problem-solving, and building user-focused
          applications.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md card-hover flex flex-col"
            >
              {/* Image */}
              <div className="h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium rounded-full border bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title + Description */}
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/gyanendra-sahoo"
            target="_blank"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
