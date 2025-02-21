"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const languages = ["EN", "ES", "FR", "DE"]

const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState("EN")

  return (
    <motion.div
      className="fixed top-4 right-4 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <select
        value={currentLang}
        onChange={(e) => setCurrentLang(e.target.value)}
        className="bg-card text-foreground border border-border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </motion.div>
  )
}

export default LanguageSwitcher

