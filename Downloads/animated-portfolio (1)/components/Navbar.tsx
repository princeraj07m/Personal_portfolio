"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navVariants = {
    hidden: { y: -100 },
    visible: { y: 0, transition: { type: "spring", stiffness: 100 } },
  }

  const linkVariants = {
    hover: { scale: 1.1, transition: { type: "spring", stiffness: 300 } },
  }

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div className="text-2xl font-bold text-primary" whileHover={{ scale: 1.05 }}>
          Portfolio
        </motion.div>
        <div className="flex items-center space-x-6">
          {["Home", "Projects", "Skills", "Contact"].map((item) => (
            <motion.div key={item} variants={linkVariants} whileHover="hover">
              <Link href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">
                {item}
              </Link>
            </motion.div>
          ))}
          <motion.button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar

