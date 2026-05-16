import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Facility from './components/Facility'
import Treatments from './components/Treatments'
import Testimonials from './components/Testimonals'
import Team from './components/Team'
import FloatingLeaves from './components/FloatingLeaves'
import AyurvedaPulseLine from './components/AyurvedaPulseLine'
import HerbalOilDropScroll from './components/HerbalOilDropScroll'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <AyurvedaPulseLine />
      <HerbalOilDropScroll />
      <FloatingLeaves />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Facility />
      <Treatments />
      <Team />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
