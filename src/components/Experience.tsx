import { motion } from 'framer-motion';
import { Experience } from '../types/portfolio';
import { experiences } from '@/data/experience';

export const ExperienceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A timeline of my professional journey and the roles I've taken on.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 h-full w-1 bg-gray-700"></div>

            <ul className="space-y-12 ml-10">
              {experiences.map((exp: Experience) => (
                <motion.li
                  key={exp.id}
                  variants={itemVariants}
                  className="relative flex items-start"
                >
                  {/* Dot */}
                  <div className="absolute left-[-26px] mt-1 w-4 h-4 rounded-full bg-[#00BFA5] border-2 border-gray-800"></div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{exp.position}</h3>
                    <p className="text-gray-400 text-sm">{exp.company} • {exp.duration}</p>
                    <p className="text-gray-400 mt-2 text-sm">{exp.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
