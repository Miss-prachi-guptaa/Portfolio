
import './App.css'
import { AboutSection } from './components/About'
import EducationSection from './components/Education'
import Skills from './components/Skills'


import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {

  return (
    <>
      <Navbar />
      <Home />
      <AboutSection />
      <Skills />
      <EducationSection />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
