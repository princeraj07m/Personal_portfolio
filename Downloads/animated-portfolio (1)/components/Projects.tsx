"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

const projects = [
  { title: "Smart farming Dashboard", description: "A full-stack Smart farming solution", category: "Web Development" },
  {
    title: "University Certification System",
    description: "A blockchain-based certification system",
    category: "Blockchain Development",
  },
  {
    title: "Smart Traffic Management System",
    description: "An IoT-based traffic management system",
    category: "IoT+ Web Development + Machine Learning",
  },
  { title: "Smart Home IoT System", description: "IoT system for home automation", category: "IoT" },
  { title: "AI Chatbot", description: "Natural language processing chatbot", category: "Artificial Intelligence" },
]

const categories = ["All", "Web Development", "Blockchain Development", "Data Science", "IoT", "Artificial Intelligence"]

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

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
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          className="text-4xl font-bold mb-12 text-center text-primary"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          My Projects
        </motion.h2>
        <motion.div
          className="flex justify-center mb-8 space-x-4 flex-wrap"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category ? "bg-primary text-primary-foreground" : "bg-card text-foreground"
              }`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-card p-6 rounded-lg shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <span className="text-sm text-primary">{project.category}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

