import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  const handleViewWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-[#00BFA5] opacity-10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-[#6366F1] opacity-10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="flex justify-center mb-8 mt-8 sm:mt-0"
          >
            <img
              src="/profile.jpeg"
              alt="Your Name"
              className="w-40 h-40 rounded-full object-cover border-2 border-[#00BFA5]/30 shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a1a1a] border border-[#00BFA5]/20 text-[#00BFA5] text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Ready to colloborate
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Crafting Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#00BFA5] to-[#6366F1] bg-clip-text text-transparent">
              Experiences
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Full-stack developer and UI designer specializing in building
            exceptional digital products with modern technologies and elegant
            interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={handleViewWork}
              size="lg"
              className="group bg-[#00BFA5] hover:bg-[#00BFA5]/90 text-black font-semibold px-8 py-6 text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,191,165,0.4)]"
            >
              View My Work
            </Button>

            <Button
              onClick={handleContact}
              size="lg"
              variant="outline"
              className="group bg-black border border-[#00BFA5] text-[#00BFA5] hover:text-[#ffffff] hover:bg-[#00BFA5]/10 hover:shadow-[0_0_20px_rgba(0,191,165,0.3)] px-8 py-6 text-base font-semibold transition-all duration-300"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-600">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};
