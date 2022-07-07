
import './styles/reset.css'
import Header from './components/Header'
import GlobalStyle from './styles/GlobalStyle'
import Footer from './components/Footer'
import Contact from './sections/Contact'
import Projects from './sections/Projects'
import About from './sections/About'
import Start from './sections/Start'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Start />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
