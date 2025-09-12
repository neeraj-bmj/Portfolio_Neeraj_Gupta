import Navbar from './components/Navbar';
import Hero from './pages/hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Project from './pages/Projects';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Footer from './pages/Footer';


const App = () => {
   return (
    // Protfolio web
    <div className="portfolio h-auto  container max-w-7xl mx-auto px-4 bg-white ">

      {/* Navbar component */}
      <div className="navbar">
        <Navbar/>
      </div>

      {/* Hero section */}
      <div className="hero">
        <Hero/>
      </div>

      {/* service section */}
      <div className="service">
        <Service/>
      </div>

      {/* About section  */}
      <div className="about">
        <About/>
      </div>

      {/* Project section */}
      <div className="project">
        <Project/>
      </div>

       {/* Skills section */}
      <div className="skills">
        <Skills/>
      </div>

      {/* contact section */}
      <div className="contact">
        <Contact/>
      </div>

     
      {/* footer section */}
      <div className="footer">
        <Footer/>
      </div>

    </div>
  )
}

export default App