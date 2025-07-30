import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Footer />
    </div>
  )
}

export default App