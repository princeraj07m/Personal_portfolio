"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formState)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
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
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          className="text-4xl font-bold mb-12 text-center text-primary"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Contact Me
        </motion.h2>
        <motion.form
          className="max-w-lg mx-auto"
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="mb-6" variants={itemVariants}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                className="block w-full px-3 py-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="absolute text-sm text-muted-foreground duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-secondary px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Name
              </label>
            </div>
          </motion.div>
          <motion.div className="mb-6" variants={itemVariants}>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                className="block w-full px-3 py-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-muted-foreground duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-secondary px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Email
              </label>
            </div>
          </motion.div>
          <motion.div className="mb-6" variants={itemVariants}>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                rows={4}
                className="block w-full px-3 py-2 text-sm bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary peer"
                placeholder=" "
                required
              ></textarea>
              <label
                htmlFor="message"
                className="absolute text-sm text-muted-foreground duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-secondary px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
              >
                Message
              </label>
            </div>
          </motion.div>
          <motion.button
            type="submit"
            className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact

