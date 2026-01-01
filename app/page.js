import Photo from '../components/Photo'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Photo />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

      <footer className="bg-gray-800 text-white text-center py-8">
        <p>&copy; 2026 Laya Myadam. All rights reserved.</p>
      </footer>
    </main>
  )
}