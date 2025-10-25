import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { Card } from "./ui/card";
import { skills } from "../data/portfolio";
import { Skill } from "../types/portfolio";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Component: LucideIcons.Component,
  Code2: LucideIcons.Code2,
  Zap: LucideIcons.Zap,
  Palette: LucideIcons.Palette,
  Layers: LucideIcons.Layers,
  Server: LucideIcons.Server,
  Terminal: LucideIcons.Terminal,
  Database: LucideIcons.Database,
  Network: LucideIcons.Network,
  GitBranch: LucideIcons.GitBranch,
  Package: LucideIcons.Package,
  Cloud: LucideIcons.Cloud,
  Sparkles: LucideIcons.Sparkles,
};

const categoryColors: Record<
  Skill["category"],
  { bg: string; border: string; text: string }
> = {
  frontend: {
    bg: "bg-[#00BFA5]/5",
    border: "border-[#00BFA5]/20",
    text: "text-[#00BFA5]",
  },
  backend: {
    bg: "bg-[#6366F1]/5",
    border: "border-[#6366F1]/20",
    text: "text-[#6366F1]",
  },
  tools: {
    bg: "bg-orange-500/5",
    border: "border-orange-500/20",
    text: "text-orange-400",
  },
  design: {
    bg: "bg-pink-500/5",
    border: "border-pink-500/20",
    text: "text-pink-400",
  },
};

export const About = () => {
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
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Passionate about creating impactful solutions through code and
              design
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <Card className="bg-[#1a1a1a] border-gray-800 p-8 md:p-12">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Hello, Internet - 👋 I’m a full-stack developer at Vistaprint,
                building things that (hopefully) make the web a little better.
                On the side, I’m working on{" "}
                <a
                  href="https://meetovercoffee.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00BFA5] hover:underline"
                >
                  MeetOverCoffee
                </a>{" "}
                - a small project around coffee, community, and meaningful
                conversations. I also take on freelance work because I love
                bringing new ideas to life.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Outside of code, you’ll probably find me scuba diving or
                freediving somewhere quiet, playing cricket on weekends, or in
                yet another café pretending it’s “research.” ☕ I’m mildly
                obsessed with Formula 1, coffee culture, and building things
                that connect people.
              </p>
              {/* <a
                href="https://drive.google.com/your-resume-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="group bg-transparent border border-[#00BFA5] text-[#00BFA5] hover:bg-[#00BFA5] hover:text-black transition-all duration-300">
                  <Download className="mr-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  View Resume
                </Button>
              </a> */}
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill) => {
                const Icon = iconMap[skill.icon];
                const colors = categoryColors[skill.category];

                return (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card
                      className={`${colors.bg} ${colors.border} border bg-opacity-50 backdrop-blur-sm p-4 h-full flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg cursor-pointer group`}
                    >
                      {Icon && (
                        <Icon
                          className={`w-8 h-8 ${colors.text} group-hover:scale-110 transition-transform duration-300`}
                        />
                      )}
                      <span className="text-gray-200 text-sm font-medium text-center">
                        {skill.name}
                      </span>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
