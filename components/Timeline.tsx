"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const timelineData = [
  {
    year: "2023",
    title: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    description: "Led a team of developers in creating cutting-edge web applications.",
  },
  {
    year: "2021",
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    description: "Developed responsive and accessible web interfaces for various clients.",
  },
  {
    year: "2019",
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    description: "Assisted in the development of web applications and gained valuable experience.",
  },
]

const Timeline = () => {
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
    <section id="timeline" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          className="text-4xl font-bold mb-12 text-center text-primary"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Work Experience
        </motion.h2>
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {timelineData.map((item, index) => (
            <motion.div key={index} className="mb-8 flex justify-between items-center w-full" variants={itemVariants}>
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-primary-foreground">{item.year.slice(-2)}</h1>
              </div>
              <motion.div
                className="order-1 bg-card rounded-lg shadow-xl w-5/12 px-6 py-4"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="font-bold text-primary text-xl mb-1">{item.title}</h3>
                <h4 className="font-semibold text-lg mb-2">{item.company}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline

