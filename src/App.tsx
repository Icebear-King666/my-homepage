import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Publications from './sections/Publications';
import Skills from './sections/Skills';
import Awards from './sections/Awards';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Education />
        <Projects />
        <Publications />
        <Skills />
        <Awards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
