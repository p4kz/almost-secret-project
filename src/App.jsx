
import './styles/reset.css'
import Header from './components/Header'
import GlobalStyle from './styles/GlobalStyle'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import StartSection from './components/StartSection'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StartSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  )
}
