
import { LazyMotion, domAnimation } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Gallery from './components/sections/Gallery';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <div className="App">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Certificates />
          <Projects />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </LazyMotion>
  );
}

export default App;
