import { projects } from "../data/portfolio";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#111111]"
    >
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects with descriptions and links to GitHub or live demos
          </p>
        </div>

        <ul className="space-y-4">
          {projects.map((project) => (
            <li
              key={project.id}
              className="flex flex-col md:flex-row justify-between items-start md:items-center bg-[#1a1a1a] border border-gray-800 p-4 rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,191,165,0.3)]"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-white font-semibold">{project.title}</h3>
                  {project.featured && (
                    <span className="text-xs bg-[#00BFA5] text-black px-2 py-0.5 rounded">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>

              <div className="flex gap-3 mt-2 md:mt-0">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#00BFA5]"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#00BFA5]"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
