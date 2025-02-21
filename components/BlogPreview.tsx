"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

const blogPosts = [
  {
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies in the world of web development.",
    date: "2023-06-15",
  },
  {
    title: "Optimizing React Performance",
    excerpt: "Tips and tricks to boost the performance of your React applications.",
    date: "2023-06-01",
  },
  {
    title: "Introduction to TypeScript",
    excerpt: "A beginner-friendly guide to getting started with TypeScript.",
    date: "2023-05-20",
  },
]

const BlogPreview = () => {
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
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={ref}
          className="text-4xl font-bold mb-12 text-center text-primary"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          Latest Blog Posts
        </motion.h2>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-lg shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <Link href="#" className="text-primary hover:underline">
                  Read more
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="text-center mt-8" variants={itemVariants}>
          <Link
            href="#"
            className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            View All Posts
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogPreview

