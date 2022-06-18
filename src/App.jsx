
import './styles/reset.css'
import Header from './components/Header'
import GlobalStyle from './styles/GlobalStyle'
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
      <GlobalStyle />
      
      <Header />
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
