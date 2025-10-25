import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Card } from "./ui/card";
import { socialLinks } from "../data/portfolio";

const socialIcons = { Github, Linkedin, Twitter, Mail };

export const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-3xl mx-auto space-y-8"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Let’s Connect
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I’m always up for
              good ideas and meaningful work.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <Card className="bg-[#1a1a1a] border-gray-800 p-8">
              <h3 className="text-xl font-semibold mb-6 text-white text-center">
                Find me online
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {socialLinks.map((link) => {
                  const Icon =
                    socialIcons[link.icon as keyof typeof socialIcons];
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center text-gray-400 hover:text-[#00BFA5] transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#222222] flex items-center justify-center mb-2 group-hover:bg-[#00BFA5]/10 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-medium">{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </Card>
          </motion.div>

          {/* Collaboration Card */}
          <motion.div variants={itemVariants}>
            <Card className="bg-black border border-[#00BFA5] p-8 text-[#00BFA5] transition-all duration-300 hover:bg-[#00BFA5]/10 hover:text-white hover:shadow-[0_0_20px_rgba(0,191,165,0.3)] text-center">
              <h3 className="text-lg font-semibold mb-3">
                Available to Collaborate
              </h3>
              <p className="text-sm text-gray-400 max-w-md mx-auto">
                Currently open to new projects, freelance opportunities, and
                creative partnerships. Let’s build something meaningful together.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
