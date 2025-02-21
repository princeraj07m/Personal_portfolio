"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skills = [
  { name: "React", level: 50 },
  { name: "Next.js", level: 85 },
  { name: "Blockchain", level: 60 },
  { name: "JavaScript", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "SQL", level: 70 },
  { name: "HTML + CSS", level: 95 },
]

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          className="text-4xl font-bold mb-12 text-center text-primary"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          My Skills
        </motion.h2>
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill) => (
            <motion.div key={skill.name} className="bg-card p-4 rounded-lg" variants={itemVariants}>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2.5">
                <motion.div
                  className="bg-primary h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

