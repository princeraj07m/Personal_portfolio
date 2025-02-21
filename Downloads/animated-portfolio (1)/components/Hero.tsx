"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Download } from "lucide-react"

const Hero = () => {
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        ref={ref}
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary" variants={itemVariants}>
          Welcome to My Portfolio
        </motion.h1>
        <motion.p className="text-xl md:text-2xl mb-8 max-w-2xl" variants={itemVariants}>
          I'm a passionate developer creating elegant and performant web experiences. - Prince Kumar
        </motion.p>
        <motion.div className="flex space-x-4" variants={itemVariants}>
          <motion.button
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>
          <motion.a
            href="/path-to-your-resume.pdf"
            download
            className="bg-secondary text-secondary-foreground px-8 py-3 rounded-full text-lg font-semibold hover:bg-secondary/90 transition-colors flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeOpacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  )
}

export default Hero

