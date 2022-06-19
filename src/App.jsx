
import './styles/reset.css'
import Header from './components/Header'
import GlobalStyle from './styles/GlobalStyle'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import HomeSection from './components/HomeSection'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HomeSection/>
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  )
}
