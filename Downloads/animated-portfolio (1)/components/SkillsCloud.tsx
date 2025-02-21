"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "Express",
  "Solidity",
  "Blockchain",
  "SQL",
  "Motoko",
  "Rust",
  "DSA",
  "Competitive Programming",
  "Full Stack Development",
  "Web3",
  "Tailwind CSS",
  "UI Design",
  "PostgreSQL",
  "GraphQL",
  "REST API",
  "Git",
  "Docker",
  "AWS",
  "Firebase",
  "Tailwind CSS",
  "Sass",
  "Jest",
  "Cypress",
  "Webpack",
  "Babel",
  "Redux",
  "React Query",
]

const SkillsCloud = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="skills-cloud" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          className="text-4xl font-bold mb-12 text-center text-primary"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Skills Cloud
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-card px-4 py-2 rounded-full text-sm font-medium"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsCloud

