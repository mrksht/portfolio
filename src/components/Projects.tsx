import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/portfolio";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { Project } from "../types/portfolio";

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);

  const featuredProjects = useMemo(
    () => projects.filter((p) => p.featured),
    []
  );
  const otherProjects = useMemo(
    () => projects.filter((p) => !p.featured),
    []
  );

  useEffect(() => {
    if (showAll) {
      setVisibleProjects([...featuredProjects, ...otherProjects]);
    } else {
      setVisibleProjects(featuredProjects);
    }
  }, [showAll, featuredProjects, otherProjects]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#111111]"
    >
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A selection of projects I've built — from CLI tools and AI
              experiments to full products.
            </p>
          </motion.div>

          <ul className="space-y-4">
            <AnimatePresence initial={false}>
              {visibleProjects.map((project, index) => (
                <motion.li
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: index >= featuredProjects.length ? (index - featuredProjects.length) * 0.05 : 0 }}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center bg-[#1a1a1a] border border-gray-800 p-4 rounded-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,191,165,0.3)] hover:border-gray-700"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <h3 className="text-white font-semibold">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="text-xs bg-[#00BFA5] text-black px-2 py-0.5 rounded font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mb-2">
                    {project.description}
                  </p>
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex gap-1.5 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-gray-500 bg-gray-800/60 border border-gray-700/50 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex gap-3 mt-3 md:mt-0 md:ml-4 shrink-0">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#00BFA5] transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#00BFA5] transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </motion.li>
            ))}
            </AnimatePresence>
          </ul>

          {otherProjects.length > 0 && (
            <motion.div variants={itemVariants} className="mt-6 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#00BFA5] transition-colors font-medium"
              >
                {showAll ? (
                  <>
                    Show less <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Show {otherProjects.length} more projects{" "}
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
