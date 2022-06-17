import './styles/reset.css'
import './styles/global.css'
import Nav from './components/Nav'
import AboutSection from './components/AboutSection'
import StartSection from './components/StartSection'
import SkillsSection from './components/SkillsSection'
import HobbiesSection from './components/HobbiesSection'
import AcademicSection from './components/AcademicSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <StartSection />
      <AboutSection />
      <SkillsSection />
      <HobbiesSection />
      <AcademicSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  )
}
