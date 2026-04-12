import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import GrubForge from './components/GrubForge'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="bg-forge-dark min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <GrubForge />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
