import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Timeline from "@/components/Timeline"
import Testimonials from "@/components/Testimonials"
import BlogPreview from "@/components/BlogPreview"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import FloatingActionButton from "@/components/FloatingActionButton"
import SkillsCloud from "@/components/SkillsCloud"
import LanguageSwitcher from "@/components/LanguageSwitcher"

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      <Navbar />
      <Hero />
      <SkillsCloud />
      <Projects />
      <Timeline />
      <Skills />
      <Testimonials />
      <BlogPreview />
      <Contact />
      <Footer />
      <FloatingActionButton />
      <LanguageSwitcher />
    </main>
  )
}

