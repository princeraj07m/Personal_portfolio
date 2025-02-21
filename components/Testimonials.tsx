"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Prince kumar",
    role: "CEO, Tech Corp",
    content:
      "Working with this developer was an absolute pleasure. Their expertise and dedication to the project were outstanding.",
  },
  {
    name: "Jane Smith",
    role: "CTO, Innovate Inc",
    content: "The attention to detail and problem-solving skills demonstrated by this developer were truly impressive.",
  },
  {
    name: "Mike Johnson",
    role: "Product Manager, StartUp Co",
    content: "I was amazed by the quality of work and the ability to deliver complex features on time.",
  },
]

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

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
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          className="text-4xl font-bold mb-12 text-center text-primary"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Testimonials
        </motion.h2>
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="flex justify-between items-center" variants={itemVariants}>
            <motion.button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <div className="w-full max-w-2xl mx-auto">
              <motion.div
                key={currentIndex}
                className="bg-card p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <p className="text-lg mb-4">"{testimonials[currentIndex].content}"</p>
                <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
              </motion.div>
            </div>
            <motion.button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

